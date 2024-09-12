let operand1 = '';
let operand2 = '';
let operator = null;

function appendNumber(number) {
    if (operator === null) {
        operand1 += number;
        updateDisplay(operand1);
    } else {
        operand2 += number;
        updateDisplay(operand2);
    }
}

function setOperator(op) {
    if (operator !== null) {
        calculate();
    }
    operator = op;
}

function calculate() {
    let result;
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    updateDisplay(result);
    operand1 = result.toString();
    operand2 = '';
    operator = null;
}

function clearDisplay() {
    operand1 = '';
    operand2 = '';
    operator = null;
    updateDisplay('');
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
