(function () {
    'use strict';

    var celsius = 32.0;
    const MULTIPLICATOR = 1.8;
    const ADDITIVE = 32;

    var fahrenheit = (celsius * MULTIPLICATOR) + ADDITIVE;

    console.log(`Celsius: ${celsius} Fahrenheit: ${fahrenheit}`);
})();