"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
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
var useEnhancedEffect = isBrowser() ? react_1.useLayoutEffect : react_1.useEffect;
exports.default = useEnhancedEffect;
//# sourceMappingURL=useEnhancedEffect.js.map