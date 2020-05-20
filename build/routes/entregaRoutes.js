"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entregaController_1 = __importDefault(require("../controllers/entregaController"));
class EntregaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', entregaController_1.default.list);
        this.router.get('/:id', entregaController_1.default.getOne);
        this.router.post('/', entregaController_1.default.create);
        this.router.put('/:id', entregaController_1.default.update);
        this.router.delete('/:id', entregaController_1.default.delete);
    }
}
exports.default = new EntregaRoutes().router;
