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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class RolController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const rol = yield database_1.default.query('SELECT * FROM rolpersona');
            res.json(rol);
        });
    }
    getRol(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { rol } = req.params;
            const games = yield database_1.default.query('SELECT * FROM rolpersona WHERE RolPersona = ?', [rol]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The Rol doesn't exits" });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM rolpersona WHERE idRolPersona= ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The RolPersona doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO rolpersona set ?', [req.body]);
            res.json({ message: 'RolPersona Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE rolpersona set ? WHERE idRolPersona = ?', [req.body, id]);
            res.json({ message: "The RolPersona was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM rolpersona WHERE idRolPersona = ?', [id]);
            res.json({ message: "The RolPersona was deleted" });
        });
    }
}
const rolController = new RolController;
exports.default = rolController;
