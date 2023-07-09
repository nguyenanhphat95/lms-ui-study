import isBrowser from '@App/utils/isBrowser';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';
const lazyLoadComponents = {};
const IS_SERVER = !isBrowser();
const IS_CLIENT = !IS_SERVER;
function NullComponent() {
    return null;
}
function retry(id, component, TOTAL_RETRY = 3, RETRY_AFTER = 3000) {
    return new Promise((resolve, reject) => {
        component()
            .then((module) => {
            lazyLoadComponents[id].LoadedComponent = module.default;
            resolve(module);
        })
            .catch((error) => {
            setTimeout(() => {
                if (TOTAL_RETRY === 1) {
                    console.log(`error with id: ${id} - `, error);
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
export default ({ id, loading: Loading = null, loader: SourceComponent, useWaypoint = true, topOffset = -40, bottomOffset = -40, }) => {
    if (!lazyLoadComponents[id]) {
        if (IS_SERVER) {
            const LazyLoadComponent = () => {
                const LoadedComponent = lazyLoadComponents[id].LoadedComponent;
                if (!LoadedComponent) {
                    return <Loading />;
                }
                return <LoadedComponent />;
            };
            lazyLoadComponents[id] = {
                loading: Loading,
                loader: LazyLoadComponent,
                useWaypoint,
                SourceComponent,
                LoadedComponent: null,
            };
        }
        if (IS_CLIENT) {
            const LazySourceComponent = lazy(() => retry(id, SourceComponent));
            const LazyLoadComponent = (props) => {
                let isLoadedComponent = false;
                const [waypoint, setWaypoint] = useState(lazyLoadComponents[id] ? lazyLoadComponents[id].useWaypoint : useWaypoint);
                useEffect(() => {
                    isLoadedComponent = !!lazyLoadComponents[id].LoadedComponent;
                }, []);
                const _handleVisibleOnViewPort = () => {
                    lazyLoadComponents[id].useWaypoint = false;
                    setWaypoint(false);
                };
                const { loading: isLoading } = lazyLoadComponents[id];
                if (waypoint) {
                    return (<Waypoint onEnter={_handleVisibleOnViewPort} topOffset={topOffset} bottomOffset={bottomOffset} fireOnRapidScroll={false}>
              {isLoading ? <Loading empty/> : null}
            </Waypoint>);
                }
                if (!isLoadedComponent) {
                    return (<Suspense fallback={Loading ? <Loading /> : null}>
              <LazySourceComponent {...props}/>
            </Suspense>);
                }
                const LoadedComponent = lazyLoadComponents[id].LoadedComponent;
                return <LoadedComponent {...props}/>;
            };
            lazyLoadComponents[id] = {
                loading: Loading,
                loader: LazyLoadComponent,
                useWaypoint,
                SourceComponent: null,
                LoadedComponent: null,
            };
        }
    }
    return lazyLoadComponents[id].loader;
};
//# sourceMappingURL=index.jsx.map