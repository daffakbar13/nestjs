import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { SellingAddress } from "./selling_address.entity";

@Module({
    imports: [SequelizeModule.forFeature([SellingAddress])],
})

export class SellingsAddressModule { }