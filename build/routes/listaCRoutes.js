"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listaCController_1 = __importDefault(require("../controllers/listaCController"));
class ListaCRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', listaCController_1.default.list);
        this.router.get('/tablac', listaCController_1.default.tablac);
        this.router.get('/tablap', listaCController_1.default.tablap);
        this.router.get('/tablau', listaCController_1.default.tablau);
        this.router.get('/:id', listaCController_1.default.getOne);
        this.router.post('/', listaCController_1.default.create);
        this.router.put('/:id', listaCController_1.default.update);
        this.router.delete('/:id', listaCController_1.default.delete);
    }
}
exports.default = new ListaCRoutes().router;
