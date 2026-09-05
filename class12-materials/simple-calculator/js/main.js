// Create a default variable
let defResult = 0;

// Add event listeners to the uls
const zero = document.querySelector("#pumpkin")
const plusThree = document.querySelector("#dominosPizza")
const plusNine = document.querySelector("#zebra")
const minusTwo = document.querySelector("#cantThinkOfAnything")

const result = document.querySelector("#placeToPutResult")

zero.addEventListener('click', () => {
  defResult = 0;
  result.innerText = 0
});

plusThree.addEventListener('click', () => {
    addThree = defResult += 3
    result.innerText = addThree
});

plusNine.addEventListener('click', () => {
    addNine = defResult += 9
    result.innerText = addNine
});

minusTwo.addEventListener('click', () => {
    subtractTwo = defResult -= 2
    result.innerText = subtractTwo
});
