// Add event listener to yell button
const yellBtn = document.querySelector('#yell')

// When yell button is clicked, take values from input, then display to the document page
let yellText = document.querySelector('#placeToYell')

yellBtn.addEventListener('click', () => {
  
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value
  
  yellText.innerText = `${fName} ${fMidName} ${lMidName} ${lName}`;
});
