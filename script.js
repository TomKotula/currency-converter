{
    const welcome = () => {
        console.log("Hello every single person visiting this website! :D");
    }

    const onSubmitButton = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const courseElement = document.querySelector(".js-course");
        const buttonResult = document.querySelector(".js-result");

        const currency = currencyElement.value;
        const course = courseElement.value;

        const result = currency * course + "zł";

        buttonResult.innerText = result;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onSubmitButton);

        welcome();
    };

    init();
}
