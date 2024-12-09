const loaders = document.querySelector(".loaders");
const toggleLoader = (info) => {
  if (info) {
    loaders.classList.remove("hidden");
} else {
    loaders.classList.add("hidden");
  }
};
export default toggleLoader;
