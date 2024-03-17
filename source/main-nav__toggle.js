let nojs = document.querySelector(".main-nav--nojs");
let toogler = document.querySelector(".main-nav__toggle");
let navigation = document.querySelector(".main-nav");
nojs.classList.remove("main-nav--nojs");
toogler.addEventListener("click", function () {
  navigation.classList.toggle("main-nav--opened");
  navigation.classList.toggle("main-nav--closed");
});
