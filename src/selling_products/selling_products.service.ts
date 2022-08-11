import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { StatusProduct } from "src/status_product/status_product.entity";
import { SellingProducts } from "./selling_products.entity";

@Injectable()

export class SellingProductsService {
    constructor(
        @InjectModel(SellingProducts)
        private sellingProducts: typeof SellingProducts,
    ) { }

    async insertSellingProduct(items): Promise<SellingProducts> {
        return this.sellingProducts.create(items);
    }

    async deleteSellingProduct(fields: string, direction: any): Promise<void> {
        this.sellingProducts.destroy({
            where: {
                [fields]: direction
            }
        });
    }
}