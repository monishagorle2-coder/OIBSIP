
const temperatureInput = document.getElementById("temperature");
const fromUnit = document.getElementById("from-unit");
const toUnit = document.getElementById("to-unit");

const convertButton = document.getElementById("convert-btn");
const swapButton = document.getElementById("swap-btn");
const resetButton = document.getElementById("reset-btn");

const result = document.getElementById("result");
const resultLabel = document.getElementById("result-label");
const errorMessage = document.getElementById("error-message");

// Convert the entered temperature into Celsius first
function convertToCelsius(value, unit) {
    if (unit === "C") {
        return value;
    }

    if (unit === "F") {
        return (value - 32) * 5 / 9;
    }

    return value - 273.15;
}

// Convert Celsius into the selected unit
function convertFromCelsius(value, unit) {
    if (unit === "C") {
        return value;
    }

    if (unit === "F") {
        return (value * 9 / 5) + 32;
    }

    return value + 273.15;
}

// Perform temperature conversion
function convertTemperature() {
    const value = parseFloat(temperatureInput.value);
    const from = fromUnit.value;
    const to = toUnit.value;

    errorMessage.textContent = "";

    if (temperatureInput.value.trim() === "" || !Number.isFinite(value)) {
        result.textContent = "--";
        resultLabel.textContent = "Your result will appear here";
        errorMessage.textContent = "Please enter a valid temperature.";
        return;
    }

    const minimumValues = {
        C: -273.15,
        F: -459.67,
        K: 0
    };

    if (value < minimumValues[from] - 0.0000001) {
        result.textContent = "--";
        resultLabel.textContent = "Invalid temperature";
        errorMessage.textContent =
            "Temperature cannot be below absolute zero.";
        return;
    }

    const celsiusValue = convertToCelsius(value, from);
    const convertedValue = convertFromCelsius(celsiusValue, to);

    const symbols = {
        C: "°C",
        F: "°F",
        K: "K"
    };

    result.textContent =
        `${Number(convertedValue.toFixed(2))} ${symbols[to]}`;

    resultLabel.textContent =
        `${value} ${symbols[from]} converted to ${symbols[to]}`;
}

// Swap the selected units
swapButton.addEventListener("click", function () {
    const previousFrom = fromUnit.value;

    fromUnit.value = toUnit.value;
    toUnit.value = previousFrom;

    if (temperatureInput.value.trim() !== "") {
        convertTemperature();
    } else {
        result.textContent = "--";
        resultLabel.textContent = "Units swapped. Enter a value to convert.";
        errorMessage.textContent = "";
    }
});

// Clear all fields
resetButton.addEventListener("click", function () {
    temperatureInput.value = "";
    fromUnit.value = "C";
    toUnit.value = "F";

    result.textContent = "--";
    resultLabel.textContent = "Your result will appear here";
    errorMessage.textContent = "";
});

// Convert when the button is clicked
convertButton.addEventListener("click", convertTemperature);

// Also convert when Enter is pressed
temperatureInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        convertTemperature();
    }
});
// Live conversion while typing
temperatureInput.addEventListener("input", function () {
    if (temperatureInput.value.trim() === "") {
        result.textContent = "--";
        resultLabel.textContent = "Your result will appear here";
        errorMessage.textContent = "";
        return;
    }

    convertTemperature();
});

// Live conversion when units change
fromUnit.addEventListener("change", convertTemperature);
toUnit.addEventListener("change", convertTemperature);

// Quick reference temperature buttons
const quickButtons = document.querySelectorAll(".quick-temp");

quickButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        temperatureInput.value = button.dataset.value;
        fromUnit.value = "C";

        convertTemperature();
    });
});