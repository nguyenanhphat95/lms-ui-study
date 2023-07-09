import RightArrow from "lms-icons/components/RightArrow";
import { Icon } from "../../Icon";
import cn from "classnames";
import * as React from "react";
import styles from "./styles.module.scss";

interface TabScrollButtonProps {
  children: React.ReactNode;
  className: string;
  direction: "left" | "right";
  disabled: boolean;
  orientation: "horizontal" | "vertical";
}

const TabScrollButton = React.forwardRef(function TabScrollButton(
  props: TabScrollButtonProps,
  ref: any
) {
  const {
    className: classNameProp,
    direction,
    orientation,
    disabled,
    ...other
  } = props;

  return (
    <div
      className={cn(
        styles.root,
        {
          [styles.vertical]: orientation === "vertical",
          [styles.disabled]: disabled,
        },
        classNameProp
      )}
      ref={ref}
      role={null}
      tabIndex={null}
      {...other}
    >
      {direction === "left" ? (
        <Icon
          component={RightArrow}
          style={{
            transform: "rotate(180deg)",
          }}
          width={16}
          height={16}
        />
      ) : (
        <Icon component={RightArrow} width={16} height={16} />
      )}
    </div>
  );
});

export default TabScrollButton;
