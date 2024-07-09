"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.curiousFactRouter = void 0;
//productRouter.ts
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.curiousFactRouter = express_1.default.Router();
// Rutas
exports.curiousFactRouter.post("/", dependencies_1.createCuriousFactController.run.bind(dependencies_1.createCuriousFactController));
exports.curiousFactRouter.get("/", dependencies_1.getAllCuriousFactController.run.bind(dependencies_1.getAllCuriousFactController));
exports.curiousFactRouter.delete("/:id", dependencies_1.deleteCuriousFactsController.run.bind(dependencies_1.deleteCuriousFactsController));
exports.curiousFactRouter.put("/:id", dependencies_1.updateUserController.run.bind(dependencies_1.updateUserController));
