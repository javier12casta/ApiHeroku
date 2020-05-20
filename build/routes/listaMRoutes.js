"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listaMController_1 = __importDefault(require("../controllers/listaMController"));
class ListaMRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', listaMController_1.default.list);
        this.router.get('/:id', listaMController_1.default.getOne);
        this.router.post('/', listaMController_1.default.create);
        this.router.put('/:id', listaMController_1.default.update);
        this.router.delete('/:id', listaMController_1.default.delete);
    }
}
exports.default = new ListaMRoutes().router;
