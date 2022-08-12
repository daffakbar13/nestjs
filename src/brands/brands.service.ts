import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Products } from "src/products/products.entity";
import { Brands } from "./brands.entity";

@Injectable()

export class BrandsService {
    constructor(
        @InjectModel(Brands)
        private brands: typeof Brands,
        @InjectModel(Products)
        private products: typeof Products,
    ) { }

    async getBrands(): Promise<Brands[]> {
        return this.brands.findAll({
            order: [
                ['id', 'ASC']
            ],
            include: {
                model: Products
            }
        })
    }

    async getBrandsByField(field: string, direction: any): Promise<Brands[]> {
        return this.brands.findAll({
            order: [
                ['id', 'ASC']
            ],
            where: {
                [field]: direction,
            },
        });
    }

    async insertBrands(items): Promise<Brands> {
        return this.brands.create(items);
    }

    async updateBrands(id: number, items = {}): Promise<void> {
        await this.brands.update(
            items,
            {
                where: {
                    id: id
                }
            }
        )
    }

    async deleteBrands(fields: string, direction: any): Promise<void> {
        this.brands.destroy({
            where: {
                [fields]: direction
            }
        });
        this.products.destroy({
            where: {
                i_brands_id: direction
            }
        });

    }
}