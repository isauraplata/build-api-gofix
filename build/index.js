"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
// import { userRouter } from "./users/infrastructure/UserRouter";
// import { productRouter } from "./products/infrastructure/ProductRouter";
// import {curiousFactRouter}}
// import curiousFactRouter from "../src/curiousFact/infrastructure/Cur"
// import {curiousFactRouter} from "../src/curiousFact/infrastructure/"
const curiousFactRouter_1 = require("./curiousFact/infrastructure/curiousFactRouter");
const UserRouter_1 = require("./user/infrastructure/UserRouter");
const mechanicWorkshopRouter_1 = require("./mechanicWorkshop/infrastructure/mechanicWorkshopRouter");
// import cors from "cors";
const app = (0, express_1.default)();
dotenv.config();
app.use(express_1.default.json());
// app.use(cors());
const port = process.env.PORT_SERVER;
const now = new Date();
app.listen(port, () => {
    console.log("listening on port: " + port);
    console.log(now.toLocaleString());
});
app.use("/api/v1/curiousFact", curiousFactRouter_1.curiousFactRouter);
app.use("/api/v1/user", UserRouter_1.userRouter);
app.use("/api/v1/mechanicWorkshop", mechanicWorkshopRouter_1.mechanicWorkshopRouter);
// app.use("/api/v1/products",productRouter);
