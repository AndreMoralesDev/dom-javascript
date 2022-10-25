const d = document;

const speechReader = () => {
    const $speechSelect = d.querySelector(".speech-select");
    const $speechText = d.querySelector(".speech-text");
    const $speechBtn = d.getElementById("speech-btn");
    const speechMessage = new SpeechSynthesisUtterance();
    let voices = [];

    d.addEventListener("DOMContentLoaded", e =>{
        speechSynthesis.addEventListener("voiceschanged", e => {
            voices = speechSynthesis.getVoices()
            voices.forEach(voice => {
                const $option = d.createElement("option");
                $option.value = voice.name;
                $option.textContent = voice.name;
                $speechSelect.appendChild($option)
            })
        })
    })
    d.addEventListener("change", e =>  {
        if (e.target === $speechSelect) {
            speechMessage.voice = voices.find(voice => voice.name === e.target.value);
        }
    })
    d.addEventListener("click", e => {
        if (e.target === $speechBtn) {
            speechMessage.text = $speechText.value
            speechSynthesis.speak(speechMessage)
        }
    })
}

export default speechReader;