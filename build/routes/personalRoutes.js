"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personalController_1 = __importDefault(require("../controllers/personalController"));
class PersonalRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', personalController_1.default.list);
        this.router.get('/:id', personalController_1.default.getOne);
        this.router.post('/', personalController_1.default.create);
        this.router.put('/:id', personalController_1.default.update);
        this.router.delete('/:id', personalController_1.default.delete);
    }
}
exports.default = new PersonalRoutes().router;
