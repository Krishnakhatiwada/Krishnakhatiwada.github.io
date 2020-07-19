export default class Zombies {
  constructor(home, x) {
    this.home = home;

    this.zombieSprite = this.home.zombieSprite;
    this.context = this.home.context;
    this.canvas = this.home.canvas;
    this.road = this.home.road;
    this.human = this.home.human;
    this.car = this.home.car;
    this.width = 110;
    this.height = 140;
    this.x = x;
    this.y = 182;
    this.frame = 0;
    this.jump = false;
    this.x_velocity = 0;
    this.y_velocity = 0;
    this.gravity = 0.5;
    this.zombieNo = 1;
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
          this.jumping();
        }
      });

      this.x_velocity += 2;
      if (this.x_velocity > 2) {
        this.x_velocity = 2;
      }

      this.x += this.x_velocity;

      if (this.x > this.road.camera.x + 2 * this.road.tsize) {
        this.road.camera.x = this.x - 2 * this.road.tsize;
      }

      // this.y_velocity += 0.5;
      this.y += this.y_velocity;
      // console.log("y", this.y_velocity);
      // console.log("gravity", this.gravity);
      this.y_velocity += this.gravity;

      // let newLeftX = x - 1;
      // let newRightX = x + 1;
      // let newTopY = y - 1;
      // let newBottomY = y + 1;

      this.tileCollisonDetection();
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
      this.x - this.road.camera.x,
      this.y - this.road.camera.y,
      90,
      90
    );
  }
  jumping() {
    if (this.jump == false) {
      this.jump = true;
      this.y_velocity = -10;
    }
  }

  tileCollisonDetection() {
    let x = Math.floor(this.x / this.road.tsize);
    let y = Math.floor(this.y / this.road.tsize);
    let h = 2;
    let w = 2;

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        this.isCollideWith(x + i, y + j);
      }
    }
  }

  isCollideWith(tileX, tileY) {
    let x = tileX * this.road.tsize;
    let y = tileY * this.road.tsize;

    if (tileX < 0 || tileY < 0) return;
    let tile = this.road.getTile(tileX, tileY);

    if (tile == 0) return;

    if (this.y + 90 >= this.canvas.height) {
      this.y += 90;
      delete this.home.allZombies[this.index];
      this.home.zombieLength--;

      if (this.home.zombieLength <= 0) {
        this.home.currentState = this.home.overState;
      }
    }
    if (this.y + 90 > y - this.road.tsize && this.y < y + this.road.tsize) {
      // this.y = y;

      this.jump = false;
      this.y = y - this.road.tsize;
      this.y_velocity = 0;
    }

    // if (this.x < x + 90 && this.x + 90 > x) {
    //   this.x = this.x - this.road.x;
    //   this.x_velocity = 0;
    // }
  }
}
