// Create a default variable
let defResult = 0;

// Add event listeners to the uls
const zero = document.querySelector("#pumpkin")
const plusThree = document.querySelector("#dominosPizza")
const plusNine = document.querySelector("#zebra")
const minusTwo = document.querySelector("#cantThinkOfAnything")

const result = document.querySelector("#placeToPutResult")

zero.addEventListener('click', () => {
  result.innerText = 0
});

plusThree.addEventListener('click', () => {
    defResult = defResult += 3
    result.innerText = defResult
});

plusNine.addEventListener('click', () => {
    defResult = defResult += 9
    result.innerText = defResult
});

minusTwo.addEventListener('click', () => {
    defResult = defResult -= 2
    result.innerText = defResult
});



// Create a default variable that stores all inputs of the numbers in the ul