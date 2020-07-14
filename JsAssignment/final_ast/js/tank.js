export default class Tank {
  constructor(home) {
    this.home = home;
    this.context = this.home.context;
    this.carSprite = this.home.carSprite;
    this.road = this.home.road;
    this.x = 1900;
    this.y = 120;
    this.height = 120;
    this.width = 329;
    this.sX = 525;
    this.sY = 0;
    this.showSize = 180;
    this.addZombies = 6;
    this.requiredZombies = 8;
    this.isDisplay = true;
  }
  update() {
    // this.x -= 0.5;
  }
  draw() {
    if (this.isDisplay == true) {
      this.context.drawImage(
        this.carSprite,
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
