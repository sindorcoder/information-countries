import "../../style/aboutmin.css"
import "../../style/globalmin.css"
import { dataSingle } from "./data"

const info = window.location.search.split("?")[1];

const data = await dataSingle(info);
