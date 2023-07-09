## Usage

### Simple Date Range Picker

- Required props: `range`, `onChange`

```jsx
const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});

<DateTimeRangePicker range={selectionRange} onChange={setSelectionRange} />;
```

### Simple Date Time Range Picker

- Required props: `range`, `onChange`

```jsx
const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});

<DateTimeRangePicker
  hasTime
  range={selectionRange}
  onChange={setSelectionRange}
/>;
```

#### Date Time Range Picker Basic Attributes

#### Placeholder

```jsx
const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});

<DateTimeRangePicker
  placeholder="Please select date time"
  range={selectionRange}
  onChange={setSelectionRange}
/>;
```

#### Disabled

```jsx
const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});

<DateTimeRangePicker
  disabled
  range={selectionRange}
  onChange={setSelectionRange}
/>;
```

#### Readonly

```jsx
import { addDays } from 'date-fns';

const [selectionRange, setSelectionRange] = React.useState({
  startDate: new Date(),
  endDate: addDays(new Date(), 1)
});

<DateTimeRangePicker
  readOnly
  range={selectionRange}
  onChange={setSelectionRange}
/>;
```

### Control Date Time Display

#### Format Date

```jsx
const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});
const dateFormat = 'HH:mm yyyy/MM/dd';

<DateTimeRangePicker
  hasTime
  dateDisplayFormat={dateFormat}
  range={selectionRange}
  onChange={setSelectionRange}
/>;
```

#### Separate Date Format

```jsx
const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});

<DateTimeRangePicker
  separate=" to "
  range={selectionRange}
  onChange={setSelectionRange}
/>;
```

#### Total Month Display

- Default: 2 months.

```jsx
const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});

<DateTimeRangePicker
  months={3}
  range={selectionRange}
  onChange={setSelectionRange}
/>;
```

#### Show/Hide Static Range

- Default: true (show).

```jsx
const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});

<DateTimeRangePicker
  showStaticRange={false}
  range={selectionRange}
  onChange={setSelectionRange}
/>;
```

#### Set Min Date And Max Date

- Default min date: 20 years after the current date.
- Default max date: 100 years before the current date .

```jsx
import { startOfDay, endOfDay, addDays } from 'date-fns';

const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});
const minDate = startOfDay(new Date());
const maxDate = endOfDay(addDays(minDate, 2));

<DateTimeRangePicker
  minDate={minDate}
  maxDate={maxDate}
  range={selectionRange}
  onChange={setSelectionRange}
/>;
```

### Callback

#### Trigger Preview Change Date Time

```jsx
import { startOfDay, endOfDay, addDays } from 'date-fns';

const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});

const handlePreviewChange = range => {
  console.log({ range });
};

<DateTimeRangePicker
  range={selectionRange}
  onChange={setSelectionRange}
  onPreviewChange={handlePreviewChange}
/>;
```

### Size display

#### Extra small

```jsx
import { InputSizes } from '@fundoo/ui';

const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});

<DateTimeRangePicker
  range={selectionRange}
  size={InputSizes.xs}
  onChange={setSelectionRange}
/>;
```

#### Small

```jsx
import { InputSizes } from '@fundoo/ui';

const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});

<DateTimeRangePicker
  range={selectionRange}
  size={InputSizes.sm}
  onChange={setSelectionRange}
/>;
```

#### Medium

```jsx
import { InputSizes } from '@fundoo/ui';

const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});

<DateTimeRangePicker
  range={selectionRange}
  size={InputSizes.md}
  onChange={setSelectionRange}
/>;
```

#### Large

```jsx
import { InputSizes } from '@fundoo/ui';

const [selectionRange, setSelectionRange] = React.useState({
  startDate: null,
  endDate: null
});

<DateTimeRangePicker
  range={selectionRange}
  size={InputSizes.lg}
  onChange={setSelectionRange}
/>;
```
