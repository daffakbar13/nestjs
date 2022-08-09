import { Injectable } from "@nestjs/common";
import { CatsService } from "src/models/cats/cats.service";

@Injectable({})

export class AuthService {
    constructor(
        private cat: CatsService
    ) { }

    async login() {
        const cat = await this.cat.insertCat({
            name: 'tes',
            age: 11
        })
        return cat
    }

    register() {
        return 'register'
    }
}