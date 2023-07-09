"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPercent = void 0;
var formatPercent = function (value) {
    var val = Number(value);
    return (val > 100 ? 100 : val < 0 ? 0 : val).toString() + ' %';
};
exports.formatPercent = formatPercent;
//# sourceMappingURL=utils.js.map