/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from './products/products.entity';
import { Brands } from './brands/brands.entity';
import { Logger } from './logger/logger.entity';
import { PaymentMethods } from './payment_methods/payment_methods.entity';
import { StatusProduct } from './status_product/status_product.entity';
import { StatusSelling } from './status_selling/status_selling.entity';
import { Sellings } from './sellings/sellings.entity';
import { SellingAddress } from './selling_address/selling_address.entity';
import { SellingProducts } from './selling_products/selling_products.entity';
import { ProductsModule } from './products/products.module';
import { StatusProductModule } from './status_product/status_product.module';
import { BrandModule } from './brands/brands.module';
import { StatusSellingModule } from './status_selling/status_selling.module';
import { PaymentMethodsModule } from './payment_methods/payment_methods.module';
import { SellingsAddressModule } from './selling_address/selling_address.module';
import { SellingProductsModule } from './selling_products/selling_products.module';
import { SellingsModule } from './sellings/sellings.module';
import { Roles } from './roles/roles.entity';
import { RolesModule } from './roles/roles.module';
import { ApiModule } from './api/api.module';
import { getEnvPath } from './common/helper/env.helper';
import { Users } from './api/user/users.entity';
import { AuthModule } from './api/user/auth/auth.module';
import { UsersModule } from './api/user/users.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: '0.0.0.0',
      port: 3500,
      username: "postgres",
      password: 'postgres',
      database: 'nest',
      models: [
        Roles,
        Logger,
        Users,
        PaymentMethods,
        StatusProduct,
        StatusSelling,
        Products,
        Brands,
        Sellings,
        SellingAddress,
        SellingProducts
      ],
      autoLoadModels: true,
      sync: { alter: true },
      synchronize: true,
    }),
    ProductsModule,
    StatusProductModule,
    StatusSellingModule,
    BrandModule,
    PaymentMethodsModule,
    SellingsAddressModule,
    SellingProductsModule,
    SellingsModule,
    RolesModule,
    UsersModule,
    ApiModule,
    AuthModule,
  ],
})

export class AppModule { }
