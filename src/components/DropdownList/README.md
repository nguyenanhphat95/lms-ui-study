## Usage

### Simple DropdownList

```jsx
import { DropdownList, Option } from "@fundoo/ui";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState(hobbies[0]);

<DropdownList value={value} onChange={setValue}>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

### DropdownList Attributes

#### Placeholder

- Note: the placeholder work with value of DropdownList is `undefined` or `null`.

```jsx
import { DropdownList, Option } from "@fundoo/ui";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState();

<DropdownList placeholder="Choose hobby" value={value} onChange={setValue}>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

#### Disabled

```jsx
import { DropdownList, Option } from "@fundoo/ui";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState(hobbies[0]);

<DropdownList disabled value={value} onChange={setValue}>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

### Custom style

```jsx
import { DropdownList, Option } from "@fundoo/ui";
import styles from "./styles.module.scss";

const hobbies = ["Coding", "Reading book", "Playing game", "Cooking"];
const [value, setValue] = React.useState(hobbies[0]);

<DropdownList
  editable={true}
  value={value}
  onChange={setValue}
  className={styles.select}
  menuClassName={styles.customMenu}
>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

### Event handler

- The events includes: `onChange`, `onClick`, `onFocus`, `onBlur`.

```jsx
import { DropdownList, Option } from "@fundoo/ui";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState(hobbies[0]);

const handleClick = (event) => {
  console.log("handleClick", { event });
};

const handleFocus = (event) => {
  console.log("handleFocus", { event });
};

const handleBlur = (event) => {
  console.log("handleBlur", { event });
};

<DropdownList
  value={value}
  onChange={setValue}
  onClick={handleClick}
  onFocus={handleFocus}
  onBlur={handleBlur}
>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

### Status

#### Primary

```jsx
import { DropdownList, Option, InputColors } from "@fundoo/ui";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState(hobbies[0]);

<DropdownList status={InputColors.primary} value={value} onChange={setValue}>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

#### Success

```jsx
import { DropdownList, Option, InputColors } from "@fundoo/ui";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState(hobbies[0]);

<DropdownList status={InputColors.success} value={value} onChange={setValue}>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

#### Warning

```jsx
import { DropdownList, Option, InputColors } from "@fundoo/ui";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState(hobbies[0]);

<DropdownList status={InputColors.warning} value={value} onChange={setValue}>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

#### Error

```jsx
import { DropdownList, Option, InputColors } from "@fundoo/ui";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState(hobbies[0]);

<DropdownList status={InputColors.error} value={value} onChange={setValue}>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

### Size display

#### Extra small

```jsx
import { DropdownList, Option, InputSizes } from "@fundoo/ui";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState(hobbies[0]);

<DropdownList size={InputSizes.xs} value={value} onChange={setValue}>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby} size={InputSizes.xs}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

#### Small

```jsx
import { DropdownList, Option, InputSizes } from "@fundoo/ui";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState(hobbies[0]);

<DropdownList size={InputSizes.sm} value={value} onChange={setValue}>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby} size={InputSizes.sm}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

#### Medium

```jsx
import { DropdownList, Option, InputSizes } from "@fundoo/ui";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState(hobbies[0]);

<DropdownList size={InputSizes.md} value={value} onChange={setValue}>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby} size={InputSizes.md}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

#### Large

- The large size is default.

```jsx
import { DropdownList, Option, InputSizes } from "@fundoo/ui";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState(hobbies[0]);

<DropdownList size={InputSizes.lg} value={value} onChange={setValue}>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby} size={InputSizes.lg}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```

### Custom before input

```jsx
import { DropdownList, Option, InputAdornment } from "@fundoo/ui";
import Bell from "lms-icons/components/Bell";

const hobbies = ["Coding", "Reading book", "Playing game"];
const [value, setValue] = React.useState(hobbies[0]);

<DropdownList
  value={value}
  onChange={setValue}
  beforeInput={
    <InputAdornment>
      <Bell />
    </InputAdornment>
  }
>
  {hobbies.map((hobby) => (
    <Option value={hobby} key={hobby}>
      {hobby}
    </Option>
  ))}
</DropdownList>;
```
