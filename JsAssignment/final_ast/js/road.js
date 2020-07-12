export default class Road {
  constructor(home) {
    this.home = home;
    this.roadSprite = this.home.roadSprite;
    this.context = this.home.context;
    this.canvas = this.home.canvas;
    this.row = 4;
    this.col = 25;
    this.tsize = 90;

    this.width = 630;
    this.height = 360;
    this.maxX = this.col * this.tsize - this.width;
    this.maxY = this.row * this.tsize - this.height;
    this.SPEED = 256;

    this.camera = {
      x: 0,
      y: 0,
    };

    this.tile = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,

      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,

      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,

      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      0,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
    ];
  }

  getTile(col, row) {
    return this.tile[row * this.col + col];
  }

  draw() {
    for (let i = 0; i < this.col; i++) {
      for (let j = 0; j < this.row; j++) {
        let tile = this.getTile(i, j);
        if (tile !== 0) {
          this.context.drawImage(
            this.roadSprite,
            tile * this.tsize,
            0,
            this.tsize,
            this.tsize,
            i * this.tsize - this.camera.x,
            j * this.tsize - this.camera.y,
            // Math.round(x - this.camera.x),
            // Math.round(y - this.camera.y),
            this.tsize,
            this.tsize
          );
        }
      }
    }
  }
}
