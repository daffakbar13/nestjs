import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './users.entity';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { UsersController } from './users.controller';

@Module({
  imports: [SequelizeModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [UsersService, JwtService, AuthService],
  exports: [UsersService]
})
export class UsersModule { }