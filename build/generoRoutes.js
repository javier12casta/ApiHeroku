"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GeneroRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Genero'));
    }
}
const generoRoutes = new GeneroRoutes();
exports.default = generoRoutes.router;
