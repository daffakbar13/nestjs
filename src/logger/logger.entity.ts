import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Users } from 'src/users/users.entity';

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