"use strict";
// import dotenv from "dotenv";
// import mysql from "mysql2/promise";
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
exports.query = query;
// dotenv.config();
// const config = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   waitForConnections: true,
//   connectionLimit: 10,
// };
// console.log(config);
// const pool = mysql.createPool(config);
// export async function query(sql: string, params: any[]) {
//   try {
//     const conn = await pool.getConnection();
//     const result = await conn.execute(sql, params);
//     conn.release();
//     return result;
//   } catch (error) {
//     return null;
//   }
// }
const dotenv_1 = __importDefault(require("dotenv"));
const promise_1 = __importDefault(require("mysql2/promise"));
dotenv_1.default.config();
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
};
console.log(config);
const pool = promise_1.default.createPool(config);
function query(sql, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield pool.getConnection();
            const result = yield conn.execute(sql, params);
            conn.release();
            return result;
        }
        catch (error) {
            return null;
        }
    });
}
// Función para validar la conexión a la base de datos
function validarConexion() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Intenta obtener una conexión directa al servidor de la base de datos
            const connection = yield promise_1.default.createConnection(config);
            yield connection.connect();
            console.log('La conexión a la base de datos mysql es exitosa.');
            yield connection.end(); // Cierra la conexión después de verificarla
        }
        catch (error) {
            console.error('Error al intentar conectar a la base de datos:', error);
        }
    });
}
validarConexion();
