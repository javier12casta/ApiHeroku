"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const udsController_1 = __importDefault(require("../controllers/udsController"));
class UdsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', udsController_1.default.list);
        this.router.get('/tablau', udsController_1.default.tablau);
        this.router.get('/:id', udsController_1.default.getOne);
        this.router.post('/', udsController_1.default.create);
        this.router.put('/:id', udsController_1.default.update);
        this.router.delete('/:id', udsController_1.default.delete);
    }
}
exports.default = new UdsRoutes().router;
