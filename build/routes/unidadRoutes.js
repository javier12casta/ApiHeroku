"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const unidadController_1 = __importDefault(require("../controllers/unidadController"));
class UnidadRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', unidadController_1.default.list);
        this.router.get('/:id', unidadController_1.default.getOne);
        this.router.post('/', unidadController_1.default.create);
        this.router.put('/:id', unidadController_1.default.update);
        this.router.delete('/:id', unidadController_1.default.delete);
    }
}
exports.default = new UnidadRoutes().router;
