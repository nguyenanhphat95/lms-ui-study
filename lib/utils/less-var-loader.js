"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var less_vars_to_js_1 = __importDefault(require("less-vars-to-js"));
function test(content) {
    return "module.exports = " + JSON.stringify(less_vars_to_js_1.default(content));
}
exports.default = test;
//# sourceMappingURL=less-var-loader.js.map