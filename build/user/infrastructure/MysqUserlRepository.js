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
exports.MysqlUserRepository = void 0;
const mysql_1 = require("../../database/mysql");
const userModel_1 = require("../domain/models/userModel");
class MysqlUserRepository {
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users";
            try {
                const [results] = yield (0, mysql_1.query)(sql, []);
                return results.map((user) => new userModel_1.User(user.id, user.name, user.email, user.phone, user.password, user.is_mechanic));
            }
            catch (error) {
                throw new Error(`Error obtaining users: ${error}`);
            }
        });
    }
    getUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users WHERE email = ?";
            const params = [email];
            try {
                const [results] = yield (0, mysql_1.query)(sql, params);
                if (results.length > 0) {
                    const user = results[0];
                    return new userModel_1.User(user.id, user.name, user.email, user.phone, user.password, user.is_mechanic);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error(`Error obtaining user: ${error}`);
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("id: " + id);
            const sql = "DELETE FROM users WHERE id = ?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                console.log("result: " + result);
                return result.affectedRows > 0 ? id : null;
            }
            catch (error) {
                throw new Error(`Error deleting user: ${error}`);
            }
        });
    }
    // async updateUser(id: string, name: string, email: string, password: string): Promise<boolean> {
    //   const sql = "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?";
    //   const params: any[] = [name, email, password, id];
    //   try {
    //     const [result]: any = await query(sql, params);
    //     return result.affectedRows > 0;
    //   } catch (error) {
    //     throw new Error(`Error updating user: ${error}`);
    //   }
    // }
    updateUser(id, name, email, phone, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "UPDATE users SET name = ?, email = ?, phone = ?, password = ? WHERE id = ?";
            const params = [name, email, phone, password, id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.affectedRows > 0) {
                    // Primero obtenemos el usuario para obtener el valor de is_mechanic
                    const updatedUser = yield this.getUserById(id);
                    return updatedUser;
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error(`Error updating user: ${error}`);
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users WHERE id = ?";
            const params = [id];
            try {
                const [results] = yield (0, mysql_1.query)(sql, params);
                if (results.length > 0) {
                    const user = results[0];
                    return new userModel_1.User(user.id, user.name, user.email, user.phone, user.password, user.is_mechanic);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error(`Error obtaining user by ID: ${error}`);
            }
        });
    }
    registerUser(name, email, phone, password, is_mechanic) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO users (name, email, phone, password, is_mechanic) VALUES (?, ?, ?, ?, ?)";
            const params = [name, email, phone, password, is_mechanic];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                if (result.insertId) {
                    return new userModel_1.User(result.insertId, name, email, phone, password, is_mechanic);
                }
                else {
                    console.error("Insert operation did not return an insertId. Full result:", JSON.stringify(result));
                    return null;
                }
            }
            catch (error) {
                console.error(`Error creating user:`, error);
                throw new Error(`Error creating user: ${error}`);
            }
        });
    }
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM users WHERE email = ?";
            const params = [email];
            try {
                const [results] = yield (0, mysql_1.query)(sql, params);
                if (results.length > 0) {
                    const user = results[0];
                    return new userModel_1.User(user.id, user.name, user.email, user.phone, user.password, user.is_mechanic);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error(`Error logging in user: ${error}`);
            }
        });
    }
}
exports.MysqlUserRepository = MysqlUserRepository;
