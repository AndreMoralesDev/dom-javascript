const d = document;
const n = navigator;
const useCamera = (camera,webcam)=> {
    const $webcam = d.getElementById(webcam);
    const $camera = d.getElementById(camera);
    if (n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video: true, audio: false})
            .then(e => {
                $webcam.srcObject = e;
                $webcam.play();
            })
            .catch(err => {
                $webcam.insertAdjacentHTML("beforebegin", `<h2>Cámara no disponible</h2>`)
                $camera.removeChild($webcam)
            })
    } else {
        console.log("xd")
    }
}

export default useCamera;