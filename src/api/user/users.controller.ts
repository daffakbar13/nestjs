import { ClassSerializerInterceptor, Controller, Req, UseGuards, UseInterceptors, Put, Body, Inject } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '@/api/user/auth/auth.guard';
import { UpdateNameDto } from './users.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
    @Inject(UsersService)
    private readonly service: UsersService;

    @Put('name')
    @UseGuards(JwtAuthGuard)
    @UseInterceptors(ClassSerializerInterceptor)
    private updateName(@Body() body: UpdateNameDto, @Req() req: Request): boolean {
        return true
    }
}