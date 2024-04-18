{
  let exchangeRates = {};

  const updateExchangeRates = async () => {
    try {
      const response = await fetch("https://open.er-api.com/v6/latest/PLN");
      const data = await response.json();
      exchangeRates = data.rates;
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const inputAmount = document.querySelector(".js-amount");
    const inputResult = document.querySelector(".js-result");

    const amount = inputAmount.value;

    const fromCurrency = document.querySelectorAll(".form__select")[0].value;
    const toCurrency = document.querySelectorAll(".form__select")[1].value;

    if (Object.keys(exchangeRates).length === 0) {
      console.log("Exchange rates not available. Updating...");
      updateExchangeRates().then(() => {
        calculateResult(amount, fromCurrency, toCurrency, inputResult);
      });
    } else {
      calculateResult(amount, fromCurrency, toCurrency, inputResult);
    }
  };

  const calculateResult = (amount, fromCurrency, toCurrency, inputResult) => {
    const result = (
      (amount * exchangeRates[toCurrency]) /
      exchangeRates[fromCurrency]
    ).toFixed(2);
    inputResult.value = result + " " + toCurrency;
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);

    updateExchangeRates();
  };

  init();
}
