export async function getCountries() {
  const data = await fetch("https://restcountries.eu/rest/v2/all", {
    method: "GET",
  });
  return await data.json();
}

export async function getCountriesByRegion(name) {
  const data = await fetch(`https://restcountries.eu/rest/v2/region/${name}`, {
    method: "GET",
  });
  return await data.json();
}

export async function getCountry(countryId) {
  const data = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${countryId}`,
    {
      method: "GET",
    }
  );
  return await data.json();
}
