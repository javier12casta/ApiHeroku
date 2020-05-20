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
class DevolucionesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield database_1.default.query('SELECT * FROM devoluciones');
            res.json(datos);
        });
    }
    devoluciontabla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const datos = yield database_1.default.query('SELECT d.iddevoluciones, d.lote, d.fechavencimiento, d.unidad, d.fecharegistro, r.Referencia, c.Nombre AS centrodistribucionorigen, c.Nombre AS centrodistribuciondestino, a.Nombre AS Nombrealmacen, b.Nombre As idAlmacenesDestino, d.cantidad, d.motivo FROM devoluciones d , referenciabienestarina r , centrodistribucion c , almacenes a, almacenes b , centrodistribucion ce WHERE d.idTipoBienesterina = r.idTipoBienesterina and  d.idCentroDistribucionOrigen = c.idCentroDistribucion and d.idCentroDistribucionDestino = ce.idCentroDistribucion and d.idAlmacenes = a.idAlmacenes and d.idAlmacenesDestino = b.idAlmacenes');
            res.json(datos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM devoluciones WHERE iddevoluciones = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The devoluciones doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO devoluciones set ?', [req.body]);
            res.json({ message: 'Devoluciones Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE devoluciones set ? WHERE iddevoluciones = ?', [req.body, id]);
            res.json({ message: "The devoluciones was Updated" });
        });
    }
}
const devolucionesController = new DevolucionesController;
exports.default = devolucionesController;
