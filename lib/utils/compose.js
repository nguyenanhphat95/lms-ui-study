"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultFunction = function () { };
function compose() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return funcs.filter(Boolean).reduce(function (acc, func) {
        return function chainedFunction() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            acc.apply(this, args);
            func.apply(this, args);
        };
    }, defaultFunction);
}
exports.default = compose;
//# sourceMappingURL=compose.js.map