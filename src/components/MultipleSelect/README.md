```jsx
import { InputSizes, TypoWeights } from '@fundoo/ui';
import styles from './styles.module.scss';
import React, { useState } from 'react';

const listing = [
  {
    name: 'cvtv',
    description: 'Consultant'
  },
  {
    name: 'topener',
    description: 'Topener'
  },
  {
    name: 'member',
    description: 'Member'
  },
  {
    name: '1',
    description: 'Admin'
  },
  {
    name: 'engineer',
    description: 'Engineer'
  },
  {
    name: 'helpdesk',
    description: 'Helpdesk'
  },
  {
    name: 'test1',
    description: 'Test 1'
  },
  {
    name: 'test2',
    description: 'Test 2'
  },
  {
    name: 'test3',
    description: 'Test 3'
  },
  {
    name: 'test4',
    description: 'Test 4'
  },
  {
    name: 'test5',
    description: 'Test 5'
  },
  {
    name: 'test6',
    description: 'Test 6'
  }
];

const [value, setValue] = useState([]);
const hobbies = ['Coding', 'Reading book', 'Playing game'];
const _hanleSelect = data => {
  setValue(data);
};

<Grid container spacing={4}>
  <Grid item md={3}>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography weight={TypoWeights.bold}>Multiple Select</Typography>
      </Grid>
      <Grid item>
        <MultipleSelect
          isShowSearchBox={true}
          title="Hạng đối tác"
          placeholder="Hạng đối tác"
          data={listing}
          data-key="name"
          data-label="description"
          onToggle={_hanleSelect}
          defaultValues={value}
          contentClassname={styles['custom-classname']}
          size={InputSizes.lg}
        />
      </Grid>
    </Grid>
  </Grid>
  <Grid item md={3}>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography weight={TypoWeights.bold}>Input</Typography>
      </Grid>
      <Grid item>
        <Input size={InputSizes.lg} value="Medium" />
      </Grid>
    </Grid>
  </Grid>
  <Grid item md={3}>
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography weight={TypoWeights.bold}>Dropdown List</Typography>
      </Grid>
      <Grid item>
        <DropdownList size={InputSizes.lg} value={'Coding'} onChange={setValue}>
          {hobbies.map(hobby => (
            <Option value={hobby} key={hobby}>
              {hobby}
            </Option>
          ))}
        </DropdownList>
      </Grid>
    </Grid>
  </Grid>
</Grid>;
```
