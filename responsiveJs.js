const d = document;
const w = window;
const desktop = `
    <h2>RESPONSIVE JS</h2>
    <iframe 
        src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
    </iframe>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7803.612353941685!2d-76.970742!3d-12.056853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb680b42a1c459c66!2sMall%20Aventura%20Santa%20Anita!5e0!3m2!1ses!2spe!4v1665445021257!5m2!1ses!2spe"
        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
    </iframe>
`
const mobile = `
    <h2>RESPONSIVE JS</h2>
    <a class="media-mobile" href="https://youtu.be/6IwUl-4pAzc" rel="noopener" target="_blank">Ver video</a>
    <a class="media-mobile" href="https://goo.gl/maps/dCdTJTqZFuP6ckP89" rel="noopener" target="_blank"> Ver mapa</a>
`

const desktopVersion = (sectionAdd) => {
    if (w.innerWidth >= 1024) sectionAdd.innerHTML  = desktop;
    else sectionAdd.innerHTML  = mobile;
}

const responsiveDesktop = (section) => {
    const sectionAdd = d.getElementById(section);
    desktopVersion(sectionAdd);
    w.addEventListener("resize", e => desktopVersion(sectionAdd))
}

export default responsiveDesktop;