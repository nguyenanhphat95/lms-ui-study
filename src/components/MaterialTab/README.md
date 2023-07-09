```jsx
  import { MaterialTabs, MaterialTab } from '@fundoo/ui';

  const [selectedTab, setSelectedTab] = React.useState(0);
  const tabs = [
    {
      id: 1,
      title: 'Tab 1',
    },
    {
      id: 2,
      title: 'Tab number two',
    },
    {
      id: 2,
      title: 'Tab 3',
    },
  ];

  const _handleTabChange = (e, index) => {
    e.preventDefault();
    setSelectedTab(index);
  };

  <>
    <MaterialTabs
      value={selectedTab}
      onChange={_handleTabChange}
      indicatorColor="primary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="auto">
      {tabs.map((tab, index) => (
        <MaterialTab key={index} label={tab.title} />
      ))}
    </MaterialTabs>
    <Box pt={5}>
      Tab content of num {selectedTab + 1}
    </Box>
  </>
  
```

### Tab secondary color ( updating... )

```jsx
  import { MaterialTabs, MaterialTab } from '@fundoo/ui';

  const [selectedTab, setSelectedTab] = React.useState(0);
  const tabs = [
    {
      id: 1,
      title: 'Tab 1',
    },
    {
      id: 2,
      title: 'Tab number two',
    },
    {
      id: 2,
      title: 'Tab 3',
    },
  ];

  const _handleTabChange = (e, index) => {
    e.preventDefault();
    setSelectedTab(index);
  };

  <>
    <MaterialTabs
      value={selectedTab}
      onChange={_handleTabChange}
      indicatorColor="secondary"
      textColor="secondary"
      variant="scrollable"
      scrollButtons="auto">
      {tabs.map((tab, index) => (
        <MaterialTab key={index} label={tab.title} textColor="primary" />
      ))}
    </MaterialTabs>
    <Box pt={5}>
      Tab content of num {selectedTab + 1}
    </Box>
  </>
  
```
