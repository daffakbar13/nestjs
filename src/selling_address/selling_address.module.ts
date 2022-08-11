import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { SellingAddressController } from "./selling_address.controller";
import { SellingAddress } from "./selling_address.entity";
import { SellingAddressService } from "./selling_address.service";

@Module({
    imports: [SequelizeModule.forFeature([SellingAddress])],
    controllers: [SellingAddressController],
    providers: [SellingAddressService],
    exports: [SellingAddressService]
})

export class SellingsAddressModule { }