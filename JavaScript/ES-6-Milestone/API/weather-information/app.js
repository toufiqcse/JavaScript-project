// @ts-nocheck
const api_key = `8b3b0997b4ab967346e7075a70ab221a`;
const searchTemperatures = () => {
  const city = document.getElementById("search-field");
  const cityName = city.value;
  city.value = "";
  if (cityName === "") {
    alert("Please Enter City Name");
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => displayTemperature(data));
  }
};

//function for set innerText
const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemperature = (temperature) => {
  console.log(temperature);
  if (!temperature) {
    alert("Please select a temperature");
  } else {
    setInnerText("city-name", temperature.name);
    setInnerText("temperature", temperature.main.temp);
    setInnerText("temp-condition", temperature.weather[0].main);

    // weaher icon
    const urlIcon = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute("src", urlIcon);
    //
    const watheerInfoBody = document.getElementById("weather-info");
    watheerInfoBody.textContent = "";
    const div = document.createElement("div");
    const km = temperature.visibility / 1000;
    div.innerHTML = `
        <div class="d-flex g-5 text-center">
            <h6 id="humidity">Humidity: ${temperature.main.humidity}%</h6>
            <h6 id="visibility">Visibility: ${km}km</h6>
            <h6 id="w-speed">Wind Speed: ${temperature.wind.speed}</h6>
        </div>
        <div class="d-flex">
            <h6 id="feel">Feels Like: ${temperature.main.feels_like}</h6>
            <h6 id="prs">Pressure: ${temperature.main.pressure}Pa</h6>
        </div>
  `;
    watheerInfoBody.appendChild(div);
    // datetime
    const dateField = document.getElementById("date-time");
    const dateObj = new Date();
    const dateFOrmat = dateObj.toLocaleDateString("BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    dateField.innerHTML = dateFOrmat;
  }
};
