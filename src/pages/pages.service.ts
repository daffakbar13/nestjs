import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
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

@Injectable()

export class PagesService {
    constructor(
        @InjectModel(Products)
        private products: typeof Products,
        @InjectModel(Brands)
        private brands: typeof Brands,
        @InjectModel(StatusProduct)
        private status: typeof StatusProduct,
    ) { }

    async insertStatusProduct(status: string): Promise<StatusProduct> {
        return this.status.create({ n_status: status });
    }

    async insertBrand(items = {}): Promise<Brands> {
        return this.brands.create(items);
    }
}