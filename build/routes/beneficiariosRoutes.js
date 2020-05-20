"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const beneficiariosController_1 = __importDefault(require("../controllers/beneficiariosController"));
class BeneficiariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', beneficiariosController_1.default.list);
        this.router.get('/id', beneficiariosController_1.default.id);
        this.router.get('/beneficiariosc', beneficiariosController_1.default.beneficiariosablac);
        this.router.get('/beneficiariosp', beneficiariosController_1.default.beneficiariosablap);
        this.router.get('/beneficiariosu', beneficiariosController_1.default.beneficiariosabla);
        this.router.get('/beneficiariosr', beneficiariosController_1.default.beneficiariosreporte);
        this.router.get('/:id', beneficiariosController_1.default.getOne);
        this.router.post('/', beneficiariosController_1.default.create);
        this.router.put('/:id', beneficiariosController_1.default.update);
        this.router.delete('/:id', beneficiariosController_1.default.delete);
    }
}
exports.default = new BeneficiariosRoutes().router;
