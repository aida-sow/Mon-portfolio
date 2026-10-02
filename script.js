const bootScreen = document.getElementById("boot-screen");
const enterButton = document.getElementById("enter-system");
enterButton.addEventListener("click", () => {
    bootScreen.classList.add("shutdown");
});