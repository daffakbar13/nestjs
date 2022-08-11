import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { SellingAddress } from "./selling_address.entity";

@Injectable()

export class SellingAddressService {
    constructor(
        @InjectModel(SellingAddress)
        private sellingAddress: typeof SellingAddress,
    ) { }

    async getSellingAddress(): Promise<SellingAddress[]> {
        return this.sellingAddress.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
    }

    async getSellingAddressByField(field: string, direction: any): Promise<SellingAddress[]> {
        return this.sellingAddress.findAll({
            order: [
                ['id', 'ASC']
            ],
            where: {
                [field]: direction,
            },
        });
    }

    async insertSellingAddress(items): Promise<SellingAddress> {
        return this.sellingAddress.create(items);
    }

    async updateSellingAddress(id: number, items = {}): Promise<void> {
        await this.sellingAddress.update(
            items,
            {
                where: {
                    id: id
                }
            }
        )
    }

    async deleteSellingAddress(fields: string, direction: any): Promise<void> {
        this.sellingAddress.destroy({
            where: {
                [fields]: direction
            }
        });
    }
}