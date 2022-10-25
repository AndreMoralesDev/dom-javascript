const d = document;
let x = 0;
let y = 0;
const playGame = () => {
    d.addEventListener("keydown", e => {
        const $gameContainer = d.getElementById("game-container");
        const $gameBall = d.getElementById("game-ball");
        const $gameDimensions = $gameContainer.getBoundingClientRect();
        const $ballDimensions = $gameBall.getBoundingClientRect();
        switch (e.keyCode) {
            case 37:
                if ($gameDimensions.left + 10 < $ballDimensions.left) {
                    e.preventDefault();
                    x--;
                }
                break;
            case 38:
                if ($gameDimensions.top + 10 < $ballDimensions.top) {
                    e.preventDefault();
                    y--;
                }
                break;
            case 39:
                if ($gameDimensions.right - 10 > $ballDimensions.right) {
                    e.preventDefault();
                    x++;
                }
                break;
            case 40:
                if ($gameDimensions.bottom - 10 > $ballDimensions.bottom) {
                    e.preventDefault();
                    y++;
                }
                break;
            default:
                break;
        }
        $gameBall.style.transform = `translate(${x * 4}px, ${y *4}px)`
    })
}
export default playGame;