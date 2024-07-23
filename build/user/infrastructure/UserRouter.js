"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/signup", dependencies_1.registerUserController.run.bind(dependencies_1.registerUserController));
exports.userRouter.post("/signin", dependencies_1.loginUsersController.run.bind(dependencies_1.loginUsersController));
exports.userRouter.get("/", dependencies_1.getAllUsersController.run.bind(dependencies_1.getAllUsersController));
exports.userRouter.delete("/:id", dependencies_1.deleteUsersController.run.bind(dependencies_1.deleteUsersController));
exports.userRouter.put("/:id", dependencies_1.updateUsersController.run.bind(dependencies_1.updateUsersController));
exports.userRouter.get("/:id", dependencies_1.getUsersController.run.bind(dependencies_1.getUsersController));
