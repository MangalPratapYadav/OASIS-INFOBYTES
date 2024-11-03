// Function to Convert Temperatures
function convertTemperature() {
    const inputTemp = document.getElementById('inputTemp').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (inputTemp === '') {
        document.getElementById('outputTemp').textContent = "Please Enter the Temperature First.";
        return; 
    }

    const inputTempValue = parseFloat(inputTemp);
    let outputTemp;

    if (inputUnit === 'celsius') {
        outputTemp = inputTempValue;
    } else if (inputUnit === 'fahrenheit') {
        outputTemp = (inputTempValue - 32) * 5 / 9;
    } else if (inputUnit === 'kelvin') {
        outputTemp = inputTempValue - 273.15;
    }

    if (outputUnit === 'celsius') {
        outputTemp = outputTemp;
    } else if (outputUnit === 'fahrenheit') {
        outputTemp = (outputTemp * 9 / 5) + 32;
    } else if (outputUnit === 'kelvin') {
        outputTemp = outputTemp + 273.15;
    }

    document.getElementById('outputTemp').textContent = outputTemp.toFixed(2);
}

function resetValues() {
    document.getElementById('inputTemp').value = '';
    document.getElementById('inputUnit').selectedIndex = 0;
    document.getElementById('outputUnit').selectedIndex = 0;
    document.getElementById('outputTemp').textContent = '-----';
}
