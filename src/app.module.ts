/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/Auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './models/cats/cat.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest',
      models: [Cat],
    }),
    AuthModule,
  ],
})

export class AppModule { }
