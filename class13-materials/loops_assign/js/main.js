// Loops assignment
// 1 & 2
const loopVal = document.querySelector('#showLoopVal')
const carouselBtn = document.querySelector('#carousel')
const showParity = document.querySelector('#showParity')

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


// Input validation loop
// Take value from input
let inputVal = Number(document.querySelector('#inputVal').value);

// Use a while loop to reject any input apart from 50-100

carouselBtn.addEventListener('click', () => {
    // loopVal.innerText = '';

    // while (inputVal > 100) {
    //     loopVal.innerText = "Wrong!"
    // };

    // loopVal.innerText = "You are free..."
    let inputVal = Number(input.value);

    while (inputVal > 100) {

        inputVal = Number(prompt("Enter a number less than or equal to 100"));

    }

    loopVal.innerText = "You are free";
});
