// internal files
import Home from "./home.js";
class App {
  constructor() {
    this.canvas = document.getElementById("zombies");
    this.context = this.canvas.getContext("2d");
    this.cwidth = this.canvas.width;
    this.cheight = this.canvas.height;

    this.carSprite = new Image();

    this.carSprite.src = "./images/cars.png";

    this.menuSprite = new Image();
    this.menuSprite.src = "./images/menu.png";

    this.powerSprite = new Image();
    this.powerSprite.src = "./images/powers.png";

    this.zombieSprite = new Image();
    this.zombieSprite.src = "./images/zombies.png";

    this.home = new Home(this);

    this.draw();
    this.gameLoop();
  }

  draw() {
    this.context.clearRect(0, 0, this.cwidth, this.cheight);
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, this.cwidth, this.cheight);
    this.home.draw();
  }

  gameLoop() {
    this.draw();
    this.home.update();

    requestAnimationFrame(this.gameLoop.bind(this));
  }
}

var app = new App();
