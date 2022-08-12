import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { StatusProduct } from 'src/status_product/status_product.entity';
import { Brands } from '../brands/brands.entity';

@Table({
    tableName: 't_products',
    freezeTableName: true,
    paranoid: true
})
export class Products extends Model {
    @ForeignKey(() => Brands)
    @Column({ type: DataType.INTEGER })
    i_brands_id: number;
    @BelongsTo(() => Brands)
    brand: Brands

    @ForeignKey(() => StatusProduct)
    @Column({ type: DataType.INTEGER })
    i_status_product_id: number;
    @BelongsTo(() => StatusProduct)
    status: StatusProduct

    @Column({ type: DataType.TEXT })
    n_product: string;

    @Column({ type: DataType.BIGINT })
    n_stock: number;

    @Column({ type: DataType.BIGINT })
    n_price: number;

    @Column({ type: DataType.TEXT })
    n_photo: string;
}