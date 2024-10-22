"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMechanicWorkshopsController = exports.getAllMechanicWorkshopUseCase = exports.createMechanicWorkshopController = exports.createMechanicWorkshopUseCase = void 0;
const MysqlRepository_1 = require("./MysqlRepository");
const dotenv_1 = __importDefault(require("dotenv"));
const createMechanicWorkshopUseCase_1 = require("../application/createMechanicWorkshopUseCase");
const createMechanicWorkshopController_1 = require("./controllers/createMechanicWorkshopController");
const getAllMechanicWorkshopUseCase_1 = require("../application/getAllMechanicWorkshopUseCase");
const getAllMechanicWorkshopController_1 = require("./controllers/getAllMechanicWorkshopController");
dotenv_1.default.config();
const mysqlMechanicWorkshopRepository = new MysqlRepository_1.MysqlMechanicWorkshopRepository();
exports.createMechanicWorkshopUseCase = new createMechanicWorkshopUseCase_1.CreateMechanicWorkshop(mysqlMechanicWorkshopRepository);
exports.createMechanicWorkshopController = new createMechanicWorkshopController_1.CreateMechanicWorkshopController(exports.createMechanicWorkshopUseCase);
exports.getAllMechanicWorkshopUseCase = new getAllMechanicWorkshopUseCase_1.GetAllMechanicWorkshop(mysqlMechanicWorkshopRepository);
exports.getAllMechanicWorkshopsController = new getAllMechanicWorkshopController_1.GetAllMechanicWorkshopsController(exports.getAllMechanicWorkshopUseCase);
// export const getAllMechanicWorkshopsUseCase = new GetAllMechanicWorkshops(mysqlMechanicWorkshopRepository);
// export const getAllMechanicWorkshopsController = new GetAllMechanicWorkshopsController(getAllMechanicWorkshopsUseCase);
// export const deleteMechanicWorkshopUseCase = new DeleteMechanicWorkshop(mysqlMechanicWorkshopRepository);
// export const deleteMechanicWorkshopController = new DeleteMechanicWorkshopController(deleteMechanicWorkshopUseCase);
// export const updateMechanicWorkshopUseCase = new UpdateMechanicWorkshop(mysqlMechanicWorkshopRepository);
// export const updateMechanicWorkshopController = new UpdateMechanicWorkshopController(updateMechanicWorkshopUseCase);
