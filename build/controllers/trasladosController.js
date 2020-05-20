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
class TrasladosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entrega = yield database_1.default.query('SELECT * FROM traslados');
            res.json(entrega);
        });
    }
    tabla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entrega = yield database_1.default.query('SELECT t.idTraslados, t.lote, DATE_FORMAT(t.fechavencimiento,"%d-%m-%Y") as fechavencimiento, t.unidad, DATE_FORMAT(t.fecharegistro,"%d-%m-%Y") as fecharegistro, r.TipoBienesterina, c.Nombre as centroorigen, a.Nombre as almancenorigen, b.Nombre AS almacendestino, t.cantidad FROM traslados t, referenciabienestarina r, centrodistribucion c, almacenes a, almacenes b WHERE t.idTipoBienesterina = r.idTipoBienesterina AND t.idCentroDistribucion = c.idCentroDistribucion AND t.idAlmacenesOrigen = a.idAlmacenes AND t.idAlmacenesDestino = b.idAlmacenes');
            res.json(entrega);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM traslados WHERE idTraslados = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The traslados doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO traslados set ?', [req.body]);
            res.json({ message: 'traslados Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE traslados set ? WHERE idTraslados = ?', [req.body, id]);
            res.json({ message: "The traslados was Updated" });
        });
    }
}
const trasladosController = new TrasladosController;
exports.default = trasladosController;
