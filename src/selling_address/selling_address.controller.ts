import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { SellingAddressService } from "./selling_address.service";

@Controller('selling_address')

export class SellingAddressController {
    constructor(
        private sellingAddressService: SellingAddressService
    ) { }
    @Post()
    insertOne(@Body() body): any {
        return this.sellingAddressService.insertSellingAddress({
            n_name: body.name,
            n_phone: body.phone,
            n_address: body.address,
        })
    }

    @Delete()
    async deleteOne(@Body() body) {
        await this.sellingAddressService.deleteSellingAddress('id', body.id)
    }
}