const d = document;
const winnerRandom = (btn, option) => {
    const $btn = d.getElementById(btn);
    const $options = d.querySelectorAll("." + option)
    $btn.addEventListener("click", e => {
        const winner = $options[Math.floor(Math.random() * $options.length)];
        alert(winner.textContent)
    })
}

export default winnerRandom;