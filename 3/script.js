// ----------------  styling form container
const myForm = document.getElementById("form");
with (myForm.style) {
    display = "flex";
    flexDirection = "column";
    width = "300px";
    gap = "20px";
    padding = "20px";
    border = "solid 2px green";
}

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








