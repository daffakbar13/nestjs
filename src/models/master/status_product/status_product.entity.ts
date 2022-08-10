import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Products } from 'src/models/table/products/products.entity';

@Table({
    tableName: 'm_status_product',
    freezeTableName: true,
    paranoid: true
})
export class StatusProduct extends Model {
    @Column({ type: DataType.TEXT })
    n_status: string;

    @HasMany(() => Products)
    product: Products[]
}