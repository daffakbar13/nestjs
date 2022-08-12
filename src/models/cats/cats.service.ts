// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/sequelize';
// // import { Cat } from './cat.entity';

// @Injectable()
// export class CatsService {
//     constructor(
//         @InjectModel(Cat)
//         private cat: typeof Cat,
//     ) { }

//     async getCat(): Promise<Cat[]> {
//         return this.cat.findAll()
//     }

//     async insertCat(items = {}): Promise<Cat> {
//         return this.cat.create(items);
//     }

//     findOne(id: string): Promise<Cat> {
//         return this.cat.findOne({
//             where: {
//                 id,
//             },
//         });
//     }

//     async remove(id: string): Promise<void> {
//         const user = await this.findOne(id);
//         await user.destroy();
//     }
// }