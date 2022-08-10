import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { SellingProducts } from "./selling_products.entity";

@Module({
    imports: [SequelizeModule.forFeature([SellingProducts])],
})

export class SellingProductsModule { }