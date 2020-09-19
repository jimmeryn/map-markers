import { SET_OPTION_INDEX } from "../actions";

const defaultState = [
  { name: "City", index: 0 },
  { name: "State", index: 1 },
  { name: "Zip", index: 2 },
  { name: "Address", index: 3 },
  { name: "Category", index: 4 },
];

const option = (state, action) => {
  switch (action.type) {
    case SET_OPTION_INDEX:
      if (action.name !== state.name) {
        return state;
      }
      return {
        ...state,
        index: action.index,
      };
    default:
      return state;
  }
};

const options = (state = defaultState, action) => {
  switch (action.type) {
    case SET_OPTION_INDEX:
      return state.map(opt => option(opt, action));
    default:
      return state;
  }
};

export default options;
