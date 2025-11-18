const darkmodeButton = document.getElementById("darkmode_button");

if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark-theme");
} 
darkmodeButton.addEventListener("click", () => {
    if (document.documentElement.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark-theme");
        darkmodeButton.innerText = "Dark";
    } else {
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark-theme");
        darkmodeButton.innerText = "Light";
    }
});

const themeButton = document.getElementById("diy_button");
const modal = document.getElementById("theme_modal");
const closeModal = document.getElementById("close_modal");
const bgInput = document.getElementById("bg_color");
const textInput = document.getElementById("text_color");
const fontInput = document.getElementById("font_select");

themeButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

bgInput.addEventListener("input", (e) => {
    document.documentElement.style.setProperty('--main-color', e.target.value);
});

textInput.addEventListener("input", (e) => {
    document.documentElement.style.setProperty('--paragraph-color', e.target.value);
});

fontInput.addEventListener("change", (e) => {
    document.documentElement.style.setProperty('--content-font', e.target.value);
});