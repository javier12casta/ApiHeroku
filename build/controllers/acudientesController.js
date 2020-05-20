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
class AcudientesController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const acudiente = yield database_1.default.query('SELECT * FROM Acudientes');
            res.json(acudiente);
        });
    }
    TablaA(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const acudiente = yield database_1.default.query('SELECT c.idAcudientes , c.Nombres , c.Apellidos , c.NumeroDocumento , c.Parentesco ,DATE_FORMAT(c.FechaNacimiento,"%d-%m-%Y") as FechaN ,DATE_FORMAT(c.FechaIngreso,"%d-%m-%Y") as FechaI FROM acudientes c');
            res.json(acudiente);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * , DATE_FORMAT(FechaNacimiento,"%Y-%m-%d")AS FechaNacimiento, DATE_FORMAT(FechaIngreso,"%Y-%m-%d")AS FechaIngreso FROM Acudientes WHERE idBeneficiarios = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The acudientes doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO Acudientes set ?', [req.body]);
            res.json({ message: 'Acudiente Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE Acudientes set ? WHERE idAcudientes = ?', [req.body, id]);
            res.json({ message: "The acudiente was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Acudientes WHERE idAcudientes = ?', [id]);
            res.json({ message: "The acudiente was deleted" });
        });
    }
}
const acudientesController = new AcudientesController;
exports.default = acudientesController;
