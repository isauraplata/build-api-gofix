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
exports.LoginController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const generateToke_1 = __importDefault(require("../utils/generateToke"));
class LoginController {
    constructor(loginUseCase) {
        this.loginUseCase = loginUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            console.log("Request body:", data);
            try {
                const userFind = yield this.loginUseCase.run(data.email, data.password);
                if (!userFind) {
                    console.log("no lo encontro, ni modos compadre");
                    return res.status(401).json({ error: true, message: "Invalid email or password" });
                }
                const { password } = userFind;
                console.log(password);
                const verifiedPassword = yield bcrypt_1.default.compare(req.body.password, password);
                if (!verifiedPassword)
                    return res.status(401).json({ error: true, message: "Invalid password" });
                //generate access and token
                const { accessToken } = yield (0, generateToke_1.default)(userFind);
                res.status(200).json({
                    error: false,
                    accessToken,
                    message: "Logged in successfully"
                });
            }
            catch (error) {
                res.status(204).send({
                    status: "error",
                    data: "Ocurrio un error",
                    msn: error,
                });
            }
        });
    }
}
exports.LoginController = LoginController;
