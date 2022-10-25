const d = document;
const w = window;
const n = navigator;

const conection = () =>{
    const $div = d.createElement("div");
    const isOnLine = () => {
        if (n.onLine){
            $div.textContent = "Conexión reestablecida"
            $div.classList.add("online")
            $div.classList.remove("offline")
            setTimeout(() => {
                d.body.removeChild($div);
            }, 2000);
        } else {
            $div.textContent = "Conexión perdida"
            $div.classList.add("offline")
            $div.classList.remove("online")
        }
        d.body.appendChild($div)
    }
    w.addEventListener("online", e => isOnLine())
    w.addEventListener("offline", e => isOnLine())
}

export default conection;