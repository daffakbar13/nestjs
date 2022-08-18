import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { StatusProductService } from "./status_product.service";

@Controller('status_product')

export class StatusProductController {
    constructor(
        private statusProductsService: StatusProductService
    ) { }
    @Get()
    findAll() {
        return this.statusProductsService.getStatusProducts()
    }

    @Post()
    insertOne(@Body() body): any {
        return this.statusProductsService.insertStatusProduct({
            n_status: body.status,
        })
    }

    @Put()
    async updateOne(@Body() body) {
        await this.statusProductsService.updateStatusProduct(
            body.id,
            {
                n_status: body.status,
            })
    }
}