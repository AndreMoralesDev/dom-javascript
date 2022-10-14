const countDown = (id, date, message) => {
    const $time = document.getElementById(id);
    const finish = new Date(date).getTime();
    const timer = setInterval(() => {
        const today = new Date().getTime();
        const days = (finish - today) / (1000 * 60 * 60 * 24)
        const hours = days * 24 % 24
        const minutes = hours * 60 % 60
        const seconds = minutes * 60 % 60
        if (days <= 0) {
            clearInterval(timer);
            $time.textContent = message;
        } else {
            $time.textContent = `Faltan ${Math.floor(days)} días ${Math.floor(hours)} horas ${Math.floor(minutes)} minutos ${Math.round(seconds)} segundos`;
        }
    }, 1000);
}

export default countDown;