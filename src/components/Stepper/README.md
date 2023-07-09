---

# Stepper Example

```jsx
const [activeStep, setActiveStep] = React.useState(0);
const steps = [
  { key: 1, label: 'Step 1' },
  { key: 2, label: 'Step 2' },
  { key: 3, label: 'Step 4' }
];
<>
  <Grid container spacing={4}>
    <Grid item xs={6}>
      <Stepper size="sm" activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step.key} onClick={() => setActiveStep(index)}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Grid>

    <Grid item xs={6}>
      <Stepper size="sm" activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.key} onClick={() => setActiveStep(index)}>
            <StepLabel noSpacingY={true}>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Grid>
  </Grid>
</>;
```
