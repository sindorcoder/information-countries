import toggleLoader from "./loader.js";
async function getData() {
  try {
    toggleLoader(true);
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    toggleLoader(false);
    return data;
  } catch (error) {
    console.log(error);
  }
}

const data = await getData();

export const dataSingle = async (name) => {
  try {
    toggleLoader(true);
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await response.json();
    toggleLoader(false);
    return data;
  } catch (error) {
    console.log(error);
  }
} 

export default data;