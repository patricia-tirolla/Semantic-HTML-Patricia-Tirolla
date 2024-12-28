// ----------------  styling form container
const myForm = document.getElementById("form");
myForm.style.display = "flex";
myForm.style.flexDirection = "column";
myForm.style.width = "300px";
myForm.style.gap = "20px";
myForm.style.padding = "20px";
myForm.style.border = "solid 2px green";

// ---------------- selecting inputs and labels
const inputs = document.getElementsByTagName("input");
const labels = document.getElementsByTagName("label");

// ----------------  removing breaks
const breaks = document.getElementsByTagName("br");
Array.from(breaks).forEach(element => {
    element.remove();
})

// ----------------  fixing the labels names
Array.from(labels).forEach(label => {
    let newLabel = label.getAttribute("for");
    if (newLabel) {
        newLabel = newLabel.charAt(0).toUpperCase() + newLabel.slice(1);
        label.textContent = newLabel;
        label.style.padding = "5px";
    }
});








