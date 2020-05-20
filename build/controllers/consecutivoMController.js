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
class ConsecutivoMController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('SELECT * FROM ConsecutivosMaestro');
            res.json(consecutivo);
        });
    }
    actualizartabla1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idCentrosZonales)from centroszonales ),Hasta=(SELECT MAX(idCentrosZonales) from centroszonales) WHERE idConsecutivosMaestro = 1;');
            res.json(consecutivo);
        });
    }
    actualizartabla2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idPuntoEntrega)from puntoentrega ),Hasta=(SELECT MAX(idPuntoEntrega) from puntoentrega) WHERE idConsecutivosMaestro = 2;');
            res.json(consecutivo);
        });
    }
    actualizartabla3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idUDS)from uds ),Hasta=(SELECT MAX(idUDS) from uds) WHERE idConsecutivosMaestro = 3;');
            res.json(consecutivo);
        });
    }
    actualizartabla4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(identregacentrodistribucion)from entregacentrodistribucion),Hasta=(SELECT MAX(identregacentrodistribucion) from entregacentrodistribucion) WHERE idConsecutivosMaestro = 4;');
            res.json(consecutivo);
        });
    }
    actualizartabla5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idEntregaBeneficiario)from entregabeneficiario ),Hasta=(SELECT MAX(idEntregaBeneficiario) from entregabeneficiario) WHERE idConsecutivosMaestro = 5;');
            res.json(consecutivo);
        });
    }
    actualizartabla6(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idEntregaconsumointerno)from entregaconsumointerno ),Hasta=(SELECT MAX(idEntregaconsumointerno) from entregaconsumointerno) WHERE idConsecutivosMaestro = 6;');
            res.json(consecutivo);
        });
    }
    actualizartabla7(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(iddevoluciones)from devoluciones ),Hasta=(SELECT MAX(iddevoluciones) from devoluciones) WHERE idConsecutivosMaestro = 7;');
            res.json(consecutivo);
        });
    }
    actualizartabla8(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idBienestarina)from bienestarina ),Hasta=(SELECT MAX(idBienestarina) from bienestarina) WHERE idConsecutivosMaestro = 8;');
            res.json(consecutivo);
        });
    }
    actualizartabla9(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idBeneficiarios)from beneficiarios ),Hasta=(SELECT MAX(idBeneficiarios) from beneficiarios) WHERE idConsecutivosMaestro = 9;');
            res.json(consecutivo);
        });
    }
    actualizartabla10(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idRolPersona)from rolpersona ),Hasta=(SELECT MAX(idRolPersona) from rolpersona) WHERE idConsecutivosMaestro = 10;');
            res.json(consecutivo);
        });
    }
    actualizartabla11(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idUsuarios)from usuarios ),Hasta=(SELECT MAX(idUsuarios) from usuarios) WHERE idConsecutivosMaestro = 11;');
            res.json(consecutivo);
        });
    }
    actualizartabla12(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idListasMaestro)from serviciomodalidad ),Hasta=(SELECT MAX(idListasMaestro) from serviciomodalidad) WHERE idConsecutivosMaestro = 12;');
            res.json(consecutivo);
        });
    }
    actualizartabla13(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idTipoBienesterina)from referenciabienestarina ),Hasta=(SELECT MAX(idTipoBienesterina) from referenciabienestarina) WHERE idConsecutivosMaestro = 13;');
            res.json(consecutivo);
        });
    }
    actualizartabla14(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idListaPrecios)from listaprecios ),Hasta=(SELECT MAX(idListaPrecios) from listaprecios) WHERE idConsecutivosMaestro = 14;');
            res.json(consecutivo);
        });
    }
    actualizartabla15(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idListadoCursos)from listadocursos ),Hasta=(SELECT MAX(idListadoCursos) from listadocursos) WHERE idConsecutivosMaestro = 15;');
            res.json(consecutivo);
        });
    }
    actualizartabla16(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idDatosVarios)from datosvarios ),Hasta=(SELECT MAX(idDatosVarios) from datosvarios) WHERE idConsecutivosMaestro = 16;');
            res.json(consecutivo);
        });
    }
    actualizartabla17(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idCentroDistribucion)from centrodistribucion ),Hasta=(SELECT MAX(idCentroDistribucion) from centrodistribucion) WHERE idConsecutivosMaestro = 17;');
            res.json(consecutivo);
        });
    }
    actualizartabla18(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idAlmacenes)from almacenes ),Hasta=(SELECT MAX(idAlmacenes) from almacenes) WHERE idConsecutivosMaestro = 18;');
            res.json(consecutivo);
        });
    }
    actualizartabla19(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const consecutivo = yield database_1.default.query('UPDATE consecutivosmaestro SET Desde= (SELECT MIN(idnumerocupos)from numerocupos ),Hasta=(SELECT MAX(idnumerocupos) from numerocupos) WHERE idConsecutivosMaestro = 19;');
            res.json(consecutivo);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM ConsecutivosMaestro WHERE idConsecutivosMaestro = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The Consecutivo Maestro doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO ConsecutivosMaestro set ?', [req.body]);
            res.json({ message: 'Consecutivo Maestro Interno Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE ConsecutivosMaestro set ? WHERE idConsecutivosMaestro = ?', [req.body, id]);
            res.json({ message: "The Consecutivo Maestro was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ConsecutivosMaestro WHERE idConsecutivosMaestro= ?', [id]);
            res.json({ message: "The Consecutivo Maestro was deleted" });
        });
    }
}
const consecutivoMController = new ConsecutivoMController;
exports.default = consecutivoMController;
