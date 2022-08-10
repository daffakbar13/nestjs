import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { StatusSelling } from "./status_selling.entity";

@Module({
    imports: [SequelizeModule.forFeature([StatusSelling])],
})

export class StatusSellingModule { }