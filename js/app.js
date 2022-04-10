// Variables
const body = document.querySelector("body");

// Switch color theme
document.getElementById("button-theme").addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme");
    } else {
        body.classList.add("light-theme");
    }
});
