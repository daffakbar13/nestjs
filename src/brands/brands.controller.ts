import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { BrandsService } from "./brands.service";

@Controller('brands')

export class BrandsController {
    constructor(
        private brandService: BrandsService
    ) { }
    @Get()
    findAll() {
        return this.brandService.getBrands()
    }

    @Get('id')
    findById(@Query() query) {
        return this.brandService.getBrandsByField('id', query.id)
    }

    @Post()
    insertOne(@Body() body): any {
        return this.brandService.insertBrands({
            n_brand: body.brand,
            n_photo: body.photo,
            c_active: body.active
        })
    }

    @Put()
    async updateOne(@Body() body) {
        await this.brandService.updateBrands(
            body.id,
            {
                n_brands: body.brands,
                n_photo: body.photo,
                c_active: body.active
            })
    }

    @Delete()
    async deleteOne(@Body() body) {
        await this.brandService.deleteBrands('id', body.id)
    }
}