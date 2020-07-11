export default class Zombies {
  constructor(home) {
    this.home = home;
    this.zombieSprite = this.home.zombieSprite;
    this.context = this.home.context;
    this.canvas = this.home.canvas;
    this.road = this.home.road;
    this.width = 110;
    this.height = 140;
    this.X = 50;
    this.Y = 182;
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
          this.y_velocity -= 0;
          this.Y = this.y_velocity;
          this.jump = true;
        }
      });

      this.X += 2;
      this.Y += this.gravity;

      if (this.X > this.road.camera.x + 2 * this.road.tsize) {
        this.road.camera.x = this.X - 2 * this.road.tsize;
      }

      let x = Math.floor(this.X / this.road.tsize);
      let y = Math.floor(this.Y / this.road.tsize);
      let newLeftX = x - 1;
      let newRightX = x + 1;
      let newTopY = y - 1;
      let newBottomY = y + 1;

      this.tileCollisonDetection(
        x,
        y,
        newLeftX,
        newRightX,
        newTopY,
        newBottomY
      );
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
      this.X - this.road.camera.x,
      this.Y - this.road.camera.y,
      // (this.Y += this.gravity),
      90,
      90
    );
  }

  tileCollisonDetection(x, y, leftX, rightX, topY, bottomY) {
    // console.log("top", topY, "bottom", bottomY);
    // console.log("left", leftX, "right", rightX);
    if (this.Y > this.road.height - this.road.tsize - 90) {
      this.gravity = 0;
    }
    if (this.X > this.road.width - this.road.tsize) {
    }
  }
}
