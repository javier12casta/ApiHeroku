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
class CentrosZController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const centro = yield database_1.default.query('SELECT * FROM CentrosZonales');
            res.json(centro);
        });
    }
    list2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const centro = yield database_1.default.query('SELECT * FROM CentrosZonales WHERE Estado = 1');
            res.json(centro);
        });
    }
    tabla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const centro = yield database_1.default.query('SELECT c.idCentrosZonales, c.NombreCentroZonal,m.Municipio,c.CodigoExternoJcz, c.CodigoExternoCZ, c.Estado, r.Regional, c.Comuna FROM centroszonales c, municipios m, regional r where c.idMunicipios = m.idMunicipios AND c.idRegional = r.idRegional');
            res.json(centro);
        });
    }
    DuplicadosCentroZonales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const centro = yield database_1.default.query('SELECT NombreCentroZonal , CodigoExternoCZ , CodigoExternoJcz , count(*) AS cantidadD FROM centroszonales GROUP BY NombreCentroZonal HAVING COUNT(*)> 1');
            res.json(centro);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM CentrosZonales WHERE idCentrosZonales = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The Centro Zonal doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO CentrosZonales set ?', [req.body]);
            res.json({ message: 'Centro Zonal Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE CentrosZonales set ? WHERE idCentrosZonales = ?', [req.body, id]);
            res.json({ message: "The Centro Zonal was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM CentrosZonales WHERE idCentrosZonales = ?', [id]);
            res.json({ message: "The Centro Zonal was deleted" });
        });
    }
}
const centrosZController = new CentrosZController;
exports.default = centrosZController;
