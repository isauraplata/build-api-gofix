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
exports.GetUsersController = void 0;
class GetUsersController {
    constructor(getUserUseCase) {
        this.getUserUseCase = getUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                console.log(id);
                const data = yield this.getUserUseCase.run(id);
                console.log(data);
                if (data) {
                    res.status(201).send({
                        status: "success",
                        data: data
                    });
                }
                else {
                    res.status(204).send({
                        status: "error",
                        data: "NO fue posible obtener el registro",
                    });
                }
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
exports.GetUsersController = GetUsersController;
