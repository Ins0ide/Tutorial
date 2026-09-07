// Background Picker
document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue


function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}


// Not So Great Calculator
let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

function makeZero(num) {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}


// Class Weekend Boring
document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here


}


// Angry Parent Simulator (class 12 materials)
document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

  //Add what you should be doing - conditionals go here

  // document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }


// Baxhelor code 1
document.querySelector('#finalRose').addEventListener('click', /*INSERTCODE*/)

function hide(){
	document.querySelector(/*INSERTCODE*/).style.display = 'none'
	document.querySelector(/*INSERTCODE*/).style.display = 'none'
}


// Baxhelor code 2
const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', /*INSERTCODE*/)
document.querySelector('#claireNext').addEventListener('click', /*INSERTCODE*/)
document.querySelector('#sharleenNext').addEventListener('click', /*INSERTCODE*/)

function andiNext(){
	claire.classList.add(/*INSERTCODE*/)
	sharleen.classList.add(/*INSERTCODE*/)
	andi.classList.toggle(/*INSERTCODE*/)
}

function claireNext(){
	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
}

function sharleenNext(){
	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
}


