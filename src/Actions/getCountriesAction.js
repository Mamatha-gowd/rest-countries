import { GET_COUNTRIES } from "./actionTypes";
const getCountries = () => (dispatch) => {
  let url = "https://restcountries.eu/rest/v2/all";
  fetch(url, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((countries) => dispatch({ type: GET_COUNTRIES, payload: countries }));
};
export { getCountries };
