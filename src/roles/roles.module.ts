import { AuthModule } from "@/api/user/auth/auth.module";
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { RolesController } from "./roles.controller";
import { Roles } from "./roles.entity";
import { RolesService } from "./roles.service";

@Module({
    imports: [
        SequelizeModule.forFeature([Roles]),
        AuthModule
    ],
    controllers: [RolesController],
    providers: [RolesService]
})

export class RolesModule { }