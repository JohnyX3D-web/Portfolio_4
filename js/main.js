const language = document.querySelector(".menu-header__language");
const select = document.querySelector(".menu-header__select");
const change = document.querySelector(".menu-header__chenges");

select.addEventListener("click", function () {
	change.classList.toggle("menu-header__chenges--open");
});
