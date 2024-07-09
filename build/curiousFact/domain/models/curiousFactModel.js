"use strict";
// export class CuriousFact {
//     constructor(
//       readonly id: string,  
//       readonly title: string,
//       readonly description: string,
//       readonly date: Date,
//       readonly id_user: number,
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuriousFact = void 0;
//     ) {}
//   }
class CuriousFact {
    constructor(id, title, description, date, id_user) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.id_user = id_user;
    }
}
exports.CuriousFact = CuriousFact;
