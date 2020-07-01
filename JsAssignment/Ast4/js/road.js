class Road {
  constructor(game) {
    this.game = game;
    this.context = this.game.context;
    this.yOffset = -575;
    this.road = new Image();
    this.road.src = "./image/road.png";
  }

  update() {
    if (this.yOffset >= 0) this.yOffset = -600;

    this.context.drawImage(this.road, 0, this.yOffset);
    this.context.drawImage(this.road, 0, this.yOffset + 600);
    this.context.drawImage(this.road, 0, this.yOffset + 1200);
    this.yOffset += 5; // need to change acording to game time increases
  }
}

export default Road;
