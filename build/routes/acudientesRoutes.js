"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const acudientesController_1 = __importDefault(require("../controllers/acudientesController"));
class AcudientesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', acudientesController_1.default.list);
        this.router.get('/tablaA', acudientesController_1.default.TablaA);
        this.router.get('/:id', acudientesController_1.default.getOne);
        this.router.post('/', acudientesController_1.default.create);
        this.router.put('/:id', acudientesController_1.default.update);
        this.router.delete('/:id', acudientesController_1.default.delete);
    }
}
exports.default = new AcudientesRoutes().router;
