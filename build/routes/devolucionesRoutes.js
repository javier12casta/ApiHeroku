"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const devolucionesController_1 = __importDefault(require("../controllers/devolucionesController"));
class DevolucionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', devolucionesController_1.default.list);
        this.router.get('/tabla', devolucionesController_1.default.devoluciontabla);
        this.router.get('/:id', devolucionesController_1.default.getOne);
        this.router.post('/', devolucionesController_1.default.create);
        this.router.put('/:id', devolucionesController_1.default.update);
    }
}
exports.default = new DevolucionesRoutes().router;
