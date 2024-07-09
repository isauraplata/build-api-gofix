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
exports.DeleteCuriousFactController = void 0;
class DeleteCuriousFactController {
    constructor(deleteCuriousFactUseCase) {
        this.deleteCuriousFactUseCase = deleteCuriousFactUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const id: string = req.params.id; 
            const id = req.params.id;
            console.log(id);
            try {
                const curiousFactDeleted = yield this.deleteCuriousFactUseCase.run(id);
                if (curiousFactDeleted)
                    res.status(201).send({
                        status: "success",
                    });
                else
                    res.status(204).send({
                        status: "error",
                        data: "NO fue posible eliminar el registro",
                    });
            }
            catch (error) {
                res.status(204).send({
                    status: "error",
                    data: "Ocurrió un error",
                    msn: error,
                });
            }
        });
    }
}
exports.DeleteCuriousFactController = DeleteCuriousFactController;
