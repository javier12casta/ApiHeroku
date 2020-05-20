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
class EntregacendController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entrega = yield database_1.default.query('SELECT * FROM entregacentrodistribucion');
            res.json(entrega);
        });
    }
    tabla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entrega = yield database_1.default.query('SELECT e.identregacentrodistribucion,e.lote,DATE_FORMAT(e.fechavencimiento,"%d-%m-%Y") as fechavencimiento , e.cantidad,e.unidad,DATE_FORMAT(e.fecharegistro,"%d-%m-%Y") as fecharegistro , c.Nombre AS centroorigen , ce.Nombre AS centrodestino , a.Nombre As almacenorigen  , al.Nombre as almacendestino , r.TipoBienesterina FROM entregacentrodistribucion e , centrodistribucion c , centrodistribucion ce , almacenes a , almacenes al , referenciabienestarina r where  e.idCentroDistribucionDestino = ce.idCentroDistribucion and e.idCentroDistribucionOrigen = c.idCentroDistribucion and e.idAlmacen = a.idAlmacenes and e.idAlmacenesDestino = al.idAlmacenes');
            res.json(entrega);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM entregacentrodistribucion WHERE identregacentrodistribucion = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The entrega centro distribucion doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO entregacentrodistribucion set ?', [req.body]);
            res.json({ message: 'Entrega centro distribucion Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE entregacentrodistribucion set ? WHERE identregacentrodistribucion = ?', [req.body, id]);
            res.json({ message: "The entrega centro distribucion was Updated" });
        });
    }
}
const entregacendController = new EntregacendController;
exports.default = entregacendController;
