

let delBtn = document.querySelector(".main__delBtn");
let title = document.querySelector(".header__title");



delBtn.addEventListener("click", () => {
    title.remove();
});

let button = document.querySelector(".header__button");
let body = document.querySelector(".body");
let buttonName = document.querySelector(".header__buttonName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    buttonName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});






