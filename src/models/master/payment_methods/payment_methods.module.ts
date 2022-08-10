import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { PaymentMethods } from "./payment_methods.entity";

@Module({
    imports: [SequelizeModule.forFeature([PaymentMethods])],
})

export class PaymentMethodsModule { }