import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Sellings } from 'src/models/table/sellings/sellings.entity';

@Table({
    tableName: 'm_status_selling',
    freezeTableName: true,
    paranoid: true
})
export class StatusSelling extends Model {
    @Column({ type: DataType.TEXT })
    n_status: string;

    @HasMany(() => Sellings)
    sellings: Sellings[]
}