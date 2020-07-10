export default class Zombies {
  constructor(home) {
    this.home = home;
    this.zombieSprite = this.home.zombieSprite;
    this.context = this.home.context;
    this.canvas = this.home.canvas;
    this.width = 110;
    this.height = 140;
    this.X = 50;
    this.Y = 170;
    this.radius = 12;
    this.frame = 0;
    this.jump = false;
    this.gravity = 2;
    this.speed = 0;
    this.x_velocity = 0;
    this.y_velocity = 0;
    this.animate = [
      { sX: 0, sY: 0 },
      { sX: 121, sY: 0 },
      { sX: 239, sY: 0 },
      { sX: 359, sY: 0 },
      { sX: 0, sY: 148 },
      { sX: 121, sY: 148 },
      { sX: 239, sY: 148 },
      { sX: 359, sY: 148 },
    ];
  }

  update() {
    if (this.home.currentState == this.home.playState) {
      this.frame = (this.frame + 1) % this.animate.length;
      document.addEventListener("keydown", (e) => {
        if (e.keyCode == 32) {
          this.y_velocity = -0;
          this.Y = this.y_velocity;

          this.jump = true;
        }
      });
      // this.X += 0.5;
      // this.Y += this.gravity;
    }
  }
  draw() {
    let zomb = this.animate[this.frame];
    this.context.drawImage(
      this.zombieSprite,
      zomb.sX,
      zomb.sY,
      this.width,
      this.height,
      this.X,
      this.Y,
      // (this.Y += this.gravity),
      90,
      90
    );
  }
}
