Array.from(labels).forEach(label => {
    let forAttributeValue = label.getAttribute("for");
    if (forAttributeValue && forAttributeValue.includes("radio")) {
        label.className = forAttributeValue;
        label.classList.add("radio-items")
    }
})

Array.from(inputs).forEach(input => {
    let idAttributeValue = input.getAttribute("id");
    if (idAttributeValue && idAttributeValue.includes("radio")) {
        input.className = idAttributeValue;
        input.classList.add("radio-items")
    }
})

const chooseOne = document.getElementById("choose-one");
const radioItems = document.getElementsByClassName("radio-items");

Array.from(radioItems).forEach((item, index) => {
    Array.from(radioItems).forEach((otherItem, otherIndex) => {
        if (index !== otherIndex) {
            const itemFirstClass = item.classList[0];
            const otherFirstClass = otherItem.classList[0];

            if (itemFirstClass && itemFirstClass === otherFirstClass) {
                const divRadio = document.createElement("div");
                divRadio.className = "radio-containers"
                divRadio.appendChild(item);
                divRadio.appendChild(otherItem);
                chooseOne.appendChild(divRadio);
            }
        }
    })
})




