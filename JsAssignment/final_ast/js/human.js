export default class Human {
  constructor(home, x, y) {
    this.home = home;
    this.context = this.home.context;
    this.menuSprite = this.home.menuSprite;
    this.road = this.home.road;
    this.x = x;
    this.y = y;
    this.height = 97;
    this.width = 141;
    this.sX = 1090;
    this.sY = 1510;
    this.showSize = 90;
    this.addZombies = 3;
    this.isDisplay = true;
  }

  update() {}
  draw() {
    if (this.isDisplay == true) {
      this.context.drawImage(
        this.menuSprite,
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
