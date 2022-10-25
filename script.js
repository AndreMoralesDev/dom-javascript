import navMenu from "./scripts/navMenu.js";
import countDown from "./scripts/countdown.js";
import playGame from "./scripts/playGame.js";
import btnScrollUp from "./scripts/scrollUp.js";
import btnDarkMode from "./scripts/darkMode.js";
import responsiveDesktop from "./scripts/responsiveJs.js";
import responsiveTester from "./scripts/responsiveTester.js";
import userDevice from "./scripts/userDevice.js";
import conection from "./scripts/conection.js";
import useCamera from "./scripts/camera.js";
import getGeolocation from "./scripts/geolocation.js";
import searchFilters from "./scripts/searchFilters.js";
import winnerRandom from "./scripts/winnerRandom.js";
import responsiveSlider from "./scripts/responsiveSlider.js";
import scrollSpy from "./scripts/scrollSpy.js";
import smartVideo from "./scripts/smartVideo.js";
import formValidations from "./scripts/formValid.js";
import speechReader from "./scripts/speechReader.js";
import watch from "./scripts/watch.js";


conection();
speechReader();

document.addEventListener("DOMContentLoaded", e => {
    navMenu(".menu-options",".menu-icon",".close-icon");
    playGame();
    watch();
    countDown();
    btnScrollUp("btn-scroll-up");
    btnDarkMode("btn-dark-mode");
    responsiveDesktop("responsive-js");
    responsiveTester("form-responsive-tester","btn-open-window","btn-close-window");
    userDevice("device");
    useCamera("camera","webcam");
    getGeolocation("geolocation");
    searchFilters("filter-cards","card");
    winnerRandom("btn-winner-random",".winner-option");
    responsiveSlider();
    scrollSpy();
    smartVideo();
    formValidations(4);
})