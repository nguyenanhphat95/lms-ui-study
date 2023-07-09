import CopyToClipboard from "lms-icons/components/CopyToClipboard";
import Eye from "lms-icons/components/Eye";
import React, { useEffect, useState } from "react";
import Button, { ButtonColors } from "../../../src/components/Button";
import Grid from "../../../src/components/Grid";
import Icon from "../../../src/components/Icon";
import Input, { InputSizes } from "../../../src/components/Input";
import Toast from "../../../src/components/Toast";
import Tooltip from "../../../src/components/Tooltip";
import InputAdornment from "./../../../src/components/InputAdornment";
import copyToClipboard from "./../../../src/utils/copyToClipboard";
import styles from "./styles.module.scss";

// TODO: will update later
const GIT_URL = "";

const getGitSourceUrl = (filePath: string): string =>
  [GIT_URL, filePath].join("/");

function Pathline({ children, filePath }: any): JSX.Element {
  const [open, toggleDialog] = useState(false);

  useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        if (open) {
          toggleDialog(false);
        }
      }, 750);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [open]);

  return (
    <Grid container className={styles.root}>
      <Grid item xs={10} md={8} lg={5}>
        <Input
          size={InputSizes.md}
          value={children}
          readOnly
          afterInput={
            <InputAdornment
              onClick={() => {
                copyToClipboard(children);
                toggleDialog(true);
              }}
            >
              <Icon component={CopyToClipboard} className={styles["copy"]} />
            </InputAdornment>
          }
        />
        {open && <Toast>Code was copied!</Toast>}
      </Grid>
      <Grid item xs={1}>
        <Tooltip content="View source">
          <Button
            style={{
              color: "white",
            }}
            component="a"
            target="_blank"
            href={getGitSourceUrl(filePath)}
            type={ButtonColors.secondary}
            icon={Eye}
            className={styles["view-source"]}
          />
        </Tooltip>
      </Grid>
    </Grid>
  );
}

export default Pathline;
