"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isBrowser = function (isIncludeJest) {
    if (isIncludeJest === void 0) { isIncludeJest = false; }
    var isRunOnNode = typeof process !== 'undefined' &&
        typeof process.versions.node !== 'undefined';
    var isRunOnBrowser = typeof window === 'object';
    if (isIncludeJest) {
        return isRunOnBrowser;
    }
    if (!isIncludeJest && !isRunOnNode) {
        return true;
    }
    return false;
};
exports.default = isBrowser;
//# sourceMappingURL=isBrowser.js.map