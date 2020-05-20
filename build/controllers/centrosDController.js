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
class CentrosDController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const centro = yield database_1.default.query('SELECT * FROM CentroDistribucion');
            res.json(centro);
        });
    }
    centrodistribucionc(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const almacen = yield database_1.default.query('SELECT u.idCentroDistribucion, u.NumeroExterno, u.Nombre, u.Responsable, u.Direccion, u.Barrio, u.Telefono, u.Estado, c.NombreCentroZonal FROM centrodistribucion u,centroszonales c WHERE u.idCentrosZonales = c.idCentrosZonales');
            res.json(almacen);
        });
    }
    centrodistribucionp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const almacen = yield database_1.default.query('SELECT u.idCentroDistribucion, u.NumeroExterno, u.Nombre, u.Responsable, u.Direccion, u.Barrio, u.Telefono, u.Estado, p.NombrePE FROM centrodistribucion u,puntoentrega p WHERE u.idPuntoEntrega = p.idPuntoEntrega ');
            res.json(almacen);
        });
    }
    centrodistribucionu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const almacen = yield database_1.default.query('SELECT u.idCentroDistribucion, u.NumeroExterno, u.Nombre, u.Responsable, u.Direccion, u.Barrio, u.Telefono, u.Estado, ud.NombreUDS FROM centrodistribucion u,uds ud WHERE u.idUDS = ud.idUDS ');
            res.json(almacen);
        });
    }
    centrodxcentro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const almacen = yield database_1.default.query('SELECT cen.idCentroDistribucion , cen.Nombre FROM centrodistribucion cen , centroszonales c WHERE cen.idCentrosZonales = c.idCentrosZonales');
            res.json(almacen);
        });
    }
    centrodxpunto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const almacen = yield database_1.default.query('SELECT cen.idCentroDistribucion ,  cen.Nombre FROM centrodistribucion cen , puntoentrega p WHERE cen.idPuntoEntrega = p.idPuntoEntrega');
            res.json(almacen);
        });
    }
    centrodxuds(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const almacen = yield database_1.default.query('SELECT cen.idCentroDistribucion ,  cen.Nombre FROM centrodistribucion cen , uds u WHERE cen.idUDS = u.idUDS');
            res.json(almacen);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const centro = yield database_1.default.query('SELECT * FROM CentroDistribucion WHERE idCentroDistribucion = ?', [id]);
            console.log(centro.length);
            if (centro.length > 0) {
                return res.json(centro[0]);
            }
            res.status(404).json({ text: "The Centro Distribucion doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO CentroDistribucion set ?', [req.body]);
            res.json({ message: 'Centro Distribucion Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE CentroDistribucion set ? WHERE idCentroDistribucion = ?', [req.body, id]);
            res.json({ message: "The Centro Distribucion was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM CentroDistribucion WHERE idCentroDistribucion = ?', [id]);
            res.json({ message: "The Centro Distribucion was deleted" });
        });
    }
}
const centrosDController = new CentrosDController;
exports.default = centrosDController;
