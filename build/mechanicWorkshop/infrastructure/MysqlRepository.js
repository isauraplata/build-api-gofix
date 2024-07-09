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
exports.MysqlMechanicWorkshopRepository = void 0;
const mysql_1 = require("../../database/mysql");
const mechanicWorkshopModel_1 = require("../domain/models/mechanicWorkshopModel");
class MysqlMechanicWorkshopRepository {
    createMechanicWorkshop(name, address, postalCode, openingHours, closingHours, description, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "INSERT INTO mechanic_workshop (name, address, postal_code, opening_hours, closing_hours, description, id_user) VALUES (?, ?, ?, ?, ?, ?, ?)";
            // Convert dates to TIME format
            const openingHoursTime = openingHours.toISOString().split('T')[1].slice(0, 8); // Extract only time (YYYY-MM-DDTHH:mm:ss)
            const closingHoursTime = closingHours.toISOString().split('T')[1].slice(0, 8);
            // const params: any[] = [name, address, postalCode, openingHoursTime, closingHoursTime, description, idUser];
            const params = [name, address, postalCode, openingHoursTime, closingHoursTime, description, idUser];
            try {
                const result = yield (0, mysql_1.query)(sql, params);
                if (Array.isArray(result) && result.length > 0) {
                    return new mechanicWorkshopModel_1.MechanicWorkshop(result[0].insertId, name, address, postalCode, openingHours, closingHours, description, idUser);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.error(`Error creating mechanic workshop: ${error}`);
                return null;
            }
        });
    }
    updateMechanicWorkshop(id, name, address, postalCode, openingHours, closingHours, description, idUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = `
      UPDATE mechanic_workshop
      SET
        name = COALESCE(?, name),
        address = COALESCE(?, address),
        postal_code = COALESCE(?, postal_code),
        opening_hours = COALESCE(?, opening_hours),
        closing_hours = COALESCE(?, closing_hours),
        description = COALESCE(?, description),
        id_user = COALESCE(?, id_user)
      WHERE id = ?
    `;
            const params = [
                name,
                address,
                postalCode,
                openingHours ? openingHours.toISOString().split('T')[1].split('Z')[0] : null,
                closingHours ? closingHours.toISOString().split('T')[1].split('Z')[0] : null,
                description,
                idUser,
                id
            ];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return result.affectedRows > 0 ? id : null;
            }
            catch (error) {
                throw new Error(`Error updating mechanic workshop: ${error}`);
            }
        });
    }
    deleteMechanicWorkshop(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "DELETE FROM mechanic_workshop WHERE id = ?";
            const params = [id];
            try {
                const [result] = yield (0, mysql_1.query)(sql, params);
                return result.affectedRows > 0 ? id : null;
            }
            catch (error) {
                throw new Error(`Error deleting mechanic workshop: ${error}`);
            }
        });
    }
    getMechanicWorkshop(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM mechanic_workshop WHERE id = ?";
            const params = [id];
            try {
                const [results] = yield (0, mysql_1.query)(sql, params);
                if (results.length > 0) {
                    const workshop = results[0];
                    return new mechanicWorkshopModel_1.MechanicWorkshop(workshop.id, workshop.name, workshop.address, workshop.postal_code, new Date(workshop.opening_hours), new Date(workshop.closing_hours), workshop.description, workshop.id_user);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error(`Error obtaining mechanic workshop: ${error}`);
            }
        });
    }
    getAllMechanicWorkshops() {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = "SELECT * FROM mechanic_workshop";
            try {
                const [results] = yield (0, mysql_1.query)(sql, []);
                if (results.length > 0) {
                    return results.map((workshop) => new mechanicWorkshopModel_1.MechanicWorkshop(workshop.id, workshop.name, workshop.address, workshop.postal_code, new Date(workshop.opening_hours), new Date(workshop.closing_hours), workshop.description, workshop.id_user));
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error(`Error obtaining all mechanic workshops: ${error}`);
            }
        });
    }
}
exports.MysqlMechanicWorkshopRepository = MysqlMechanicWorkshopRepository;
