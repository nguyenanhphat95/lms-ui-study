const { selected, onChange } = useRadio('value-1');

<RadioGroup selected={selected} onChange={onChange}>
  {
    listRadio.map(item => (
      <Radio value={item}>{item}</Radio>
    ))
  }
</RadioGroup>;
