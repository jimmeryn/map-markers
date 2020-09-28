import React from "react";
import Option from "./Option";

const OptionsList = ({ optionNames }) => (
  <div className="options-list">
    {optionNames.map((name, index) => (
      <Option
        key={index}
        index={index}
        label={`Column ${index + 1}`}
        optionName={name}
        options={optionNames}
      />
    ))}
  </div>
);

export default OptionsList;
