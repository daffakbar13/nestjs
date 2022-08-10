import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { Users } from 'src/models/users/users.entity';
import { Sellings } from '../sellings/sellings.entity';

@Table({
    tableName: 't_customers',
    freezeTableName: true
})
export class Customers extends Model {
    @ForeignKey(() => Users)
    @Column({ type: DataType.INTEGER })
    i_users_id: number;

    @BelongsTo(() => Users)
    user: Users

    @Column({ type: DataType.TEXT })
    n_customer: string;

    @HasMany(() => Sellings)
    sellings: Sellings[]
}