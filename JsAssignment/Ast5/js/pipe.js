export default class Pipe {
  constructor(game) {
    this.game = game;
    this.context = this.game.context;
    this.sprite = this.game.sprite;
    this.bird = this.game.bird;
    this.positions = [];
    this.bottom = {
      sX: 502,
      sY: 0,
    };
    this.top = {
      sX: 553,
      sY: 0,
    };
    this.width = 53;
    this.height = 400;
    this.gap = 100;
    this.dX = 2;
    this.maxYPos = -150;
    this.frame = 0;
  }

  update() {
    this.frame++;
    if (this.game.currentState !== this.game.gameState) return;

    if (this.frame % 100 == 0) {
      this.positions.push({
        X: parseInt(this.game.canvas.width),
        Y: this.maxYPos * (Math.random() + 1),
      });
    }

    for (let i = 0; i < this.positions.length; i++) {
      let p = this.positions[i];

      let bottomYPosi = p.Y + this.height + this.gap;

      // top Collision Check
      if (this.topCollision(p.X, p.Y)) {
        this.game.currentState = this.game.gameOverState;
      }

      // bottom Collision Check
      if (this.bottomCollision(p.X, bottomYPosi)) {
        this.game.currentState = this.game.gameOverState;
      }

      // pipe goes out of bound
      if (p.X + this.width <= 0) {
        this.positions.shift();
      }

      // moves the pipe to left by 2
      p.X -= this.dX;
    }
  }
  draw() {
    for (let i = 0; i < this.positions.length; i++) {
      let p = this.positions[i];
      let topYPosi = p.Y;
      let bottomYPosi = p.Y + this.height + this.gap;
      this.context.drawImage(
        this.sprite,
        this.top.sX,
        this.top.sY,
        this.width,
        this.height,
        p.X,
        topYPosi,
        this.width,
        this.height
      );
      this.context.drawImage(
        this.sprite,
        this.bottom.sX,
        this.bottom.sY,
        this.width,
        this.height,
        p.X,
        bottomYPosi,
        this.width,
        this.height
      );
    }
  }

  topCollision(px, py) {
    if (
      this.bird.X + this.bird.radius > px &&
      this.bird.X - this.bird.radius < px + this.width &&
      this.bird.Y + this.bird.radius > py &&
      this.bird.Y - this.bird.radius < py + this.height
    ) {
      return true;
    }
  }

  bottomCollision(px, bottomYpos) {
    if (
      this.bird.X + this.bird.radius > px &&
      this.bird.X - this.bird.radius < px + this.width &&
      this.bird.Y + this.bird.radius > bottomYpos &&
      this.bird.Y - this.bird.radius < bottomYpos + this.height
    ) {
      return true;
    }
  }
}
