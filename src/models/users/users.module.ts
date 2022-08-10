import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Users } from "./users.entity";

@Module({
    imports: [SequelizeModule.forFeature([Users])],
})

export class CustomersModule { }