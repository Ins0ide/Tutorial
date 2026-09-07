// Select and Add event listeners to Claire and Nikki h2's
const contestants = document.querySelectorAll(".contestant")
// const nikki = document.querySelector("#nikki")

// Now attach functions that will make the image show for the class with rose, otherwise alert wrong for the class without rose

// contestants.addEventListener('click', (click) => {
// 	// alert("code not finished, yet...");

// 	if(click.target.classList.contains("rose")) {
// 		document.querySelector("#nikki").classList.toggle("hidden");
// 	}else {
// 		alert("wrong!!!");
// };});

Array.from(contestants).forEach(element => element.addEventListener('click', (click) => {
	if(click.target.classList.contains("rose")) {
		document.querySelector("#nikki").classList.toggle("hidden");
	}else {
		alert("Wrong!!!");
}}));

