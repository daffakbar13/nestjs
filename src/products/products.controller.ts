import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
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

    @Get(':any')
    getProductByQuery(@Query() query, @Param('any') params) {
        switch (params) {
            case 'id':
                return this.productsService.getProductsByField('id', query.id)
            case 'status':
                return this.productsService.getProductsByField('i_status_product_id', query.id)
            case 'brand':
                return this.productsService.getProductsByField('i_brands_id', query.id)
            default:
                break;
        }
    }

    @Post()
    insertProduct(@Body() body): any {
        return this.productsService.insertProduct({
            i_status_product_id: body.id_status,
            n_product: body.product,
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