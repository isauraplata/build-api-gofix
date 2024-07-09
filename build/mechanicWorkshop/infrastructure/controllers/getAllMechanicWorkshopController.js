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
exports.GetAllMechanicWorkshopsController = void 0;
class GetAllMechanicWorkshopsController {
    constructor(getAllMechanicWorkshopUseCase) {
        this.getAllMechanicWorkshopUseCase = getAllMechanicWorkshopUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const mechanicWorkshops = yield this.getAllMechanicWorkshopUseCase.run();
                if (mechanicWorkshops) {
                    res.status(200).send({
                        status: "success",
                        data: mechanicWorkshops,
                    });
                }
                else {
                    res.status(204).send({
                        status: "error",
                        data: "No hay talleres mecánicos registrados",
                    });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).send({
                    status: "error",
                    data: "Ocurrió un error al obtener los talleres mecánicos",
                    msn: error,
                });
            }
        });
    }
}
exports.GetAllMechanicWorkshopsController = GetAllMechanicWorkshopsController;
