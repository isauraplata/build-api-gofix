"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMechanicWorkshop = void 0;
class CreateMechanicWorkshop {
    constructor(mechanicWorkshopRepository) {
        this.mechanicWorkshopRepository = mechanicWorkshopRepository;
    }
    run(name, address, postalCode, openingHours, closingHours, description, id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mechanicWorkshop = yield this.mechanicWorkshopRepository.createMechanicWorkshop(name, address, postalCode, openingHours, closingHours, description, id_user);
                return mechanicWorkshop;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.CreateMechanicWorkshop = CreateMechanicWorkshop;
