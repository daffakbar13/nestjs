import { AuthModule } from "@/api/user/auth/auth.module";
import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { StatusSellingController } from "./status_selling.controller";
import { StatusSelling } from "./status_selling.entity";
import { StatusSellingService } from "./status_selling.service";

@Module({
    imports: [
        SequelizeModule.forFeature([StatusSelling]),
        AuthModule
    ],
    controllers: [StatusSellingController],
    providers: [StatusSellingService],
    exports: [StatusSellingService]
})

export class StatusSellingModule { }