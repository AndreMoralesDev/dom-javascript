const d = document;
const iconDark = d.getElementById("icon-dark");
const iconLight = d.getElementById("icon-light");

const darkTheme = () => {
    d.documentElement.style.setProperty("--yellow", "#224");
    d.documentElement.style.setProperty("--black", "#fff");
    d.documentElement.style.setProperty("--background", "#112");
    d.documentElement.style.setProperty("--shadow-yellow", "#112");
    d.documentElement.style.setProperty("--shadow-white", "#ddd1");
    localStorage.setItem("theme","dark");
    iconDark.classList.toggle("display-none");
    iconLight.classList.toggle("display-none");
}

const lightTheme = () => {
    d.documentElement.style.setProperty("--yellow", "#ebe71a");
    d.documentElement.style.setProperty("--black", "#000");
    d.documentElement.style.setProperty("--background", "#fff");
    d.documentElement.style.setProperty("--shadow-yellow", "#b1ae0e");
    d.documentElement.style.setProperty("--shadow-white", "#ddd");
    localStorage.setItem("theme","light");
    iconDark.classList.toggle("display-none");
    iconLight.classList.toggle("display-none");
}

const btnDarkMode = (btn) => {
    d.getElementById(btn).addEventListener("click", e => {
        const theme = localStorage.getItem("theme");
        if (theme === "light") darkTheme();
        else lightTheme();
    })
}

export default btnDarkMode;

d.addEventListener("DOMContentLoaded", e => {
    if (localStorage.getItem("theme") === null) localStorage.setItem("theme","light")
    if (localStorage.getItem("theme") === "dark") darkTheme();
})