import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Roles } from "./roles.entity";

@Injectable()

export class RolesService {
    constructor(
        @InjectModel(Roles)
        private roles: typeof Roles
    ) { }

    async getRoles(): Promise<Roles[]> {
        return this.roles.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
    }
    async insertRole(items): Promise<Roles> {
        return this.roles.create(items);
    }

    async updateRole(id: number, items = {}): Promise<void> {
        await this.roles.update(
            items,
            {
                where: {
                    id: id
                }
            }
        )
    }
}