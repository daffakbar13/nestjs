import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
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

    @Get(':any')
    findOne(@Query() query, @Param('any') params) {
        switch (params) {
            case 'id':
                return this.paymentMethodsService.getPaymentMethodsByField('id', query.id)
            default:
                break;
        }
    }

    @Post()
    insertOne(@Body() body): any {
        const body_payments = {
            n_account_name: body.account_name,
            n_account_number: body.account_number,
            n_payment_method: body.payment_method,
        }
        return this.paymentMethodsService.insertPaymentMethod(body_payments)
    }

    @Put()
    async updateOne(@Body() body) {
        const body_payments = {
            n_account_name: body.account_name,
            n_account_number: body.account_number,
            n_payment_method: body.payment_method,
        }
        await this.paymentMethodsService.updatePaymentMethod(body.id, body_payments)
    }
}