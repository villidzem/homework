let currencyField = document.querySelector(".js-currency__field");
let currencyAmount = document.querySelector(".js-amount");
let finalAmount = document.querySelector(".js-finalAmount");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("input", () => {

    let exchangeRate;

    switch (currencyField.value) {
        case 'USD':
            exchangeRate = 4.15;
            break;
        case 'EUR':
            exchangeRate = 4.55;
            break;
        case 'CZK':
            exchangeRate = 0.19;
    };


    let final = exchangeRate * currencyAmount.value;

    if (currencyAmount.value > 0) {
        finalAmount.value = final.toFixed(2);
    } else {
        finalAmount.value = 'wpisz kwote powyrzej 0'
    }


});










