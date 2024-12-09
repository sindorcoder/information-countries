import "../../style/globalmin.css";
import "../../style/mainmin.css";
import { renderCards } from "../js/app";
import getData from "../js/data";
const info = window.location.search.split("?")[1];

const data = getData;

const dataFilter = data.filter((item) =>
  item.name.common.toLowerCase().includes(info.toLowerCase())
);

renderCards(dataFilter);
