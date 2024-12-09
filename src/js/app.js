import "../../style/mainmin.css";
import "../../style/globalmin.css"
import data from "./data";
const cards = document.querySelector(".cards");
const search = document.querySelector(".header--search");

let searchInfo;

const dataFilter = [];

search.addEventListener("input", (e) => {
  searchInfo = e.target.value;

  const dataBase = data.filter((country) =>
    country.name.common.toLowerCase().includes(searchInfo.toLowerCase())
  );

  dataFilter.length = 0;
  if (dataBase.length > 0) {
    dataFilter.push(...dataBase);
  }
  renderCards(dataFilter.length > 0 ? dataFilter : data);
});

cards.addEventListener("click", (e) => {
  if (e.target.classList.contains("card__img")) {
    const id = e.target.dataset.id;
    if (id) {
      window.location.href = `about.html?${id}`;
    }
  }
});


function renderCards(dataArray) {
  cards.innerHTML = "";
  dataArray && dataArray.forEach((country) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card__image"><img width="100%" data-id="${country.name.common}" src="${country.flags.png}" alt="${country.flags.alt}" class="card__img"></div>
      <div class="card__info">
          <h3 class="card__title">${country.name.common}</h3>
          
          <p class="card__text">Capital: ${country.capital}</p>
          <p class="card__text">Region: ${country.region}</p>
          <p class="card__text">Population: ${country.population}</p>
          <p class="card__text">Area: ${country.area}</p>
          </div>
          `;
    cards.append(card);
  });
}
renderCards(data);