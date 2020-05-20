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
class BienestarinaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bienestarina = yield database_1.default.query('SELECT * FROM Bienestarina');
            res.json(bienestarina);
        });
    }
    Maxid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bienestarina = yield database_1.default.query('SELECT MAX(idBienestarina + 1) AS idBienestarina FROM bienestarina');
            res.json(bienestarina);
        });
    }
    tabla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bienestarina = yield database_1.default.query('SELECT b.idBienestarina,b.lote,DATE_FORMAT(b.FechaVencimiento,"%d-%m-%Y") as FechaVencimiento,b.Cantidad,b.UnidadPrincipal,DATE_FORMAT(b.FechaRecepcion,"%d-%m-%Y") as FechaRecepcion,r.TipoBienesterina,c.Nombre as centrodistribucion,i.Nombre as inventario,a.Nombre as almacenes FROM bienestarina b, referenciabienestarina r, centrodistribucion c, inventario i, almacenes a WHERE b.idTipoBienesterina = r.idTipoBienesterina AND b.idCentroDistribucion = c.idCentroDistribucion AND b.idInventario = i.idInventario AND b.idAlmacenes = a.idAlmacenes');
            res.json(bienestarina);
        });
    }
    datosinventario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bienestarina = yield database_1.default.query('SELECT DISTINCT b.idBienestarina,DATE_FORMAT(b.FechaRecepcion,"%d-%m-%Y") as FechaRecepcion, ac.numero, b.lote, DATE_FORMAT(b.FechaVencimiento,"%d-%m-%Y") as FechaVencimiento , b.Cantidad , e.cantidad , Concat(be.PrimerNombre , be.SegundoNombre , be.PrimerApellido) as nombrec , ec.lote as lote1 , b.Cantidadsuma FROM bienestarina b , entregabeneficiario e , beneficiarios be , acta ac , entregacentrodistribucion ec GROUP BY b.idBienestarina');
            res.json(bienestarina);
        });
    }
    datosinventariosalida(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bienestarina = yield database_1.default.query('SELECT idEntregaBeneficiario as idBienestarina, DATE_FORMAT(fechavencimiento,"%d-%m-%Y") as FechaVencimiento, lote, DATE_FORMAT(fechasalida,"%d-%m-%Y") as FechaRecepcion, cantidad, Cantidadsuma as lote1, Cantidadsuma FROM entregabeneficiario ');
            res.json(bienestarina);
        });
    }
    datosinventariosa(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bienestarina = yield database_1.default.query('SELECT idEntregaBeneficiario as idBienestarina, DATE_FORMAT(fechavencimiento,"%d-%m-%Y") as FechaVencimiento, lote, DATE_FORMAT(fechasalida,"%d-%m-%Y") as FechaRecepcion, cantidad, Cantidadsuma as lote1, Cantidadsuma FROM entregabeneficiario');
            res.json(bienestarina);
        });
    }
    datosinventariosacen(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bienestarina = yield database_1.default.query('SELECT identregacentrodistribucion as idBienestarina, DATE_FORMAT(fechavencimiento,"%d-%m-%Y") as FechaVencimiento, lote, DATE_FORMAT(fecharegistro,"%d-%m-%Y") as FechaRecepcion, cantidad, Cantidadsuma as lote1, Cantidadsuma FROM entregacentrodistribucion ');
            res.json(bienestarina);
        });
    }
    datosinventariosacon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bienestarina = yield database_1.default.query('SELECT idEntregaconsumointerno as idBienestarina, DATE_FORMAT(fechavencimiento,"%d-%m-%Y") as FechaVencimiento, lote, DATE_FORMAT(fecharegistro,"%d-%m-%Y") as FechaRecepcion, cantidad, Cantidadsuma as lote1, Cantidadsuma FROM entregaconsumointerno');
            res.json(bienestarina);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM Bienestarina WHERE idBienestarina = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The Bienestarina doesn't exits" });
        });
    }
    getlotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT DISTINCT (a.idBienestarina) as id, a.lote FROM bienestarina a WHERE a.idInventario = ? ', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games);
            }
            res.status(404).json({ text: "The lotes doesn't exits" });
        });
    }
    getlotescarga(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT DISTINCT (a.idcargainventario) as id, a.lote FROM cargainventario a WHERE a.idInventario = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games);
            }
            res.status(404).json({ text: "The lotes doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO Bienestarina set ?', [req.body]);
            res.json({ message: 'Bienestarina Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE Bienestarina set ? WHERE idBienestarina = ?', [req.body, id]);
            res.json({ message: "The Bienestarina was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Bienestarina WHERE idBienestarina = ?', [id]);
            res.json({ message: "The Bienestarina was deleted" });
        });
    }
}
const bienestarinaController = new BienestarinaController;
exports.default = bienestarinaController;
