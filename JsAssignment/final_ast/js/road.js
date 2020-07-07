export default class Road {
  constructor(home) {
    this.home = home;
    this.roadSprite = this.home.roadSprite;
    this.context = this.home.context;
    this.canvas = this.home.canvas;

    this.row = 4;
    this.col = 4;
    this.cropSize = 90;
    this.tsize = 153;
    this.tile = [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0];
  }

  getTile(col, row) {
    return this.tile[row * this.col + col];
  }

  //   camera(width, height) {
  //     this.x = 0;
  //     this.y = 0;
  //     this.width = width;
  //     this.height = height;
  //     this.maxX = this.cols * this.tsize - width;
  //     this.maxY = this.rows * this.tsize - height;
  //     this.SPEED = 256;
  //   }
  draw() {
    //   70 of x should be increased
    // this.context.drawImage(this.roadSprite, 0, 0, 153, 153, 100, 210, 90, 90);
    // this.context.drawImage(this.roadSprite, 153, 0, 153, 153, 190, 210, 90, 90);
    // this.context.drawImage(this.roadSprite, 153, 0, 153, 153, 280, 210, 90, 90);
    // this.context.drawImage(this.roadSprite, 155, 0, 155, 155, 330, 210, 90, 90);
    // this.context.drawImage(this.roadSprite, 155, 0, 155, 155, 400, 210, 90, 90);
    for (let i = 0; i < this.col; i++) {
      for (let j = 0; j < this.row; j++) {
        let tile = this.getTile(i, j);

        if (tile !== 0) {
          this.context.drawImage(
            this.roadSprite,
            this.tsize,
            0,
            this.tsize,
            this.tsize,
            i * this.cropSize + 100,
            j * this.cropSize + 30,
            this.cropSize,
            this.cropSize
          );
        }
      }
    }
  }
}
