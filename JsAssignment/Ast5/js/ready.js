export default class Ready {
  constructor(game) {
    this.game = game;
    this.context = this.game.context;
    this.sprite = this.game.sprite;
    this.sX = 0;
    this.sY = 228;
    this.width = 173;
    this.height = 152;
    this.X = 320 / 2 - this.width / 2;
    this.Y = 80;
  }
  draw() {
    if (this.game.currentState == this.game.readyState) {
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
