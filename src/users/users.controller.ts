import { Body, Controller, Get, Param, Post, Put, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')

export class UsersController {
    constructor(
        private usersService: UsersService
    ) { }
    @Get()
    findAll() {
        return this.usersService.getUsers()
    }

    @Get(':any')
    findOne(@Query() query, @Param('any') params) {
        switch (params) {
            case 'id':
                return this.usersService.getUserByField('id', query.id)
            case 'role':
                return this.usersService.getUserByField('i_roles_id', query.id)
            default:
                break;
        }
    }

    @Post()
    insertOne(@Body() body): any {
        const body_users = {
            i_roles_id: body.id_roles,
            n_name: body.name,
            n_email: body.email,
            n_password: body.password,
            c_active: body.active
        }
        return this.usersService.insertUser(body_users)
    }

    @Put()
    async updateOne(@Body() body) {
        const body_users = {
            i_roles_id: body.id_roles,
            n_name: body.name,
            n_email: body.email,
            n_password: body.password,
            c_active: body.active
        }
        await this.usersService.updateUser(body.id, body_users)
    }
}