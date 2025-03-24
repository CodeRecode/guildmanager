export const GameTickEventString = "GameTickEvent";
export const GameTickTimeMs = 100;
var GameTickEvent = new Event(GameTickEventString);

function GameTick() {
    window.dispatchEvent(GameTickEvent);
}

setInterval(GameTick, 100);