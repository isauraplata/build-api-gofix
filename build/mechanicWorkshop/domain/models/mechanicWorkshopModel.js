"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicWorkshop = void 0;
class MechanicWorkshop {
    constructor(id, name, address, postalCode, openingHours, closingHours, description, id_user) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.postalCode = postalCode;
        this.openingHours = openingHours;
        this.closingHours = closingHours;
        this.description = description;
        this.id_user = id_user;
    }
}
exports.MechanicWorkshop = MechanicWorkshop;
