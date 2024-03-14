let toogler = document.querySelector(".main-nav__toggle");
let navigation = document.querySelector(".main-nav");
toogler.addEventListener("click", function () {
  navigation.classList.toggle('main-nav--opened')
  navigation.classList.toggle('main-nav--closed')
});
