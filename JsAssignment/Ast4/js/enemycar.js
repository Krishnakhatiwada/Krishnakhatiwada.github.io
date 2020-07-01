class EnemyCar {
  constructor(game) {
    this._positionTop = Math.random() * 100 * -1;
    this.game = game;
    this.context = this.game.context;
    this.car = new Image();
    this.car.src = "./image/enemycar.png";
    this.carNo = Math.round(Math.random() * 4);
    this.lane = Math.floor(Math.random() * 3);
    this.lanesX = [50, 150, 250, 50];
    this.speed = 1;
  }

  get positionX() {
    return this.lanesX[this.lane];
  }

  get positionY() {
    return this._positionTop;
  }

  update() {
    this._positionTop += this.speed;
    this.context.drawImage(
      this.car,
      this.carNo * 60,
      0,
      60,
      124,
      this.lanesX[this.lane],
      this._positionTop,
      30,
      30
    );

    // checks the enemycar goes down tha lane if yes removes the car from list
    if (this._positionTop >= 150) {
      this.game.allCar.splice(this.game.allCar.indexOf(this), 1);
    }
  }
}
export default EnemyCar;
