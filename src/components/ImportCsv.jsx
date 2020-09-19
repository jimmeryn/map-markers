import * as React from "react";
import CSVReader from "react-csv-reader";

// Data - Array of arrays where every array is one line from .csv
// Options - array of objects (with name and index property) set in OptionOrderList
//
// Read data line by line and for every line create optionObject with key - option.name and value - data from current line where index is taken from Options.
const formatData = (data, options) =>
  data.map(dataLine =>
    options.reduce(
      (optionObject, option) => ({
        ...optionObject,
        [option.name.toLowerCase()]: dataLine[option.index],
      }),
      {}
    )
  );

const dataSizeCheck = data =>
  data.length > 0 &&
  data.length <= 20 &&
  data.every(dataArray => dataArray.length === 5);

const ImportCsv = ({ options, setData, reportError }) => (
  <div className="import-csv">
    <CSVReader
      onFileLoaded={data => {
        if (dataSizeCheck(data)) {
          const formatedData = formatData(data, options);
          setData(formatedData);
        } else {
          reportError("Incorrect data. Please upload correct file.");
        }
      }}
    />
  </div>
);

export default ImportCsv;
