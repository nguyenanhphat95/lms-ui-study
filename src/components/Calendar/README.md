## Usage

### Simple Calendar

- Required props: `date`, `onChange`

```jsx
import { DateTimeRangePicker } from "@fundoo/ui";
const [date, setDate] = React.useState(new Date());

<Calendar date={date} onChange={setDate} />;
```

#### Calendar Basic Attributes

#### Placeholder

```jsx
import { DateTimeRangePicker } from "@fundoo/ui";
const [date, setDate] = React.useState(null);

<Calendar placeholder="Please select date" date={date} onChange={setDate} />;
```

#### Disabled

```jsx
import { DateTimeRangePicker } from "@fundoo/ui";
const [date, setDate] = React.useState(null);

<Calendar disabled date={date} onChange={setDate} />;
```

#### Readonly

```jsx
import { DateTimeRangePicker } from "@fundoo/ui";
const [date, setDate] = React.useState(null);

<Calendar readOnly date={date} onChange={setDate} />;
```

### Control Date Display

#### Format Date

```jsx
import { DateTimeRangePicker } from "@fundoo/ui";
const [date, setDate] = React.useState(null);
const dateFormat = "yyyy/MM/dd";

<Calendar dateDisplayFormat={dateFormat} date={date} onChange={setDate} />;
```

#### Set Min Date And Max Date

- Default min date: 20 years after the current date.
- Default max date: 100 years before the current date .

```jsx
import { DateTimeRangePicker } from "@fundoo/ui";
import { startOfDay, endOfDay, addDays } from "date-fns";

const [date, setDate] = React.useState(null);
const minDate = startOfDay(new Date());
const maxDate = endOfDay(addDays(minDate, 2));

<Calendar minDate={minDate} maxDate={maxDate} date={date} onChange={setDate} />;
```

### Size display

#### Extra small

```jsx
import { DateTimeRangePicker } from "@fundoo/ui";
import { InputSizes } from "@fundoo/ui";

const [date, setDate] = React.useState(null);
const dateFormat = "yyyy/MM/dd";

<Calendar
  dateDisplayFormat={dateFormat}
  date={date}
  onChange={setDate}
  size={InputSizes.xs}
/>;
```

#### Small

```jsx
import { DateTimeRangePicker } from "@fundoo/ui";
import { InputSizes } from "@fundoo/ui";

const [date, setDate] = React.useState(null);
const dateFormat = "yyyy/MM/dd";

<Calendar
  dateDisplayFormat={dateFormat}
  date={date}
  onChange={setDate}
  size={InputSizes.sm}
/>;
```

#### Medium

```jsx
import { DateTimeRangePicker, InputSizes } from "@fundoo/ui";

const [date, setDate] = React.useState(null);
const dateFormat = "yyyy/MM/dd";

<Calendar
  dateDisplayFormat={dateFormat}
  date={date}
  onChange={setDate}
  size={InputSizes.md}
/>;
```

#### Large

```jsx
import { InputSizes } from "@fundoo/ui";

const [date, setDate] = React.useState(null);
const dateFormat = "yyyy/MM/dd";

<Calendar
  dateDisplayFormat={dateFormat}
  date={date}
  onChange={setDate}
  size={InputSizes.lg}
/>;
```

### Custom icon

```jsx
import { InputSizes } from "@fundoo/ui";
import CalendarIcon from "lms-icons/components/Calendar";

const [date, setDate] = React.useState(null);
const dateFormat = "yyyy/MM/dd";

<Calendar
  dateDisplayFormat={dateFormat}
  date={date}
  onChange={setDate}
  size={InputSizes.lg}
  icon={CalendarIcon}
/>;
```

### Custom before input

```jsx
import { DateTimeRangePicker, InputAdornment } from "@fundoo/ui";
import CalendarIcon from "lms-icons/components/Calendar";

const [date, setDate] = React.useState(null);
const dateFormat = "yyyy/MM/dd";

<Calendar
  dateDisplayFormat={dateFormat}
  date={date}
  onChange={setDate}
  beforeInput={
    <InputAdornment>
      <CalendarIcon />
    </InputAdornment>
  }
/>;
```
