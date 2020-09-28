import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { reportError, setData } from "../actions";
import { Step, StepContent, StepLabel, Stepper } from "@material-ui/core";

import ImportCsv from "./ImportCsv";
import OptionsList from "./OptionsList";
import NextButton from "./NextButton";
import BackButton from "./BackButton";

const StepperComponent = ({ steps, hideMenu }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const options = useSelector(({ options }) => options);

  const dispatch = useDispatch();
  const setDataWrapper = data => dispatch(setData(data));
  const reportFileError = message => dispatch(reportError(message));

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleFinish = () => {
    handleNext();
    hideMenu();
  };

  // BUG: City to <another_option> and back to City -
  /**
   * City - 0, <another_param> - 1
   * City - 0, <another_param> - 0 <--- changing this, but nothing changes for City param
   * City - 0, <another_param> - 0 <--- set City to 0, but it already had been 0 so nothing changed
   * all names displayed, but Stepper breaks
   * using redux might not be the best idea (especially this way...)
   */
  const allOptionsSet = options =>
    !([...new Set(options.map(o => o.index))].length === options.length);

  const getStepContent = index => {
    switch (index) {
      case 0:
        return <OptionsList optionNames={options.map(opt => opt.name)} />;
      case 1:
        return (
          <ImportCsv
            options={options}
            setData={setDataWrapper}
            reportError={reportFileError}
          />
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Stepper
      activeStep={activeStep}
      orientation="vertical"
      style={{ backgroundColor: "transparent" }}
    >
      {steps.map((label, index) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
          <StepContent>
            {getStepContent(index)}
            <BackButton
              isDisabled={activeStep === 0}
              handleOnClick={handleBack}
            />
            <NextButton
              label={activeStep === steps.length - 1 ? "Finish" : "Next"}
              isDisabled={activeStep === 0 && allOptionsSet(options)}
              handleOnClick={
                activeStep === steps.length - 1 ? handleFinish : handleNext
              }
            />
          </StepContent>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
