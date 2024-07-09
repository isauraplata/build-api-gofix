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
exports.MysqlCuriousFactRepository = void 0;
const mysql_1 = require("../../database/mysql");
const curiousFactModel_1 = require("../domain/models/curiousFactModel");
class MysqlCuriousFactRepository {
    updateCuriousFact(id, title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `
      UPDATE curious_facts
      SET title = ?, description = ?
      WHERE id = ?
    `;
            const params = [title, description, id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return result.affectedRows > 0 || null;
            }
            catch (error) {
                throw new Error(`Error updating curious fact: ${error}`);
            }
        });
    }
    createCuriousFact(title, description, date, id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            // id_user = Number(id_user);
            const sql = "INSERT INTO curious_facts (title, description, date, id_user) VALUES (?, ?, ?, ?)";
            const params = [title, description, date, id_user];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                console.log("Query result:", result);
                console.log("Query result:", result.insertId);
                return new curiousFactModel_1.CuriousFact(result.insertId, title, description, date, id_user);
            }
            catch (error) {
                console.error(`Error creating curious fact: ${error}`);
                return null;
            }
        });
    }
    deleteCuriousFact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM curious_facts WHERE id = ?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return result.affectedRows > 0 ? id : null;
            }
            catch (error) {
                throw new Error(`Error deleting curious fact: ${error}`);
            }
        });
    }
    getAllCuriousFacts() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM curious_facts";
            try {
                const [results] = yield (0, mysql_1.query)(sql, []);
                if (results.length > 0) {
                    return results.map((fact) => new curiousFactModel_1.CuriousFact(fact.id, fact.title, fact.description, fact.date, fact.id_user));
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error(`Error obtaining all curious facts: ${error}`);
            }
        });
    }
    getCuriousFact(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM curious_facts WHERE id = ?";
            const params = [id];
            try {
                const [results] = yield (0, mysql_1.query)(sql, params);
                if (results.length > 0) {
                    const fact = results[0];
                    return new curiousFactModel_1.CuriousFact(fact.id, fact.title, fact.description, fact.date, fact.id_user);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error(`Error obtaining curious fact: ${error}`);
            }
        });
    }
}
exports.MysqlCuriousFactRepository = MysqlCuriousFactRepository;
