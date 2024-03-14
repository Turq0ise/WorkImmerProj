document.body.onload = () => {
    fixMargin();
}

const getSideBar = document.querySelector("aside[sideBar]");
const getContentSection = document.querySelector("div[contentSection]");
function fixMargin() {
    getContentSection.style.marginLeft = `${getSideBar.clientWidth}px`;
}