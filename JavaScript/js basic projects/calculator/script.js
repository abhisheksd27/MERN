document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('result');
    const clearButton = document.getElementById('clear');
    const backButton = document.getElementById('backspace');
    const percentageButton = document.getElementById('percentage');
    const divideButton = document.getElementById('divide');
    const multiplyButton = document.getElementById('multiply');
    const subtractButton = document.getElementById('subtract');
    const addButton = document.getElementById('add');
    const equalsButton = document.getElementById('equals');
    const decimalButton = document.getElementById('decimal');
    const numberButtons = document.querySelectorAll('.number');

    let currentInput = '';
    let operator = '';
    let prevInput = '';

    // Event listeners for number buttons
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentInput += button.innerText;
            updateDisplay();
        });
    });

    // Event listener for clear button
    clearButton.addEventListener('click', () => {
        clear();
        updateDisplay();
    });

    // Event listener for backspace button
    backButton.addEventListener('click', () => {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    });

    // Event listener for percentage button
    percentageButton.addEventListener('click', () => {
        if (currentInput !== '') {
            currentInput = String(parseFloat(currentInput) / 100);
            updateDisplay();
        }
    });

    // Event listeners for operator buttons
    divideButton.addEventListener('click', () => handleOperator('/'));
    multiplyButton.addEventListener('click', () => handleOperator('*'));
    subtractButton.addEventListener('click', () => handleOperator('-'));
    addButton.addEventListener('click', () => handleOperator('+'));
    equalsButton.addEventListener('click', () => {
        if (currentInput !== '' && prevInput !== '') {
            calculate();
            updateDisplay();
        }
    });

    // Event listener for decimal button
    decimalButton.addEventListener('click', () => {
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay();
        }
    });

    // Function to handle operator button click
    function handleOperator(op) {
        if (currentInput !== '') {
            if (prevInput !== '') {
                calculate();
            }
            operator = op;
            prevInput = currentInput;
            currentInput = '';
        }
    }

    // Function to perform calculation
    function calculate() {
        const prev = parseFloat(prevInput);
        const current = parseFloat(currentInput);
        switch (operator) {
            case '+':
                currentInput = prev + current;
                break;
            case '-':
                currentInput = prev - current;
                break;
            case '*':
                currentInput = prev * current;
                break;
            case '/':
                currentInput = prev / current;
                break;
            default:
                return;
        }
        operator = '';
        prevInput = '';
    }

    // Function to clear calculator
    function clear() {
        currentInput = '';
        operator = '';
        prevInput = '';
    }

    // Function to update display
    function updateDisplay() {
        display.value = currentInput === '' ? '0' : currentInput;
    }
});
