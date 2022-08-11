import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Customers } from 'src/customers/customers.entity';
import { Logger } from '../logger/logger.entity';

@Table({
    tableName: 'users',
    freezeTableName: true
})
export class Users extends Model {
    @Column({ type: DataType.TEXT })
    n_name: string;

    @Column({ type: DataType.TEXT })
    n_email: string;

    @Column({ type: DataType.TEXT })
    n_password: string;

    @HasMany(() => Customers)
    customer: Customers[]

    @HasMany(() => Logger)
    logs: Logger[]
}