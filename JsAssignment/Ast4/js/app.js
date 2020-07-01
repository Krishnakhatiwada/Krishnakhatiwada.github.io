import Game from "./game.js";

let context, canvas, scoreboard, menu, game;

let startClick = document.getElementById("start");
startClick.addEventListener("click", function (e) {
  canvas = document.getElementById("carLane");
  menu = document.getElementById("menu");
  context = canvas.getContext("2d");
  scoreboard = document.querySelector(".scoreboard");
  scoreboard.style.display = "block";
  canvas.style.display = "block";
  game = new Game(context);
  requestAnimationFrame(gameLoop);
  menu.style.display = "none";
});

function gameLoop() {
  game.update();
  requestAnimationFrame(gameLoop);
}
