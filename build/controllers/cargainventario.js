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
class CargainventarioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entrega = yield database_1.default.query('SELECT * FROM cargainventario ');
            res.json(entrega);
        });
    }
    tabla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bienestarina = yield database_1.default.query('SELECT b.idcargainventario,b.lote,DATE_FORMAT(b.FechaVencimiento,"%d-%m-%Y") as FechaVencimiento,b.Cantidad,b.UnidadPrincipal,DATE_FORMAT(b.FechaRecepcion,"%d-%m-%Y") as FechaRecepcion,r.TipoBienesterina,c.Nombre as centrodistribucion,i.Nombre as inventario,a.Nombre as almacenes FROM cargainventario b, referenciabienestarina r, centrodistribucion c, inventario i, almacenes a WHERE b.idTipoBienesterina = r.idTipoBienesterina AND b.idCentroDistribucion = c.idCentroDistribucion AND b.idInventario = i.idInventario AND b.idAlmacenes = a.idAlmacenes ');
            res.json(bienestarina);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM cargainventario WHERE idcargainventario = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The cargainvemtario doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO cargainventario set ?', [req.body]);
            res.json({ message: 'cargainventario Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE cargainventario set ? WHERE idcargainventario = ?', [req.body, id]);
            res.json({ message: "The cargainventario was Updated" });
        });
    }
}
const cargainventarioController = new CargainventarioController;
exports.default = cargainventarioController;
