import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PagesService } from "./pages.service";

@Controller()

export class PagesController {
    constructor(
        private pagesService: PagesService
    ) { }


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