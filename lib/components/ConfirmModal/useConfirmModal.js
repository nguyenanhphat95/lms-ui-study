"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useConfirmModal = function (onConfirm) {
    var _a = __read(react_1.useState(false), 2), isOpen = _a[0], setIsOpen = _a[1];
    var open = react_1.useCallback(function () { return setIsOpen(true); }, [setIsOpen]);
    var close = react_1.useCallback(function () { return setIsOpen(false); }, [setIsOpen]);
    var confirm = react_1.useCallback(function (e) {
        if (onConfirm) {
            onConfirm(e);
        }
        setIsOpen(false);
    }, [onConfirm, setIsOpen]);
    return {
        isOpen: isOpen,
        open: open,
        close: close,
        confirm: confirm,
    };
};
exports.default = useConfirmModal;
//# sourceMappingURL=useConfirmModal.js.map