"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tbienestarinaController_1 = __importDefault(require("../controllers/tbienestarinaController"));
class TbienestarinaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', tbienestarinaController_1.default.list);
        this.router.get('/:id', tbienestarinaController_1.default.getOne);
        this.router.post('/', tbienestarinaController_1.default.create);
        this.router.put('/:id', tbienestarinaController_1.default.update);
        this.router.delete('/:id', tbienestarinaController_1.default.delete);
    }
}
exports.default = new TbienestarinaRoutes().router;
