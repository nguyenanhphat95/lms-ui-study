"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusOfCheckbox = exports.getIconByStatus = void 0;
var CheckboxChecked_1 = __importDefault(require("lms-icons/components/CheckboxChecked"));
var CheckboxUncheck_1 = __importDefault(require("lms-icons/components/CheckboxUncheck"));
var CheckboxTypes_1 = require("./CheckboxTypes");
var icon = (_a = {},
    _a[CheckboxTypes_1.CheckboxStatuses.unchecked] = CheckboxUncheck_1.default,
    _a[CheckboxTypes_1.CheckboxStatuses.checked] = CheckboxChecked_1.default,
    _a[CheckboxTypes_1.CheckboxStatuses.intermediate] = CheckboxUncheck_1.default,
    _a);
var getIconByStatus = function (status) { return icon[status]; };
exports.getIconByStatus = getIconByStatus;
var getStatusOfCheckbox = function (checked, isIntermediate) {
    return (!checked && CheckboxTypes_1.CheckboxStatuses.unchecked) ||
        (isIntermediate ? CheckboxTypes_1.CheckboxStatuses.intermediate : CheckboxTypes_1.CheckboxStatuses.checked);
};
exports.getStatusOfCheckbox = getStatusOfCheckbox;
//# sourceMappingURL=utils.js.map