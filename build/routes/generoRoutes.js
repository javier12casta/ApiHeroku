"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const generoController_1 = __importDefault(require("../controllers/generoController"));
class GeneroRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', generoController_1.default.list);
        this.router.get('/:id', generoController_1.default.getOne);
        this.router.post('/', generoController_1.default.create);
        this.router.put('/:id', generoController_1.default.update);
        this.router.delete('/:id', generoController_1.default.delete);
    }
}
exports.default = new GeneroRoutes().router;
