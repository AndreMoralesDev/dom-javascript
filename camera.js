const d = document;
const n = navigator;
const useCamera = (camera,webcam)=> {
    const $webcam = d.getElementById(webcam);
    if (n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video: true, audio: false})
            .then(e => {
                $webcam.srcObject = e;
                $webcam.play();
            })
            .catch(err => {
                $webcam.insertAdjacentHTML("beforebegin", `<h2>${err}</h2>`)
                camera.removeChild($webcam)
                console.log(err)
            })
    } else {
        console.log("xd")
    }
}

export default useCamera;