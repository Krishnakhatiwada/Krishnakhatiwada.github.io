export default class Bus {
  constructor(home) {
    this.home = home;
    this.context = this.home.context;
    this.carSprite = this.home.carSprite;
    this.x = 300;
    this.y = 130;
    this.height = 120;
    this.width = 225;
    this.sX = 284;
    this.sY = 0;
    this.showSize = 150;
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
        this.x,
        this.y,
        this.showSize,
        this.showSize
      );
    }
  }
}
