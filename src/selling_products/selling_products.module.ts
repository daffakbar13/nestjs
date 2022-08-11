import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { SellingProductsController } from "./selling_products.controller";
import { SellingProducts } from "./selling_products.entity";
import { SellingProductsService } from "./selling_products.service";

@Module({
    imports: [SequelizeModule.forFeature([SellingProducts])],
    controllers: [SellingProductsController],
    providers: [SellingProductsService],
    exports: [SellingProductsService]
})

export class SellingProductsModule { }