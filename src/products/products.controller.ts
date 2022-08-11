import { Body, Controller, Delete, Get, Post, Put, Query } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')

export class ProductsController {
    constructor(
        private productsService: ProductsService
    ) { }

    @Get()
    getProducts() {
        return this.productsService.getProducts()
    }

    @Get('id')
    getProductById(@Query() query) {
        return this.productsService.getProductsByField('id', query.id)
    }

    @Get('status')
    getProductByStatus(@Query() query): any {
        return this.productsService.getProductsByField('i_status_product_id', query.id)
    }

    @Get('brand')
    getProductByBrand(@Query() query): any {
        return this.productsService.getProductsByField('i_brands_id', query.id)
    }

    @Post()
    insertProduct(@Body() body): any {
        return this.productsService.insertProduct({
            i_status_product_id: body.id_status,
            n_products: body.product,
            i_brands_id: body.id_brand,
            n_stock: body.stock,
            n_price: body.price,
            n_photo: body.photo
        })
    }

    @Put()
    async updateProduct(@Body() body) {
        await this.productsService.updateProduct(
            body.id,
            {
                i_status_product_id: body.id_status,
                n_products: body.product,
                i_brands_id: body.id_brand,
                n_stock: body.stock,
                n_price: body.price,
                n_photo: body.photo
            })
    }

    @Delete()
    async deleteProduct(@Body() body) {
        await this.productsService.deleteProduct('id', body.id)
    }
}