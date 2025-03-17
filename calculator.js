// Get the result input element
const result = document.getElementById('result');

// Function to append a value to the display
function appendValue(value) {
    result.value += value;
}

// Function to clear the display
function clearDisplay() {
    result.value = '';
}

// Function to calculate the result
function calculate() {
    try {
        // Replace '×' with '*' for calculation
        let expression = result.value.replace(/×/g, '*');
        
        // Evaluate the expression and display the result
        result.value = eval(expression);
        
        // If the result is undefined or NaN, display error
        if (result.value === undefined || isNaN(result.value)) {
            result.value = 'Error';
        }
    } catch (error) {
        // In case of error, display 'Error'
        result.value = 'Error';
    }
}

// Function to remove the last character (backspace)
function backspace() {
    result.value = result.value.slice(0, -1);
}

// Add keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Numbers, operators, and decimal point
    if (/[\d+\-*/.=]/.test(key)) {
        if (key === '*') {
            appendValue('×');
        } else if (key === '=') {
            calculate();
        } else {
            appendValue(key);
        }
    }
    
    // Enter key for calculation
    if (key === 'Enter') {
        calculate();
    }
    
    // Backspace for deleting last character
    if (key === 'Backspace') {
        backspace();
    }
    
    // Escape key for clearing
    if (key === 'Escape') {
        clearDisplay();
    }
});
