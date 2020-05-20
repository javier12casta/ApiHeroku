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
class UsuariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Usuarios = yield database_1.default.query('SELECT * FROM Usuarios');
            res.json(Usuarios);
        });
    }
    tablausuariosc(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Usuarios = yield database_1.default.query('SELECT u.idUsuarios, u.Nombres, u.Apellidos, u.Estado, u.NumeroDocumento, DATE_FORMAT(u.FechaIngreso,"%d-%m-%Y") AS FechaIngreso, u.NombreUsuarioSistema, u.Direccion, u.TelefonoFijo, u.TelefonoFijo2, u.TelefonoMovil, u.TelefonoMovil2, u.Email, t.NombreTipo, r.RolPersona, c.NombreCentroZonal FROM usuarios u, tipodocumento t , centroszonales c , rolpersona r WHERE  u.idTipoDocumento = t.idTipoDocumento  and u.TipoUsuario = r.idRolPersona and u.idCentrosZonales = c.idCentrosZonales;');
            res.json(Usuarios);
        });
    }
    tablausuariosp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Usuarios = yield database_1.default.query('SELECT u.idUsuarios, u.Nombres, u.Apellidos, u.Estado, u.NumeroDocumento, DATE_FORMAT(u.FechaIngreso,"%d-%m-%Y") AS FechaIngreso, u.NombreUsuarioSistema, u.Direccion, u.TelefonoFijo, u.TelefonoFijo2, u.TelefonoMovil, u.TelefonoMovil2, u.Email, t.NombreTipo, r.RolPersona, p.NombrePE FROM usuarios u, tipodocumento t, rolpersona r, puntoentrega p WHERE  u.idTipoDocumento = t.idTipoDocumento  and u.TipoUsuario = r.idRolPersona and u.idPuntoEntrega = p.idPuntoEntrega;');
            res.json(Usuarios);
        });
    }
    tablausuariosu(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Usuarios = yield database_1.default.query('SELECT u.idUsuarios, u.Nombres, u.Apellidos, u.Estado, u.NumeroDocumento,DATE_FORMAT(u.FechaIngreso,"%d-%m-%Y") AS FechaIngreso, u.NombreUsuarioSistema, u.Direccion, u.TelefonoFijo, u.TelefonoFijo2, u.TelefonoMovil, u.TelefonoMovil2, u.Email, t.NombreTipo, r.RolPersona, ud.NombreUDS FROM usuarios u, tipodocumento t, rolpersona r, uds ud WHERE  u.idTipoDocumento = t.idTipoDocumento  and u.TipoUsuario = r.idRolPersona and u.idUDS = ud.idUDS;');
            res.json(Usuarios);
        });
    }
    tablausuariosr(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Usuarios = yield database_1.default.query('SELECT c.idUsuarios, c.Nombres, c.Apellidos, c.Estado, c.NumeroDocumento, DATE_FORMAT(c.FechaIngreso,"%Y-%m-%d")AS FechaIngreso, c.NombreUsuarioSistema, c.Direccion, c.TelefonoFijo, c.TelefonoFijo2, c.TelefonoMovil, c.TelefonoMovil2, c.Email, t.NombreTipo, r.RolPersona FROM usuarios c , tipodocumento t , rolpersona r WHERE c.idTipoDocumento = t.idTipoDocumento and c.TipoUsuario = r.idRolPersona ');
            res.json(Usuarios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT *, DATE_FORMAT(FechaIngreso,"%Y-%m-%d")AS FechaIngreso FROM Usuarios WHERE idUsuarios = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The Usuario doesn't exits" });
        });
    }
    getuser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = req.params;
            const games = yield database_1.default.query('SELECT * FROM `usuarios` WHERE NombreUsuarioSistema = ?', [user]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The Usuario doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO Usuarios set ?', [req.body]);
            res.json({ message: 'Usuario Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE Usuarios set ? WHERE idUsuarios = ?', [req.body, id]);
            res.json({ message: "The Usuario was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM Usuarios WHERE idUsuarios = ?', [id]);
            res.json({ message: "The Usuarios was deleted" });
        });
    }
}
const usuariosController = new UsuariosController;
exports.default = usuariosController;
