"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
}
exports.default = setRef;
//# sourceMappingURL=setRef.js.map