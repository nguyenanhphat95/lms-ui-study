"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutoHeight = void 0;
var react_1 = __importStar(require("react"));
var Input_1 = __importDefault(require("../Input"));
var utils_1 = require("./utils");
var STYLE_HIDDEN_TEXTAREA = {
    visibility: 'hidden',
    overflow: 'hidden',
    position: 'absolute',
    zIndex: -1000,
    top: '0',
    right: '0',
    height: 0,
    lineHeight: 1
};
var DEFAULT_SIZE_TEXTAREA = {
    linesNumber: 0,
    lineHeight: 18,
    overflow: 'initial'
};
var useAutoHeight = function (_a) {
    var refInput = _a.refInput;
    var refOtherInput = react_1.useRef();
    var _b = __read(react_1.useState(DEFAULT_SIZE_TEXTAREA), 2), detailsOfSize = _b[0], setDetails = _b[1];
    var hiddenOverflow = react_1.useCallback(function () { return setDetails(__assign(__assign({}, detailsOfSize), { overflow: 'hidden' })); }, [detailsOfSize, setDetails]);
    react_1.useEffect(function () {
        if (refInput) {
            var elementOfInput_1 = refInput.current;
            var elementOfOther_1 = refOtherInput.current;
            var shouldBindEvents = elementOfInput_1 && elementOfOther_1;
            if (shouldBindEvents) {
                var timerId_1 = -1;
                var handleUpdateDetails_1 = function () {
                    elementOfOther_1.value = elementOfInput_1.value;
                    var totalHeight = utils_1.getBoxSize(elementOfOther_1);
                    var lineHeight = utils_1.getLineHeight(elementOfOther_1);
                    var linesNumber = Math.ceil((elementOfOther_1.scrollHeight - totalHeight) / lineHeight);
                    cancelAnimationFrame(timerId_1);
                    timerId_1 = requestAnimationFrame(function () {
                        setDetails({
                            linesNumber: linesNumber,
                            lineHeight: lineHeight,
                            overflow: DEFAULT_SIZE_TEXTAREA.overflow
                        });
                    });
                };
                utils_1.cloneStyleOfTextArea(elementOfOther_1, elementOfInput_1);
                elementOfInput_1.addEventListener('keydown', hiddenOverflow);
                elementOfInput_1.addEventListener('input', handleUpdateDetails_1);
                return function () {
                    cancelAnimationFrame(timerId_1);
                    elementOfInput_1.removeEventListener('keydown', hiddenOverflow);
                    elementOfInput_1.removeEventListener('input', handleUpdateDetails_1);
                };
            }
        }
        return function () { };
    }, [refInput, refOtherInput, setDetails, hiddenOverflow]);
    var otherInput = react_1.useMemo(function () { return (<div style={STYLE_HIDDEN_TEXTAREA}>
        <Input_1.default aria-hidden readOnly tabIndex={-1} ref={refOtherInput}/>
      </div>); }, [refOtherInput]);
    return [otherInput, detailsOfSize];
};
exports.useAutoHeight = useAutoHeight;
//# sourceMappingURL=hook.jsx.map