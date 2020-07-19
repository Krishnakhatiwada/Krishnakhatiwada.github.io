export default class Plane {
  constructor(home) {
    this.home = home;
    this.context = this.home.context;
    this.carSprite = this.home.carSprite;
    this.road = this.home.road;
    this.x = 2800;
    this.y = 100;
    this.height = 175;
    this.width = 320;
    this.sX = 0;
    this.sY = 155;
    this.showSize = 250;
    this.addZombies = 9;
    this.requiredZombies = 10;
    this.isDisplay = true;
    this.isCollided = false;
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
