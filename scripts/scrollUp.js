const d = document;
const btnScrollUp = (id) => {
    const btn = d.getElementById(id);
    d.addEventListener("scroll", () => {
        if (scrollY > 600)btn.classList.remove("display-none");
        else btn.classList.add("display-none");
    })
    btn.addEventListener("click", () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    })
}

export default btnScrollUp;