### Sizes

#### Basic

```jsx
import { Input, InputSizes } from "@fundoo/ui";

<React.Fragment>
  <Grid container spacing={5} alignItem="end">
    <Grid item md={2}>
      <Input size={InputSizes.lg} value="Large | default" />
    </Grid>
    <Grid item md={2}>
      <Input size={InputSizes.md} value="Medium" />
    </Grid>
    <Grid item md={2}>
      <Input size={InputSizes.sm} value="Small" />
    </Grid>
    <Grid item md={2}>
      <Input size={InputSizes.xs} value="Extra small" />
    </Grid>
  </Grid>
</React.Fragment>;
```

#### With adornments

```jsx
import { Input, InputAdornment, InputSizes, Icon } from "@fundoo/ui";
import Search from "lms-icons/components/Search";

<React.Fragment>
  <Grid container spacing={5} alignItem="end">
    <Grid item md={2}>
      <Input
        size={InputSizes.lg}
        value="Large | default"
        afterInput={
          <InputAdornment>
            <Icon component={Search} />
          </InputAdornment>
        }
      />
    </Grid>
    <Grid item md={2}>
      <Input
        size={InputSizes.md}
        value="Medium"
        afterInput={
          <InputAdornment>
            <Icon component={Search} />
          </InputAdornment>
        }
      />
    </Grid>
    <Grid item md={2}>
      <Input
        size={InputSizes.sm}
        value="Small"
        afterInput={
          <InputAdornment>
            <Icon component={Search} />
          </InputAdornment>
        }
      />
    </Grid>
    <Grid item md={2}>
      <Input
        size={InputSizes.xs}
        value="Extra small"
        afterInput={
          <InputAdornment>
            <Icon component={Search} />
          </InputAdornment>
        }
      />
    </Grid>
  </Grid>
</React.Fragment>;
```

### Status

```jsx
import { Input, InputColors } from "@fundoo/ui";

<React.Fragment>
  <Grid container spacing={5} alignItem="end">
    <Grid item md={2}>
      <Input color={InputColors.primary} value="primary | default" />
    </Grid>
    <Grid item md={2}>
      <Input color={InputColors.success} value="success" />
    </Grid>
    <Grid item md={2}>
      <Input color={InputColors.warning} value="warning" />
    </Grid>
    <Grid item md={2}>
      <Input color={InputColors.error} value="error" />
    </Grid>
  </Grid>
</React.Fragment>;
```

### Input Adornments

```jsx
import { Input, InputAdornment, Icon } from "@fundoo/ui";
import Search from "lms-icons/components/Search";
import Folder from "lms-icons/components/Folder";

<React.Fragment>
  <Grid container spacing={5} alignItem="end">
    <Grid item md={2}>
      <Input
        value="After Input"
        placeholder="After Input"
        afterInput={<InputAdornment>VND</InputAdornment>}
      />
    </Grid>
    <Grid item md={2}>
      <Input
        value="After Input with Icon"
        placeholder="After Input"
        afterInput={
          <InputAdornment>
            <Icon component={Search} />
          </InputAdornment>
        }
      />
    </Grid>
    <Grid item md={2}>
      <Input
        value="Before Input"
        beforeInput={<InputAdornment>VND</InputAdornment>}
      />
    </Grid>
    <Grid item md={2}>
      <Input
        value="Before Input with Icon"
        beforeInput={
          <InputAdornment>
            <Icon component={Folder} />
          </InputAdornment>
        }
      />
    </Grid>
  </Grid>
</React.Fragment>;
```
