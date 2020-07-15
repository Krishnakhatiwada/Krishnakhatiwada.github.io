export default class Bomb {
  constructor(home) {
    this.home = home;
    this.context = this.home.context;
    this.canvas = this.home.canvas;
    this.zombiePowerSprite = this.home.zombiePowerSprite;

    this.road = this.home.road;
    this.x = 1750;
    this.y = 180;
    this.sX = 1785;
    this.sY = 192;
    this.height = 187;
    this.width = 227;
    this.showSize = 90;
    this.isDisplay = true;
    this.isCollide = false;
    this.decreaseZombies = 1;
  }

  draw() {
    if (this.isDisplay == true) {
      this.context.drawImage(
        this.zombiePowerSprite,
        this.sX,
        this.sY,
        this.width,
        this.height,
        this.x - this.road.camera.x,
        this.y - this.road.camera.y,
        this.showSize,
        this.showSize
      );
    }
  }
}
