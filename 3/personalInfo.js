// ----------------  selecting personal info inputs and labels
Array.from(inputs).forEach(element => {
    let idAttributeValue = element.getAttribute("id");
    if (idAttributeValue && ["name", "email", "phone", "message"].some(substring => idAttributeValue.includes(substring))) {

        element.classList.add("personal-info")
    }
})

Array.from(labels).forEach(element => {
    let forAttributeValue = element.getAttribute("for")
    if (forAttributeValue && ["name", "email", "phone", "message"].some(substring => forAttributeValue.includes(substring))) {
        element.classList.add("personal-info");
    }
})

// ----------------  creating a DIV to wrap the elements above
const wrappingDiv = document.createElement("div");
wrappingDiv.className = "personal-info-container";

const personalInfo = document.getElementsByClassName("personal-info");
const textArea = document.getElementById("message");

Array.from(personalInfo).forEach(element => {
    wrappingDiv.appendChild(element);
})
wrappingDiv.appendChild(textArea);
myForm.prepend(wrappingDiv);

// ----------------  styling the wrapping div
with (wrappingDiv.style) {
    display = "flex";
    flexDirection = "column";
}
