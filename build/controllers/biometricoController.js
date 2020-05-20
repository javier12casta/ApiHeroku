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
var custom = {
    id: '',
    Nombre: '',
};
var custom2 = {
    Huella1: '',
    Huella2: '',
};
class BiometricoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const biometrico = yield database_1.default.query("SELECT Huella FROM uibiometrico");
            res.json(biometrico);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var valbio = req.body;
            custom = valbio;
            res.json(valbio);
        });
    }
    valid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(custom);
        });
    }
    create2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var valbio = req.body;
            custom2 = valbio;
            res.json(valbio);
        });
    }
    guardar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(custom2);
        });
    }
}
const biometricoController = new BiometricoController();
exports.default = biometricoController;
