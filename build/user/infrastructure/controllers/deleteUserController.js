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
exports.DeleteUserController = void 0;
class DeleteUserController {
    constructor(deleteUserUseCase) {
        this.deleteUserUseCase = deleteUserUseCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            console.log("id del req.params", id);
            try {
                const userDeleted = yield this.deleteUserUseCase.run(id);
                console.log("userDeleted:", userDeleted);
                if (userDeleted) {
                    res.status(200).send({
                        status: "success",
                        message: "User deleted successfully"
                    });
                }
                else {
                    res.status(404).send({
                        status: "error",
                        message: "User not found or could not be deleted"
                    });
                }
            }
            catch (error) {
                console.error("Error in DeleteUserController:", error);
                res.status(500).send({
                    status: "error",
                    message: "An error occurred while deleting the user",
                    error: error instanceof Error ? error.message : String(error)
                });
            }
        });
    }
}
exports.DeleteUserController = DeleteUserController;
