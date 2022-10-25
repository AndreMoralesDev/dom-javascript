const d = document;
const navMenu = (menuOptions, iconOpen, iconClose) =>{
    const $menuOptions = d.querySelector(menuOptions);
    const $menuIcon = d.querySelector(iconOpen);
    const $closeIcon = d.querySelector(iconClose);
    const clickControls = (pointerEvents) => {
        $menuOptions.style.pointerEvents = pointerEvents;
        $menuOptions.classList.toggle("menu-options-active");
        $menuIcon.classList.toggle("icon-menu-off");
        $closeIcon.classList.toggle("icon-menu-off");
    }
    d.addEventListener("click", e => {
        if (e.target.matches("#nav"))clickControls("auto");
        if(e.target.matches('a[href*="#"]')) clickControls("none");
    })
}
export default navMenu;