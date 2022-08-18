import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ProductsService } from "src/products/products.service";
import { SellingAddressService } from "src/selling_address/selling_address.service";
import { SellingProductsService } from "src/selling_products/selling_products.service";
import { SellingsService } from "./sellings.service";

@Controller('sellings')

export class SellingsController {
    constructor(
        private sellingsService: SellingsService
    ) { }

    @Get()
    getSellings() {
        return this.sellingsService.getSellings()
    }

    @Get(':any')
    findOne(@Query() query, @Param('any') params) {
        switch (params) {
            case 'id':
                return this.sellingsService.getSellingsByField('id', query.id)
            default:
                break;
        }
    }

    @Post()
    async insertOne(@Body() body) {
        return this.sellingsService.insertOrders(body)
    }

    @Put()
    async updateStatus(@Body() body) {
        await this.sellingsService.updateSellingStatus(body.id, body.status)
    }
}