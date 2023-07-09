### Simple list

```jsx
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@fundoo/ui";

<Grid container spacing={6}>
  <Grid item md={3}>
    <Paper>
      <List>
        <ListItem>
          <ListItemText>Star 1</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Star 2</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText>Trash</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>Spam</ListItemText>
        </ListItem>
      </List>
    </Paper>
  </Grid>
</Grid>;
```

### Nested list

```jsx
import {
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@fundoo/ui";

const [isOpen, toggleList] = React.useState(false);

const handleToggleList = () => {
  toggleList(!isOpen);
};

<Grid container spacing={6}>
  <Grid item md={3}>
    <Paper>
      <List>
        <ListItem open={isOpen} activated={isOpen} onClick={handleToggleList}>
          <ListItemText>Click Me</ListItemText>
        </ListItem>
        <Collapse in={isOpen}>
          <List>
            <ListItem>
              <ListItemText>Level 2</ListItemText>
            </ListItem>
            <List>
              <ListItemText>Level 3</ListItemText>
            </List>
          </List>
        </Collapse>
        <ListItem>
          <ListItemText>Drafts</ListItemText>
        </ListItem>
      </List>
    </Paper>
  </Grid>
</Grid>;
```

### Interactive

```jsx
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@fundoo/ui";

import RightArrowV4 from "lms-icons/components/RightArrowV4";

<Grid container spacing={6}>
  <Grid item md={3} container spacing={4} direction="column">
    <Grid item>
      <Typography variant="subtitle2">Text only</Typography>
    </Grid>

    <Grid item>
      <Paper>
        <List>
          <ListItem>
            <ListItemText>Star</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Drafts</ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </Grid>

  <Grid item md={3} container spacing={4} direction="column">
    <Grid item>
      <Typography variant="subtitle2">Icon with text</Typography>
    </Grid>

    <Grid item>
      <Paper>
        <List>
          <ListItem>
            <ListItemText>Star</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Drafts</ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </Grid>

  <Grid item md={3} container spacing={4} direction="column">
    <Grid item>
      <Typography variant="subtitle2">Icon with text and action</Typography>
    </Grid>

    <Grid item>
      <Paper>
        <List>
          <ListItem>
            <ListItemText>Star</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Drafts</ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </Grid>

  <Grid item md={3} container spacing={4} direction="column">
    <Grid item>
      <Typography variant="subtitle2">Activated</Typography>
    </Grid>

    <Grid item>
      <Paper>
        <List>
          <ListItem activated>
            <ListItemText>Star</ListItemText>
            <ListItemAction icon={RightArrowV4} />
          </ListItem>
          <ListItem>
            <ListItemText>Drafts</ListItemText>
            <ListItemAction icon={RightArrowV4} />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </Grid>

  <Grid item md={3} container spacing={4} direction="column">
    <Grid item>
      <Typography variant="subtitle2">Disabled</Typography>
    </Grid>

    <Grid item>
      <Paper>
        <List>
          <ListItem disabled>
            <ListItemText>Star</ListItemText>
            <ListItemAction icon={RightArrowV4} />
          </ListItem>
          <ListItem>
            <ListItemText>Star</ListItemText>
            <ListItemAction icon={RightArrowV4} />
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </Grid>
</Grid>;
```

### Directions

```jsx
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@fundoo/ui";

<Grid container spacing={6}>
  <Grid item md={3} container spacing={4} direction="column">
    <Grid item>
      <Typography variant="subtitle2">Column (Default)</Typography>
    </Grid>

    <Grid item>
      <Paper>
        <List direction="column">
          <ListItem>
            <ListItemText>Star</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Drafts</ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </Grid>

  <Grid item md={3} container spacing={4} direction="column">
    <Grid item>
      <Typography variant="subtitle2">Column Reverse</Typography>
    </Grid>

    <Grid item>
      <Paper>
        <List direction="column-reverse">
          <ListItem>
            <ListItemText>Star</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Drafts</ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </Grid>

  <Grid item md={3} container spacing={4} direction="column">
    <Grid item>
      <Typography variant="subtitle2">Row</Typography>
    </Grid>

    <Grid item>
      <Paper>
        <List direction="row">
          <ListItem>
            <ListItemText>Star</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Drafts</ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </Grid>

  <Grid item md={3} container spacing={4} direction="column">
    <Grid item>
      <Typography variant="subtitle2">Row Reverse</Typography>
    </Grid>

    <Grid item>
      <Paper>
        <List direction="row-reverse">
          <ListItem>
            <ListItemText>Star</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Drafts</ListItemText>
          </ListItem>
        </List>
      </Paper>
    </Grid>
  </Grid>
</Grid>;
```

### List controls

#### Checkbox

```jsx
import {
  Checkbox,
  Grid,
  List,
  ListItem,
  ListItemAction,
  ListItemText,
  Paper,
} from "@fundoo/ui";

import RightArrowV4 from "lms-icons/components/RightArrowV4";

const [checked, setChecked] = React.useState({});

const handleChecked = (key) => {
  const newChecked = {
    ...checked,
    [key]: !checked[key],
  };

  setChecked(newChecked);
};

<Grid container spacing={6}>
  <Grid item md={3}>
    <Paper>
      <List>
        <ListItem activated={checked["c1"]}>
          <ListItemText>Line item 1</ListItemText>
          <ListItemAction icon={RightArrowV4} />
        </ListItem>
        <ListItem activated={checked["c2"]}>
          <ListItemText>Line item 2</ListItemText>
          <ListItemAction icon={RightArrowV4} />
        </ListItem>
      </List>
    </Paper>
  </Grid>
</Grid>;
```

### Inset list

```jsx
import { Grid, List, ListItem, ListItemText, Paper } from "@fundoo/ui";

<Grid container spacing={6}>
  <Grid item md={3}>
    <Paper>
      <List>
        <ListItem>
          <ListItemText>Chelsea Otakan</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText inset={true}>Eric Hoffman</ListItemText>
        </ListItem>
      </List>
    </Paper>
  </Grid>
</Grid>;
```
