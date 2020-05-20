"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entregabeController_1 = __importDefault(require("../controllers/entregabeController"));
class EntregabeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', entregabeController_1.default.list);
        this.router.get('/tabla', entregabeController_1.default.tabla);
        this.router.get('/tabla1', entregabeController_1.default.tabla1);
        this.router.get('/:id', entregabeController_1.default.getOne);
        this.router.post('/', entregabeController_1.default.create);
        this.router.put('/:id', entregabeController_1.default.update);
    }
}
exports.default = new EntregabeRoutes().router;
