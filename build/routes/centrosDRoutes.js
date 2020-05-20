"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const centrosDController_1 = __importDefault(require("../controllers/centrosDController"));
class centrosDRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', centrosDController_1.default.list);
        this.router.get('/centrodistribucionc', centrosDController_1.default.centrodistribucionc);
        this.router.get('/centrodistribucionp', centrosDController_1.default.centrodistribucionp);
        this.router.get('/centrodistribucionu', centrosDController_1.default.centrodistribucionu);
        this.router.get('/centrodistribucionxcentro', centrosDController_1.default.centrodxcentro);
        this.router.get('/centrodistribucionxpunto', centrosDController_1.default.centrodxpunto);
        this.router.get('/centrodistribucionxuds', centrosDController_1.default.centrodxuds);
        this.router.get('/:id', centrosDController_1.default.getOne);
        this.router.post('/', centrosDController_1.default.create);
        this.router.put('/:id', centrosDController_1.default.update);
        this.router.delete('/:id', centrosDController_1.default.delete);
    }
}
exports.default = new centrosDRoutes().router;
