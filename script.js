{
    const welcome = () => {
        console.log("Hello every single person visiting this website! :D");
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const inputAmount = document.querySelector(".js-amount");
        const inputResult = document.querySelector(".js-result");

        const amount = inputAmount.value;
        const course = 4.45;

        const result = (amount * course).toFixed(2) + "zł";

        inputResult.value = result;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);

        welcome();
    };

    init();
}
