"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ownerDocument_1 = __importDefault(require("./ownerDocument"));
function ownerWindow(node) {
    var doc = ownerDocument_1.default(node);
    return doc.defaultView || window;
}
exports.default = ownerWindow;
//# sourceMappingURL=ownerWindow.js.map