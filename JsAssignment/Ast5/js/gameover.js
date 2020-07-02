export default class GameOver {
  constructor(game) {
    this.game = game;
    this.context = this.game.context;
    this.sprite = this.game.sprite;
    this.sX = 175;
    this.sY = 228;
    this.width = 225;
    this.height = 202;
    this.X = 320 / 2 - this.width / 2;
    this.Y = 80;
  }
  draw() {
    if (this.game.currentState == this.game.gameOverState) {
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
    }
  }
}
