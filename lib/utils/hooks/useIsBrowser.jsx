"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsBrowser = void 0;
var react_1 = __importDefault(require("react"));
var useIsBrowser = function () {
    return react_1.default.useMemo(function () { return typeof document !== 'undefined'; }, [typeof document]);
};
exports.useIsBrowser = useIsBrowser;
//# sourceMappingURL=useIsBrowser.jsx.map