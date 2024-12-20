document.getElementById('calculateButton').addEventListener('click', function () {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;

    let result;

    if (isNaN(number1) || isNaN(number2)) {
        result = 'Please enter valid numbers.';
    } else {
        switch (operator) {
            case '+':
                result = add(number1, number2);
                break;
            case '-':
                result = subtract(number1, number2);
                break;
            case '*':
                result = multiply(number1, number2);
                break;
            case '/':
                result = divide(number1, number2);
                break;
            default:
                result = 'Invalid operator.';
        }
    }

    document.getElementById(Result = 'result').textContent = result;
});

function add(a, b) {
    return (a + b).toFixed(2);
}

function subtract(a, b) {
    return (a - b).toFixed(2);
}

function multiply(a, b) {
    return (a * b).toFixed(2);
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero.';
    }
    return (a / b).toFixed(2);
}