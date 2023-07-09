"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalIds = void 0;
var usePortal_1 = __importDefault(require("@App/utils/hooks/usePortal"));
var react_dom_1 = require("react-dom");
var PortalIds;
(function (PortalIds) {
    PortalIds["popover"] = "tpl-popover";
    PortalIds["modal"] = "tpl-modal";
    PortalIds["toast"] = "tpl-toast";
    PortalIds["tooltip"] = "tpl-tooltip";
})(PortalIds = exports.PortalIds || (exports.PortalIds = {}));
var checkIsBrowser = function (isIncludeJest) {
    if (isIncludeJest === void 0) { isIncludeJest = false; }
    var isRunOnNode = typeof process !== 'undefined' && typeof process.versions.node !== 'undefined';
    var isRunOnBrowser = typeof window === 'object';
    if (isIncludeJest) {
        return isRunOnBrowser;
    }
    if (!isIncludeJest && !isRunOnNode) {
        return true;
    }
    return false;
};
var Portal = function (_a) {
    var id = _a.id, children = _a.children;
    var isBrowser = checkIsBrowser();
    if (!isBrowser) {
        return null;
    }
    var element = usePortal_1.default(id);
    return react_dom_1.createPortal(children, element);
};
exports.default = Portal;
//# sourceMappingURL=index.jsx.map