"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FichiersModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const fichiers_service_1 = require("./fichiers.service");
const fichiers_controller_1 = require("./fichiers.controller");
const fichier_entity_1 = require("./entities/fichier.entity");
let FichiersModule = class FichiersModule {
};
FichiersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([fichier_entity_1.Fichier])],
        controllers: [fichiers_controller_1.FichiersController],
        providers: [fichiers_service_1.FichiersService]
    })
], FichiersModule);
exports.FichiersModule = FichiersModule;
//# sourceMappingURL=fichiers.module.js.map