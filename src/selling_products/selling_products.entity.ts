import { Table, Column, Model, DataType, HasMany, HasOne, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Sellings } from '../sellings/sellings.entity';

@Table({
    tableName: 't_selling_products',
    freezeTableName: true,
    timestamps: false
})
export class SellingProducts extends Model {
    @ForeignKey(() => Sellings)
    @Column({ type: DataType.INTEGER })
    i_sellings_id: number;

    @BelongsTo(() => Sellings)
    sellings: Sellings

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
}