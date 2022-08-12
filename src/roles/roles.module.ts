import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Roles } from "./roles.entity";

@Module({
    imports: [SequelizeModule.forFeature([Roles])],
})

export class RolesModule { }