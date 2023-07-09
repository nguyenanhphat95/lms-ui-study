---

# Chip Example

```jsx
import { Grid } from '@fundoo/ui';
import { ChipVariants } from './ChipVariants';
import { ChipSizes } from './ChipSizes';
import { ChipColors } from './ChipColors';

<Grid container spacing={4}>
  <Grid item md={1}>
    <Chip label="Basic" />
  </Grid>
  <Grid item md={1}>
    <Chip label="Outlined" variant={ChipVariants.outlined} />
  </Grid>
  <Grid item md={1}>
    <Chip label="Disabled" disabled />
  </Grid>
  <Grid item md={2}>
    <Chip label="Clickable deletable"  />
  </Grid>
  <Grid item md={2}>
    <Chip
      label="Custom delete icon"
      deleteIcon={<Icon icon="checkmark" size="10" />}
    />
  </Grid>
  <Grid item md={1}>
    <Chip label="Clickable Link" component="a" clickable />
  </Grid>
  <Grid item md={2}>
    <Chip
      label="Deletable primary"
      color={ChipColors.primary}
    />
  </Grid>
  <Grid item md={2}>
    <Chip
      label="Deletable primary - outlined"
      
      color={ChipColors.primary}
      variant={ChipVariants.outlined}
    />
  </Grid>
  <Grid item md={3}>
    <Chip
      label="Deletable primary - outlined - add before icon"
      color={ChipColors.primary}
      variant={ChipVariants.outlined}
    />
  </Grid>
  <Grid item md={4}>
    <Chip
      label="Deletable secondary"
      color={ChipColors.primary}
    />
  </Grid>
</Grid>
```
