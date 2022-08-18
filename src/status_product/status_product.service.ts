import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { StatusProduct } from "./status_product.entity";

@Injectable()

export class StatusProductService {
    constructor(
        @InjectModel(StatusProduct)
        private statusProduct: typeof StatusProduct,
    ) { }

    async getStatusProducts(): Promise<StatusProduct[]> {
        return this.statusProduct.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
    }

    async insertStatusProduct(items): Promise<StatusProduct> {
        return this.statusProduct.create(items);
    }

    async updateStatusProduct(id: number, items = {}): Promise<void> {
        await this.statusProduct.update(
            items,
            {
                where: {
                    id: id
                }
            }
        )
    }
}