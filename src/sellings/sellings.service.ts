import { Users } from "@/api/user/users.entity";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { PaymentMethods } from "src/payment_methods/payment_methods.entity";
import { ProductsService } from "src/products/products.service";
import { SellingAddress } from "src/selling_address/selling_address.entity";
import { SellingAddressService } from "src/selling_address/selling_address.service";
import { SellingProducts } from "src/selling_products/selling_products.entity";
import { SellingProductsService } from "src/selling_products/selling_products.service";
import { StatusProduct } from "src/status_product/status_product.entity";
import { StatusSelling } from "src/status_selling/status_selling.entity";
import { Sellings } from "./sellings.entity";

@Injectable()

export class SellingsService {
    constructor(
        @InjectModel(Sellings)
        private sellings: typeof Sellings,
        private productService: ProductsService,
        private sellingProductsService: SellingProductsService,
        private sellingAddressService: SellingAddressService
    ) { }

    async getSellings(): Promise<Sellings[]> {
        return this.sellings.findAll({
            order: [
                ['id', 'ASC']
            ],
            include: [
                {
                    attributes: ['n_email'],
                    model: Users
                },
                {

                    model: SellingAddress
                },
                {
                    model: SellingProducts
                },
                {
                    attributes: [
                        'n_account_name',
                        'n_account_number',
                        'n_payment_method'
                    ],
                    model: PaymentMethods
                },
            ],
        })
    }

    async getSellingsByField(field: string, direction: any): Promise<Sellings[]> {
        return this.sellings.findAll({
            order: [
                ['id', 'ASC']
            ],
            where: {
                [field]: direction,
            },
            include: [
                {
                    attributes: ['n_email'],
                    model: Users
                },
                {
                    attributes: { exclude: ['id'] },
                    model: SellingAddress
                },
                {
                    attributes: { exclude: ['id', 'i_sellings_id'] },
                    model: SellingProducts
                },
                {
                    attributes: ['n_status'],
                    model: StatusSelling
                },
                {
                    attributes: [
                        'n_account_name',
                        'n_account_number',
                        'n_payment_method'
                    ],
                    model: PaymentMethods
                },
            ],
        });
    }

    async insertSelling(items): Promise<Sellings> {
        return this.sellings.create(items);
    }

    async insertOrders(body) {
        // INSERT SELLING ADDRESS
        const body_address = {
            n_name: body.full_name,
            n_phone: body.phone,
            n_address: body.address,
        }
        const address = await this.sellingAddressService.insertSellingAddress(body_address)

        // INSERT SELLINGS
        const invoice = ((Math.floor((Math.random() * (9999 - 1000) + 1000))) + '-' + Date.now()).toString()
        const body_sellings = {
            i_selling_address_id: address.id,
            i_payment_method_id: body.payment_method,
            i_status_selling_id: body.status,
            i_users_id: body.user,
            n_invoice: invoice,
            n_grand_total: body.grand_total
        }
        const selling = await this.insertSelling(body_sellings)

        // INSERT SELLING PRODUCTS
        const body_products = []
        const products = await this.productService.getProducts()
        body.products.forEach((product: any) => {
            const detailProduct: any = products.find(e => e.id == product.id)
            const items = {
                i_sellings_id: selling.id,
                n_product: detailProduct.n_product,
                n_brand: detailProduct.brand.n_brand,
                n_quantity: parseInt(product.quantity),
                n_price: parseInt(detailProduct.n_price),
                n_total: parseInt(product.quantity) * parseInt(detailProduct.n_price),
                n_photo: detailProduct.n_photo
            }
            this.productService.updateProductStock(product.id, -parseInt(product.quantity))
            body_products.push(items)
        });
        await this.sellingProductsService.insertSellingProduct(body_products)

        // RESULTS
        return await this.getSellingsByField('id', selling.id)
    }

    async updateSellingStatus(id: number, status: number): Promise<void> {
        await this.sellings.update(
            {
                i_status_selling_id: status
            },
            {
                where: {
                    id: id
                }
            }
        )
    }
}