import { Injectable, ExecutionContext, CanActivate } from '@nestjs/common';
import { Request } from 'express';
import { Users } from '@/api/user/users.entity';
import { AuthService } from './auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(
        private authService: AuthService
    ) { }
    public handleRequest(err: unknown, user: Users): any {
        return user;
    }

    public async canActivate(context: ExecutionContext): Promise<boolean> {
        const authorization: Request = (context.switchToHttp().getRequest()).headers.authorization;

        return this.authService.verifyToken(authorization as unknown as string)
    }
}