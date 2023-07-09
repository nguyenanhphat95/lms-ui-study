import useForkRef from '@App/utils/hooks/useForkRef';
import React, {
  cloneElement,
  ElementType,
  forwardRef,
  Fragment,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Popper, { PopperPlacements } from '../Popper';
import styles from './styles.module.scss';

export * from './TooltipTypes';

export type TooltipProps = {
  content: ReactNode;
  enterDelay?: number;
  leaveDelay?: number;
  placement?: PopperPlacements;
  children: any;
};

interface TooltipDefaultProps {
  component: ElementType;
  enterDelay: number;
  leaveDelay: number;
  placement: PopperPlacements;
}

const defaultProps: TooltipDefaultProps = {
  component: Popper,
  enterDelay: 0,
  leaveDelay: 0,
  placement: PopperPlacements.top,
};

const defaultPopperOptions = {
  modifiers: [
    {
      name: 'arrow',
      options: {
        element: '[data-popper-arrow]',
        padding: 10,
      },
    },
    {
      name: 'offset',
      options: {
        offset: [0, 10],
      },
    },
  ],
};

let hystersisOpen = false;
let hystersisTimer: any = null;

export const Tooltip = forwardRef((props: TooltipProps, ref) => {
  const { component: Component, placement, content, children, enterDelay, leaveDelay, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const [anchorEl, setAnchorEl] = useState();
  // @ts-ignore
  const ownerRef = useForkRef(setAnchorEl, ref);
  const hasChildRef = !children && children.ref;
  // @ts-ignore
  const handleRef = hasChildRef ? useForkRef(children.ref, ownerRef) : ownerRef;

  const closeTimer = useRef<any>();
  const enterTimer = useRef<any>();
  const leaveTimer = useRef<any>();
  const touchTimer = useRef<any>();
  const [open, setOpenState] = useState(false);

  useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      clearTimeout(touchTimer.current);
    };
  }, []);

  const handleOpen = (event: any) => {
    clearTimeout(hystersisTimer);
    hystersisOpen = true;

    setOpenState(true);
  };

  const handleEnter = (event: any) => {
    const _childrenProps = children.props;

    if (
      event.type === 'mouseover' &&
      _childrenProps.onMouseOver &&
      event.currentTarget === anchorEl
    ) {
      _childrenProps.onMouseOver(event);
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    if (enterDelay && !hystersisOpen) {
      event.persist();
      enterTimer.current = setTimeout(() => {
        handleOpen(event);
      }, enterDelay);
    } else {
      handleOpen(event);
    }
  };

  const handleClose = (event: any) => {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(() => {
      hystersisOpen = false;
    }, 500);
    setOpenState(false);
  };

  const handleLeave = (event: any) => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    event.persist();
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveDelay);
  };

  const childrenProps = {
    onMouseOver: handleEnter,
    onMouseLeave: handleLeave,
  };

  const popperOptions = useMemo(
    () => ({
      ...defaultPopperOptions,
      placement,
    }),
    [placement],
  );

  return (
    <Fragment>
      {cloneElement(children, { ref: handleRef, ...childrenProps })}
      {open && (
        <Component
          ref={ref}
          className={styles.tooltip}
          popperOptions={popperOptions}
          anchorEl={anchorEl}
          {...rest}>
          <>
            {content}
            <div className={styles.arrow} data-popper-arrow />
          </>
        </Component>
      )}
    </Fragment>
  );
});

export default Tooltip;
