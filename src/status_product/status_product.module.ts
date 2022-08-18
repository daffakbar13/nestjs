import { AuthModule } from "@/api/user/auth/auth.module";
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { StatusProductController } from "./status_product.controller";
import { StatusProduct } from "./status_product.entity";
import { StatusProductService } from "./status_product.service";

@Module({
    imports: [
        SequelizeModule.forFeature([StatusProduct]),
        AuthModule
    ],
    controllers: [StatusProductController],
    providers: [StatusProductService],
    exports: [StatusProductService]
})

export class StatusProductModule { }