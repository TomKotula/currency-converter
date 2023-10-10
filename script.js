let currencyElement = document.querySelector(".js-currency");
let courseElement = document.querySelector(".js-course");
let formElement = document.querySelector(".js-form");
let buttonResult = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let currency = currencyElement.value;
    let course = courseElement.value;

    let result = currency * course + "zł";

    buttonResult.innerText = result;
})