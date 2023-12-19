function allCountries() {
  return Promise.resolve(["USA", "Republic of India", "United Kingdom"]);
}

async function runIt() {
  const baseUrl = "https://restcountries.com/v3.1/name/";
  const fields = "name,capital,currencies,languages";

  const countries = await allCountries();
  console.log(countries);

  const countriesPromises = countries.map((c) => {
    const url = `${baseUrl}${c}?fields=${fields}`;
    return fetch(url);
  });

  const responses = await Promise.all(countriesPromises);
  const allData = await Promise.all(responses.map((r) => r.json()));
  allData.forEach((d) => console.log(d));
}

runIt();
