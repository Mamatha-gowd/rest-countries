import { SEARCH_COUNTRIES } from "./actionTypes";
const searchCountries = (countryId) => (dispatch) => {
  let url = `https://restcountries.eu/rest/v2/alpha/${countryId}`;
  fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((countries) =>
      dispatch({ type: SEARCH_COUNTRIES, payload: countries })
    );
};
export { searchCountries };
