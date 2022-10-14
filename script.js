import countDown from "./countdown.js";
import btnScrollUp from "./scrollUp.js";
import btnDarkMode from "./darkMode.js";
import responsiveDesktop from "./responsiveJs.js";
import responsiveTester from "./responsiveTester.js";
import userDevice from "./userDevice.js";
import conection from "./conection.js";
import useCamera from "./camera.js";
import getGeolocation from "./geolocation.js";

const d = document;
const $menuOptions = d.querySelector(".menu-options");
const $menuIcon = d.querySelector(".menu-icon");
const $closeIcon = d.querySelector(".close-icon");
const $relojTime = d.querySelector(".reloj-time");
const $hours = d.getElementById("H");
const $minutes = d.getElementById("M");
const $seconds = d.getElementById("S");
let time;
let temp;
let x = 0;
let y = 0;

conection();


d.addEventListener("DOMContentLoaded", e => {
    countDown("countdown-time","2022-10-18T00:00:00","¡Cumple Mes :3!");
    btnScrollUp("btn-scroll-up");
    btnDarkMode("btn-dark-mode");
    responsiveDesktop("responsive-js");
    responsiveTester("form-responsive-tester","btn-open-window","btn-close-window");
    userDevice("device");
    // useCamera("camera","webcam");
    getGeolocation("geolocation");
})


const playGame = (e) => {
    const $gameContainer = d.getElementById("game-container");
    const $gameBall = d.getElementById("game-ball");
    const $gameDimensions = $gameContainer.getBoundingClientRect();
    const $ballDimensions = $gameBall.getBoundingClientRect();
    switch (e.keyCode) {
        case 37:
            if ($gameDimensions.left < $ballDimensions.left) {
                e.preventDefault();
                x--;
            }
            break;
        case 38:
            if ($gameDimensions.top < $ballDimensions.top) {
                e.preventDefault();
                y--;
            }
            break;
        case 39:
            if ($gameDimensions.right > $ballDimensions.right) {
                e.preventDefault();
                x++;
            }
            break;
        case 40:
            if ($gameDimensions.bottom > $ballDimensions.bottom) {
                e.preventDefault();
                y++;
            }
            break;
        default:
            break;
    }
    $gameBall.style.transform = `translate(${x * 5}px, ${y * 5}px)`
}
d.addEventListener("keydown", playGame);



const validarTiempo = (time, type="") => {
    if ((/[0-9]+/g).test(time)){
        parseInt(time);
        return type === "hour"
        ? time >= 0
        : time < 61 && time >= 0
    } else {
        alert("El tiempo ingresado no es un número.")
        console.log(time, type)
        return false
    }
}

d.addEventListener("click",e => {
    if (e.target.matches("#nav")){
        $menuOptions.style.pointerEvents = "auto";
        $menuOptions.classList.toggle("menu-options-active");
        $menuIcon.classList.toggle("icon-menu-off");
        $closeIcon.classList.toggle("icon-menu-off");
    }
    if(e.target.matches("#option")){
        $menuOptions.style.pointerEvents = "none";
        $menuOptions.classList.toggle("menu-options-active");
        $menuIcon.classList.toggle("icon-menu-off");
        $closeIcon.classList.toggle("icon-menu-off");
    }
    if(e.target.matches("#btn-prender")){
        $relojTime.textContent = new Date().toLocaleTimeString();
        time = setInterval(() => {
            $relojTime.textContent = new Date().toLocaleTimeString();
        }, 1000);
        document.getElementById("btn-prender").setAttribute("disabled","true");
        document.getElementById("btn-apagar").removeAttribute("disabled");
    }
    if(e.target.matches("#btn-temporizador")){
        clearInterval(time);
        $relojTime.textContent = "00:00:00"
        document.getElementById("btn-prender").removeAttribute("disabled");
        document.getElementById("btn-apagar").setAttribute("disabled","true");
        document.querySelector(".reloj-options").classList.toggle("display-none");
        document.querySelector(".tiner-container").classList.toggle("display-none");
    }
    if(e.target.matches("#btn-apagar")){
        clearInterval(time);
        $relojTime.textContent = "00:00:00"
        document.getElementById("btn-prender").removeAttribute("disabled");
        document.getElementById("btn-apagar").setAttribute("disabled","true");
    }
    if(e.target.matches("#btn-cancelar")){
        clearInterval(temp);
        $relojTime.textContent = "00:00:00";
        document.querySelector(".reloj-options").classList.toggle("display-none");
        document.querySelector(".tiner-container").classList.toggle("display-none");
        document.getElementById("btn-iniciar").removeAttribute("disabled");
    }
    if(e.target.matches("#btn-iniciar")){
        if (validarTiempo($hours.value,"hours") && validarTiempo($minutes.value) && validarTiempo($seconds.value)){
        let timeTemp = `${$hours.value}:${$minutes.value}:${$seconds.value}`;
        let timeArray = timeTemp.split(":").map(e=>parseInt(e));
        if (timeArray[0] === 0 && timeArray[1] === 0 && timeArray[2] === 0)return undefined;
        document.getElementById("btn-iniciar").setAttribute("disabled","true");
        $hours.value = "00";
        $minutes.value = "00";
        $seconds.value = "00";
        $relojTime.textContent = timeTemp;
        temp = setInterval(() => {
            --timeArray[2];
            if (timeArray[2] < 0){
                timeArray[2] = 59;
                --timeArray[1];
            }
            if (timeArray[1] < 0) {
                timeArray[1] = 59;
                --timeArray[0]
            }
            $relojTime.textContent = timeArray.join(":");
            if (timeArray[0] === 0 && timeArray[1] === 0 && timeArray[2] === 0){
                clearInterval(temp);
                document.getElementById("alarm").play();
                document.getElementById("btn-iniciar").removeAttribute("disabled");
            }
        }, 1000);
        } else alert("El tiempo no es válido.");
    }
})