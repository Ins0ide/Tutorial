// Loops assignment
// 1 & 2
const loopVal = document.querySelector('#showLoopVal')
const carouselBtn = document.querySelector('#carousel')
// const showParity = document.querySelector('#showParity')

// carouselBtn.addEventListener('click', () => {
//     let inputVal = Number(document.querySelector('#inputVal').value);
    
//     showParity.innerText = '';
//     // while (inputVal <= 10) {
//     //     loopVal.innerText = inputVal
    
//     //     // if (inputVal > 10) {
//     //         //     loopVal.innerText = "invalidNum"
//     //         // }
//     //         inputVal++
//     // };
    
//     // 2
//     for (let i = inputVal; i < inputVal + 10; i++) {
//         if (i % 2 === 0) {
//             showParity.innerText += `${i} is even\n`;
//         }else {         // else if (i % 2 === 1)    *This will give the same for an odd number without just a common "else"
//             showParity.innerText += `${i} is odd\n`;
//         }
//     };
// });


// 3 Input validation loop
// Take value from input
let inputVal = Number(document.querySelector('#inputVal').value);

// Use a while loop to reject any input apart from 50-100

carouselBtn.addEventListener('click', () => {
    // loopVal.innerText = '';

    // while (inputVal > 100) {
    //     loopVal.innerText = "Wrong!"
    // };

    // loopVal.innerText = "You are free..."
    // let inputVal = Number(input.value);

    // while (inputVal > 100) {

    //     inputVal = Number(prompt("Enter a number less than or equal to 100"));

    // }

    // loopVal.innerText = "You are free";
    let number = Number(prompt("Enter a number:"));

    while (number > 100) {
        number = Number(prompt("Enter a number:"));
    }
});


// Multiplication Table
// Declare variable
const loopVal = document.querySelector('#showLoopVal')
const carouselBtn = document.querySelector('#carousel')

// while loop function that will give the multiplication table for the given number
carouselBtn.addEventListener('click', () => {
    loopVal.innerText = '';
    let inputVal = Number(document.querySelector('#inputVal').value);

    let i = 1;
    while (i <= 10) {
        let product = inputVal * i;
        loopVal.innerText += `${inputVal} * ${i} = ${product}\n`;
        i++
    }
});


// Enter Yes or No
let input = prompt("Enter 'Yes' or 'No':");

    while (input !== "Yes" || input !== "No") {
        input = prompt("Enter 'Yes' or 'No':");
    }


// FizzBuzz
const loopVal = document.querySelector('#showLoopVal')

for (let i=1; i<=100; i++) {
    
    if(i % 3 === 0 && i % 5 === 0) {
        loopVal.innerText += "FizzBuzz\n"
    }else if(i % 3 === 0) {
        loopVal.innerText += "Fizz\n"
    }else if(i % 5 === 0) {
        loopVal.innerText += "Buzz\n"
    }else {
        loopVal.innerText += `${i}\n`
    }
};

