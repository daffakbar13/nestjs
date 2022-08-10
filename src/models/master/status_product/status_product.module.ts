import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { StatusProduct } from "./status_product.entity";

@Module({
    imports: [SequelizeModule.forFeature([StatusProduct])],
})

export class StatusProductModule { }