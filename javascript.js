
let a = "";
let b = "";
let operator = "";


const displayScreen = document.getElementById('display');

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clear);

const numbers = document.querySelectorAll('.num');
numbers.forEach(number => {
    number.addEventListener('click', e => {
        if (operator === '') {
            a += e.target.innerText;
            console.log(a);
        } else {
            displayScreen.textContent = b;
            b += e.target.innerText;
            console.log(b);
        }
    });
});

const decimalPoint = document.getElementById('decimal'); // adds decimals onto display
decimalPoint.addEventListener('click', () => {
   displayNumber('.');
});

const operators = document.querySelectorAll('.oper');
operators.forEach(op => {
    op.addEventListener('click', e => {
        if (e.target.innerText !== '=' && b == '') {
            operator = e.target.innerText;
        }else if (e.target.innerText !== '=' && b !== '') {    
            a = operate(operator, a, b);
            b = '';
            operator = e.target.textContent;
            displayScreen.textContent = a; 
        }else {
            a = operate(operator, a, b); 
            b = '';
            operator = '';
            displayScreen.textContent = a;
        }
    });
});

// pressing button displays number
function numButtons() {
    for (let i = 0; i <= 9; i++) {
        const numButton = document.getElementById(`button-${i}`);
        numButton.addEventListener('click', () => {
            displayNumber(i);
        });
    }
}

function displayNumber(number) {
    if (displayScreen.textContent === '0') {
        displayScreen.textContent = '';
    }
    if (displayScreen.textContent.length < 10) {
        if (number === '.') {
            if (displayScreen.textContent.indexOf('.') === -1) {
                if (displayScreen.textContent === '') {
                    displayScreen.textContent = '0.';
                } else {
                    displayScreen.textContent = displayScreen.textContent + number;
            }
        }
    } else {
        displayScreen.textContent = displayScreen.textContent + number;
        }
    }
}
numButtons();

function clear() {
        displayScreen.textContent = '0';
        a = '';  // added to clear the stored variables
        b = '';
        operator = '';
}

//operator functions

function operate(operator, a, b) {
    let result;
    if(operator === '+') {
        result = add(a, b);
    } else if (operator === '-') {
        result = subtract(a, b);
    } else if (operator === '*') {
        result = multiply(a, b);
    } else if (operator === '/') {
        result = divide(a, b);
    }
        if (result.toString().length > 10) { // added to round down to max 3 decimals
            result = Number(result.toFixed(3));
    }
    return result;
}

// changed parseInt to parseFloat for decimal calculations
function add(a, b) {
    return (parseFloat(a) + (parseFloat(b))); 
}

function subtract(a, b) {
    return (parseFloat(a) - (parseFloat(b)));
}

function multiply(a, b) {
    return (parseFloat(a) * (parseFloat(b)));
}

function divide (a, b) {
    if (b === '0') { 
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank'); 
    } else {
    return (parseFloat(a) / (parseFloat(b)));
}
}