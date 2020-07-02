export default class Foreground {
  constructor(game) {
    this.game = game;
    this.context = this.game.context;
    this.sprite = this.game.sprite;
    this.sX = 276;
    this.sY = 0;
    this.width = 224;
    this.height = 112;
    this.X = 0;
    this.Y = 480 - 112;
    this.dX = 2;
  }

  draw() {
    this.context.drawImage(
      this.sprite,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.X,
      this.Y,
      this.width,
      this.height
    );
    this.context.drawImage(
      this.sprite,
      this.sX,
      this.sY,
      this.width,
      this.height,
      this.X + this.width,
      this.Y,
      this.width,
      this.height
    );
  }
  update() {
    if (this.game.currentState == this.game.gameState) {
      this.X = (this.X - this.dX) % (this.width / 2);
    }
  }
}
