export default class Zombies {
  constructor(home) {
    this.home = home;

    this.zombieSprite = this.home.zombieSprite;
    this.context = this.home.context;
    this.canvas = this.home.canvas;
    this.road = this.home.road;
    this.human = this.home.human;
    this.car = this.home.car;
    this.width = 110;
    this.height = 140;
    this.x = 50;
    this.y = 182;
    this.frame = 0;
    this.jump = false;
    this.x_velocity = 0;
    this.y_velocity = 0;
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
      this.x = this.x_velocity;

      if (this.x > this.road.camera.x + 2 * this.road.tsize) {
        this.road.camera.x = this.x - 2 * this.road.tsize;
      }

      this.y_velocity += 0.5;
      this.y += this.y_velocity;
      this.y_velocity *= 0.9;

      // let x = Math.floor(this.X / this.road.tsize);
      // let y = Math.floor(this.Y / this.road.tsize);
      // let newLeftX = x - 1;
      // let newRightX = x + 1;
      // let newTopY = y - 1;
      // let newBottomY = y + 1;

      this.tileCollisonDetection();

      // this.humanCollision();
      // this.carCollision();
      // this.busCollision();
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
      this.y_velocity -= 25;
    }
  }

  tileCollisonDetection() {
    let top = 3 * this.road.tsize;
    // if (this.y > 360 - 90 - 90) {
    if (this.y + 90 > top) {
      this.jump = false;
      this.y = top - 90;
      this.y_velocity = 0;
    }
  }

  // carCollision() {
  //   if (
  //     this.x + 90 > this.car.x &&
  //     this.x < this.car.x + this.car.showSize &&
  //     this.y + 90 > this.car.y &&
  //     this.y < this.car.y + this.car.showSize
  //   ) {
  //     if (this.zombieNo == this.car.requiredZombies) {
  //       this.zombieNo = 4 + this.car.addZombies;
  //       this.car.isDisplay = false;
  //     }
  //   }
  // }

  busCollision() {}
}
