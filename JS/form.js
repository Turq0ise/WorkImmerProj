let getFormItems = document.getElementsByClassName("form-item");
for(let i = 0; i < getFormItems.length; i++) {
    let loopItem = getFormItems.item(i);
    loopItem.children.item(1).addEventListener("focus", elem => {
        elem.target.style.outline = "none";
        elem.target.previousElementSibling.style.top = "-0.75rem";
    });
    loopItem.children.item(1).addEventListener("blur", elem => {
        if(!elem.target.value) {
            return elem.target.previousElementSibling.style.top = "";
        };
    });
};