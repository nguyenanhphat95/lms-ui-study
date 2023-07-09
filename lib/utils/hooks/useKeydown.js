"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isBrowser_1 = __importDefault(require("@App/utils/isBrowser"));
var useEventListener_1 = __importDefault(require("./useEventListener"));
function useKeydown(allowCode, fn, element) {
    var onKeydown = function (event) {
        var allowList = !Array.isArray(allowCode) ? [allowCode] : allowCode;
        var shouldBreak = !allowList.includes(event.keyCode);
        if (shouldBreak)
            return;
        fn(event);
    };
    var getWindow = !isBrowser_1.default() ? undefined : window;
    var el = element || getWindow;
    var destroy = useEventListener_1.default(el, 'keydown', onKeydown);
    return destroy;
}
exports.default = useKeydown;
//# sourceMappingURL=useKeydown.js.map