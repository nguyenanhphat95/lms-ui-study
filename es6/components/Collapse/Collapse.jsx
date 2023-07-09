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
import cn from 'classnames';
import React, { forwardRef, useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';
import styles from './styles.module.scss';
function getAutoHeightDuration(height) {
    if (!height) {
        return 0;
    }
    const constant = height / 36;
    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
}
function getTransitionProps(props, options) {
    const { timeout, style = {} } = props;
    return {
        duration: style.transitionDuration || typeof timeout === 'number'
            ? timeout
            : timeout[options.mode] || 0,
        delay: style.transitionDelay,
    };
}
const defaultProps = {
    component: 'div',
    collapsedHeight: 0,
    timeout: 300,
};
export const Collapse = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { children, className, collapsedHeight: collapsedHeightProp, component: Component, in: inProp, onEnter, onEntered, onEntering, onExit, onExiting, style, timeout } = _a, rest = __rest(_a, ["children", "className", "collapsedHeight", "component", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExiting", "style", "timeout"]);
    const timer = useRef(null);
    const wrapperRef = useRef(null);
    const autoTransitionDuration = useRef(null);
    const collapsedHeight = `${collapsedHeightProp}px`;
    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);
    const handleEnter = (node, isAppearing) => {
        node.style.height = collapsedHeight;
        if (onEnter) {
            onEnter(node, isAppearing);
        }
    };
    const handleEntering = (node, isAppearing) => {
        const wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
        const { duration: transitionDuration } = getTransitionProps({ style, timeout }, {
            mode: 'enter',
        });
        if (timeout === 'auto') {
            const duration2 = getAutoHeightDuration(wrapperHeight);
            node.style.transitionDuration = `${duration2}ms`;
            autoTransitionDuration.current = duration2;
        }
        else {
            node.style.transitionDuration =
                typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
        }
        node.style.height = `${wrapperHeight}px`;
        if (onEntering) {
            onEntering(node, isAppearing);
        }
    };
    const handleEntered = (node, isAppearing) => {
        node.style.height = 'auto';
        if (onEntered) {
            onEntered(node, isAppearing);
        }
    };
    const handleExit = (node) => {
        const wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
        node.style.height = `${wrapperHeight}px`;
        if (onExit) {
            onExit(node);
        }
    };
    const handleExiting = (node) => {
        const wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
        const { duration: transitionDuration } = getTransitionProps({ style, timeout }, {
            mode: 'exit',
        });
        if (timeout === 'auto') {
            const duration2 = getAutoHeightDuration(wrapperHeight);
            node.style.transitionDuration = `${duration2}ms`;
            autoTransitionDuration.current = duration2;
        }
        else {
            node.style.transitionDuration =
                typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
        }
        node.style.height = collapsedHeight;
        if (onExiting) {
            onExiting(node);
        }
    };
    const addEndListener = (_, next) => {
        if (timeout === 'auto') {
            timer.current = setTimeout(next, autoTransitionDuration.current || 0);
        }
    };
    return (<Transition in={inProp} onEnter={handleEnter} onEntered={handleEntered} onEntering={handleEntering} onExit={handleExit} onExiting={handleExiting} addEndListener={addEndListener} timeout={timeout === 'auto' ? null : timeout} {...rest}>
      {(state, childProps) => (<Component ref={ref} className={cn(styles.collapse, className, {
        [styles.entered]: state === 'entered',
        [styles.hidden]: state === 'exited' && !inProp && collapsedHeight === '0px',
    })} style={Object.assign({ minHeight: collapsedHeight }, style)} {...childProps}>
          <div className={styles.wrapper} ref={wrapperRef}>
            <div className={styles.wrapperInner}>{children}</div>
          </div>
        </Component>)}
    </Transition>);
});
export default Collapse;
//# sourceMappingURL=Collapse.jsx.map