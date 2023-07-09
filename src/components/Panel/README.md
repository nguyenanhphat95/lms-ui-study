### Simple Panel

```jsx
import { Panel } from "@fundoo/ui";

<Panel>
  <PanelBody>Simple panel</PanelBody>
</Panel>;
```

### Panel with heading

```jsx
import { Panel, PanelHeader, PanelBody } from "@fundoo/ui";

<Panel>
  <PanelHeader>Panel title</PanelHeader>
  <PanelBody>
    Some default panel content here. Nulla vitae elit libero, a pharetra augue.
    Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
    Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor
    id nibh ultricies vehicula ut id elit.
  </PanelBody>
</Panel>;
```

### Panel with sub heading

```jsx
import { Panel, PanelHeader, PanelBody, Typography } from "@fundoo/ui";

const panelHeaderStyle = {
  "flex-flow": "column",
  "align-items": "normal",
};

<Panel>
  <PanelHeader style={panelHeaderStyle}>
    <Typography component="p" weight="bold">
      Panel title
    </Typography>
    <Typography variant="caption">Panel subtitle</Typography>
  </PanelHeader>
  <PanelBody>
    Some default panel content here. Nulla vitae elit libero, a pharetra augue.
    Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
    Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor
    id nibh ultricies vehicula ut id elit.
  </PanelBody>
</Panel>;
```

### Panel with footer

```jsx
import { Panel, PanelBody, PanelFooter } from "@fundoo/ui";

<Panel>
  <PanelBody>
    Some default panel content here. Nulla vitae elit libero, a pharetra augue.
    Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
    Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor
    id nibh ultricies vehicula ut id elit.
  </PanelBody>
  <PanelFooter>Panel footer</PanelFooter>
</Panel>;
```

### Panel with heading and footer

```jsx
import { Panel, PanelHeader, PanelBody, PanelFooter } from "@fundoo/ui";

<Panel>
  <PanelHeader>Panel title</PanelHeader>
  <PanelBody>
    Some default panel content here. Nulla vitae elit libero, a pharetra augue.
    Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
    Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor
    id nibh ultricies vehicula ut id elit.
  </PanelBody>
  <PanelFooter>Panel footer</PanelFooter>
</Panel>;
```

### Panel non-border

```jsx
import { Panel, PanelHeader, PanelBody, PanelFooter } from "@fundoo/ui";

<Panel border={false}>
  <PanelHeader>Panel title</PanelHeader>
  <PanelBody>
    Some default panel content here. Nulla vitae elit libero, a pharetra augue.
    Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
    Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor
    id nibh ultricies vehicula ut id elit.
  </PanelBody>
  <PanelFooter>Panel footer</PanelFooter>
</Panel>;
```

### With tables

```jsx
import {
  Panel,
  PanelHeader,
  PanelBody,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@fundoo/ui";

const cellStyle = {
  padding: "1.2rem",
  borderBottom: "1px solid #ccc",
};

<Panel>
  <PanelHeader>Panel heading</PanelHeader>
  <PanelBody>
    Some default panel content here. Nulla vitae elit libero, a pharetra augue.
    Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
    Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor
    id nibh ultricies vehicula ut id elit.
  </PanelBody>
  <Table>
    <TableHeader>
      <TableRow>
        <TableCell inHeader={true} style={cellStyle}>
          #
        </TableCell>
        <TableCell inHeader={true} style={cellStyle}>
          First Name
        </TableCell>
        <TableCell inHeader={true} style={cellStyle}>
          Last Name
        </TableCell>
        <TableCell inHeader={true} style={cellStyle}>
          Username
        </TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell style={cellStyle}>1</TableCell>
        <TableCell style={cellStyle}>Mark</TableCell>
        <TableCell style={cellStyle}>Otto</TableCell>
        <TableCell style={cellStyle}>@mdo</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={cellStyle}>2</TableCell>
        <TableCell style={cellStyle}>Jacob</TableCell>
        <TableCell style={cellStyle}>Thornton</TableCell>
        <TableCell style={cellStyle}>@fat</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={cellStyle}>3</TableCell>
        <TableCell style={cellStyle}>Larry</TableCell>
        <TableCell style={cellStyle}>Bird</TableCell>
        <TableCell style={cellStyle}>@twitter</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</Panel>;
```

### With lists

```jsx
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Panel,
  PanelHeader,
  PanelBody,
} from "@fundoo/ui";

<Panel>
  <PanelHeader>Panel heading</PanelHeader>
  <PanelBody>
    Some default panel content here. Nulla vitae elit libero, a pharetra augue.
    Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
    Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor
    id nibh ultricies vehicula ut id elit.
  </PanelBody>
  <Divider />
  <List>
    <ListItem>
      <ListItemIcon icon={Clipboard} />
      <ListItemText>Item 1</ListItemText>
    </ListItem>
    <Divider />
    <ListItem>
      <ListItemIcon icon={Clipboard} />
      <ListItemText>Item 2</ListItemText>
    </ListItem>
  </List>
</Panel>;
```

### Custom

```jsx
import {
  Button,
  ButtonSizes,
  ButtonVariants,
  Grid,
  Icon,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  Typography,
} from "@fundoo/ui";

import Expand from "lms-icons/components/Expand";

const panelStyle = {
  boxShadow: "1px 1px 8px #ccc",
};
const panelHeaderStyle = {
  color: "#fff",
  backgroundColor: "#d52220",
};
const headerIconStyle = {
  marginRight: "1.2rem",
};

<Panel style={panelStyle}>
  <PanelHeader style={panelHeaderStyle}>
    <Icon component={Expand} style={headerIconStyle} />
    <Typography variant="body1" weight="bold" type="inherit">
      Panel title
    </Typography>
  </PanelHeader>
  <PanelBody>
    Some default panel content here. Nulla vitae elit libero, a pharetra augue.
    Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
    Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor
    id nibh ultricies vehicula ut id elit.
  </PanelBody>
  <PanelFooter>
    <Grid container spacing={4} justifyContent="flex-end">
      <Grid item md={1}>
        <Button size={ButtonSizes.sm}>Action 1</Button>
      </Grid>
      <Grid item md={1}>
        <Button size={ButtonSizes.sm} variant={ButtonVariants.secondary}>
          Action 2
        </Button>
      </Grid>
    </Grid>
  </PanelFooter>
</Panel>;
```
