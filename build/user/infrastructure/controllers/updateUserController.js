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
exports.UpdateUserController = void 0;
class UpdateUserController {
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const data = req.body;
            try {
                // Llama al caso de uso para realizar la actualización
                const updatedUser = yield this.updateUserUseCase.run(id, data.name, data.email, data.phone, data.password, data.is_mechanic);
                // Verifica si se pudo actualizar correctamente
                if (updatedUser) {
                    res.status(200).send({
                        status: "success",
                        data: {
                            id: updatedUser.id,
                            name: updatedUser.name,
                            email: updatedUser.email,
                            phone: updatedUser.phone,
                            password: updatedUser.password,
                            is_mechanic: updatedUser.is_mechanic
                        },
                    });
                }
                else {
                    res.status(404).send({
                        status: "error",
                        data: "No se encontró el usuario o no se pudo actualizar",
                    });
                }
            }
            catch (error) {
                console.error("Error al actualizar el usuario:", error);
                res.status(500).send({
                    status: "error",
                    data: "Ocurrió un error al procesar la solicitud de actualización",
                    message: error, // Mejor manejo de mensajes de error
                });
            }
        });
    }
}
exports.UpdateUserController = UpdateUserController;
