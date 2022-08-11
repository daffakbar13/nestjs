import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { PaymentMethods } from 'src/payment_methods/payment_methods.entity';
import { StatusSelling } from 'src/status_selling/status_selling.entity';
import { Customers } from '../customers/customers.entity';
import { SellingAddress } from '../selling_address/selling_address.entity';
import { SellingProducts } from '../selling_products/selling_products.entity';

@Table({
    tableName: 't_sellings',
    freezeTableName: true
})
export class Sellings extends Model {
    @ForeignKey(() => Customers)
    @Column({ type: DataType.INTEGER })
    i_customers_id: number;

    @BelongsTo(() => Customers)
    customer: Customers

    @ForeignKey(() => SellingAddress)
    @Column({ type: DataType.INTEGER })
    i_selling_address_id: number;

    @BelongsTo(() => SellingAddress)
    address: SellingAddress

    @ForeignKey(() => PaymentMethods)
    @Column({ type: DataType.INTEGER })
    i_payment_method_id: number;

    @BelongsTo(() => PaymentMethods)
    payment_method: PaymentMethods

    @ForeignKey(() => SellingProducts)
    @Column({ type: DataType.INTEGER })
    i_selling_products_id: number;

    @BelongsTo(() => SellingProducts)
    products: SellingProducts

    @ForeignKey(() => StatusSelling)
    @Column({ type: DataType.INTEGER })
    i_status_selling_id: number;

    @BelongsTo(() => StatusSelling)
    status: StatusSelling

    @Column({ type: DataType.TEXT })
    n_invoice: string;

    @Column({ type: DataType.BIGINT })
    n_grand_total: number;
}