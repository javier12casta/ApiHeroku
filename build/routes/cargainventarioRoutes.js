"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cargainventario_1 = __importDefault(require("../controllers/cargainventario"));
class CargainventarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cargainventario_1.default.list);
        this.router.get('/tabla', cargainventario_1.default.tabla);
        this.router.get('/:id', cargainventario_1.default.getOne);
        this.router.post('/', cargainventario_1.default.create);
        this.router.put('/:id', cargainventario_1.default.update);
    }
}
exports.default = new CargainventarioRoutes().router;
