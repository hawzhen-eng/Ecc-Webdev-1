var firstnum = "";
var operator = "";
var oper_was_last = false;
var should_we_perform_eq = false;

// Function to perform calculations.
// @param {String} num String value of whatever is keyed into the calculator
function calc(num) {
    var total = String(document.getElementById("total").value);

    switch (num) {
        case "AC":
            firstnum = "";
            operator = "";
            oper_was_last = false;
            should_we_perform_eq = false;
            document.getElementById("total").value = "0";
            break;
        case "c":
            document.getElementById("total").value = "0";
            break;
        case "+/-":
            total = parseFloat(total) * -1; //Only the first number in the string is returned!
            document.getElementById("total").value = total;
            break;
        case "-":
        case "*":
        case "/":
        case "+":
            operator = num.trim(); //The trim() method removes whitespace from both ends of a string.
            firstnum = total; // string number
            oper_was_last = true;
            break;
        case "%":
            operator = num.trim();
            firstnum = total;
            oper_was_last = true;
            break;
        case "=":
            let sum = 0;
            operator = operator.trim();
            switch (operator) {
                case "+":
                    sum = parseFloat(firstnum) + parseFloat(total);
                    break;
                case "-":
                    sum = parseFloat(firstnum) - parseFloat(total);
                    break;
                case "*":
                    sum = parseFloat(firstnum) * parseFloat(total);
                    break;
                case "/":
                    sum = parseFloat(firstnum) / parseFloat(total);
                    break;
                case "%":
                    sum = (parseFloat(firstnum) / 100) * parseFloat(total);
                    break;
                default:
                    console.error("invalid operation");
                    break;
            }
            document.getElementById("total").value = sum; // firstnum = sum;
            break;
        default:
            // check to see if firstnum has a value,
            // if it does we need to clear total before putting the next number in the box
            if (true === oper_was_last) {
                total = ""; // resetting.
                oper_was_last = false;
            }

            // Checking for decimals.
            // Find decimal via regex (regex === regular expressions).
            if (num === '.' && total.includes('.')) {
                num = "";
            }
            /*  A: You drank tequila
                B: You drank bourbon
                A and (&&) B: you drank both drinks together (mixed)
                A or (||) B: you drank either tequila or bourbon
                A or B: you drank both without mixing
            */
            // check to see if there is a value in the total box
            // if there is a value take the existing value and append the new number
            if (total === "0") {
                total = "";
            }
            num = String(num);
            document.getElementById("total").value = total + num;
            break;
    }
}