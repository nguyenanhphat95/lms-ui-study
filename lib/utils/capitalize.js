"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function capitalize(input) {
    if (typeof input !== 'string') {
        return input;
    }
    return input.charAt(0).toUpperCase() + input.slice(1);
}
exports.default = capitalize;
//# sourceMappingURL=capitalize.js.map