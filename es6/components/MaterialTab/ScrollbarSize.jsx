var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import debounce from '@App/utils/debounce';
import * as React from 'react';
const styles = {
    width: 99,
    height: 99,
    position: 'absolute',
    top: -9999,
    overflow: 'scroll',
};
const ScrollbarSize = (props) => {
    const { onChange } = props, other = __rest(props, ["onChange"]);
    const scrollbarHeight = React.useRef();
    const nodeRef = React.useRef(null);
    const setMeasurements = () => {
        scrollbarHeight.current = nodeRef.current.offsetHeight - nodeRef.current.clientHeight;
    };
    React.useEffect(() => {
        const handleResize = debounce(() => {
            const prevHeight = scrollbarHeight.current;
            setMeasurements();
            if (prevHeight !== scrollbarHeight.current) {
                onChange(scrollbarHeight.current);
            }
        }, 10);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [onChange]);
    React.useEffect(() => {
        setMeasurements();
        onChange(scrollbarHeight.current);
    }, [onChange]);
    return <div style={styles} ref={nodeRef} {...other}/>;
};
export default ScrollbarSize;
//# sourceMappingURL=ScrollbarSize.jsx.map