import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './cat.entity';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
    imports: [SequelizeModule.forFeature([Cat])],
    controllers: [CatsController],
    providers: [
        CatsService,
    ],
    exports: [CatsService]
})
export class CatsModule { }