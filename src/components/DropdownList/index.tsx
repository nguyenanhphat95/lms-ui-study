import ChevronDown from "lms-icons/components/ChevronDown";
import ChevronUp from "lms-icons/components/ChevronUp";
import cn from "classnames";
import _get from "lodash-es/get";
import React, {
  forwardRef,
  MutableRefObject,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import Icon from "../Icon";
import Input, { InputSizes } from "../Input";
import InputAdornment from "../InputAdornment";
import Menu from "../Menu";
import DropdownListContext from "./DropdownListContext";
import DropdownListInput from "./DropdownListInput";
import styles from "./styles.module.scss";

export interface DropdownListProps {
  /**
   * Custom style for dropdown list.
   */
  menuClassName?: string;
  /**
   * The select placeholder, work with value of select is `undefined` or `null`.
   */
  placeholder?: string;
  /**
   * Size of icon extends from size of input
   */
  size?: InputSizes;
  children?: React.ReactNode;
  onChange?: (e) => void;
  onClick?: (e) => void;
  onBlur?: (e) => void;
  onFocus?: (e) => void;
  className?: string;
  disabled?: boolean;
  value: any;
  [key: string]: any;
}

interface SelectDefaultProps {
  component: React.ElementType;
}

const defaultProps: SelectDefaultProps = {
  component: Input,
};

function calculatePopoverStyle(ref: HTMLElement) {
  if (!ref) {
    return {};
  }
  const width = Math.max(ref.getBoundingClientRect().width, 80);
  return {
    width: `${width}px`,
  };
}

function checkIsUsePlaceholder(value: any) {
  return value === undefined || value === null;
}

export const DropdownList = forwardRef(
  (props: DropdownListProps, ref: MutableRefObject<any>) => {
    const {
      component: Component,
      children,
      onChange,
      onClick,
      onBlur,
      onFocus,
      menuClassName,
      className,
      placeholder,
      ...rest
    } = {
      ...defaultProps,
      ...props,
    };

    const wrapperRef = useRef<HTMLElement>();
    const popoverStyle = useRef(null);

    // @ts-ignore
    // const ownerRef = useForkRef(ref, wrapperRef);
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback(
      (e) => {
        if (!open && !rest.disabled) {
          popoverStyle.current = calculatePopoverStyle(wrapperRef.current);
          setOpen(true);
        }
        if (onFocus) {
          onFocus(e);
        }
        if (onClick) {
          return onClick(e);
        }
      },
      [rest.disabled]
    );

    const handleClose = useCallback((e) => {
      setOpen(false);
      if (onBlur) {
        return onBlur(e);
      }
    }, []);

    const dropdownListContext = useMemo(
      () => ({
        onChange: (value) => {
          return onChange(value);
        },
        value: rest.value,
      }),
      [handleClose, onChange, rest.value]
    );

    const afterInput = useMemo(
      () => (
        <InputAdornment
          size={rest.size}
          onClick={handleOpen}
          className={styles[`addon-size-${rest.size}`]}
        >
          <Icon
            className={styles.icon}
            component={open ? ChevronUp : ChevronDown}
          />
        </InputAdornment>
      ),
      [open, rest.disabled]
    );

    const display = checkIsUsePlaceholder(rest.value)
      ? placeholder
      : React.Children.toArray(children)
          .filter((child: any) => _get(child, "props.value") === rest.value)
          .map((child: any) => {
            if (typeof child === "string") {
              return child;
            }
            const innerChild = child.props.children;
            if (typeof innerChild === "string") {
              return innerChild;
            }
            return "";
          });

    return (
      <>
        <Input
          {...rest}
          className={cn(className, styles.input, { [styles["is-open"]]: open })}
          onClick={handleOpen}
          component={DropdownListInput}
          afterInput={afterInput}
          display={display}
          ref={ref}
          readOnly
          // @ts-ignore
          wrapperRef={wrapperRef}
        />
        {open && (
          <Menu
            anchorRef={wrapperRef}
            onClose={handleClose}
            menuClassName={menuClassName}
            style={popoverStyle.current}
          >
            <DropdownListContext.Provider value={dropdownListContext}>
              {children}
            </DropdownListContext.Provider>
          </Menu>
        )}
      </>
    );
  }
);

DropdownList.displayName = "DropdownList";

export default DropdownList;
