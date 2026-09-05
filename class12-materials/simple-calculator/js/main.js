// Create a default variable
let total = 0;

// Add event listeners to the uls
const zero = document.querySelector("#pumpkin")
const plusThree = document.querySelector("#dominosPizza")
const plusNine = document.querySelector("#zebra")
const minusTwo = document.querySelector("#cantThinkOfAnything")

const result = document.querySelector("#placeToPutResult")

zero.addEventListener('click', () => {
  total = 0;
  result.innerText = 0
});

plusThree.addEventListener('click', () => {
    total += 3
    result.innerText = total
});

plusNine.addEventListener('click', () => {
    total += 9
    result.innerText = total
});

minusTwo.addEventListener('click', () => {
    total -= 2
    result.innerText = total
});
