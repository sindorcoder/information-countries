import "../../style/aboutmin.css";
import "../../style/globalmin.css";
import "./mode"
import { dataSingle } from "./data";
const info = window.location.search.split("?")[1];
const data = await dataSingle(info);
const cards = document.querySelector("#cards");
const form = document.querySelector(".form")
const search = document.querySelector(".header--search");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = `search.html?${search.value}`;
});

function renderData(data) {
  data.forEach((info) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card__image"><img width="100%" height="100%" loading="lazy" src="${
      info.flags.png
    }" alt="${info.flags.alt}" class="card__img"></div>
          <div class="card__info">
              <h3 class="card__title">${info.name.common}</h3>
              <p class="card__text">Capital: ${info.capital}</p>
              <p class="card__text">Region: ${info.region}</p>
              <p class="card__text">SubRegion: ${info.subregion}</p>
              <p class="card__text">Population: ${info.population}</p>
              <p class="card__text">Area: ${info.area}</p>
              <p class="card__text" data-id="${info.name.common}">Borders: ${
      info.borders ? info.borders : "not Border countries"
    }</p>
              <p class="card__text">Time Zone: ${info.timezones}</p>
          </div>`;
    cards.append(card);
  });
}

renderData(data);
