class PlayerCar {
  constructor(game) {
    this.game = game;
    this.context = this.game.context;
    this.car = new Image();
    this.car.src = "./image/playercar.png";
    this._positionX = 150;
    this._positionY = 120;
  }

  get positionX() {
    return this._positionX;
  }
  get positionY() {
    return this._positionY;
  }

  moveLeft() {
    this._positionX -= 100;
    if (this._positionX <= 50) {
      this._positionX = 50;
    }
  }

  moveRight() {
    this._positionX += 100;
    if (this._positionX >= 250) {
      this._positionX = 250;
    }
  }
  resetPlayerPosition() {
    this._positionX = 150;
    this._positionY = 120;
  }

  update() {
    this.context.drawImage(this.car, this._positionX, this._positionY, 40, 30);
  }
}
export default PlayerCar;
