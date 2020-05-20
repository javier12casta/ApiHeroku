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
class PuntoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const punto = yield database_1.default.query('SELECT * FROM PuntoEntrega');
            res.json(punto);
        });
    }
    list2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const punto = yield database_1.default.query('SELECT * FROM PuntoEntrega WHERE Estado = 1');
            res.json(punto);
        });
    }
    tablap(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const punto = yield database_1.default.query('SELECT p.`idPuntoEntrega`, p.`NombrePE`, p.`CodigoInternoPE`, p.`Direccion`, p.`Responsable`, p.`Estado`, p.`Telefono`, p.`CodigoExternoPE`, c.NombreCentroZonal, p.`BarrioPE`, p.`Comuna` FROM puntoentrega p , centroszonales c WHERE p.idCentrosZonales = c.idCentrosZonales');
            res.json(punto);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM PuntoEntrega WHERE idPuntoEntrega = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The PuntoEntrega doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO PuntoEntrega set ?', [req.body]);
            res.json({ message: 'PuntoEntrega Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE PuntoEntrega set ? WHERE idPuntoEntrega = ?', [req.body, id]);
            res.json({ message: "The PuntoEntrega was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM PuntoEntrega WHERE idPuntoEntrega= ?', [id]);
            res.json({ message: "The PuntoEntrega was deleted" });
        });
    }
}
const puntoController = new PuntoController;
exports.default = puntoController;
