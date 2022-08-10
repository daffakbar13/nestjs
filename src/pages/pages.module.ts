import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Logger } from "src/models/logger/logger.entity";
import { PaymentMethods } from "src/models/master/payment_methods/payment_methods.entity";
import { StatusProduct } from "src/models/master/status_product/status_product.entity";
import { StatusSelling } from "src/models/master/status_selling/status_selling.entity";
import { Brands } from "src/models/table/brands/brands.entity";
import { Customers } from "src/models/table/customers/customers.entity";
import { Products } from "src/models/table/products/products.entity";
import { Sellings } from "src/models/table/sellings/sellings.entity";
import { SellingAddress } from "src/models/table/selling_address/selling_address.entity";
import { SellingProducts } from "src/models/table/selling_products/selling_products.entity";
import { Users } from "src/models/users/users.entity";
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