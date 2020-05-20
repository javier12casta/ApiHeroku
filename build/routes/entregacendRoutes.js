"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entregacendController_1 = __importDefault(require("../controllers/entregacendController"));
class EntregacendRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', entregacendController_1.default.list);
        this.router.get('/tabla', entregacendController_1.default.tabla);
        this.router.get('/:id', entregacendController_1.default.getOne);
        this.router.post('/', entregacendController_1.default.create);
        this.router.put('/:id', entregacendController_1.default.update);
    }
}
exports.default = new EntregacendRoutes().router;
