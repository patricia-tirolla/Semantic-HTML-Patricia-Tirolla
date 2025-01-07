const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  if (event.target.tagName === "BUTTON") {
      alert(`${event.target.textContent} clicked!`);
  } else {
    alert("Child container clicked!");
  }
});

const buttonOne = document.getElementById("button1");
buttonOne.addEventListener("click", (e) => {
  e.stopPropagation();
});

const buttonTwo = document.getElementById("button2");
buttonTwo.onclick = function(e) {
  alert("button 2 clicked!");
  e.stopPropagation();
};

const buttonThree = document.getElementById("button3");
buttonThree.addEventListener("click", (e) => {
  alert("button 3 clicked!");
  e.stopPropagation();
});


