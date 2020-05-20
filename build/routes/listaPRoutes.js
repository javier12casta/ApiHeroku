"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listaPController_1 = __importDefault(require("../controllers/listaPController"));
class ListaPRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', listaPController_1.default.list);
        this.router.get('/tabla', listaPController_1.default.tabla);
        this.router.get('/tabla1', listaPController_1.default.tabla1);
        this.router.get('/:id', listaPController_1.default.getOne);
        this.router.post('/', listaPController_1.default.create);
        this.router.put('/:id', listaPController_1.default.update);
        this.router.delete('/:id', listaPController_1.default.delete);
    }
}
exports.default = new ListaPRoutes().router;
