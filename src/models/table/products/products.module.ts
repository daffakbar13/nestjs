import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Products } from "./products.entity";
import { ProductsService } from "./products.service";

@Module({
    imports: [SequelizeModule.forFeature([Products])],
    exports: [ProductsService]
})

export class ProductsModule { }