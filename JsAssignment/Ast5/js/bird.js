export default class Bird {
  constructor(game) {
    this.game = game;
    this.sprite = this.game.sprite;
    this.context = this.game.context;
    this.canvas = this.game.canvas;

    this.width = 34;
    this.height = 26;
    this.X = 50;
    this.Y = 150;
    this.radius = 12;
    this.frame = 0;
    this.jump = 5;
    this.gravity = 0.25;
    this.speed = 0;
    this.rotation = 0;
    this.animate = [
      { sX: 276, sY: 112 },
      { sX: 276, sY: 139 },
      { sX: 276, sY: 164 },
      { sX: 276, sY: 139 },
    ];
    this.period;
  }

  update() {
    this.period = this.game.currentState == this.game.readyState ? 10 : 5;
    this.frame += this.game.frames % this.period == 0 ? 1 : 0;
    this.frame = this.frame % this.animate.length;

    if (this.game.currentState == this.game.readyState) {
      this.Y = 150;
      this.rotation = 0 * this.game.degree;
    } else {
      this.speed += this.gravity;
      this.Y += this.speed;
      if (
        this.Y + this.height / 2 >=
        this.canvas.height - this.game.fg.height
      ) {
        this.Y = this.canvas.height - this.game.fg.height - this.height / 2;
        if (this.game.currentState == this.game.gameState) {
          this.game.currentState = this.game.gameOverState;
        }
      }

      if (this.speed >= this.jump) {
        this.rotation = 90 * this.game.degree;
        this.frame = 1;
      } else {
        this.rotation = -25 * this.game.degree;
      }
    }
  }

  draw() {
    let bird = this.animate[this.frame];
    this.context.save();
    this.context.translate(this.X, this.Y);
    this.context.rotate(this.rotation);

    this.context.drawImage(
      this.sprite,
      bird.sX,
      bird.sY,
      this.width,
      this.height,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    this.context.restore();
  }

  flap() {
    this.speed = -this.jump;
  }
}
