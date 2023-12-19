function allCountries() {
  return Promise.resolve(["USA", "Republic of India", "United Kingdom"]);
}

async function runIt() {
  const baseUrl = "https://restcountries.com/v3.1/name/";
  const fields = "name,capital,currencies,languages";

  allCountries().then((countries) => {
    console.log(countries);
    const countriesPromises = countries.map((c) => {
      const url = `${baseUrl}${c}?fields=${fields}`;
      return fetch(url);
    });

    Promise.all(countriesPromises).then((responses) => {
      Promise.all(responses.map((r) => r.json())).then((allData) =>
        allData.forEach((d) => console.log(d))
      );
    });
  });
}

runIt();
