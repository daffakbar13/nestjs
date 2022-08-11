import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { PaymentMethodsService } from "./payment_methods.service";

@Controller('payment_methods')

export class PaymentMethodsController {
    constructor(
        private paymentMethodsService: PaymentMethodsService
    ) { }
    @Get()
    findAll() {
        return this.paymentMethodsService.getPaymentMethods()
    }

    @Get('id')
    findById(@Query() query) {
        return this.paymentMethodsService.getPaymentMethodsByField('id', query.id)
    }

    @Post()
    insertOne(@Body() body): any {
        return this.paymentMethodsService.insertPaymentMethod({
            n_account_name: body.account_name,
            n_account_number: body.account_number,
            n_payment_method: body.payment_method,
        })
    }

    @Put()
    async updateOne(@Body() body) {
        await this.paymentMethodsService.updatePaymentMethod(
            body.id,
            {
                n_account_name: body.account_name,
                n_account_number: body.account_number,
                n_payment_method: body.payment_method,
            })
    }

    @Delete()
    async deleteOne(@Body() body) {
        await this.paymentMethodsService.deletePaymentMethod('id', body.id)
    }
}