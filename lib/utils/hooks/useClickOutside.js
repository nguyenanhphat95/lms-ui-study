"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useClickOutside(callback) {
    var refEvent = react_1.useRef({ shouldPreventEvent: false });
    var onParentClick = react_1.useCallback(function (event) {
        if (refEvent.current.shouldPreventEvent) {
            refEvent.current.shouldPreventEvent = false;
            return;
        }
        if (callback) {
            callback(event);
        }
    }, [refEvent, callback]);
    var onChildClick = react_1.useCallback(function () {
        refEvent.current.shouldPreventEvent = true;
    }, [refEvent]);
    return [onParentClick, onChildClick];
}
exports.default = useClickOutside;
//# sourceMappingURL=useClickOutside.js.map