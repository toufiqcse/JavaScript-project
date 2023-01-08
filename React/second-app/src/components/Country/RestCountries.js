import React, { useEffect, useState } from "react";

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h4>Visiting Every country of the World</h4>
      <div className="countries-container">
        {countries.map((country) => (
          <Country country={country} key={country.cca3}></Country>
        ))}
      </div>
    </div>
  );
}
// country components
function Country(props) {
  // destructure system
  const { area, population, name, flags } = props.country;
  return (
    <div className="countries">
      <h5>Name: {name.common}</h5>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
    </div>
  );
}
export default LoadCountries;
