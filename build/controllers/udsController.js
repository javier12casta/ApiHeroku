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
class UdsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const UDS = yield database_1.default.query('SELECT * FROM UDS');
            res.json(UDS);
        });
    }
    tablau(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const UDS = yield database_1.default.query('SELECT u.`idUDS`, u.`NombreUDS`, u.`CodigoInternoUDS`, u.`Direccion`, u.`ReponsableUDS`, u.`Estado`, u.`Telefono`, u.`CodigoExternoUDS`, p.NombrePE, c.NombreCentroZonal, c.`Comuna`, c.`Barrio` FROM uds u , puntoentrega p , centroszonales c WHERE u.idPuntoEntrega = p.idPuntoEntrega and u.idCentrosZonales = c.idCentrosZonales');
            res.json(UDS);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM UDS WHERE idUDS = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The UDS doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO UDS set ?', [req.body]);
            res.json({ message: 'UDS Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE UDS set ? WHERE idUDS= ?', [req.body, id]);
            res.json({ message: "The UDS was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM UDS WHERE idUDS = ?', [id]);
            res.json({ message: "The UDS was deleted" });
        });
    }
}
const udsController = new UdsController;
exports.default = udsController;
