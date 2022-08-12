import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductsModule } from "src/products/products.module";
import { SellingsAddressModule } from "src/selling_address/selling_address.module";
import { SellingProductsModule } from "src/selling_products/selling_products.module";
import { SellingsController } from "./sellings.controller";
import { Sellings } from "./sellings.entity";
import { SellingsService } from "./sellings.service";

@Module({
    imports: [
        SequelizeModule.forFeature([Sellings]),
        ProductsModule,
        SellingsAddressModule,
        SellingProductsModule
    ],
    controllers: [SellingsController],
    providers: [SellingsService],
    exports: [SellingsService]
})

export class SellingsModule { }