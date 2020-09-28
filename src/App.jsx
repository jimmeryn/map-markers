import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles/styles.css";

import Menu from "./views/Menu";
import Map from "./views/Map";
import getDataFromAddresses from "./api/getDataFromAddress";
import { reportError, setLocation } from "./actions";
import ErrorSnackbar from "./components/ErrorSnackbar";

const App = () => {
  const { data, errors } = useSelector(state => ({
    data: state.data,
    errors: state.errors,
  }));

  const dispatch = useDispatch();
  const setDataLocation = (address, lat, lon) => {
    dispatch(setLocation(address, lat, lon));
  };
  const handleSetApiError = () =>
    dispatch(reportError("Server error. Please try again later."));

  React.useEffect(() => {
    if (data.length > 0) {
      try {
        data.forEach(dataItem =>
          getDataFromAddresses(dataItem, setDataLocation).catch(_error => {
            handleSetApiError();
          })
        );
      } catch (error) {
        handleSetApiError();
      }
    }
  }, [data.length]);

  return (
    <div className="App">
      <Menu />
      <ErrorSnackbar message={errors.error} />
      <Map
        markers={data.map(dataItem => ({
          name: dataItem.address,
          coordinates: [dataItem.lat, dataItem.lon],
          category: dataItem.category,
        }))}
        categories={[...new Set(data.map(dataItem => dataItem.category))]}
      />
    </div>
  );
};

export default App;
