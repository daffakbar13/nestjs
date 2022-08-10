import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Products } from '../products/products.entity';

@Table({
    tableName: 't_brands',
    freezeTableName: true,
    paranoid: true
})
export class Brands extends Model {
    @Column({ type: DataType.TEXT })
    n_brand: string;

    @Column({ type: DataType.TEXT })
    n_photo: string;

    @Column({ type: DataType.BOOLEAN })
    c_active: boolean;

    @HasMany(() => Products)
    products: Products[]
}