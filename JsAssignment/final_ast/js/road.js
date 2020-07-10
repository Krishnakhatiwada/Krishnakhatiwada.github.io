export default class Road {
  constructor(home) {
    this.home = home;
    this.roadSprite = this.home.roadSprite;
    this.context = this.home.context;
    this.canvas = this.home.canvas;
    this.row = 4;
    this.col = 12;
    this.tsize = 90;
    this.x = 5;
    this.y = 10;
    this.width = 630;
    this.height = 360;
    this.maxX = this.col * this.tsize - this.width;
    this.maxY = this.row * this.tsize - this.height;
    this.SPEED = 256;
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
      1,
      1,
      1,
      2,
      2,

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
      2,
    ];
  }

  getTile(col, row) {
    return this.tile[row * this.col + col];
  }

  //   camera(width, height) {
  //     this.x = 0;
  //     this.y = 0;
  //     this.width = width;
  //     this.height = height;
  //     this.maxX = this.col * this.tsize - width;
  //     this.maxY = this.row * this.tsize - height;
  //     this.SPEED = 256;
  //   }
  draw() {
    let startCol = Math.floor(this.x / this.tsize);
    let endCol = startCol + this.width / this.tsize;
    let startRow = Math.floor(this.y / this.tsize);
    let endRow = startRow + this.height / this.tsize;
    let offsetX = -this.x + startCol * this.tsize;
    let offsetY = -this.y + startRow * this.tsize;

    for (let i = startCol; i <= endCol; i++) {
      for (let j = startRow; j <= endRow; j++) {
        let tile = this.getTile(i, j);
        var x = (i - startCol) * this.tsize + offsetX;
        var y = (j - startRow) * this.tsize + offsetY;

        if (tile !== 0) {
          this.context.drawImage(
            this.roadSprite,
            tile * this.tsize,
            0,
            this.tsize,
            this.tsize,
            // i * this.tsize,
            // j * this.tsize,
            Math.round(x),
            Math.round(y),
            this.tsize,
            this.tsize
          );
        }
      }
    }
  }
}
