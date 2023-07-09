"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isBrowser_1 = __importDefault(require("@App/utils/isBrowser"));
var useEnhancedEffect_1 = __importDefault(require("./useEnhancedEffect"));
var useEventCallback_1 = __importDefault(require("./useEventCallback"));
var isEventValid = function (data, field, type) {
    return data[field] && typeof data[field] === type;
};
function useEventListener(element, event, fn) {
    var getWindow = !isBrowser_1.default() ? undefined : window;
    var el = element || getWindow;
    var handler = useEventCallback_1.default(fn);
    var destroy = function () {
        return isEventValid(el, 'removeEventListener', 'function') &&
            el.removeEventListener(event, handler);
    };
    useEnhancedEffect_1.default(function () {
        if (isEventValid(el, 'addEventListener', 'function')) {
            el.addEventListener(event, handler);
        }
        return destroy;
    }, []);
    return destroy;
}
exports.default = useEventListener;
//# sourceMappingURL=useEventListener.js.map