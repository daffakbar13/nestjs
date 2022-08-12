import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Sellings } from '../sellings/sellings.entity';

@Table({
    tableName: 't_selling_address',
    freezeTableName: true,
    timestamps: false
})
export class SellingAddress extends Model {
    @Column({ type: DataType.TEXT })
    n_name: string;

    @Column({ type: DataType.BIGINT })
    n_phone: number;

    @Column({ type: DataType.TEXT })
    n_address: string;

    @HasMany(() => Sellings)
    sellings: Sellings[]
}