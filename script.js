const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const popularSection = document.querySelector("#popular");
const loadMoreBtn = document.querySelector("#loadMoreBtn");

addEventListeners();

function addEventListeners() {
  burger.addEventListener("click", (event) => {
    menu.classList.toggle("hidden");
  });

  loadMoreBtn.addEventListener("click", () => {
    popularSection.classList.remove("hidden");
  });
}
