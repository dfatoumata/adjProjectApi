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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FichiersController = void 0;
const common_1 = require("@nestjs/common");
const fichiers_service_1 = require("./fichiers.service");
const update_fichier_dto_1 = require("./dto/update-fichier.dto");
const platform_express_1 = require("@nestjs/platform-express");
let FichiersController = class FichiersController {
    constructor(fichiersService) {
        this.fichiersService = fichiersService;
    }
    create(file) {
        console.log(file);
    }
    findAll() {
        return this.fichiersService.findAll();
    }
    findOne(id) {
        return this.fichiersService.findOne(+id);
    }
    update(id, updateFichierDto) {
        return this.fichiersService.update(+id, updateFichierDto);
    }
    remove(id) {
        return this.fichiersService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FichiersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FichiersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FichiersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fichier_dto_1.UpdateFichierDto]),
    __metadata("design:returntype", void 0)
], FichiersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FichiersController.prototype, "remove", null);
FichiersController = __decorate([
    (0, common_1.Controller)('fichiers'),
    __metadata("design:paramtypes", [fichiers_service_1.FichiersService])
], FichiersController);
exports.FichiersController = FichiersController;
//# sourceMappingURL=fichiers.controller.js.map