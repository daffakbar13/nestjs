import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { BrandsController } from "./brands.controller";
import { Brands } from "./brands.entity";
import { BrandsService } from "./brands.service";

@Module({
    imports: [SequelizeModule.forFeature([Brands])],
    controllers: [BrandsController],
    providers: [BrandsService],
    exports: [BrandsService]
})

export class BrandModule { }