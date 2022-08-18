import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Roles } from "src/roles/roles.entity";
import { Users } from "./users.entity";

@Injectable()

export class UsersService {
    constructor(
        @InjectModel(Users)
        private users: typeof Users
    ) { }

    async getUsers(): Promise<Users[]> {
        return this.users.findAll({
            order: [
                ['id', 'ASC']
            ],
            include: [
                {
                    attributes: ['n_role'],
                    model: Roles
                }
            ]
        })
    }

    async getUserByField(field: string, direction: any): Promise<Users[]> {
        return this.users.findAll({
            order: [
                ['id', 'ASC']
            ],
            where: {
                [field]: direction,
            },
            include: [
                {
                    attributes: ['n_role'],
                    model: Roles
                }
            ]
        });
    }

    async insertUser(items): Promise<Users> {
        return this.users.create(items);
    }

    async updateUser(id: number, items = {}): Promise<void> {
        await this.users.update(
            items,
            {
                where: {
                    id: id
                }
            }
        )
    }
}