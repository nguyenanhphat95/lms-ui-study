### Usage

Should be used <a href="/#/Components/Icon">Icon</a> to render svg components. Please fill color for svg components by `color` attribute. For example:

```css
svg {
  color: red;
}

svg:hover {
  color: red;
}
```

#### Example

```jsx
import Search from "lms-icons/components/Search";

<div>
  <Icon component={Search} style={{ color: "red" }} />
</div>;
```

### Icons list

```jsx
import Search from "lms-icons/components/Search";
import Layout from "./../../src/components/Layout/";
import copyToClipboard from "./../../src/utils/copyToClipboard";

import icons from "./icons";
import styles from "./styles.module.scss";

const [open, toggleDialog] = React.useState(false);
React.useEffect(() => {
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

const handleCopyFactory = (importCode) => () => {
  copyToClipboard(importCode);
  toggleDialog(true);
};

const getImportCode = (nameOfCode) =>
  `import ${nameOfCode} from 'lms-icons/components/${nameOfCode}';`;

const keysIcon = Object.keys(icons);
const content = keysIcon.map((key) => (
  <Grid key={key} item xs={3}>
    <Paper
      className={styles.item}
      onClick={handleCopyFactory(getImportCode(key))}
    >
      <div className={styles.preview}>
        <Icon component={icons[key]} width="36" height="36" />
      </div>
      <Typography
        component="div"
        variant="body2"
        truncate={1}
        className={styles.name}
      >
        {key}
      </Typography>
    </Paper>
  </Grid>
));

<React.Fragment>
  <Alert>
    Please click icon to copy <strong>import code</strong> to clipboard!
  </Alert>
  <br />
  <Grid container spacing={3}>
    {content}
  </Grid>
  {open && <Toast>Code was copied!</Toast>}
</React.Fragment>;
```
