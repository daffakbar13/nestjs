/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/Auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from './models/table/products/products.entity';
import { Brands } from './models/table/brands/brands.entity';
import { Users } from './models/users/users.entity';
import { Logger } from './models/logger/logger.entity';
import { PaymentMethods } from './models/master/payment_methods/payment_methods.entity';
import { StatusProduct } from './models/master/status_product/status_product.entity';
import { StatusSelling } from './models/master/status_selling/status_selling.entity';
import { Customers } from './models/table/customers/customers.entity';
import { Sellings } from './models/table/sellings/sellings.entity';
import { SellingAddress } from './models/table/selling_address/selling_address.entity';
import { SellingProducts } from './models/table/selling_products/selling_products.entity';
import { PagesModule } from './pages/pages.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest',
      models: [
        Logger,
        Users,
        PaymentMethods,
        StatusProduct,
        StatusSelling,
        Products,
        Brands,
        Customers,
        Sellings,
        SellingAddress,
        SellingProducts
      ],
      autoLoadModels: true,
      sync: { alter: true },
      synchronize: true,
    }),
    AuthModule,
    PagesModule
  ],
})

export class AppModule { }
