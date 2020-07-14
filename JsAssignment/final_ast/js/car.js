export default class Car {
  constructor(home) {
    this.home = home;
    this.context = this.home.context;
    this.carSprite = this.home.carSprite;
    this.road = this.home.road;
    this.x = 750;
    this.y = 70;
    this.height = 106;
    this.width = 263;
    this.sX = 1;
    this.sY = 0;
    this.showSize = 110;
    this.addZombies = 4;
    this.requiredZombies = 4;
    this.isDisplay = true;
  }
  update() {
    // this.x -= 5;
    // if (this.x < 450) {
    //   this.x = 400;
    // }
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
