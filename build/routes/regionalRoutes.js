"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regionalController_1 = __importDefault(require("../controllers/regionalController"));
class RegionalRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', regionalController_1.default.list);
        this.router.get('/:id', regionalController_1.default.getOne);
        this.router.post('/', regionalController_1.default.create);
        this.router.put('/:id', regionalController_1.default.update);
        this.router.delete('/:id', regionalController_1.default.delete);
    }
}
exports.default = new RegionalRoutes().router;
