import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Brands } from "src/brands/brands.entity";
import { StatusProduct } from "src/status_product/status_product.entity";
import { Products } from "./products.entity";

@Injectable()

export class ProductsService {
    constructor(
        @InjectModel(Products)
        private products: typeof Products,
    ) { }

    async getProducts(): Promise<Products[]> {
        return this.products.findAll({
            order: [
                ['id', 'ASC']
            ],
            include: [
                {
                    attributes: ['n_brand'],
                    model: Brands
                },
                {
                    attributes: ['n_status'],
                    model: StatusProduct
                }
            ]
        })
    }

    async getProductsByField(field: string, direction: any): Promise<Products[]> {
        return this.products.findAll({
            order: [
                ['id', 'ASC']
            ],
            where: {
                [field]: direction,
            },
            include: [
                {
                    attributes: ['n_brand'],
                    model: Brands
                },
                {
                    attributes: ['n_status'],
                    model: StatusProduct
                }
            ]
        });
    }

    async insertProduct(items): Promise<Products> {
        return this.products.create(items);
    }

    async updateProduct(id: number, items = {}): Promise<void> {
        await this.products.update(
            items,
            {
                where: {
                    id: id
                }
            }
        )
    }

    async updateProductStock(id: number, quantity: number): Promise<void> {
        await this.products.increment(
            { n_stock: quantity },
            {
                where: {
                    id: id
                }
            }
        )
    }

    async deleteProduct(field: string, direction: any): Promise<void> {
        this.products.destroy({
            where: {
                [field]: direction
            }
        });
    }
}