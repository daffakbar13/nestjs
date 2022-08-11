/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/Auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from './products/products.entity';
import { Brands } from './brands/brands.entity';
import { Users } from './users/users.entity';
import { Logger } from './logger/logger.entity';
import { PaymentMethods } from './payment_methods/payment_methods.entity';
import { StatusProduct } from './status_product/status_product.entity';
import { StatusSelling } from './status_selling/status_selling.entity';
import { Customers } from './customers/customers.entity';
import { Sellings } from './sellings/sellings.entity';
import { SellingAddress } from './selling_address/selling_address.entity';
import { SellingProducts } from './selling_products/selling_products.entity';
import { PagesModule } from './pages/pages.module';
import { ProductsModule } from './products/products.module';
import { StatusProductModule } from './status_product/status_product.module';
import { BrandModule } from './brands/brands.module';
import { StatusSellingModule } from './status_selling/status_selling.module';
import { PaymentMethodsModule } from './payment_methods/payment_methods.module';
import { SellingsAddressModule } from './selling_address/selling_address.module';
import { SellingProductsModule } from './selling_products/selling_products.module';

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
    ProductsModule,
    StatusProductModule,
    StatusSellingModule,
    BrandModule,
    PaymentMethodsModule,
    SellingsAddressModule,
    SellingProductsModule
  ],
})

export class AppModule { }
