import useClickOutside from '@App/utils/hooks/useClickOutside';
import useKeydown from '@App/utils/hooks/useKeydown';
import cn from 'classnames';
import noop from 'lodash/noop';
import React, {
  ElementType,
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  useMemo
} from 'react';
import Backdrop, { BackdropTypes } from '../Backdrop';
import Paper from '../Paper';
import Popper, { PopperPlacements } from '../Popper';
import styles from './styles.module.scss';
export * from './PopoverTypes';

interface PopoverProps extends HTMLAttributes<HTMLElement> {
  anchorRef?: MutableRefObject<any>;
  anchorEl?: HTMLElement;
  placement?: PopperPlacements;
  menuClassName?: string;
  backdrop?: BackdropTypes;
  backdropClassName?: string;
  onClose?: (e) => void;
  popperOptions?: any;
  backdropProps?: {
    [key: string]: any;
  };
}

interface PopoverDefaultProps {
  component: ElementType;
  placement: PopperPlacements;
  backdrop: BackdropTypes;
  backdropClassName?: string;
}

const defaultProps: PopoverDefaultProps = {
  component: 'div',
  placement: PopperPlacements.bottom,
  backdrop: BackdropTypes.transparent
};

const defaultPopperOptions = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }
  ]
};

export const Popover = forwardRef((_props: PopoverProps, ref) => {
  const {
    component: Component,
    children,
    placement,
    className,
    anchorEl,
    anchorRef,
    menuClassName,
    backdrop,
    onClose,
    backdropClassName,
    backdropProps,
    ...rest
  } = {
    ...defaultProps,
    ..._props
  };

  const [onParentClick, onChildClick] = useClickOutside(onClose);

  useKeydown(27, onClose || noop);

  const popperOptions = useMemo(
    () => ({
      ...defaultPopperOptions,
      placement
    }),
    [placement]
  );

  const anchor = anchorEl || anchorRef.current;
  if (anchor) {
    return (
      <Backdrop
        onClick={onParentClick}
        type={backdrop}
        className={backdropClassName}
        {...backdropProps}
      >
        <Popper
          component={Component}
          className={cn(styles.popover, className)}
          popperOptions={popperOptions}
          ref={ref}
          anchorEl={anchor}
          {...rest}
        >
          <Paper elevation={2} className={menuClassName} onClick={onChildClick}>
            {children}
          </Paper>
        </Popper>
      </Backdrop>
    );
  }
  return null;
});

export default Popover;
