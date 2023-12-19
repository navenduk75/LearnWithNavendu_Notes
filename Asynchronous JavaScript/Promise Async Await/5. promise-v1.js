function allCountries() {
  return Promise.resolve(["USA", "Republic of India", "United Kingdom"]);
}

async function runIt() {
  const baseUrl = "https://restcountries.com/v3.1/name/";
  const fields = "name,capital,currencies,languages";

  allCountries()
    .then((countries) => {
      console.log(countries);
      countries.forEach((c) => {
        const url = `${baseUrl}${c}?fields=${fields}`;
        fetch(url).then((response) => {
          response.json().then((data) => console.log(data));
        });
      });
    })
    .catch((error) => {
      console.log("An error occured " + error);
    });
}

runIt();
