import { combineReducers } from "redux";

import countryReducer from "./countryReducer";
import searchCountryReducer from "./searchCountryReducer";

export default combineReducers({
  countryReducer,
  searchCountryReducer,
});
