// Calculator Project
// A functional calculator using JavaScript objects, functions,
// event listeners, and arithmetic operations.

// Calculator Object

// This object stores the values needed to perform calculations.
const Calculator = {

    // The number currently displayed on the calculator screen.
    Display_Value: '0',

    // Stores the first number entered before an operator.
    First_Operand: null,

    // Determines whether the calculator is waiting for another number.
    Wait_Second_Operand: false,

    // Stores the selected mathematical operator.
    operator: null

};


// Number Input

// This function updates the display when a number button is clicked.
function Input_Digit(digit) {

    // Retrieves the current display value and operand status.
    const { Display_Value, Wait_Second_Operand } = Calculator;

    // If an operator was just pressed, begin entering a new number.
    if (Wait_Second_Operand === true) {

        Calculator.Display_Value = digit;

        Calculator.Wait_Second_Operand = false;

    } else {

        // Replace the initial zero or add the digit to the current number.
        Calculator.Display_Value = Display_Value === '0'
            ? digit
            : Display_Value + digit;

    }

}


// Decimal Input

// This function allows the user to enter decimal numbers.
function Input_Decimal(dot) {

    // If the calculator is waiting for the second number,
    // begin that number with a zero and decimal point.
    if (Calculator.Wait_Second_Operand === true) {

        Calculator.Display_Value = '0.';

        Calculator.Wait_Second_Operand = false;

        return;

    }

    // Prevent multiple decimal points in the same number.
    if (!Calculator.Display_Value.includes(dot)) {

        Calculator.Display_Value += dot;

    }

}


// Mathematical Operations

// This object stores functions for each mathematical operation.
const Perform_Calculation = {

    // Division
    '/': (First_Operand, Second_Operand) =>
        First_Operand / Second_Operand,

    // Multiplication
    '*': (First_Operand, Second_Operand) =>
        First_Operand * Second_Operand,

    // Addition
    '+': (First_Operand, Second_Operand) =>
        First_Operand + Second_Operand,

    // Subtraction
    '-': (First_Operand, Second_Operand) =>
        First_Operand - Second_Operand

};


// Operator Handling

// This function handles mathematical operators and calculates results.
function Handle_Operator(Next_Operator) {

    // Retrieve the values currently stored in the calculator.
    const {
        First_Operand,
        Display_Value,
        operator
    } = Calculator;

    // Convert the displayed number from a string into a number.
    const Value_of_Input = parseFloat(Display_Value);

    // Prevent calculations using an invalid number.
    if (Number.isNaN(Value_of_Input)) {

        return;

    }

    // If the calculator is waiting for another number,
    // allow the user to change the selected operator.
    if (operator && Calculator.Wait_Second_Operand) {

        Calculator.operator = Next_Operator;

        return;

    }

    // If this is the first number, store it.
    if (First_Operand === null) {

        Calculator.First_Operand = Value_of_Input;

    } else if (operator) {

        // Perform the calculation using the selected operator.
        const Value_Now = First_Operand;

        let result = Perform_Calculation[operator](
            Value_Now,
            Value_of_Input
        );

        // Handle division by zero and other invalid results.
        if (!Number.isFinite(result)) {

            Calculator.Display_Value = 'Error';

            Calculator.First_Operand = null;

            Calculator.operator = null;

            Calculator.Wait_Second_Operand = true;

            return;

        }

        // Round the result to reduce floating-point inaccuracies.
        result = Number(result.toPrecision(12));

        // Display the result and store it for another calculation.
        Calculator.Display_Value = String(result);

        Calculator.First_Operand = result;

    }

    // Wait for the next number to be entered.
    Calculator.Wait_Second_Operand = true;

    // Store the next mathematical operator.
    Calculator.operator = Next_Operator;

}


// Equals Button

// This function completes the calculation when equals is pressed.
function Calculate_Result() {

    // Retrieve the calculator's stored values.
    const {
        First_Operand,
        Display_Value,
        operator,
        Wait_Second_Operand
    } = Calculator;

    // Do nothing if there is no calculation to complete.
    if (operator === null || Wait_Second_Operand === true) {

        return;

    }

    // Convert the second number into a numeric value.
    const Second_Operand = parseFloat(Display_Value);

    // Perform the selected mathematical operation.
    let result = Perform_Calculation[operator](
        First_Operand,
        Second_Operand
    );

    // Display an error if the result is not a valid finite number.
    if (!Number.isFinite(result)) {

        Calculator.Display_Value = 'Error';

    } else {

        // Round the result to reduce floating-point inaccuracies.
        result = Number(result.toPrecision(12));

        // Convert the result into a string for the display.
        Calculator.Display_Value = String(result);

    }

    // Clear the previous operation so equals does not repeat it.
    Calculator.First_Operand = null;

    Calculator.operator = null;

    // The next number entered should begin a new calculation.
    Calculator.Wait_Second_Operand = true;

}


// Calculator Reset

// This function clears all values and returns the calculator to zero.
function Calculator_Reset() {

    Calculator.Display_Value = '0';

    Calculator.First_Operand = null;

    Calculator.Wait_Second_Operand = false;

    Calculator.operator = null;

}


// Update Calculator Screen

// This function updates the HTML display with the current value.
function Update_Display() {

    // Find the calculator screen in the HTML document.
    const display = document.querySelector('.calculator-screen');

    // Display the current calculator value.
    display.value = Calculator.Display_Value;

}


// Button Click Events

// Display the initial value when the page loads.
Update_Display();

// Find the container holding all calculator buttons.
const keys = document.querySelector('.calculator-keys');

// Listen for clicks on the calculator buttons.
keys.addEventListener('click', (event) => {

    // Identify the HTML element that was clicked.
    const { target } = event;

    // Ignore clicks that are not on calculator buttons.
    if (!target.matches('button')) {

        return;

    }

    // Handle the all-clear button.
    if (target.classList.contains('all-clear')) {

        Calculator_Reset();

        Update_Display();

        return;

    }

    // If the display contains an error, reset before new input.
    if (Calculator.Display_Value === 'Error') {

        Calculator_Reset();

    }

    // Handle mathematical operator buttons.
    if (target.classList.contains('operator')) {

        Handle_Operator(target.value);

        Update_Display();

        return;

    }

    // Handle the decimal button.
    if (target.classList.contains('decimal')) {

        Input_Decimal(target.value);

        Update_Display();

        return;

    }

    // Handle the equals button.
    if (target.classList.contains('equal-sign')) {

        Calculate_Result();

        Update_Display();

        return;

    }

    // Handle number buttons.
    Input_Digit(target.value);

    // Refresh the calculator screen.
    Update_Display();

});
