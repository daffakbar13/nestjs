import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Brands } from "./brands.entity";

@Module({
    imports: [SequelizeModule.forFeature([Brands])],
})

export class BrandModule { }