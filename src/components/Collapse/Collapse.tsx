import cn from 'classnames';
import React, { forwardRef, useEffect, useRef } from 'react';
import { Transition } from 'react-transition-group';
import styles from './styles.module.scss';

function getAutoHeightDuration(height: number): number {
  if (!height) {
    return 0;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

function getTransitionProps(props: any, options: any): { [key: string]: any } {
  const { timeout, style = {} } = props;

  return {
    duration:
      style.transitionDuration || typeof timeout === 'number'
        ? timeout
        : timeout[options.mode] || 0,
    delay: style.transitionDelay,
  };
}

interface CollapseProps {
  collapsedHeight?: number;
  in?: boolean;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onEntered?: (node: HTMLElement, isAppearing: boolean) => void;
  onEntering?: (node: HTMLElement, isAppearing: boolean) => void;
  onExit?: (node: HTMLElement) => void;
  onExiting?: (node: HTMLElement) => void;
  timeout?: string | number;
  className?: string;
  children?: string | React.ReactNode;
  style?: { [key: string]: any };
  [key: string]: any;
}

const defaultProps = {
  component: 'div',
  collapsedHeight: 0,
  timeout: 300,
};

export const Collapse = forwardRef((props: CollapseProps, ref) => {
  const {
    children,
    className,
    collapsedHeight: collapsedHeightProp,
    component: Component,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExiting,
    style,
    timeout,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  const timer = useRef<any>(null);
  const wrapperRef = useRef<any>(null);
  const autoTransitionDuration = useRef<any>(null);
  const collapsedHeight = `${collapsedHeightProp}px`;

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleEnter = (node: HTMLElement, isAppearing: boolean): void => {
    node.style.height = collapsedHeight;

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };

  const handleEntering = (node: HTMLElement, isAppearing: boolean): void => {
    const wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;

    const { duration: transitionDuration } = getTransitionProps(
      { style, timeout },
      {
        mode: 'enter',
      },
    );

    if (timeout === 'auto') {
      const duration2 = getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration =
        typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    node.style.height = `${wrapperHeight}px`;

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  };

  const handleEntered = (node: HTMLElement, isAppearing: boolean): void => {
    node.style.height = 'auto';

    if (onEntered) {
      onEntered(node, isAppearing);
    }
  };

  const handleExit = (node: HTMLElement): void => {
    const wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    node.style.height = `${wrapperHeight}px`;

    if (onExit) {
      onExit(node);
    }
  };

  const handleExiting = (node: HTMLElement): void => {
    const wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;

    const { duration: transitionDuration } = getTransitionProps(
      { style, timeout },
      {
        mode: 'exit',
      },
    );

    if (timeout === 'auto') {
      const duration2 = getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = `${duration2}ms`;
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration =
        typeof transitionDuration === 'string' ? transitionDuration : `${transitionDuration}ms`;
    }

    node.style.height = collapsedHeight;

    if (onExiting) {
      onExiting(node);
    }
  };

  const addEndListener = (_: any, next: any): void => {
    if (timeout === 'auto') {
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };

  return (
    // @ts-ignore
    <Transition
      in={inProp}
      onEnter={handleEnter}
      onEntered={handleEntered}
      onEntering={handleEntering}
      onExit={handleExit}
      onExiting={handleExiting}
      addEndListener={addEndListener}
      timeout={timeout === 'auto' ? null : timeout}
      {...rest}>
      {(state: any, childProps: any) => (
        <Component
          ref={ref}
          className={cn(styles.collapse, className, {
            [styles.entered]: state === 'entered',
            [styles.hidden]: state === 'exited' && !inProp && collapsedHeight === '0px',
          })}
          style={{
            minHeight: collapsedHeight,
            ...style,
          }}
          {...childProps}>
          <div className={styles.wrapper} ref={wrapperRef}>
            <div className={styles.wrapperInner}>{children}</div>
          </div>
        </Component>
      )}
    </Transition>
  );
});

export default Collapse;
