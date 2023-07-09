"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusOfRadio = exports.getIconByStatus = void 0;
var RadioTick_1 = __importDefault(require("lms-icons/components/RadioTick"));
var RadioUntick_1 = __importDefault(require("lms-icons/components/RadioUntick"));
var RadioTypes_1 = require("./RadioTypes");
var _getIcon = (_a = {},
    _a[RadioTypes_1.RadioTypes.unchecked] = RadioUntick_1.default,
    _a[RadioTypes_1.RadioTypes.checked] = RadioTick_1.default,
    _a);
var getIconByStatus = function (status) { return _getIcon[status]; };
exports.getIconByStatus = getIconByStatus;
var getStatusOfRadio = function (checked) {
    return !checked ? RadioTypes_1.RadioTypes.unchecked : RadioTypes_1.RadioTypes.checked;
};
exports.getStatusOfRadio = getStatusOfRadio;
//# sourceMappingURL=utils.js.map