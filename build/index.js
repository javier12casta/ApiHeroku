"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Import Routs
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const generoRoutes_1 = __importDefault(require("./routes/generoRoutes"));
const acudientesRoutes_1 = __importDefault(require("./routes/acudientesRoutes"));
const almacenesRoutes_1 = __importDefault(require("./routes/almacenesRoutes"));
const barriosRoutes_1 = __importDefault(require("./routes/barriosRoutes"));
const beneficiariosRoutes_1 = __importDefault(require("./routes/beneficiariosRoutes"));
const bienestarinaRoutes_1 = __importDefault(require("./routes/bienestarinaRoutes"));
const centrosDRoutes_1 = __importDefault(require("./routes/centrosDRoutes"));
const centrosZRoutes_1 = __importDefault(require("./routes/centrosZRoutes"));
const comunasRoutes_1 = __importDefault(require("./routes/comunasRoutes"));
const consecutivoIRoutes_1 = __importDefault(require("./routes/consecutivoIRoutes"));
const consecutivoMRoutes_1 = __importDefault(require("./routes/consecutivoMRoutes"));
const datosRoutes_1 = __importDefault(require("./routes/datosRoutes"));
const entregaRoutes_1 = __importDefault(require("./routes/entregaRoutes"));
const inventarioRoutes_1 = __importDefault(require("./routes/inventarioRoutes"));
const listaCRoutes_1 = __importDefault(require("./routes/listaCRoutes"));
const listaPRoutes_1 = __importDefault(require("./routes/listaPRoutes"));
const listaMRoutes_1 = __importDefault(require("./routes/listaMRoutes"));
const municipioRoutes_1 = __importDefault(require("./routes/municipioRoutes"));
const permisosRoutes_1 = __importDefault(require("./routes/permisosRoutes"));
const personalRoutes_1 = __importDefault(require("./routes/personalRoutes"));
const puntoRoutes_1 = __importDefault(require("./routes/puntoRoutes"));
const regionalRoutes_1 = __importDefault(require("./routes/regionalRoutes"));
const reportesRoutes_1 = __importDefault(require("./routes/reportesRoutes"));
const rolRoutes_1 = __importDefault(require("./routes/rolRoutes"));
const tbienestarinaRoutes_1 = __importDefault(require("./routes/tbienestarinaRoutes"));
const tdocumentoRoutes_1 = __importDefault(require("./routes/tdocumentoRoutes"));
const udsRoutes_1 = __importDefault(require("./routes/udsRoutes"));
const unidadRoutes_1 = __importDefault(require("./routes/unidadRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const biometricoRoutes_1 = __importDefault(require("./routes/biometricoRoutes"));
const devolucionesRoutes_1 = __importDefault(require("./routes/devolucionesRoutes"));
const entregabeRoutes_1 = __importDefault(require("./routes/entregabeRoutes"));
const entregacendRoutes_1 = __importDefault(require("./routes/entregacendRoutes"));
const entregacoRoutes_1 = __importDefault(require("./routes/entregacoRoutes"));
const recuentoRoutes_1 = __importDefault(require("./routes/recuentoRoutes"));
const trasladosRoutes_1 = __importDefault(require("./routes/trasladosRoutes"));
const actaRoutes_1 = __importDefault(require("./routes/actaRoutes"));
const cuposRoutes_1 = __importDefault(require("./routes/cuposRoutes"));
const cargainventarioRoutes_1 = __importDefault(require("./routes/cargainventarioRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan_1.default("dev"));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    //Global  variables
    global() {
        this.app.use((res, req, next) => {
            next();
        });
    }
    routes() {
        this.app.use("/", indexRoutes_1.default);
        this.app.use("/genero", generoRoutes_1.default);
        this.app.use("/acudiente", acudientesRoutes_1.default);
        this.app.use("/almacen", almacenesRoutes_1.default);
        this.app.use("/barrio", barriosRoutes_1.default);
        this.app.use("/beneficiario", beneficiariosRoutes_1.default);
        this.app.use("/bienestarina", bienestarinaRoutes_1.default);
        this.app.use("/centrosD", centrosDRoutes_1.default);
        this.app.use("/centrosZ", centrosZRoutes_1.default);
        this.app.use("/comuna", comunasRoutes_1.default);
        this.app.use("/consecutivoI", consecutivoIRoutes_1.default);
        this.app.use("/consecutivoM", consecutivoMRoutes_1.default);
        this.app.use("/datos", datosRoutes_1.default);
        this.app.use("/entrega", entregaRoutes_1.default);
        this.app.use("/inventario", inventarioRoutes_1.default);
        this.app.use("/listaC", listaCRoutes_1.default);
        this.app.use("/listaP", listaPRoutes_1.default);
        this.app.use("/listaM", listaMRoutes_1.default);
        this.app.use("/municipio", municipioRoutes_1.default);
        this.app.use("/permisos", permisosRoutes_1.default);
        this.app.use("/personal", personalRoutes_1.default);
        this.app.use("/punto", puntoRoutes_1.default);
        this.app.use("/regional", regionalRoutes_1.default);
        this.app.use("/reporte", reportesRoutes_1.default);
        this.app.use("/rol", rolRoutes_1.default);
        this.app.use("/tbienestarina", tbienestarinaRoutes_1.default);
        this.app.use("/tdocumento", tdocumentoRoutes_1.default);
        this.app.use("/uds", udsRoutes_1.default);
        this.app.use("/unidad", unidadRoutes_1.default);
        this.app.use("/usuario", usuariosRoutes_1.default);
        this.app.use("/biometrico", biometricoRoutes_1.default);
        this.app.use("/devoluciones", devolucionesRoutes_1.default);
        this.app.use("/entregabeneficiario", entregabeRoutes_1.default);
        this.app.use("/entregacentrod", entregacendRoutes_1.default);
        this.app.use("/entregaconsumo", entregacoRoutes_1.default);
        this.app.use("/recuento", recuentoRoutes_1.default);
        this.app.use("/traslados", trasladosRoutes_1.default);
        this.app.use("/Acta", actaRoutes_1.default);
        this.app.use("/cupos", cuposRoutes_1.default);
        this.app.use('/cargainv', cargainventarioRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
