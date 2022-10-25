const d = document;
const w = window;
const smartVideo = () => {
    const $videos = d.querySelectorAll("video[data-video]")
    const cb = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting)  entry.target.play()
            else {
                entry.target.pause();
                entry.target.currentTime = 0
            }
            w.addEventListener("visibilityChange", e => 
                d.visibilityState === "visible" 
                    ? entry.target.play()
                    : entry.target.pause()
            )
        })
    }
    const observer = new IntersectionObserver(cb, {threshold: 1})
    $videos.forEach(e => observer.observe(e));
}

export default smartVideo;