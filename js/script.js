console.log("Witam i pozdrawiam szanownych developerów");

let button = document.querySelector(".js-section__button");
let body = document.querySelector(".js-body");
let theme = document.querySelector(".js-section__theme");

button.addEventListener("click", () => {
    body.classList.toggle("darkTheme");
    theme.innerText = body.classList.contains("darkTheme") ? "jasny" : "ciemny";
})
