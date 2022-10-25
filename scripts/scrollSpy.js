const d = document;
const scrollSpy = () => {
    const $sections = d.querySelectorAll(".section")
    const cb = entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            if (entry.isIntersecting) {
                d.querySelector(`a[href="#${id}"]`).classList.add("active")
            } else {
                d.querySelector(`a[href="#${id}"]`).classList.remove("active")
            }
        })
    }
    const observer = new IntersectionObserver(cb, {threshold: 0.5});
    $sections.forEach(e => observer.observe(e))
}

export default scrollSpy;