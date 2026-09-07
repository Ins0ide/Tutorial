// Select the text input box

// Add event listener to check button
const check = document.querySelector("#check")

check.addEventListener('click', () => {
  const input = document.querySelector("#day").value.toLowerCase();
  // input = input.toLowerCase()

  if(input === "Tuesday" || input === "Thursday") {
    alert("BORINGGGGGG DAY!");
  } else if(input === "Saturday" || input === "Sunday") {
    alert("It's the Weekend!!!");
  } else {
    alert("Office Hours...");
  }});

