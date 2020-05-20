"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const permisosController_1 = __importDefault(require("../controllers/permisosController"));
class PermisosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', permisosController_1.default.list);
        this.router.get('/:id', permisosController_1.default.getOne);
        this.router.post('/', permisosController_1.default.create);
        this.router.put('/:id', permisosController_1.default.update);
        this.router.delete('/:id', permisosController_1.default.delete);
    }
}
exports.default = new PermisosRoutes().router;
