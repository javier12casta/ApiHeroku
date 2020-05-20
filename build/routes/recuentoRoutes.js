"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recuentoController_1 = __importDefault(require("../controllers/recuentoController"));
class RecuentoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', recuentoController_1.default.list);
        this.router.get('/tabla', recuentoController_1.default.tabla);
        this.router.get('/:id', recuentoController_1.default.getOne);
        this.router.post('/', recuentoController_1.default.create);
        this.router.put('/:id', recuentoController_1.default.update);
    }
}
exports.default = new RecuentoRoutes().router;
