```jsx
import {
  Grid,
  Collapse,
  Icon,
  Paper,
  PaperRadius,
  Typography,
  TypoWeights,
} from "@fundoo/ui";
import styles from "./styles.module.scss";
const [isActive, setIsActive] = React.useState(false);
import ArrowDown from "lms-icons/components/ArrowDown";
import Expand from "lms-icons/components/Expand";

const _toggleCollapse = () => {
  setIsActive(!isActive);
};

<Paper
  elevation={1}
  radius={PaperRadius.light}
  className={styles["faq-item"]}
  onClick={_toggleCollapse}
>
  <Box px={4} py={4}>
    <Grid container direction="column">
      <Grid item>
        <Grid container alignItem="center" justifyContent="space-between">
          <Grid item md={11}>
            <Button>Click anyway to expand</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Collapse in={isActive}>
          <Box p={5}>
            <div className={styles["content"]}>Content is here</div>
          </Box>
        </Collapse>
      </Grid>
    </Grid>
  </Box>
</Paper>;
```
