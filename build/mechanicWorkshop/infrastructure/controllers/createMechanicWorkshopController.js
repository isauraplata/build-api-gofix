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
exports.CreateMechanicWorkshopController = void 0;
class CreateMechanicWorkshopController {
    constructor(createMechanicWorkshopUseCase) {
        this.createMechanicWorkshopUseCase = createMechanicWorkshopUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            console.log(data);
            try {
                const mechanicWorkshop = yield this.createMechanicWorkshopUseCase.run(data.name, data.address, data.postalCode, new Date(data.openingHours), new Date(data.closingHours), data.description, data.id_user);
                console.log("Imprimiendo mechanicWorkshop desde controller");
                console.log(mechanicWorkshop);
                if (mechanicWorkshop) {
                    res.status(201).send({
                        status: "success",
                        data: {
                            id: mechanicWorkshop.id,
                            name: mechanicWorkshop.name,
                            address: mechanicWorkshop.address,
                            postalCode: mechanicWorkshop.postalCode,
                            openingHours: mechanicWorkshop.openingHours,
                            closingHours: mechanicWorkshop.closingHours,
                            description: mechanicWorkshop.description,
                            id_user: mechanicWorkshop.id_user,
                        },
                    });
                }
                else {
                    res.status(204).send({
                        status: "error",
                        data: "No fue posible agregar el registro",
                    });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).send({
                    status: "error",
                    data: "Ocurrió un error",
                    msn: error,
                });
            }
        });
    }
}
exports.CreateMechanicWorkshopController = CreateMechanicWorkshopController;
