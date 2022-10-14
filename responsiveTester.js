const d = document;
let ventana;
const responsiveTester = (formTester, open, close) => {
    const form = d.querySelector("." + formTester)
    const btnOpen =d.getElementById(open) ;
    const btnClose =d.getElementById(close) ;
    d.addEventListener("click", e => {
        if (e.target === btnOpen) {
            e.preventDefault();
            ventana =window.open(
                form.direction.value,
                "",
                `innerWidth = ${form.width.value}, innerHeight = ${form.height.value}`
            )
        }
        if (e.target === btnClose) {
            e.preventDefault();
            ventana.close();
        }
    })
}

export default responsiveTester;