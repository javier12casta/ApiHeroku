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
class ListaPController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lista = yield database_1.default.query('SELECT * FROM ListaPrecios');
            res.json(lista);
        });
    }
    tabla(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lista = yield database_1.default.query('select l.Mes , l.ValorCop , l.Referencia from listaprecios l  where l.Referencia like "g%"');
            res.json(lista);
        });
    }
    tabla1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const lista = yield database_1.default.query('select l.Mes , l.ValorCop , l.Referencia from listaprecios l  where l.Referencia like "l%"');
            res.json(lista);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM ListaPrecios WHERE idListaPrecios = ?', [id]);
            console.log(games.length);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ text: "The Lista Precios doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO ListaPrecios set ?', [req.body]);
            res.json({ message: 'Lista PreciosSaved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldGame = req.body;
            yield database_1.default.query('UPDATE ListaPrecios set ? WHERE idListaPrecios = ?', [req.body, id]);
            res.json({ message: "The Lista Precios was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM ListaPrecios WHERE idListaPrecios = ?', [id]);
            res.json({ message: "The Lista Precios was deleted" });
        });
    }
}
const listaPController = new ListaPController;
exports.default = listaPController;
