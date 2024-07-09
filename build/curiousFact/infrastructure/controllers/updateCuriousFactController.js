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
exports.UpdateCuriousFactController = void 0;
class UpdateCuriousFactController {
    constructor(updateCuriousFactUseCase) {
        this.updateCuriousFactUseCase = updateCuriousFactUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const data = req.body; // Datos a actualizar, como title y description
            try {
                // Llama al caso de uso para realizar la actualización
                const updatedCuriousFact = yield this.updateCuriousFactUseCase.run(id, data.title, data.description);
                // Verifica si se pudo actualizar correctamente
                if (updatedCuriousFact) {
                    res.status(200).send({
                        status: "success",
                        data: {
                            id: updatedCuriousFact.id,
                            title: updatedCuriousFact.title,
                            description: updatedCuriousFact.description,
                            date: updatedCuriousFact.date,
                            id_user: updatedCuriousFact.id_user
                        },
                    });
                }
                else {
                    res.status(404).send({
                        status: "error",
                        data: "No se encontró el hecho curioso o no se pudo actualizar",
                    });
                }
            }
            catch (error) {
                console.error("Error al actualizar el hecho curioso:", error);
                res.status(500).send({
                    status: "error",
                    data: "Ocurrió un error al procesar la solicitud de actualización",
                    message: error, // Mejor manejo de mensajes de error
                });
            }
        });
    }
}
exports.UpdateCuriousFactController = UpdateCuriousFactController;
