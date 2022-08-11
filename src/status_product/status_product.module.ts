import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { StatusProductController } from "./status_product.controller";
import { StatusProduct } from "./status_product.entity";
import { StatusProductService } from "./status_product.service";

@Module({
    imports: [SequelizeModule.forFeature([StatusProduct])],
    controllers: [StatusProductController],
    providers: [StatusProductService],
    exports: [StatusProductService]
})

export class StatusProductModule { }