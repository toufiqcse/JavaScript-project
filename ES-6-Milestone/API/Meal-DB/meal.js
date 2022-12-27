// @ts-nocheck
// spinner function
const toggleSpinner = (displayStyle) => {
  document.getElementById("spinner").style.display = displayStyle;
};
const searchFood = async () => {
  const searchField = document.getElementById("search-field");
  const seachText = searchField.value;
  //clear searchField
  searchField.value = "";
  //spinner
  toggleSpinner("block");
  //   console.log(seachText);
  // for empty search text
  if (seachText == "") {
    const noText = document.querySelector(".show-no-result");
    noText.textContent = "";
    const div = document.createElement("div");
    div.classList.add("no-result");
    div.innerHTML = `
      <div class="p-4 bg-red warring">
        <p class="text-cneter">Please Enter Product Name</p>
      </div>
    `;
    noText.appendChild(div);
    toggleSpinner("none");
  } else {
    //load data from api
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${seachText}`;
    const res = await fetch(url);
    const data = await res.json();
    displaySearchResults(data.meals);
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => displaySearchResults(data.meals));
  }
};

const displaySearchResults = (meals) => {
  const searchResult = document.getElementById("search-result");

  searchResult.textContent = ""; //for close the prevoius result
  if (meals.length == 0) {
    console.log("No results found");
  }
  meals.forEach((item) => {
    // console.log(item);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div onclick = "loadMealData(${item.idMeal})" class="card mt-4">
                <img src="${item.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                  <h5 class="card-title">${item.strMeal}</h5>
                  <p class="card-text">${item.strInstructions.slice(
                    10,
                    100
                  )}</p>
            </div>
        </div>
    `;
    searchResult.appendChild(div);
  });
  toggleSpinner("none");
  const noText = document.querySelector(".show-no-result");
  noText.style.display = "none";
};

const loadMealData = async (mealId) => {
  // console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  const res = await fetch(url);
  const data = await res.json();
  displayMeal(data.meals[0]);
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => displayMeal(data.meals[0]));
};

const displayMeal = (meal) => {
  console.log(meal);
  const mealDetails = document.getElementById("meal-detais");
  mealDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("meals");

  div.innerHTML = `
    <div class="card mb-4">
      <img  src="${meal.strMealThumb}" class="img-fluid" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(10, 50)}</p>
      <button onclick ="closePopup()" class="btn btn-danger"> Close</button>
    </div>
  </div>
  `;
  mealDetails.appendChild(div);
};

// function openPopup() {
//   const popup = document.getElementById("open-popup");
//   popup.classList.add("open-popup");
//   return popup;
// }
