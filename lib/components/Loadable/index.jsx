"use strict";
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
var isBrowser_1 = __importDefault(require("@App/utils/isBrowser"));
var react_1 = __importStar(require("react"));
var react_waypoint_1 = require("react-waypoint");
var lazyLoadComponents = {};
var IS_SERVER = !isBrowser_1.default();
var IS_CLIENT = !IS_SERVER;
function NullComponent() {
    return null;
}
function retry(id, component, TOTAL_RETRY, RETRY_AFTER) {
    if (TOTAL_RETRY === void 0) { TOTAL_RETRY = 3; }
    if (RETRY_AFTER === void 0) { RETRY_AFTER = 3000; }
    return new Promise(function (resolve, reject) {
        component()
            .then(function (module) {
            lazyLoadComponents[id].LoadedComponent = module.default;
            resolve(module);
        })
            .catch(function (error) {
            setTimeout(function () {
                if (TOTAL_RETRY === 1) {
                    console.log("error with id: " + id + " - ", error);
                    resolve({
                        default: NullComponent,
                    });
                    return;
                }
                retry(id, component, TOTAL_RETRY - 1, RETRY_AFTER).then(resolve, reject);
            }, RETRY_AFTER);
        });
    });
}
exports.default = (function (_a) {
    var id = _a.id, _b = _a.loading, Loading = _b === void 0 ? null : _b, SourceComponent = _a.loader, _c = _a.useWaypoint, useWaypoint = _c === void 0 ? true : _c, _d = _a.topOffset, topOffset = _d === void 0 ? -40 : _d, _e = _a.bottomOffset, bottomOffset = _e === void 0 ? -40 : _e;
    if (!lazyLoadComponents[id]) {
        if (IS_SERVER) {
            var LazyLoadComponent = function () {
                var LoadedComponent = lazyLoadComponents[id].LoadedComponent;
                if (!LoadedComponent) {
                    return <Loading />;
                }
                return <LoadedComponent />;
            };
            lazyLoadComponents[id] = {
                loading: Loading,
                loader: LazyLoadComponent,
                useWaypoint: useWaypoint,
                SourceComponent: SourceComponent,
                LoadedComponent: null,
            };
        }
        if (IS_CLIENT) {
            var LazySourceComponent_1 = react_1.lazy(function () { return retry(id, SourceComponent); });
            var LazyLoadComponent = function (props) {
                var isLoadedComponent = false;
                var _a = __read(react_1.useState(lazyLoadComponents[id] ? lazyLoadComponents[id].useWaypoint : useWaypoint), 2), waypoint = _a[0], setWaypoint = _a[1];
                react_1.useEffect(function () {
                    isLoadedComponent = !!lazyLoadComponents[id].LoadedComponent;
                }, []);
                var _handleVisibleOnViewPort = function () {
                    lazyLoadComponents[id].useWaypoint = false;
                    setWaypoint(false);
                };
                var isLoading = lazyLoadComponents[id].loading;
                if (waypoint) {
                    return (<react_waypoint_1.Waypoint onEnter={_handleVisibleOnViewPort} topOffset={topOffset} bottomOffset={bottomOffset} fireOnRapidScroll={false}>
              {isLoading ? <Loading empty/> : null}
            </react_waypoint_1.Waypoint>);
                }
                if (!isLoadedComponent) {
                    return (<react_1.Suspense fallback={Loading ? <Loading /> : null}>
              <LazySourceComponent_1 {...props}/>
            </react_1.Suspense>);
                }
                var LoadedComponent = lazyLoadComponents[id].LoadedComponent;
                return <LoadedComponent {...props}/>;
            };
            lazyLoadComponents[id] = {
                loading: Loading,
                loader: LazyLoadComponent,
                useWaypoint: useWaypoint,
                SourceComponent: null,
                LoadedComponent: null,
            };
        }
    }
    return lazyLoadComponents[id].loader;
});
//# sourceMappingURL=index.jsx.map