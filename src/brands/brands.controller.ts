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

    @Get(':any')
    findOne(@Query() query) {
        switch (query) {
            case 'id':
                return this.brandService.getBrandsByField('id', query.id)
            default:
                break;
        }
    }

    @Post()
    insertOne(@Body() body): any {
        const body_brands = {
            n_brand: body.brand,
            n_photo: body.photo,
            c_active: body.active
        }
        return this.brandService.insertBrands(body_brands)
    }

    @Put()
    async updateOne(@Body() body) {
        const body_brands = {
            n_brand: body.brand,
            n_photo: body.photo,
            c_active: body.active
        }
        await this.brandService.updateBrands(body.id, body_brands)
    }

    @Delete()
    async deleteOne(@Body() body) {
        await this.brandService.deleteBrands('id', body.id)
    }
}