import React from "react";
import { Button } from "@material-ui/core";

const NextButton = ({ label, isDisabled, handleOnClick }) => (
  <Button
    variant="contained"
    color="primary"
    disabled={isDisabled}
    onClick={handleOnClick}
  >
    {label}
  </Button>
);

export default NextButton;
