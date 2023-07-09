"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayOf = void 0;
function getArrayOf(data) {
    if (!data) {
        return [];
    }
    if (Array.isArray(data)) {
        return data;
    }
    return [data];
}
exports.getArrayOf = getArrayOf;
//# sourceMappingURL=getArrayOf.js.map