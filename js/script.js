{
    const welcome = () => {
        console.log("Witam i pozdrawiam szanownych developerów");
    }

    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        const theme = document.querySelector(".js-section__theme");

        body.classList.toggle("body--dark");
        theme.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";

    };

    const init = () => {
        const button = document.querySelector(".js-section__button");
        button.addEventListener("click", onChangeBackgroundClick);

        welcome();
    };

    init();
}