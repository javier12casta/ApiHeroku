"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comunasController_1 = __importDefault(require("../controllers/comunasController"));
class ComunasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', comunasController_1.default.list);
        this.router.get('/:id', comunasController_1.default.getOne);
        this.router.post('/', comunasController_1.default.create);
        this.router.put('/:id', comunasController_1.default.update);
        this.router.delete('/:id', comunasController_1.default.delete);
    }
}
exports.default = new ComunasRoutes().router;
