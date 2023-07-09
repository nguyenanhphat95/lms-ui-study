"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function easeInOutSin(time) {
    return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to, options, cb) {
    if (options === void 0) { options = {}; }
    if (cb === void 0) { cb = function (e) { }; }
    var _a = options.ease, ease = _a === void 0 ? easeInOutSin : _a, _b = options.duration, duration = _b === void 0 ? 300 : _b;
    var start = null;
    var from = element[property];
    var cancelled = false;
    var cancel = function () {
        cancelled = true;
    };
    var step = function (timestamp) {
        if (cancelled) {
            cb(new Error('Animation cancelled'));
            return;
        }
        if (start === null) {
            start = timestamp;
        }
        var time = Math.min(1, (timestamp - start) / duration);
        element[property] = ease(time) * (to - from) + from;
        if (time >= 1) {
            requestAnimationFrame(function () {
                cb(null);
            });
            return;
        }
        requestAnimationFrame(step);
    };
    if (from === to) {
        cb(new Error('Element already at target position'));
        return cancel;
    }
    requestAnimationFrame(step);
    return cancel;
}
exports.default = animate;
//# sourceMappingURL=animate.js.map