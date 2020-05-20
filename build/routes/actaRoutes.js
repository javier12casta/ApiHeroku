"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actaController_1 = __importDefault(require("../controllers/actaController"));
class ActaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', actaController_1.default.list);
        this.router.get('/:id', actaController_1.default.getOne);
        this.router.post('/', actaController_1.default.create);
        this.router.put('/:id', actaController_1.default.update);
    }
}
exports.default = new ActaRoutes().router;
