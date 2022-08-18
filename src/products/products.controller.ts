import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')

export class ProductsController {
    constructor(
        private productsService: ProductsService
    ) { }

    @Get()
    findAll() {
        return this.productsService.getProducts()
    }

    @Get(':any')
    findOne(@Query() query, @Param('any') params) {
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
    insertOne(@Body() body): any {
        const body_products = {
            i_status_product_id: body.id_status,
            i_brands_id: body.id_brand,
            n_product: body.product,
            n_stock: body.stock,
            n_price: body.price,
            n_photo: body.photo
        }

        return this.productsService.insertProduct(body_products)
    }

    @Put()
    async updateOne(@Body() body) {
        const oldData = await this.productsService.getProductsByField('id', body.id)
        const body_products = {
            i_status_product_id: body.id_status,
            i_brands_id: body.id_brand,
            n_product: body.product,
            n_stock: body.stock,
            n_price: body.price,
            n_photo: body.photo
        }
        await this.productsService.updateProduct(body.id, body_products)

        return {
            oldData: oldData,
            newData: body_products
        }
    }

    @Delete()
    async deleteOne(@Body() body) {
        return await this.productsService.deleteProduct('id', body.id)
    }
}