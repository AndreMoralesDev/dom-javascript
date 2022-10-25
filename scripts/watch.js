const d = document;
const $relojTime = d.querySelector(".reloj-time");
const $hours = d.getElementById("H");
const $minutes = d.getElementById("M");
const $seconds = d.getElementById("S");
let time;

const valTime = (time, type="") => {
    if ((/[0-9]+/g).test(time)){
        parseInt(time);
        return type === "hour"
        ? time >= 0
        : time < 60 && time >= 0
    } else {
        alert("El tiempo ingresado no es un número.")
        console.log(time, type)
        return false
    }
}
const watch = () =>{
    d.addEventListener("click",e => {
        if(e.target.matches("#btn-prender")){
            $relojTime.textContent = new Date().toLocaleTimeString();
            time = setInterval(() => {
                $relojTime.textContent = new Date().toLocaleTimeString();
            }, 1000);
            d.getElementById("btn-prender").setAttribute("disabled","true");
            d.getElementById("btn-apagar").removeAttribute("disabled");
        }
        if(e.target.matches("#btn-temporizador")){
            clearInterval(time);
            $relojTime.textContent = "00:00:00"
            d.getElementById("btn-prender").removeAttribute("disabled");
            d.getElementById("btn-apagar").setAttribute("disabled","true");
            d.querySelector(".reloj-options").classList.toggle("display-none");
            d.querySelector(".tiner-container").classList.toggle("display-none");
        }
        if(e.target.matches("#btn-apagar")){
            clearInterval(time);
            $relojTime.textContent = "00:00:00"
            d.getElementById("btn-prender").removeAttribute("disabled");
            d.getElementById("btn-apagar").setAttribute("disabled","true");
        }
        if(e.target.matches("#btn-cancelar")){
            clearInterval(time);
            $relojTime.textContent = "00:00:00";
            d.querySelector(".reloj-options").classList.toggle("display-none");
            d.querySelector(".tiner-container").classList.toggle("display-none");
            d.getElementById("btn-iniciar").removeAttribute("disabled");
        }
        if(e.target.matches("#btn-iniciar")){
            if (valTime($hours.value,"hours") && valTime($minutes.value) && valTime($seconds.value)){
            let timeTemp = `${$hours.value}:${$minutes.value}:${$seconds.value}`;
            let timeArray = timeTemp.split(":").map(e=>parseInt(e));
            if (timeArray[0] === 0 && timeArray[1] === 0 && timeArray[2] === 0)return;
            d.getElementById("btn-iniciar").setAttribute("disabled","true");
            $hours.value = $minutes.value = $seconds.value = "00";
            $relojTime.textContent = timeTemp;
            time = setInterval(() => {
                --timeArray[2];
                if (timeArray[2] < 0){
                    timeArray[2] = 59;
                    --timeArray[1];
                }
                if (timeArray[1] < 0) {
                    timeArray[1] = 59;
                    --timeArray[0]
                }
                let timeUser = timeArray.map(e => ("0"+e).slice(-2))
                $relojTime.textContent = timeUser.join(":");
                if (timeArray[0] === 0 && timeArray[1] === 0 && timeArray[2] === 0){
                    clearInterval(time);
                    d.getElementById("alarm").play();
                    d.getElementById("btn-iniciar").removeAttribute("disabled");
                }
            }, 1000);
            } else alert("El tiempo no es válido.");
        }
    })
}

export default watch;