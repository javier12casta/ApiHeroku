"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const puntoController_1 = __importDefault(require("../controllers/puntoController"));
class PuntoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', puntoController_1.default.list);
        this.router.get('/lista', puntoController_1.default.list2);
        this.router.get('/tablap', puntoController_1.default.tablap);
        this.router.get('/:id', puntoController_1.default.getOne);
        this.router.post('/', puntoController_1.default.create);
        this.router.put('/:id', puntoController_1.default.update);
        this.router.delete('/:id', puntoController_1.default.delete);
    }
}
exports.default = new PuntoRoutes().router;
