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
exports.CreateCuriousFactController = void 0;
class CreateCuriousFactController {
    constructor(createCuriousFactUseCase) {
        this.createCuriousFactUseCase = createCuriousFactUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            console.log(data);
            try {
                const currentDate = new Date(); // Obtener la fecha y hora locales
                const curiousFact = yield this.createCuriousFactUseCase.run(data.title, data.description, currentDate, data.id_user);
                console.log("imprimiendo curiousFact desde controller");
                console.log(curiousFact);
                if (curiousFact)
                    res.status(201).send({
                        status: "success",
                        data: {
                            id: curiousFact === null || curiousFact === void 0 ? void 0 : curiousFact.id,
                            title: curiousFact === null || curiousFact === void 0 ? void 0 : curiousFact.title,
                            description: curiousFact === null || curiousFact === void 0 ? void 0 : curiousFact.description,
                            date: curiousFact === null || curiousFact === void 0 ? void 0 : curiousFact.date,
                            id_user: curiousFact === null || curiousFact === void 0 ? void 0 : curiousFact.id_user
                        },
                    });
                else
                    res.status(204).send({
                        status: "error",
                        data: "NO fue posible agregar el registro",
                    });
            }
            catch (error) {
                console.log(error);
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.CreateCuriousFactController = CreateCuriousFactController;
