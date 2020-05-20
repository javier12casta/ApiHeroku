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
class BeneficiariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const beneficiario = yield database_1.default.query('SELECT * FROM Beneficiarios');
            res.json(beneficiario);
        });
    }
    id(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const beneficiario = yield database_1.default.query('SELECT MAX(idBeneficiarios) AS id FROM beneficiarios');
            res.json(beneficiario);
        });
    }
    beneficiariosabla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const beneficiario = yield database_1.default.query(' SELECT c.`idBeneficiarios`, c.`NumeroDocumento`,DATE_FORMAT(c.`FechaIngreso`,"%d-%m-%Y") as FechaI , DATE_FORMAT(c.`FechaNacimiento`,"%d-%m-%Y") as FechaN , c.`PrimerNombre`, c.`PrimerApellido`, c.`SegundoNombre`, c.`Direccion`, c.`Pais`, c.`Departamento`, c.`Municipio`, c.`TelefonoFijo`, c.`TelefonoFijo2`, c.`TelefonoMovil`, c.`TelefonoMovil2`, c.`Email`, c.`Estado`, c.`SegundoApellido`, c.`ServicioOmodalidad`,m.NombreGenero, t.NombreTipo, u.NombreUDS FROM beneficiarios c, genero m, tipodocumento t , uds u where c.idGenero = m.idGenero and c.idTipoDocumento = t.idTipoDocumento and c.idUDS = u.idUDS');
            res.json(beneficiario);
        });
    }
    beneficiariosablap(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const beneficiario = yield database_1.default.query(' SELECT c.`idBeneficiarios`, c.`NumeroDocumento`,DATE_FORMAT(c.`FechaIngreso`,"%d-%m-%Y") as FechaI , DATE_FORMAT(c.`FechaNacimiento`,"%d-%m-%Y") as FechaN , c.`PrimerNombre`, c.`PrimerApellido`, c.`SegundoNombre`, c.`Direccion`, c.`Pais`, c.`Departamento`, c.`Municipio`, c.`TelefonoFijo`, c.`TelefonoFijo2`, c.`TelefonoMovil`, c.`TelefonoMovil2`, c.`Email`, c.`Estado`, c.`SegundoApellido`, c.`ServicioOmodalidad`,m.NombreGenero, t.NombreTipo, u.NombrePE FROM beneficiarios c, genero m, tipodocumento t , puntoentrega u where c.idGenero = m.idGenero and c.idTipoDocumento = t.idTipoDocumento and c.idPuntoEntrega = u.idPuntoEntrega');
            res.json(beneficiario);
        });
    }
    beneficiariosablac(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const beneficiario = yield database_1.default.query('SELECT c.`idBeneficiarios`, c.`NumeroDocumento`,DATE_FORMAT(c.`FechaIngreso`,"%d-%m-%Y") as FechaI , DATE_FORMAT(c.`FechaNacimiento`,"%d-%m-%Y") as FechaN , c.`PrimerNombre`, c.`PrimerApellido`, c.`SegundoNombre`, c.`Direccion`, c.`Pais`, c.`Departamento`, c.`Municipio`, c.`TelefonoFijo`, c.`TelefonoFijo2`, c.`TelefonoMovil`, c.`TelefonoMovil2`, c.`Email`, c.`Estado`, c.`SegundoApellido`, c.`ServicioOmodalidad`,m.NombreGenero, t.NombreTipo, u.NombreCentroZonal FROM beneficiarios c, genero m, tipodocumento t , centroszonales u where c.idGenero = m.idGenero and c.idTipoDocumento = t.idTipoDocumento and c.idCentrosZonales = u.idCentrosZonales');
            res.json(beneficiario);
        });
    }
    beneficiariosreporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const beneficiario = yield database_1.default.query('SELECT c.idBeneficiarios, c.NumeroDocumento,  DATE_FORMAT(c.`FechaIngreso`,"%d-%m-%Y") as FechaI , DATE_FORMAT(c.`FechaNacimiento`,"%d-%m-%Y") as FechaN, c.PrimerNombre, c.PrimerApellido, c.SegundoNombre, c.Direccion, c.Pais, c.Departamento, c.Municipio, c.TelefonoFijo, c.TelefonoFijo2,c.TelefonoMovil, c.TelefonoMovil2, c.Email, c.Estado, g.NombreGenero, t.NombreTipo, c.SegundoApellido, c.ServicioOmodalidad FROM beneficiarios c , tipodocumento t , genero g where c.idTipoDocumento = t.idTipoDocumento and c.idGenero = g.idGenero ');
            res.json(beneficiario);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * , DATE_FORMAT(FechaNacimiento,"%Y-%m-%d")AS FechaNacimiento, DATE_FORMAT(FechaIngreso,"%Y-%m-%d")AS FechaIngreso FROM Beneficiarios WHERE idBeneficiarios = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The beneficiario doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO Beneficiarios set ?', [req.body]);
            res.json({ message: 'Beneficiario Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE Beneficiarios set ? WHERE idBeneficiarios = ?', [req.body, id]);
            res.json({ message: "The beneficiario was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Beneficiarios WHERE idBeneficiarios = ?', [id]);
            res.json({ message: "The beneficiario was deleted" });
        });
    }
}
const beneficiariosController = new BeneficiariosController;
exports.default = beneficiariosController;
