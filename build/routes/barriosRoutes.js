"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const barriosController_1 = __importDefault(require("../controllers/barriosController"));
class BarriosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', barriosController_1.default.list);
        this.router.get('/:id', barriosController_1.default.getOne);
        this.router.post('/', barriosController_1.default.create);
        this.router.put('/:id', barriosController_1.default.update);
        this.router.delete('/:id', barriosController_1.default.delete);
    }
}
exports.default = new BarriosRoutes().router;
