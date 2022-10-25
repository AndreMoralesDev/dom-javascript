const d = document;
const patternText = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/i;
const patternEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const patternComments = /^.{1,255}$/i
const formValidations = (numInputs) => {
    const $form = d.getElementById("form");
    const $inputs = d.querySelectorAll(".form-input-container input, .form-textarea");
    $inputs.forEach(input => input.addEventListener("keyup",e => {
        const span = d.createElement("span");
        span.classList.add("error-span");
        let res = null;
        if (input.name === "name") res = patternText.test(input.value);
        else if (input.name === "email") res = patternEmail.test(input.value);
        else if (input.name === "comments" || input.name === "subject") 
            res = patternComments.test(input.value);
        if (res != null) {
            const $contenedor = input.parentElement
            span.textContent = input.title
            if (res === false  && input.value != "") {
                input.classList.add("error") 
                console.log()
                if ($contenedor.querySelector("span") === null)
                    $contenedor.appendChild(span)
            } else if (res === true || input.value === "") {
                input.classList.remove("error");
                if ($contenedor.querySelector("span") != null )
                    $contenedor.removeChild($contenedor.querySelector("span"))
            }
        }
    }))
    $form.addEventListener("submit", e => {
        e.preventDefault();
        const $inputs = d.querySelectorAll(".form-input-container input, .form-textarea");
        if ($inputs.length != numInputs) location.reload();
        const errores = [...$inputs].some(e => e.matches(".error"));
        if (!errores) {
            d.querySelector(".loader-container").style.display = "flex";
            const message = d.querySelector(".contact-form-response");
            fetch("https://formsubmit.co/ajax/matias.plin@gmail.com", {
                method: "POST",
                body: new FormData(e.target)
            })
                .then(res => res.ok? res.json : Promise.reject(res))
                .then(json => {
                    message.style.display = "flex";
                    message.textContent = "¡Los datos han sido enviados!"
                })
                .catch(err => {
                    const messageErr = err.statusText || "Ocurrió un error al enviar, inténtalo nuevamente";
                    message.style.display = "flex";
                    message.textContent =  `Error ${err.status}: ${messageErr}`;
                })
                .finally(() => {
                    $form.reset();
                    d.querySelector(".loader-container").style.display = "none";
                    setTimeout(() => message.style.display = "none", 2500)
                });
        }
    })
}

export default formValidations;