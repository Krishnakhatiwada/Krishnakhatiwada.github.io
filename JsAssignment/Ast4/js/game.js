import Road from "./road.js";
import PlayerCar from "./playercar.js";
import Controls from "./controls.js";
import Enemycar from "./enemycar.js";
import { isCollide } from "./collision.js";
import Score from "./score.js";

class Game {
  constructor(context) {
    this.self = this;
    this.context = context;
    this.PlayerCar = new PlayerCar(this);
    this.road = new Road(this);
    this.score = new Score(this);
    new Controls({ PlayerCar: this.PlayerCar });
    this.allCar = [];
    setInterval(() => {
      this.SpwanCar();
    }, 3000);

    this._puased = false;
  }

  SpwanCar() {
    if (this._puased) return;
    let EnemyCar = new Enemycar(this);
    let EnemyCar1 = new Enemycar(this);
    this.allCar.push(EnemyCar, EnemyCar1);
  }

  TryAgain(e) {
    if (e.keyCode !== 32) {
      return;
    }
    this.PlayerCar.resetPlayerPosition();
    this.score.counter = 0;
    this.score.scoreMeter.innerHTML = this.score.counter;
    this.allCar = [];
    this._puased = false;
    let screenTryagain = document.querySelector(".messages");
    screenTryagain.style.display = "none";
    document.onkeydown = null;
  }
  update() {
    if (this._puased) return;
    this.road.update();
    this.PlayerCar.update();
    this.allCar.forEach((cars) => {
      cars.update();
    });

    if (isCollide(this.PlayerCar, this.allCar) == true) {
      this._puased = true;
      let screenTryagain = document.querySelector(".messages");
      screenTryagain.style.display = "block";
      document.onkeydown = (e) => {
        this.TryAgain(e);
      };
    }

    if (isCollide(this.PlayerCar, this.allCar) == 2) {
      this.score.update();
    }
  }
}

export default Game;
