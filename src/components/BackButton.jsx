import React from "react";
import { Button } from "@material-ui/core";

const BackButton = ({ isDisabled, handleOnClick }) => (
  <Button disabled={isDisabled} onClick={handleOnClick}>
    Back
  </Button>
);

export default BackButton;
