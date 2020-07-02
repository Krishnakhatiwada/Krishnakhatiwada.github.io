import Game from "./game.js";

let canvas,
  context,
  game,
  sprite,
  frames = 0;

canvas = document.getElementById("flappyBird");
context = canvas.getContext("2d");
sprite = new Image();
sprite.src = "./images/sprites.png";

game = new Game(context, sprite, canvas, frames);

function draw() {
  context.fillStyle = "#70c5ce";
  context.fillRect(0, 0, canvas.width, canvas.height);
  game.draw();
}

function gameLoop() {
  draw();
  game.update();
  frames++;

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
