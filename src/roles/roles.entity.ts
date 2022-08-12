import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Users } from 'src/users/users.entity';

@Table({
    tableName: 'roles',
    freezeTableName: true
})
export class Roles extends Model {
    @Column({ type: DataType.TEXT })
    n_roles: string;

    @HasMany(() => Users)
    users: Users[]
}