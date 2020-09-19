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
