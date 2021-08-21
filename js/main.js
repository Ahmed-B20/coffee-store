// start header
let search = document.getElementById("search-btn");
let caret = document.getElementById("cart-btn");
let form = document.querySelector(".search-form");
let products = document.querySelector(".cart-items-container");
let nav = document.querySelector(".navbar");
let menu = document.querySelector("#menu-btn");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  form.classList.remove("active");
  products.classList.remove("active");
  menu.classList.toggle("fa-times");
});

search.addEventListener("click", () => {
  form.classList.toggle("active");
  products.classList.remove("active");
  nav.classList.remove("active");
});

caret.addEventListener("click", () => {
  products.classList.toggle("active");
  form.classList.remove("active");
  nav.classList.remove("active");
});

window.onscroll = () => {
  form.classList.remove("active");
  products.classList.remove("active");
  nav.classList.remove("active");
};

// window.onclick = () => {
//   form.classList.remove("active");
//   products.classList.remove("active");
//   nav.classList.remove("active");
// };
// end header
