window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function () {
  const toogleBtn = document.querySelector(".toogle_btn");
  const toggleBtnIcon = document.querySelector(".toogle_btn i");
  const dropdownMenu = document.querySelector(".dropdown_menu");

  toogleBtn.onclick = function () {
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen
      ? "fa-solid fa-x"
      : "fa-solid fa-bars";
  };
});