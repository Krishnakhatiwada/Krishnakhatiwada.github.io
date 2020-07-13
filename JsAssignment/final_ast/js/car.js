export default class Car {
  constructor(home) {
    this.home = home;
    this.context = this.home.context;
    this.carSprite = this.home.carSprite;
    this.x = 600;
    this.y = 160;
    this.height = 106;
    this.width = 263;
    this.sX = 1;
    this.sY = 0;
    this.showSize = 110;
    this.addZombies = 4;
    this.requiredZombies = 4;
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
        this.x,
        this.y,
        this.showSize,
        this.showSize
      );
    }
  }
}
