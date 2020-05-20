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
class EntregacoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entrega = yield database_1.default.query('SELECT * FROM entregaconsumointerno');
            res.json(entrega);
        });
    }
    tabla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entrega = yield database_1.default.query('SELECT e.idEntregaconsumointerno, e.lote,DATE_FORMAT(e.fechavencimiento,"%d-%m-%Y") as fechavencimiento, e.cantidad, e.unidad, DATE_FORMAT(e.fecharegistro,"%d-%m-%Y") as fecharegistro, r.TipoBienesterina, c.Nombre as centrodistribucion, a.Nombre as almacenes FROM entregaconsumointerno e, referenciabienestarina r, centrodistribucion c, almacenes a WHERE e.idTipoBienesterina = r.idTipoBienesterina AND e.idCentroDistribucion = c.idCentroDistribucion AND e.idAlmacenes = a.idAlmacenes');
            res.json(entrega);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM entregaconsumointerno WHERE idEntregaconsumointerno = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The entrega consumo interno doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO entregaconsumointerno set ?', [req.body]);
            res.json({ message: 'Entrega entrega consumo interno Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE entregaconsumointerno set ? WHERE idEntregaconsumointerno = ?', [req.body, id]);
            res.json({ message: "The entrega consumo interno was Updated" });
        });
    }
}
const entregacoController = new EntregacoController;
exports.default = entregacoController;
