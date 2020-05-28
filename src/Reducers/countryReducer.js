import { GET_COUNTRIES, FILTERED_COUNTRIES } from "../Actions/actionTypes";

const initialState = {
  countries: [],
  filteredCountries: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case FILTERED_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
      };

    default:
      return state;
  }
}
