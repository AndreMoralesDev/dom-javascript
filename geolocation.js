const d = document;
const n = navigator;

const getGeolocation = ($geolocation) => {
    const options = {
        enableHighAccuracy: true,       //Máxima presición posible
        timeout: 5000,                          //Tiempo que se tomará en milisegundos
        maximunAge: 0                        //No considera la anterior ubicación obtenida
    };
    const succes = position => {
        const coords = position.corrds;
        $geolocation.innerHTML = `
            <p>Latitud: ${coords.latitude}</p>
            <p>Longitud: ${coords.longitude}</p>
            <p>Presición: ${coords.accuracy} metros</p>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude}" target="_black" rel="noopener"></a>
        `
        coords.latitude
        coords.longitude 
    }
    const error = err => {
        const $h2 = d.createElement("h2")
        $h2.textContent = `Error: ${err}`
        $geolocation.appendChild($h2)
    }
    n.geolocation.getCurrentPosition(succes, error, options);
}

export default getGeolocation;