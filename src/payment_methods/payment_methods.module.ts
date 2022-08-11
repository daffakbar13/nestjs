import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { PaymentMethodsController } from "./payment_methods.controller";
import { PaymentMethods } from "./payment_methods.entity";
import { PaymentMethodsService } from "./payment_methods.service";

@Module({
    imports: [SequelizeModule.forFeature([PaymentMethods])],
    controllers: [PaymentMethodsController],
    providers: [PaymentMethodsService],
    exports: [PaymentMethodsService]
})

export class PaymentMethodsModule { }