const loadsCountriesData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => displayCountryDataAPI(data));
};
loadsCountriesData();
const displayCountryDataAPI = (country) => {
  let countryData = "";

  country.map((eachCountryData) => {
    console.log(eachCountryData);

    // console.log(name);

    countryData += `
    <tr>
        <td>${eachCountryData.name.common}</td>
        <td>${eachCountryData.capital}</td>
        <td>${eachCountryData.currencies}</td>
        <td>${eachCountryData.population}</td>
        <td>${eachCountryData.region}</td>
        <td><img src="${eachCountryData.coatOfArms.png}"></td>
        <td>${eachCountryData.languages}</td>
        <td><img src="${eachCountryData.flags.png}"></td>
    `;
  });
  document.getElementById("table-body").innerHTML = countryData;
};
