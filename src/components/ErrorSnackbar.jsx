import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const ErrorSnackbar = ({ message }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return message ? (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity="error"
      >
        {message}
      </MuiAlert>
    </Snackbar>
  ) : null;
};

export default ErrorSnackbar;
