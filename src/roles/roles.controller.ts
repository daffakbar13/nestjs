import { JwtAuthGuard } from "@/api/user/auth/auth.guard";
import { Body, Controller, Get, Post, Put, UseGuards } from "@nestjs/common";
import { RolesService } from "./roles.service";

@UseGuards(JwtAuthGuard)
@Controller('roles')

export class RolesController {
    constructor(
        private rolesService: RolesService
    ) { }
    @Get()
    findAll() {
        return this.rolesService.getRoles()
    }

    @Post()
    insertOne(@Body() body): any {
        const body_roles = {
            n_role: body.role,
        }
        return this.rolesService.insertRole(body_roles)
    }

    @Put()
    async updateOne(@Body() body) {
        const body_roles = {
            n_role: body.role,
        }
        await this.rolesService.updateRole(body.id, body_roles)
    }
}