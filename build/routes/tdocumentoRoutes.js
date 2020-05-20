"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tdocumentoController_1 = __importDefault(require("../controllers/tdocumentoController"));
class TdocumentoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tdocumentoController_1.default.list);
        this.router.get('/:id', tdocumentoController_1.default.getOne);
        this.router.post('/', tdocumentoController_1.default.create);
        this.router.put('/:id', tdocumentoController_1.default.update);
        this.router.delete('/:id', tdocumentoController_1.default.delete);
    }
}
exports.default = new TdocumentoRoutes().router;
