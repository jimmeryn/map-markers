import { SET_DATA, SET_LOCATION } from "../actions";

const dataItem = (state, action) => {
  switch (action.type) {
    case SET_LOCATION:
      if (state.address !== action.address) {
        return state;
      }
      return { ...state, lat: action.lat, lon: action.lon };
    default:
      return state;
  }
};

const data = (state = [], action) => {
  switch (action.type) {
    case SET_DATA:
      return action.data;
    case SET_LOCATION:
      return state.map(dataIt => dataItem(dataIt, action));
    default:
      return state;
  }
};

export default data;
