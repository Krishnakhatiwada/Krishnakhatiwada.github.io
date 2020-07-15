// internal files
import Home from "./home.js";
class App {
  constructor() {
    this.canvas = document.getElementById("zombies");
    this.context = this.canvas.getContext("2d");
    this.cwidth = this.canvas.width;
    this.cheight = this.canvas.height;

    this.carSprite = new Image();

    this.carSprite.src = "./images/buses.png";

    this.menuSprite = new Image();
    this.menuSprite.src = "./images/menu.png";

    this.powerSprite = new Image();
    this.powerSprite.src = "./images/powers.png";

    this.zombieSprite = new Image();
    this.zombieSprite.src = "./images/zombies1.png";

    this.zombiePowerSprite = new Image();
    this.zombiePowerSprite.src = "./images/zombies.png";

    this.roadSprite = new Image();
    this.roadSprite.src = "./images/tile.png";

    this.frame = 0;

    this.home = new Home(this);

    this.draw();
    this.gameLoop();
  }

  draw() {
    this.context.imageSmoothingEnabled = false;
    this.context.clearRect(0, 0, this.cwidth, this.cheight);
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, this.cwidth, this.cheight);
    this.home.draw();
  }

  gameLoop() {
    this.draw();
    this.home.update();
    this.frame++;
    requestAnimationFrame(this.gameLoop.bind(this));
  }
}

var app = new App();
