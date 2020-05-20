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
class DatosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield database_1.default.query('SELECT * FROM DatosVarios');
            res.json(datos);
        });
    }
    tablac(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield database_1.default.query('SELECT d.idDatosVarios, d.CodigoInterno, d.EstadoDatoMaestro, d.DescripcionDelRegistro, d.Valor, d.UnidadDeMedida, d.idDatosMaestros, c.NombreCentroZonal FROM datosvarios d , centroszonales c WHERE d.idCentrosZonales = c.idCentrosZonales ');
            res.json(datos);
        });
    }
    tablap(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield database_1.default.query('SELECT d.idDatosVarios, d.CodigoInterno, d.EstadoDatoMaestro, d.DescripcionDelRegistro, d.Valor, d.UnidadDeMedida, d.idDatosMaestros, p.NombrePE FROM datosvarios d , puntoentrega p WHERE d.idPuntoEntrega = p.idPuntoEntrega');
            res.json(datos);
        });
    }
    tablau(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield database_1.default.query('SELECT d.idDatosVarios, d.CodigoInterno, d.EstadoDatoMaestro, d.DescripcionDelRegistro, d.Valor, d.UnidadDeMedida, d.idDatosMaestros, u.NombreUDS FROM datosvarios d ,uds u WHERE d.idUDS = u.idUDS');
            res.json(datos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM DatosVarios WHERE idDatosVarios = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The Datos Varios doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO DatosVarios set ?', [req.body]);
            res.json({ message: 'Datos Varios Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE DatosVarios set ? WHERE idDatosVarios = ?', [req.body, id]);
            res.json({ message: "The Datos Varios was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM DatosVarios WHERE idDatosVarios = ?', [id]);
            res.json({ message: "The DatosVarios was deleted" });
        });
    }
}
const datosController = new DatosController;
exports.default = datosController;
