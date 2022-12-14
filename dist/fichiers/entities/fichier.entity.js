"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fichier = void 0;
const typeorm_1 = require("typeorm");
let Fichier = class Fichier {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Fichier.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Fichier.prototype, "pilier", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 4
    }),
    __metadata("design:type", String)
], Fichier.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "decimal",
        precision: 6,
        scale: 2,
        default: 0
    }),
    __metadata("design:type", Number)
], Fichier.prototype, "amount", void 0);
Fichier = __decorate([
    (0, typeorm_1.Entity)('fichier')
], Fichier);
exports.Fichier = Fichier;
//# sourceMappingURL=fichier.entity.js.map