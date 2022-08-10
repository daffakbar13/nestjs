import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Logger } from "./logger.entity";

@Module({
    imports: [SequelizeModule.forFeature([Logger])],
})

export class LoggerModule { }