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
exports.RegisterUser = void 0;
class RegisterUser {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    run(name, email, phone, password, is_mechanic) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.registerUser(name, email, phone, password, is_mechanic);
                return user;
            }
            catch (error) {
                console.log(error);
                return null;
            }
        });
    }
}
exports.RegisterUser = RegisterUser;
