import { REPORT_ERROR } from "../actions";

const errors = (state = { status: "ok", error: null }, action) => {
  switch (action.type) {
    case REPORT_ERROR:
      return { status: "error", error: action.error };
    default:
      return state;
  }
};

export default errors;
