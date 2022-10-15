const d = document;
const searchFilters = (input, card) => {
    const $input = d.getElementById(input)
    const $card = d.querySelectorAll("." + card)
    d.addEventListener("keyup", e => {
        if (e.target === $input) {
            $card.forEach(e => {
                const textCard = e.textContent.toLowerCase()
                const textInput = $input.value.toLowerCase()
                if (!(textCard.includes(textInput))) e.classList.add("no-filter");
                else e.classList.remove("no-filter");
            });
        }
    })
}

export default searchFilters;