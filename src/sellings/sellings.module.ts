import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Sellings } from "./sellings.entity";

@Module({
    imports: [SequelizeModule.forFeature([Sellings])],
})

export class SellingsModule { }