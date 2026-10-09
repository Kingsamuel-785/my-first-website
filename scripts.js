"use strict";

// Get the calculator input fields
const firstInput = document.getElementById("num1");
const secondInput = document.getElementById("num2");

// Get the result display
const resultDisplay = document.getElementById("result");

// Get all four calculator buttons
const buttons = document.querySelectorAll("[data-operation]");

// Check that the calculator elements exist
if (!firstInput || !secondInput || !resultDisplay || buttons.length !== 4) {

    console.error(
        "Calculator error: Check the IDs in index.html."
    );

} else {

    // Make each calculator button work
    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Read the numbers entered by the user
            const firstValue = firstInput.value.trim();
            const secondValue = secondInput.value.trim();

            // Check whether both boxes contain numbers
            if (firstValue === "" || secondValue === "") {

                resultDisplay.textContent =
                    "Please enter both numbers.";

                return;
            }

            const a = Number(firstValue);
            const b = Number(secondValue);

            // Reject invalid numeric values
            if (!Number.isFinite(a) || !Number.isFinite(b)) {

                resultDisplay.textContent =
                    "Please enter valid numbers.";

                return;
            }

            // Identify the selected calculation
            const operation = button.dataset.operation;

            let answer;

            // Perform the calculation
            switch (operation) {

                case "+":
                    answer = a + b;
                    break;

                case "-":
                    answer = a - b;
                    break;

                case "*":
                    answer = a * b;
                    break;

                case "/":

                    if (b === 0) {

                        resultDisplay.textContent =
                            "Cannot divide by zero.";

                        return;
                    }

                    answer = a / b;
                    break;

                default:

                    resultDisplay.textContent =
                        "Unknown calculation.";

                    return;
            }

            // Display the answer
            resultDisplay.textContent = "Result: " + answer;

        });

    });

    console.log("Calculator loaded successfully!");

}