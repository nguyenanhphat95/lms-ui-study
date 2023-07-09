import Eye from "lms-icons/components/Eye";
import React from "react";
import Button, {
  ButtonColors,
  ButtonSizes,
} from "../../../src/components/Button";
import Icon from "../../../src/components/Icon";
import styles from "./styles.module.scss";

const VIEW_CODE_NAME = "rsg-code-editor";

function TabButton({
  children,
  onClick,
  name,
  active,
  ...rest
}: any): JSX.Element {
  if (name === VIEW_CODE_NAME) {
    return (
      <Button
        className={styles["view-code"]}
        color={ButtonColors.primary}
        activated={active}
        onClick={onClick}
        size={ButtonSizes.sm}
      >
        <Icon
          component={Eye}
          style={{
            color: "white",
          }}
        />
        {children}
      </Button>
    );
  }

  return (
    <Button color={ButtonColors.primary} onClick={onClick}>
      {children}
    </Button>
  );
}

export default TabButton;
