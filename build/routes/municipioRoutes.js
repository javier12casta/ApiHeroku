"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const municipioController_1 = __importDefault(require("../controllers/municipioController"));
class MunicipioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', municipioController_1.default.list);
        this.router.get('/:id', municipioController_1.default.getOne);
        this.router.post('/', municipioController_1.default.create);
        this.router.put('/:id', municipioController_1.default.update);
        this.router.delete('/:id', municipioController_1.default.delete);
    }
}
exports.default = new MunicipioRoutes().router;
