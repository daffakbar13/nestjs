import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Logger } from "src/logger/logger.entity";
import { PaymentMethods } from "src/payment_methods/payment_methods.entity";
import { StatusProduct } from "src/status_product/status_product.entity";
import { StatusSelling } from "src/status_selling/status_selling.entity";
import { Brands } from "src/brands/brands.entity";
import { Customers } from "src/customers/customers.entity";
import { Products } from "src/products/products.entity";
import { Sellings } from "src/sellings/sellings.entity";
import { SellingAddress } from "src/selling_address/selling_address.entity";
import { SellingProducts } from "src/selling_products/selling_products.entity";
import { Users } from "src/users/users.entity";
import { PagesController } from "./pages.controller";
import { PagesService } from "./pages.service";

@Module({
    imports: [SequelizeModule.forFeature([
        Logger,
        Users,
        PaymentMethods,
        StatusProduct,
        StatusSelling,
        Products,
        Brands,
        Customers,
        Sellings,
        SellingAddress,
        SellingProducts
    ])],
    controllers: [PagesController],
    providers: [PagesService]
})

export class PagesModule { }