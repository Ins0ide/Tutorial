// Select "final rose" button and add an event listener to it
const finalRoseBtn = document.querySelector("#finalRose")

const claireImg = document.querySelector("#claire")
const nikkiImg = document.querySelector("#nikki")
const sharleenImg = document.querySelector("#sharleen")


// On click wrt the event listener, it should take out the other images from the display leaving oly nikki on the dom
finalRoseBtn.addEventListener('click', () => {
	claireImg.style.visibility = "hidden"
	sharleenImg.style.visibility = "hidden"
	// claireImg.style.display = "none"
	// sharleenImg.style.display = "none"
});
