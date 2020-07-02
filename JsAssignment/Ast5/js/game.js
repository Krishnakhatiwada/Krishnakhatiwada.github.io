import Background from "./background.js";
import Bird from "./bird.js";
import Foreground from "./foreground.js";
import Ready from "./ready.js";
import GameOver from "./gameover.js";
import Pipe from "./pipe.js";
export default class Game {
  constructor(context, sprite, canvas, frames) {
    self = this;
    this.degree = Math.PI / 180;
    this.frames = frames;
    this.canvas = canvas;
    this.context = context;
    this.sprite = sprite;
    this.bg = new Background(this); //bg = Background
    this.bird = new Bird(this);
    this.fg = new Foreground(this); // fg = Foreground
    this.ready = new Ready(this);
    this.go = new GameOver(this); //go= GameOver
    this.pipe = new Pipe(this);
    this.currentState = 0;
    this.readyState = 0;
    this.gameState = 1;
    this.gameOverState = 2;
  }
  draw() {
    this.bg.draw();
    this.bird.draw();
    this.pipe.draw();
    this.fg.draw();
    this.ready.draw();
    this.go.draw();
  }

  update() {
    this.bird.update();
    this.fg.update();
    this.pipe.update();
    this.updateState();
  }

  updateState() {
    this.canvas.addEventListener("click", function (e) {
      switch (self.currentState) {
        case self.readyState:
          self.currentState = self.gameState;
          break;

        case self.gameState:
          self.bird.flap();
          break;

        case self.gameOverState:
          self.currentState = self.readyState;
          break;
      }
    });
  }
}
