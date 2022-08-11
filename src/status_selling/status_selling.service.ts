import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { StatusSelling } from "./status_selling.entity";

@Injectable()

export class StatusSellingService {
    constructor(
        @InjectModel(StatusSelling)
        private statusSelling: typeof StatusSelling,
    ) { }

    async getStatusSellings(): Promise<StatusSelling[]> {
        return this.statusSelling.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
    }

    async getStatusSellingsByField(field: string, direction: any): Promise<StatusSelling[]> {
        return this.statusSelling.findAll({
            order: [
                ['id', 'ASC']
            ],
            where: {
                [field]: direction,
            },
        });
    }

    async insertStatusSelling(items): Promise<StatusSelling> {
        return this.statusSelling.create(items);
    }

    async updateStatusSelling(id: number, items = {}): Promise<void> {
        await this.statusSelling.update(
            items,
            {
                where: {
                    id: id
                }
            }
        )
    }

    async deleteStatusSelling(fields: string, direction: any): Promise<void> {
        this.statusSelling.destroy({
            where: {
                [fields]: direction
            }
        });
    }
}