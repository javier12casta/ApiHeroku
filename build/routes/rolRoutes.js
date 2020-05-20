"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolController_1 = __importDefault(require("../controllers/rolController"));
class RolRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', rolController_1.default.list);
        this.router.get('/rolnom/:rol', rolController_1.default.getRol);
        this.router.get('/:id', rolController_1.default.getOne);
        this.router.post('/', rolController_1.default.create);
        this.router.put('/:id', rolController_1.default.update);
        this.router.delete('/:id', rolController_1.default.delete);
    }
}
exports.default = new RolRoutes().router;
