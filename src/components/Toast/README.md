### Simple toast

```jsx
const [show, toggleToast] = React.useState(false);

const handleToast = () => toggleToast(!show);

<div>
  {show && (
    <Toast>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Toast>
  )}
  <Button fullWidth={false} onClick={handleToast}>
    Toggle toast
  </Button>
</div>;
```

### Toast with timeout

```jsx
import { Button, Toast } from "@fundoo/ui";

const toastTimer = React.useRef(null);
const [show, toggleToast] = React.useState(false);

const handleToast = () => toggleToast(true);

React.useEffect(() => {
  if (show) {
    toastTimer.current = setTimeout(() => {
      toggleToast(false);
    }, 3 * 1000);
  }
}, [show]);

React.useEffect(() => {
  return function cleanUp() {
    clearTimeout(toastTimer.current);

    toastTimer.current = null;
  };
}, []);

<div>
  {show && (
    <Toast>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Toast>
  )}
  <Button fullWidth={false} onClick={handleToast}>
    Show toast with timeout
  </Button>
</div>;
```

### Toast with position

```jsx
import { Button, Grid, Toast } from "@fundoo/ui";

const toastTimer = React.useRef(null);
const [show, toggleToast] = React.useState(false);
const [position, setPosition] = React.useState("center");

const handleToast = (newPosition) => {
  setPosition(newPosition);
  toggleToast(true);
};

React.useEffect(() => {
  if (show) {
    toastTimer.current = setTimeout(() => {
      toggleToast(false);
    }, 3 * 1000);
  }
}, [show]);

React.useEffect(() => {
  return function cleanUp() {
    clearTimeout(toastTimer.current);

    toastTimer.current = null;
  };
}, []);

const gridItemStyle = {
  textAlign: "center",
};

<div>
  {show && (
    <Toast justifyContent={position}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </Toast>
  )}
  <Grid container spacing={4} justifyContent="center">
    <Grid item md={4} style={gridItemStyle}>
      <Button fullWidth={false} onClick={() => handleToast("flex-start")}>
        flex-start
      </Button>
    </Grid>
    <Grid item md={4} style={gridItemStyle}>
      <Button fullWidth={false} onClick={() => handleToast("center")}>
        center
      </Button>
    </Grid>
    <Grid item md={4} style={gridItemStyle}>
      <Button fullWidth={false} onClick={() => handleToast("flex-end")}>
        flex-end
      </Button>
    </Grid>
  </Grid>
</div>;
```

### Custom toast

```jsx
import { Button, Icon, Toast, Typography } from "@fundoo/ui";

import Star from "lms-icons/components/Star";

const [show, toggleToast] = React.useState(false);

const handleToast = () => toggleToast(!show);

const toastStyle = {
  position: "relative",
  paddingRight: "8rem",
};
const iconStyle = {
  marginRight: "1.2rem",
  fill: "#fff",
};
const buttonStyle = {
  position: "absolute",
  right: "1.2rem",
};

<div>
  {show && (
    <Toast style={toastStyle}>
      <Icon component={Star} style={iconStyle} />
      <Typography variant="body2" type="invert">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Button
        variant="ghost"
        size="sm"
        fullWidth={false}
        style={buttonStyle}
        onClick={handleToast}
      >
        Close
      </Button>
    </Toast>
  )}
  <Button fullWidth={false} onClick={handleToast}>
    Toggle toast
  </Button>
</div>;
```
