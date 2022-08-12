import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Products } from "src/products/products.entity";
import { BrandsController } from "./brands.controller";
import { Brands } from "./brands.entity";
import { BrandsService } from "./brands.service";

@Module({
    imports: [SequelizeModule.forFeature([
        Brands,
        Products
    ])],
    controllers: [BrandsController],
    providers: [BrandsService],
    exports: [BrandsService]
})

export class BrandModule { }