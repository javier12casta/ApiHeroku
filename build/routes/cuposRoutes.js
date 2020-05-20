"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuposController_1 = __importDefault(require("../controllers/cuposController"));
class CuposRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', cuposController_1.default.list);
        this.router.get('/tablac', cuposController_1.default.tablac);
        this.router.get('/tablap', cuposController_1.default.tablap);
        this.router.get('/tablau', cuposController_1.default.tablau);
        this.router.get('/:id', cuposController_1.default.getOne);
        this.router.post('/', cuposController_1.default.create);
        this.router.put('/:id', cuposController_1.default.update);
        this.router.delete('/:id', cuposController_1.default.delete);
    }
}
exports.default = new CuposRoutes().router;
