import { AuthModule } from "@/api/user/auth/auth.module";
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Products } from "src/products/products.entity";
import { BrandsController } from "./brands.controller";
import { Brands } from "./brands.entity";
import { BrandsService } from "./brands.service";

@Module({
    imports: [
        SequelizeModule.forFeature([
            Brands,
            Products
        ]),
        AuthModule
    ],
    controllers: [BrandsController],
    providers: [BrandsService],
    exports: [BrandsService]
})

export class BrandModule { }