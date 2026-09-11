// *Variables*
// Create a variable and console log the value
let me = "sabi boy"
console.log(me);

// Create a variable, add 10 to it, and alert the value

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

// Create a function that divides one number by another and returns the remainder

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
let multiply = (num1, num2, num3) => {
    product = num1 * num2 * num3
    if(product % 3 === 0) {
        alert("ZEBRA");
    }else {
        alert("This number is not divisible by 3");
    }
};
multiply(3,6,7);
