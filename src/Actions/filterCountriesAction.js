import { FILTERED_COUNTRIES } from "./actionTypes";
const getCountriesByRegion = (name) => (dispatch) => {
  let url = `https://restcountries.eu/rest/v2/region/${name}`;
  fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((filteredCountries) =>
      dispatch({ type: FILTERED_COUNTRIES, payload: filteredCountries })
    );
};
export { getCountriesByRegion };
