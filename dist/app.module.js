"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const personnels_module_1 = require("./personnels/personnels.module");
const typeorm_1 = require("@nestjs/typeorm");
const personnel_entity_1 = require("./personnels/entities/personnel.entity");
const fichiers_module_1 = require("./fichiers/fichiers.module");
const fichier_entity_1 = require("./fichiers/entities/fichier.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 8889,
                username: 'root',
                password: 'root',
                database: 'nesttest',
                entities: [personnel_entity_1.Personnel, fichier_entity_1.Fichier],
                synchronize: true,
            }), personnels_module_1.PersonnelsModule, fichiers_module_1.FichiersModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map