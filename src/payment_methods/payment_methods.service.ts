import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { PaymentMethods } from "./payment_methods.entity";

@Injectable()

export class PaymentMethodsService {
    constructor(
        @InjectModel(PaymentMethods)
        private paymentMethods: typeof PaymentMethods,
    ) { }

    async getPaymentMethods(): Promise<PaymentMethods[]> {
        return this.paymentMethods.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
    }

    async getPaymentMethodsByField(field: string, direction: any): Promise<PaymentMethods[]> {
        return this.paymentMethods.findAll({
            order: [
                ['id', 'ASC']
            ],
            where: {
                [field]: direction,
            },
        });
    }

    async insertPaymentMethod(items): Promise<PaymentMethods> {
        return this.paymentMethods.create(items);
    }

    async updatePaymentMethod(id: number, items = {}): Promise<void> {
        await this.paymentMethods.update(
            items,
            {
                where: {
                    id: id
                }
            }
        )
    }

    async deletePaymentMethod(fields: string, direction: any): Promise<void> {
        this.paymentMethods.destroy({
            where: {
                [fields]: direction
            }
        });
    }
}