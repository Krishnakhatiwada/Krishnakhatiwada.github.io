class Background {
  constructor(game) {
    this.game = game;
    this.sprite = this.game.sprite;
    this.context = this.game.context;
    this._sX = 0;
    this._sY = 0;
    this._width = 276;
    this._height = 226;
    this._dX = 0;
    this._dY = 480 - this._height;
  }

  draw() {
    this.context.drawImage(
      this.sprite,
      this._sX,
      this._sY,
      this._width,
      this._height,
      this._dX,
      this._dY,
      this._width,
      this._height
    );

    this.context.drawImage(
      this.sprite,
      this._sX,
      this._sY,
      this._width,
      this._height,
      this._dX + this._width,
      this._dY,
      this._width,
      this._height
    );
  }
}
export default Background;
