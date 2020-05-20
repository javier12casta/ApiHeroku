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
class EntregabeController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entrega = yield database_1.default.query('SELECT * FROM entregabeneficiario');
            res.json(entrega);
        });
    }
    tabla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entrega = yield database_1.default.query('SELECT e.idEntregaBeneficiario, e.lote, DATE_FORMAT(e.fechavencimiento,"%d-%m-%Y") as fechavencimiento, e.cantidad,e.unidad,a.Nombres as NombrePadre, CONCAT(b.PrimerNombre,"",b.SegundoNombre," ",b.PrimerApellido," ", b.SegundoApellido) as Nombrecompleto, c.Nombre as centrodistribucion,al.Nombre as almacenes,r.TipoBienesterina FROM entregabeneficiario e, almacenes al, acudientes a, beneficiarios b, centrodistribucion c, referenciabienestarina r WHERE e.idAcudientes = a.idAcudientes AND e.idBeneficiarios = b.idBeneficiarios AND e.idCentroDistribucion = c.idCentroDistribucion AND e.idAlmacenes = al.idAlmacenes AND e.idTipoBienesterina = r.idTipoBienesterina');
            res.json(entrega);
        });
    }
    tabla1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const entrega = yield database_1.default.query('SELECT e.idEntregaBeneficiario, e.lote,e.unidad,a.Nombres as NombrePadre,a.Parentesco , b.PrimerNombre,b.SegundoNombre,b.PrimerApellido, b.SegundoApellido ,r.TipoBienesterina, t.NombreTipo, b.NumeroDocumento FROM entregabeneficiario e, almacenes al, acudientes a, beneficiarios b, centrodistribucion c, referenciabienestarina r, tipodocumento t WHERE e.idAcudientes = a.idAcudientes AND e.idBeneficiarios = b.idBeneficiarios AND e.idCentroDistribucion = c.idCentroDistribucion AND e.idAlmacenes = al.idAlmacenes AND e.idTipoBienesterina = r.idTipoBienesterina AND e.idTipoDocumento = t.idTipoDocumento ');
            res.json(entrega);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM entregabeneficiario WHERE idEntregaBeneficiario = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The entrega beneficiario doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO entregabeneficiario set ?', [req.body]);
            res.json({ message: 'Entrega beneficiario Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE entregabeneficiario set ? WHERE idEntregaBeneficiario = ?', [req.body, id]);
            res.json({ message: "The entrega beneficiario was Updated" });
        });
    }
}
const entregabeController = new EntregabeController;
exports.default = entregabeController;
