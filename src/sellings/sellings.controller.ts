import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ProductsService } from "src/products/products.service";
import { SellingAddressService } from "src/selling_address/selling_address.service";
import { SellingProductsService } from "src/selling_products/selling_products.service";
import { SellingsService } from "./sellings.service";

@Controller('sellings')

export class SellingsController {
    constructor(
        private sellingsService: SellingsService,
        private productService: ProductsService,
        private sellingProductsService: SellingProductsService,
        private sellingAddressService: SellingAddressService
    ) { }

    @Get()
    getSellings() {
        return this.sellingsService.getSellings()
    }

    @Get(':any')
    getSellingByQuery(@Query() query, @Param('any') params) {
        switch (params) {
            case 'id':
                return this.sellingsService.getSellingsByField('id', query.id)
            default:
                break;
        }
    }

    @Post()
    async insertSelling(@Body() body) {
        let buyyedProducts = []
        let buyyedProductQuantities = []

        console.log(body.products);


        if (!Array.isArray(body.products)) {
            buyyedProducts.push(body.products)
            buyyedProductQuantities.push(body.quantities)
        } else {
            body.products.forEach((product: number) => {
                buyyedProducts.push(product)
            });
            body.quantities.forEach((quantity: number) => {
                buyyedProductQuantities.push(quantity)
            });
        }

        buyyedProducts.forEach(async (product: any, i: number = 0) => {
            let detailProduct: any = await this.productService.getProductsByField('id', product)
            let detailProductQuantity: string = buyyedProductQuantities[i]
            let lastSellingsId: number = await this.sellingsService.lastId()

            console.log(lastSellingsId);


            try {
                await this.sellingProductsService.insertSellingProduct({
                    i_sellings_id: lastSellingsId,
                    n_product: detailProduct.n_product,
                    n_brand: detailProduct.brand.n_brand,
                    n_quantity: detailProductQuantity,
                    n_price: detailProduct.n_price,
                    n_total: parseInt(detailProductQuantity) * parseInt(detailProduct.n_price),
                    n_photo: detailProduct.n_photo
                })
            } catch (error) {
                console.log(error);

                throw new Error(error)
            }

            i++
        });

        const address: any = await this.sellingAddressService.insertSellingAddress({
            n_name: body.full_name,
            n_phone: body.phone,
            n_address: body.address,
        })

        console.log(address.id);


        const invoice = ((Math.floor((Math.random() * (9999 - 1000) + 1000))) + '-' + Date.now()).toString()
        return this.sellingsService.insertSelling({
            i_selling_address_id: address.id,
            i_payment_method_id: body.payment_method,
            i_status_selling_id: body.status,
            i_users_id: body.user,
            n_invoice: invoice,
            n_grand_total: body.grand_total
        })

    }

    @Put()
    async updateSellingStatus(@Body() body) {
        await this.sellingsService.updateSellingStatus(
            body.id,
            body.status
        )
    }
}