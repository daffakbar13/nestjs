import { HttpException, HttpStatus, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '@/api/user/users.entity';
import { Repository } from 'typeorm';
import { RegisterDto, LoginDto } from './auth.dto';
import { AuthHelper } from './auth.helper';
import { UsersService } from '../users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }
    @InjectRepository(Users)
    private readonly repository: Repository<Users>;

    public async register(body): Promise<Users> {
        const { name, email, password } = body;
        let user = await this.usersService.getUserByField('n_email', body.email);

        if (user.length != 0) {
            throw new HttpException('Conflict', HttpStatus.CONFLICT);
        }

        const body_user = {
            n_name: name,
            n_email: email,
            n_password: this.encodePassword(password),
        };



        return await this.usersService.insertUser(body_user);
    }

    public async login(body: LoginDto): Promise<string | never> {
        const { email, password }: LoginDto = body;
        const user: Users = await this.repository.findOne({ where: { n_email: email } });

        if (!user) {
            throw new HttpException('No user found', HttpStatus.NOT_FOUND);
        }

        const isPasswordValid: boolean = this.isPasswordValid(password, user.n_password);

        if (!isPasswordValid) {
            throw new HttpException('No user found', HttpStatus.NOT_FOUND);
        }

        // this.repository.update(user.id, { lastLoginAt: new Date() });

        return this.generateToken(user);
    }

    public async refresh(user: Users): Promise<string> {
        // this.repository.update(user.id, { lastLoginAt: new Date() });

        return this.generateToken(user);
    }

    public async verifyToken(token: string): Promise<boolean> {
        const decodeToken = this.jwtService.verify(token, {
            secret: 'secret'
        })

        const user = await this.usersService.getUserByField('n_email', decodeToken.email)

        if (!user) {
            throw new UnauthorizedException
        }

        return true
    }

    // Decoding the JWT Token
    private async decode(token: string): Promise<unknown> {
        return this.jwtService.decode(token, null);
    }

    // Get User by User ID we get from decode()
    public async validateUser(decoded: any): Promise<Users> {
        return this.repository.findOne(decoded.id);
    }

    // Generate JWT Token
    private generateToken(user: Users): string {
        return this.jwtService.sign({ id: user.id, email: user.n_email });
    }

    // Validate User's password
    private isPasswordValid(password: string, userPassword: string): boolean {
        return bcrypt.compareSync(password, userPassword);
    }

    // Encode User's password
    private encodePassword(password: string): string {
        const salt: string = bcrypt.genSaltSync(10);

        return bcrypt.hashSync(password, salt);
    }

    // Validate JWT Token, throw forbidden error if JWT Token is invalid
    private async validate(token: string): Promise<boolean | never> {
        const decoded: unknown = this.jwtService.verify(token);

        if (!decoded) {
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }

        const user: Users = await this.validateUser(decoded);

        if (!user) {
            throw new UnauthorizedException();
        }

        return true;
    }
}