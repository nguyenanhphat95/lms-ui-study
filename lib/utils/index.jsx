"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMoney = void 0;
var constants_1 = require("./constants");
var convertMoney = function (value, billionMeasure, millionMeasure) {
    if (value === void 0) { value = 0; }
    if (value >= constants_1.BILLION_UNIT) {
        return value / constants_1.BILLION_UNIT + " " + billionMeasure;
    }
    if (value >= constants_1.MILLION_UNIT) {
        return value / constants_1.MILLION_UNIT + " " + millionMeasure;
    }
    return value;
};
exports.convertMoney = convertMoney;
//# sourceMappingURL=index.jsx.map