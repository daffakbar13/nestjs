import { Users } from '@/api/user/users.entity';
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

@Table({
    tableName: 'logger',
    freezeTableName: true
})
export class Logger extends Model {
    @ForeignKey(() => Users)
    @Column({ type: DataType.INTEGER })
    i_users_id: number;
    @BelongsTo(() => Users)
    user: Users

    @Column({ type: DataType.TEXT })
    n_url: string;

    @Column({ type: DataType.TEXT })
    n_method: string;
}