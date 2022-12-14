"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonnelDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_personnel_dto_1 = require("./create-personnel.dto");
class UpdatePersonnelDto extends (0, mapped_types_1.PartialType)(create_personnel_dto_1.CreatePersonnelDto) {
}
exports.UpdatePersonnelDto = UpdatePersonnelDto;
//# sourceMappingURL=update-personnel.dto.js.map