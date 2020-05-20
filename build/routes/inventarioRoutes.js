"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventarioController_1 = __importDefault(require("../controllers/inventarioController"));
class InventarioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', inventarioController_1.default.list);
        this.router.get('/tabla', inventarioController_1.default.tabla);
        this.router.get('/:id', inventarioController_1.default.getOne);
        this.router.get('/:nombre', inventarioController_1.default.getInv);
        this.router.post('/', inventarioController_1.default.create);
        this.router.put('/:id', inventarioController_1.default.update);
        this.router.delete('/:id', inventarioController_1.default.delete);
    }
}
exports.default = new InventarioRoutes().router;
