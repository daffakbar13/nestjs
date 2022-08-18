import { Users } from '@/api/user/users.entity';
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';

@Table({
    tableName: 'roles',
    freezeTableName: true
})
export class Roles extends Model {
    @Column({ type: DataType.TEXT })
    n_role: string;

    @HasMany(() => Users)
    users: Users[]
}