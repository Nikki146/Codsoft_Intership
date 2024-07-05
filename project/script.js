let displayValue = '0';

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = '';
    }
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}
