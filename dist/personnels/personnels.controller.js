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
exports.PersonnelsController = void 0;
const common_1 = require("@nestjs/common");
const personnels_service_1 = require("./personnels.service");
const create_personnel_dto_1 = require("./dto/create-personnel.dto");
const update_personnel_dto_1 = require("./dto/update-personnel.dto");
let PersonnelsController = class PersonnelsController {
    constructor(personnelsService) {
        this.personnelsService = personnelsService;
    }
    create(createPersonnelDto) {
        return this.personnelsService.create(createPersonnelDto);
    }
    findAll() {
        return this.personnelsService.findAll();
    }
    findOne(id) {
        return this.personnelsService.findOne(+id);
    }
    update(id, updatePersonnelDto) {
        return this.personnelsService.update(+id, updatePersonnelDto);
    }
    remove(id) {
        return this.personnelsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_personnel_dto_1.CreatePersonnelDto]),
    __metadata("design:returntype", void 0)
], PersonnelsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonnelsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonnelsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_personnel_dto_1.UpdatePersonnelDto]),
    __metadata("design:returntype", void 0)
], PersonnelsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonnelsController.prototype, "remove", null);
PersonnelsController = __decorate([
    (0, common_1.Controller)('personnels'),
    __metadata("design:paramtypes", [personnels_service_1.PersonnelsService])
], PersonnelsController);
exports.PersonnelsController = PersonnelsController;
//# sourceMappingURL=personnels.controller.js.map