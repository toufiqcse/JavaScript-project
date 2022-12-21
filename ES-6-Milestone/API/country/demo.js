const loadsCoutryies = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountryName(data.currencies));
};
loadsCoutryies();

const displayCountryName = (obj) => {
  console.log(obj);

  obj.forEach((country) => {
    console.log(country);
  });
};
