const d = document;
const n = navigator;
const useCamera = (webcam)=> {
    const $webcam = d.getElementById(webcam);
    if (n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video: true, audio: false})
            .then(e => {
                $webcam.srcObject = e;
                $webcam.play();
            })
            .catch(err => {
                $webcam.insertAdjacentHTML("beforebegin", `<h3>${err}</h3>`)
                d.removeChild($webcam)
                console.log(err)
            })
    } else {
        console.log("xd")
    }
}

export default useCamera;