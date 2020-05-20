"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entregacoController_1 = __importDefault(require("../controllers/entregacoController"));
class EntregacoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', entregacoController_1.default.list);
        this.router.get('/tabla', entregacoController_1.default.tabla);
        this.router.get('/:id', entregacoController_1.default.getOne);
        this.router.post('/', entregacoController_1.default.create);
        this.router.put('/:id', entregacoController_1.default.update);
    }
}
exports.default = new EntregacoRoutes().router;
