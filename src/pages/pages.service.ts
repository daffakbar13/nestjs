import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
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

    async getProducts(): Promise<Products[]> {
        return this.products.findAll({
            include: [{
                attributes: ['n_status'],
                model: StatusProduct
            }]
        })
    }

    async getProductById(id: number): Promise<Products> {
        return this.products.findOne({
            where: { id },
            include: [{
                attributes: ['n_status'],
                model: StatusProduct
            }]
        })
    }

    async getProductsByStatus(status: number): Promise<Products> {
        return this.products.findOne({
            where: {
                i_status_product_id: status,
            },
        });
    }

    async insertProduct(items = {}): Promise<Products> {
        return this.products.create(items);
    }

    async insertStatusProduct(status: string): Promise<StatusProduct> {
        return this.status.create({ n_status: status });
    }

    async insertBrand(items = {}): Promise<Brands> {
        return this.brands.create(items);
    }
}