const d = document;
const $time = document.getElementById("countdown-time");
const $date = d.getElementById("countdown-calendar");
let timer;
const setCountdownDate = () =>{
    $date.value = localStorage.getItem("countdown-date").replace("T00:00:00","");
    $date.min = new Date().toLocaleDateString().split("/").reverse().join("-");
    const finish = new Date(localStorage.getItem("countdown-date")).getTime();
    timer = setInterval(() => {
        const today = new Date().getTime();
        const days = (finish - today) / (1000 * 60 * 60 * 24)
        const hours = days * 24 % 24
        const minutes = hours * 60 % 60
        const seconds = minutes * 60 % 60
        if (days <= 0) {
            clearInterval(timer);
            $time.textContent = "¡Hoy es el día!";
        } else {
            $time.textContent = `Faltan ${Math.floor(days)} días ${Math.floor(hours)} horas ${Math.floor(minutes)} minutos ${Math.round(seconds)} segundos`;
        }
    }, 1000);
}
const countDown = () => {
    d.addEventListener("click", e => {
        if (e.target.matches("#countdown-btn")){
            clearInterval(timer);
            localStorage.setItem("countdown-date", $date.value+"T00:00:00");
            setCountdownDate();
        }
    })
}

d.addEventListener("DOMContentLoaded", e => {
    if (!(localStorage.getItem("countdown-date") === null)) setCountdownDate();;
})

export default countDown;