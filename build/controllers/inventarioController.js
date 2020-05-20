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
class InventarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inventario = yield database_1.default.query('SELECT * FROM Inventario');
            res.json(inventario);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM Inventario WHERE idInventario = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The Inventario doesn't exits" });
        });
    }
    getInv(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            const games = yield database_1.default.query('SELECT * FROM Inventario WHERE 	Nombre = ?', [nombre]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The Inventario doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO Inventario set ?', [req.body]);
            res.json({ message: 'Inventario Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE Inventario set ? WHERE idInventario= ?', [req.body, id]);
            res.json({ message: "The Inventario was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Inventario WHERE idInventario = ?', [id]);
            res.json({ message: "The Inventario was deleted" });
        });
    }
    tabla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const inv = yield database_1.default.query('SELECT  Cantidad, Cantidad2 FROM inventario');
            res.json(inv);
        });
    }
}
const inventarioController = new InventarioController;
exports.default = inventarioController;
