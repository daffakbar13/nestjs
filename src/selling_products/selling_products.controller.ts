import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { SellingProductsService } from "./selling_products.service";

@Controller('selling_products')

export class SellingProductsController {
    constructor(
        private sellingProductsService: SellingProductsService
    ) { }

    @Post()
    insertSellingProduct(@Body() body): any {
        const body_sellingProducts = {
            n_product: body.product,
            n_brand: body.brand,
            n_quantity: body.quantity,
            n_price: body.price,
            n_total: parseInt(body.price) * parseInt(body.quantity),
            n_photo: body.photo
        }
        return this.sellingProductsService.insertSellingProduct(body_sellingProducts)
    }

    @Delete()
    async deleteSellingProduct(@Body() body) {
        await this.sellingProductsService.deleteSellingProduct('id', body.id)
    }
}