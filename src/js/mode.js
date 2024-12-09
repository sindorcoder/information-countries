document.querySelector("#switch").oninput = () => {
  if (document.querySelector("#switch").checked == true) {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.remove("dark");
  }
};
