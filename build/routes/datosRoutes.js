"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const datosController_1 = __importDefault(require("../controllers/datosController"));
class DatosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', datosController_1.default.list);
        this.router.get('/tablac', datosController_1.default.tablac);
        this.router.get('/tablap', datosController_1.default.tablap);
        this.router.get('/tablau', datosController_1.default.tablau);
        this.router.get('/:id', datosController_1.default.getOne);
        this.router.post('/', datosController_1.default.create);
        this.router.put('/:id', datosController_1.default.update);
        this.router.delete('/:id', datosController_1.default.delete);
    }
}
exports.default = new DatosRoutes().router;
