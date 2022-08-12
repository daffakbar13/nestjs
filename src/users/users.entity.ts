import { Table, Column, Model, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Roles } from 'src/roles/roles.entity';
import { Sellings } from 'src/sellings/sellings.entity';
import { Logger } from '../logger/logger.entity';

@Table({
    tableName: 'users',
    freezeTableName: true
})
export class Users extends Model {
    @ForeignKey(() => Roles)
    @Column({ type: DataType.INTEGER })
    i_roles_id: number;

    @BelongsTo(() => Roles)
    role: Roles

    @Column({ type: DataType.TEXT })
    n_name: string;

    @Column({ type: DataType.TEXT })
    n_email: string;

    @Column({ type: DataType.TEXT })
    n_password: string;

    @Column({ type: DataType.BOOLEAN })
    c_active: boolean;

    @HasMany(() => Sellings)
    Sellings: Sellings[]

    @HasMany(() => Logger)
    logs: Logger[]
}