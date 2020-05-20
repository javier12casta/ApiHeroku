"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consecutivoMController_1 = __importDefault(require("../controllers/consecutivoMController"));
class ConsecutivoMRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', consecutivoMController_1.default.list);
        this.router.get('/tabla1', consecutivoMController_1.default.actualizartabla1);
        this.router.get('/tabla2', consecutivoMController_1.default.actualizartabla2);
        this.router.get('/tabla3', consecutivoMController_1.default.actualizartabla3);
        this.router.get('/tabla4', consecutivoMController_1.default.actualizartabla4);
        this.router.get('/tabla5', consecutivoMController_1.default.actualizartabla5);
        this.router.get('/tabla6', consecutivoMController_1.default.actualizartabla6);
        this.router.get('/tabla7', consecutivoMController_1.default.actualizartabla7);
        this.router.get('/tabla8', consecutivoMController_1.default.actualizartabla8);
        this.router.get('/tabla9', consecutivoMController_1.default.actualizartabla9);
        this.router.get('/tabla10', consecutivoMController_1.default.actualizartabla10);
        this.router.get('/tabla11', consecutivoMController_1.default.actualizartabla11);
        this.router.get('/tabla12', consecutivoMController_1.default.actualizartabla12);
        this.router.get('/tabla13', consecutivoMController_1.default.actualizartabla13);
        this.router.get('/tabla14', consecutivoMController_1.default.actualizartabla14);
        this.router.get('/tabla15', consecutivoMController_1.default.actualizartabla15);
        this.router.get('/tabla16', consecutivoMController_1.default.actualizartabla16);
        this.router.get('/tabla17', consecutivoMController_1.default.actualizartabla17);
        this.router.get('/tabla18', consecutivoMController_1.default.actualizartabla18);
        this.router.get('/tabla19', consecutivoMController_1.default.actualizartabla19);
        this.router.get('/:id', consecutivoMController_1.default.getOne);
        this.router.post('/', consecutivoMController_1.default.create);
        this.router.put('/:id', consecutivoMController_1.default.update);
        this.router.delete('/:id', consecutivoMController_1.default.delete);
    }
}
exports.default = new ConsecutivoMRoutes().router;
