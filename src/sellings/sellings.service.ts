import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { PaymentMethods } from "src/payment_methods/payment_methods.entity";
import { SellingAddress } from "src/selling_address/selling_address.entity";
import { SellingProducts } from "src/selling_products/selling_products.entity";
import { StatusProduct } from "src/status_product/status_product.entity";
import { Users } from "src/users/users.entity";
import { Sellings } from "./sellings.entity";

@Injectable()

export class SellingsService {
    constructor(
        @InjectModel(Sellings)
        private sellings: typeof Sellings,
    ) { }

    async getSellings(): Promise<Sellings[]> {
        return this.sellings.findAll({
            order: [
                ['id', 'ASC']
            ],
            include: [
                {
                    attributes: ['n_email'],
                    model: Users
                },
                {
                    model: SellingAddress
                },
                {
                    model: SellingProducts
                },
                {
                    attributes: [
                        'n_account_name',
                        'n_account_number',
                        'n_payment_method'
                    ],
                    model: PaymentMethods
                },
            ],
        })
    }

    async getSellingsByField(field: string, direction: any): Promise<Sellings[]> {
        return this.sellings.findAll({
            order: [
                ['id', 'ASC']
            ],
            where: {
                [field]: direction,
            },
            include: [{
                attributes: ['n_email'],
                model: StatusProduct
            }]
        });
    }

    async insertSelling(items): Promise<Sellings> {
        return this.sellings.create(items);
    }

    async updateSellingStatus(id: number, status: number): Promise<void> {
        await this.sellings.update(
            {
                i_status_selling_id: status
            },
            {
                where: {
                    id: id
                }
            }
        )
    }

    async deleteSelling(fields: string, direction: any): Promise<void> {
        this.sellings.destroy({
            where: {
                [fields]: direction
            }
        });
    }

    async lastId(): Promise<any> {
        return this.sellings.max('id')
    }
}