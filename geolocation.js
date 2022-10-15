const d = document;
const n = navigator;

const getGeolocation = (geolocation) => {
    const $geolocation = d.getElementById(geolocation);
    const options = {
        enableHighAccuracy: true,       //Máxima presición posible
        timeout: 5000,                          //Tiempo que se tomará en milisegundos
        maximunAge: 0                        //No considera la anterior ubicación obtenida
    };
    const succes = position => {
        const coords = position.coords;
        $geolocation.innerHTML = `
            <h2>GEOLOCALIZACIÓN</h2>
            <p>Latitud: ${coords.latitude}</p>
            <p>Longitud: ${coords.longitude}</p>
            <p>Presición: ${Math.round(coords.accuracy)} metros</p>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_black" rel="noopener">Ir a Google Maps</a>
        `
        coords.latitude
        coords.longitude 
    }
    const error = err => {
        const $h2 = d.createElement("h2")
        $h2.textContent = `Error: Cámara no disponible`
        $geolocation.appendChild($h2)
    }
    n.geolocation.getCurrentPosition(succes, error, options);
}

export default getGeolocation;