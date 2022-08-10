import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Customers } from "./customers.entity";

@Module({
    imports: [SequelizeModule.forFeature([Customers])],
})

export class CustomersModule { }