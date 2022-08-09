import { Module } from "@nestjs/common";
import { CatsModule } from "src/models/cats/cats.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        CatsModule
    ]
})

export class AuthModule { }