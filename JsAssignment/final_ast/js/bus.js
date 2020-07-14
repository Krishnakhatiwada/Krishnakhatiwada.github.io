export default class Bus {
  constructor(home) {
    this.home = home;
    this.context = this.home.context;
    this.carSprite = this.home.carSprite;
    this.road = this.home.road;
    this.x = 1270;
    this.y = 110;
    this.height = 120;
    this.width = 225;
    this.sX = 284;
    this.sY = 0;
    this.showSize = 160;
    this.addZombies = 5;
    this.requiredZombies = 6;
    this.isDisplay = true;
  }
  update() {}
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
