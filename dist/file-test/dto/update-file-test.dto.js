"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFileTestDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_file_test_dto_1 = require("./create-file-test.dto");
class UpdateFileTestDto extends (0, mapped_types_1.PartialType)(create_file_test_dto_1.CreateFileTestDto) {
}
exports.UpdateFileTestDto = UpdateFileTestDto;
//# sourceMappingURL=update-file-test.dto.js.map