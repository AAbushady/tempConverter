(function () {
    'using strict';

    let celsius = 32.0;
    const MULTIPLIER = 1.8;
    const ADDEND = 32;

    let fahrenheit = (celsius * MULTIPLIER) + ADDEND;

    console.log(`Celsius: ${celsius} Fahrenheit: ${fahrenheit}`);
})();
