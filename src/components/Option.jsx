import React from "react";
import { useDispatch } from "react-redux";
import { Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import { setOptionIndex } from "../actions";

const Option = ({ options, optionName, index, label }) => {
  const [value, setValue] = React.useState(optionName);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setValue(event.target.value);
    dispatch(setOptionIndex(event.target.value, index));
  };

  return (
    <div className="option">
      <FormControl className="option">
        <InputLabel>{label}</InputLabel>
        <Select value={value} onChange={handleChange}>
          {options.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Option;
