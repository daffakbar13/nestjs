import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Sellings } from '../sellings/sellings.entity';

@Table({
    tableName: 't_selling_products',
    freezeTableName: true
})
export class SellingProducts extends Model {
    @Column({ type: DataType.TEXT })
    n_product: string;

    @Column({ type: DataType.TEXT })
    n_brand: string;

    @Column({ type: DataType.BIGINT })
    n_quantity: number;

    @Column({ type: DataType.BIGINT })
    n_price: number;

    @Column({ type: DataType.BIGINT })
    n_total: number;

    @Column({ type: DataType.TEXT })
    n_photo: string;

    @HasMany(() => Sellings)
    sellings: Sellings[]
}