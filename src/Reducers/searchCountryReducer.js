import { SEARCH_COUNTRIES } from "../Actions/actionTypes";

const initialState = {
  country: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_COUNTRIES:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
}
