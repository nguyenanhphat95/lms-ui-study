<Tabs value={tabSelected} onChange={onTabChange}>
  <Tab size="md" index="tab-1">
    Tab 1
  </Tab>
  <Tab size="md" index="tab-2">
    Tab 2
  </Tab>
</Tabs>

<TabPanel value={tabSelected} index="tab-1">
  Content of Tab 1
</TabPanel>
<TabPanel value={tabSelected} index="tab-2">
  Content of Tab 2
</TabPanel>
