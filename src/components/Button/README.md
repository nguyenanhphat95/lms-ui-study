## Button

#### Danger

```tsx
import { Button, ButtonColors } from "@fundoo/ui";

<Button color={ButtonColors.danger} fullWidth={false}>
  Danger
</Button>;
```

#### Primary (default)

```tsx
import { Button, ButtonColors } from "@fundoo/ui";

<Button color={ButtonColors.primary} fullWidth={false}>
  Button
</Button>;
```

#### Secondary

```tsx
import { Button, ButtonColors } from "@fundoo/ui";

<Button color={ButtonColors.secondary} fullWidth={false}>
  Button
</Button>;
```

#### Ghost

```tsx
import { Button, ButtonColors } from "@fundoo/ui";

<Button color={ButtonColors.ghost} fullWidth={false}>
  Button
</Button>;
```

#### Invert

```tsx
import { Button, ButtonColors } from "@fundoo/ui";

<Button color={ButtonColors.invert} fullWidth={false}>
  Button
</Button>;
```

#### Outlined

```tsx
import { Button, ButtonColors } from "@fundoo/ui";

<Grid container spacing={5}>
  <Grid item xs="auto">
    <Button color={ButtonColors.outlined} fullWidth={false}>
      Button
    </Button>
  </Grid>
  <Grid item xs="auto">
    <Button color={ButtonColors.outlined} fullWidth={false} chip>
      Button
    </Button>
  </Grid>
</Grid>;
```

### Disabled

```tsx
import { Button } from "@fundoo/ui";

<Button fullWidth={false} disabled>
  Button
</Button>;
```

### Loading

```tsx
import { Button } from "@fundoo/ui";

<Button fullWidth={false} loading>
  Button
</Button>;
```

**Interactive**

```tsx
import { useEffect, useState } from "react";
import { Button } from "@fundoo/ui";

const [loading, setLoading] = useState(false);
const onClick = () => {
  setLoading(true);
};

useEffect(() => {
  const timeout = setTimeout(() => {
    setLoading(false);
  }, 2000);

  return () => {
    clearTimeout(timeout);
  };
});

<Button fullWidth={false} loading={loading} onClick={onClick}>
  Button
</Button>;
```

### Icon Button

```tsx
import { Button, ButtonColors } from "@fundoo/ui";
import AddCircle from "lms-icons/components/AddCircle";
import Facebook from "lms-icons/components/Facebook";

<Grid container spacing={5}>
  <Grid item>
    <Button fullWidth={false} icon={AddCircle} />
  </Grid>
  <Grid item>
    <Button
      fullWidth={false}
      icon={Facebook}
      chip
      color={ButtonColors.outlined}
    />
  </Grid>
</Grid>;
```

### Sizes

```tsx
import { Grid, Button, ButtonSizes } from "@fundoo/ui";

<>
  <Grid container spacing={2} alignItem="end">
    <Grid item md={2}>
      <Button buttonSize={ButtonSizes.xl}>Extra Large</Button>
    </Grid>
    <Grid item md={2}>
      <Button buttonSize={ButtonSizes.lg}>Large</Button>
    </Grid>
    <Grid item md={2}>
      <Button buttonSize={ButtonSizes.md}>Medium</Button>
    </Grid>
    <Grid item md={2}>
      <Button buttonSize={ButtonSizes.sm}>Small</Button>
    </Grid>
    <Grid item md={2}>
      <Button buttonSize={ButtonSizes.xs}>Extra small</Button>
    </Grid>
  </Grid>
</>;
```

### All Variants

**Interactive**

```tsx
import { Grid, Button, ButtonColors } from "@fundoo/ui";

<Grid container spacing={2}>
  <Grid item md={2}>
    <Button color={ButtonColors.primary}>Primary</Button>
  </Grid>
  <Grid item md={2}>
    <Button color={ButtonColors.secondary}>Secondary</Button>
  </Grid>
  <Grid item md={2}>
    <Button color={ButtonColors.ghost}>Ghost</Button>
  </Grid>
  <Grid item md={2}>
    <Button color={ButtonColors.invert}>Invert</Button>
  </Grid>
</Grid>;
```

**Disabled**

```tsx
import { Grid, Button, ButtonColors } from "@fundoo/ui";

<Grid container spacing={2}>
  <Grid item md={2}>
    <Button color={ButtonColors.primary} disabled>
      Primary
    </Button>
  </Grid>
  <Grid item md={2}>
    <Button color={ButtonColors.secondary} disabled>
      Secondary
    </Button>
  </Grid>
  <Grid item md={2}>
    <Button color={ButtonColors.ghost} disabled>
      Ghost
    </Button>
  </Grid>
  <Grid item md={2}>
    <Button color={ButtonColors.invert} disabled>
      Invert
    </Button>
  </Grid>
</Grid>;
```

**Loading**

```tsx
import { Grid, Button, ButtonColors } from "@fundoo/ui";

<Grid container spacing={2}>
  <Grid item md={2}>
    <Button color={ButtonColors.primary} loading>
      Primary
    </Button>
  </Grid>
  <Grid item md={2}>
    <Button color={ButtonColors.secondary} loading>
      Secondary
    </Button>
  </Grid>
  <Grid item md={2}>
    <Button color={ButtonColors.ghost} loading>
      Ghost
    </Button>
  </Grid>
  <Grid item md={2}>
    <Button color={ButtonColors.invert} loading>
      Invert
    </Button>
  </Grid>
</Grid>;
```

**Icon Button**

```tsx
import { Grid, Button, ButtonColors, ButtonSizes } from "@fundoo/ui";
import AddCircle from "lms-icons/components/AddCircle";
import UserFilled from "lms-icons/components/UserFilled";

<Grid container spacing={7} direction="column">
  <Grid item>
    <Grid container spacing={2}>
      <Grid item md={2}>
        <Button color={ButtonColors.primary} icon={AddCircle} />
      </Grid>
      <Grid item md={2}>
        <Button color={ButtonColors.secondary} icon={AddCircle} />
      </Grid>
      <Grid item md={2}>
        <Button color={ButtonColors.ghost} icon={AddCircle} />
      </Grid>
      <Grid item md={2}>
        <Button color={ButtonColors.invert} icon={AddCircle} />
      </Grid>
    </Grid>
  </Grid>
  <Grid item>
    <Grid container spacing={2}>
      <Grid item md={2}>
        <Button
          buttonSize={ButtonSizes.xl}
          color={ButtonColors.primary}
          icon={UserFilled}
        />
      </Grid>
      <Grid item md={2}>
        <Button
          buttonSize={ButtonSizes.xl}
          color={ButtonColors.secondary}
          icon={UserFilled}
        />
      </Grid>
      <Grid item md={2}>
        <Button
          buttonSize={ButtonSizes.xl}
          color={ButtonColors.ghost}
          icon={UserFilled}
        />
      </Grid>
      <Grid item md={2}>
        <Button
          buttonSize={ButtonSizes.xl}
          color={ButtonColors.invert}
          icon={UserFilled}
        />
      </Grid>
    </Grid>
  </Grid>
</Grid>;
```

#### Chip

```tsx
import { Button, ButtonColors } from "@fundoo/ui";

<Grid container spacing={4}>
  <Grid item xs={2}>
    <Button color={ButtonColors.primary} fullWidth={false} fullWidth chip>
      Đăng nhập
    </Button>
  </Grid>
</Grid>;
```
