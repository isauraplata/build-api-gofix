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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class RegisterUserController {
    constructor(registerUserUseCase) {
        this.registerUserUseCase = registerUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            console.log("Request body:", data);
            try {
                const salt = yield bcrypt_1.default.genSalt(Number(process.env.SALT));
                const hashPassword = yield bcrypt_1.default.hash(req.body.password, salt);
                console.log("Hashed password:", hashPassword);
                const user = yield this.registerUserUseCase.run(data.name, data.email, data.phone, hashPassword, data.is_mechanic);
                console.log("Result from registerUserUseCase:", user);
                if (user) {
                    res.status(201).send({
                        status: "success",
                        data: user
                    });
                }
                else {
                    res.status(400).send({
                        status: "error",
                        message: "No fue posible agregar el registro",
                    });
                }
            }
            catch (error) {
                console.error("Error in RegisterUserController:", error);
                res.status(500).send({
                    status: "error",
                    message: "Ocurrió un error interno",
                    error: error
                });
            }
        });
    }
}
exports.RegisterUserController = RegisterUserController;
