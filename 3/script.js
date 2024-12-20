const myForm = document.getElementById("form");
myForm.style.display = "flex";
myForm.style.flexDirection = "column";
myForm.style.width = "300px";

const breaks = document.getElementsByTagName("br");
Array.from(breaks).forEach(element => {
    element.remove();
})

const labels = document.getElementsByTagName("label");
Array.from(labels).forEach(label => {
    let newLabel = label.getAttribute("for");
    if (newLabel) {
    newLabel = newLabel.charAt(0).toUpperCase() + newLabel.slice(1);
    label.textContent = newLabel;
    label.style.padding = "5px";
    }
});






