"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mechanicWorkshopRouter = void 0;
//productRouter.ts
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.mechanicWorkshopRouter = express_1.default.Router();
// Rutas
exports.mechanicWorkshopRouter.post("/", dependencies_1.createMechanicWorkshopController.run.bind(dependencies_1.createMechanicWorkshopController));
exports.mechanicWorkshopRouter.get("/", dependencies_1.getAllMechanicWorkshopsController.run.bind(dependencies_1.getAllMechanicWorkshopsController));
// curiousFactRouter.get("/", getAllCuriousFactController.run.bind(getAllCuriousFactController));
// curiousFactRouter.delete("/:id", deleteCuriousFactsController.run.bind(deleteCuriousFactsController));
// curiousFactRouter.put("/:id", updateUserController.run.bind(updateUserController));
