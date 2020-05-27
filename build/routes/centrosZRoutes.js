"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const centrosZController_1 = __importDefault(require("../controllers/centrosZController"));
class CentrosZRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', centrosZController_1.default.list);
        this.router.get('/lista', centrosZController_1.default.list2);
        this.router.get('/tabla', centrosZController_1.default.tabla);
        this.router.get('/duplicadosz', centrosZController_1.default.DuplicadosCentroZonales);
        this.router.get('/:id', centrosZController_1.default.getOne);
        this.router.post('/', centrosZController_1.default.create);
        this.router.put('/:id', centrosZController_1.default.update);
        this.router.delete('/:id', centrosZController_1.default.delete);
    }
}
exports.default = new CentrosZRoutes().router;
