const loadsCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => displayCountry(data));
};
loadsCountries();

const displayCountry = (country) => {
  const countryDiv = document.getElementById("country-list");
  let div = "";
  country.forEach((eachCountry) => {
    console.log(eachCountry);
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerText = eachCountry.name.common;
    const p = document.createElement("p");
    p.innerText = eachCountry.capital;
    p.innerHTML = `<img src= "${eachCountry.flags.png}">`;
    div.appendChild(h3);
    div.appendChild(p);
    countryDiv.appendChild(div);
  });
};
