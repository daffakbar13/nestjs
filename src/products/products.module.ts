import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { StatusProduct } from "src/status_product/status_product.entity";
import { ProductsController } from "./products.controller";
import { Products } from "./products.entity";
import { ProductsService } from "./products.service";

@Module({
    imports: [
        SequelizeModule.forFeature([
            Products,
            StatusProduct
        ])],
    controllers: [ProductsController],
    providers: [ProductsService],
    exports: [ProductsService]
})

export class ProductsModule { }