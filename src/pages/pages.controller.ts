import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PagesService } from "./pages.service";

@Controller()

export class PagesController {
    constructor(
        private pagesService: PagesService
    ) { }
    @Get('products')
    getProducts() {
        return this.pagesService.getProducts()
    }

    @Get('products:id')
    getProductById(@Param() params) {
        return this.pagesService.getProductById(params.id)
    }

    @Post('products')
    insertProduct(@Body() body) {
        return this.pagesService.insertProduct({
            i_status_product_id: body.id_status,
            n_products: body.product,
            i_brands_id: body.id_brand,
            n_stock: body.stock,
            n_price: body.price,
            n_photo: body.photo
        })
    }

    @Post('brands')
    insertBrand(@Body() body) {
        return this.pagesService.insertBrand({
            n_brand: body.brand,
            n_photo: body.photo,
            c_active: body.active
        })
    }

    @Post('status/product')
    insertStatusProduct(@Body() body) {
        return this.pagesService.insertStatusProduct(body.status)
    }
}