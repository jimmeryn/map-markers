export const SET_OPTION_INDEX = "SET_OPTION_INDEX";
export const SET_DATA = "SET_DATA";
export const SET_LOCATION = "SET_LOCATION";

export const setOptionIndex = (name, index) => {
  return {
    type: SET_OPTION_INDEX,
    name,
    index,
  };
};

export const setData = (data) => {
  return {
    type: SET_DATA,
    data,
  };
};

export const setLocation = (address, lat, lon) => {
  return {
    type: SET_LOCATION,
    address,
    lat,
    lon,
  };
};

export const REPORT_ERROR = "REPORT_ERROR";

export const reportError = (error) => {
  return {
    type: REPORT_ERROR,
    error,
  };
};
