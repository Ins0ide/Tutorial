// Add Event Listeners That Listen For A Click
const colorWhite = "#fff"
const partyPurple = "rgba(241,63,247,1)"
const partyGreen = "rgba(0,253,81,1)"
const partyBlue = "rgba(0,254,255)"


document.querySelector('#purple').addEventListener('click', () => {
    // document.querySelector('body').style.background = partyPurple
    // document.querySelector('h1').style.color = colorWhite
    document.querySelector('body').classList.toggle('partyPurpleBg');
    document.querySelector('h1').classList.toggle('colorWhite');
});
document.querySelector('#green').addEventListener('click', () => {
    // document.querySelector('body').style.background = partyGreen
    // document.querySelector('h1').style.color = colorWhite
    document.querySelector('body').classList.toggle('partyGreenBg');
    document.querySelector('h1').classList.toggle('colorWhite');
});
document.querySelector('#blue').addEventListener('click', () => {
    // document.querySelector('body').style.background = partyBlue
    // document.querySelector('h1').style.color = colorWhite
    document.querySelector('body').classList.toggle('partyBlueBg');
    document.querySelector('h1').classList.toggle('colorWhite');
});
