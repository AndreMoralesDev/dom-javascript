const d = document;
const n = navigator;

const getGeolocation = () => {
    const options = {
        enableHighAccuracy: true,       //Máxima presición posible
        timeout: 5000,                          //Tiempo que se tomará en milisegundos
        maximunAge: 0                        //No considera la anterior ubicación obtenida
    };
    const succes = position => {
        console.log(position)
    }
    const error = err => {
        console.log(err)
    }
    n.geolocation.getCurrentPosition(succes, error, options);
}

export default getGeolocation;