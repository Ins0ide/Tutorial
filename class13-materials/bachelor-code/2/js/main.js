// Add event listeners to each of the names to be displayed
const andi = document.querySelector("#andiNext")
const claire = document.querySelector("#claireNext")
const sharleen = document.querySelector("#sharleenNext")

const andiImg = document.querySelector("#andi")
const claireImg = document.querySelector("#claire")
const sharleenImg = document.querySelector("#sharleen")

// Now give each names a function that will bring out their image once they are clicked
andi.addEventListener('click', () => {
    andiImg.classList.toggle("hidden")
    claireImg.classList.add("hidden")
    sharleenImg.classList.add("hidden")

});

claire.addEventListener('click', () => {
    claireImg.classList.toggle("hidden")
    andiImg.classList.add("hidden")
    sharleenImg.classList.add("hidden")
});

sharleen.addEventListener('click', () => {
    sharleenImg.classList.toggle("hidden")
    andiImg.classList.add("hidden")
    claireImg.classList.add("hidden")
});

