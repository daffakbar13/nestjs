import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Sellings } from 'src/sellings/sellings.entity';

@Table({
    tableName: 'm_payment_methods',
    freezeTableName: true,
    paranoid: true
})
export class PaymentMethods extends Model {
    @Column({ type: DataType.TEXT })
    n_account_name: string;

    @Column({ type: DataType.TEXT })
    n_account_number: string;

    @Column({ type: DataType.TEXT })
    n_payment_method: string;

    @HasMany(() => Sellings)
    sellings: Sellings[]
}