// Internal Files
import Road from "./road.js";
import Zombies from "./zombies.js";
import Human from "./human.js";
import Car from "./car.js";
import Bus from "./bus.js";
import Tank from "./tank.js";
import {
  humanCollision,
  carCollision,
  bombCollision,
  busCollision,
} from "./collision.js";
import Bomb from "./bomb.js";

export default class Home {
  constructor(app) {
    this.app = app;
    this.context = this.app.context;
    this.canvas = this.app.canvas;
    this.menuSprite = this.app.menuSprite;
    this.roadSprite = this.app.roadSprite;
    this.zombieSprite = this.app.zombieSprite;
    this.zombiePowerSprite = this.app.zombiePowerSprite;
    this.carSprite = this.app.carSprite;
    this.frame = this.app.frame;
    this.road = new Road(this);
    this.currentState = 1;
    this.startState = 0;
    this.playState = 1;
    this.pauseState = 2;
    this.overState = 3;

    this.bomb = new Bomb(this);

    this.tank = new Tank(this);
    this.bus = new Bus(this);
    this.car = new Car(this);
    this.human = new Human(this, 280, 180);

    this.zombieLength = 1;
    this.allZombies = [];
    this.score = 1;
    // this.human2 = new Human(this, 1350, 180);

    this.createZombies();
  }

  createZombies() {
    for (let i = 0; i < this.zombieLength; i++) {
      let zombie = new Zombies(this, Math.floor(Math.random() * 100));
      this.allZombies.push(zombie);
    }
  }

  draw() {
    this.road.draw();
    if (this.currentState == this.startState) {
      this.homeGame(); //when screen is in home
    }

    if (this.currentState == this.playState) {
      this.playGame(); //when screen is in playing state
      this.car.draw();
      this.bus.draw();
      this.tank.draw();
      this.bomb.draw();
      this.human.draw();
    }

    if (this.currentState == this.pauseState) {
      this.pauseGame(); //when screen is in pause state
    }

    if (this.currentState == this.overState) {
      this.overGame(); //when screen is in game over state
    }

    this.allZombies.forEach((zombies) => {
      zombies.draw();
    });

    // this.human2.draw();

    return;
  }

  update() {
    this.allZombies.forEach((zombies) => {
      zombies.update();
      if (this.human.isCollided == false) {
        if (humanCollision(this.human, zombies) == true) {
          this.zombieLength = 1 + this.human.addZombies;
          this.score = this.zombieLength;
          this.human.isDisplay = false;
          this.human.isCollided = true;
          this.createZombies();
        }
      }
      if (this.car.isCollided == false) {
        if (carCollision(this.car, zombies)) {
          if (this.zombieLength == this.car.requiredZombies) {
            this.zombieLength = 4 + this.car.addZombies;
            this.score = this.zombieLength;
            this.car.isDisplay = false;
            this.car.isCollided = true;
            this.createZombies();
          }
        }
      }

      if (this.bus.isCollided == false) {
        if (busCollision(this.bus, zombies) == 1) {
          this.bus.isCollided == true;
          //left collision
          if (this.zombieLength >= this.bus.requiredZombies) {
            this.bus.isDisplay = false;
            this.zombieLength = 8 + this.bus.addZombies;
            this.score = this.zombieLength;
          } else {
            if (busCollision(this.bus, zombies == 0)) {
              zombies.y = this.bus.y - this.bus.showSize;
            } else {
            }
            zombies.x = this.bus.x - this.bus.showSize;
          }
        }
      }

      if (this.bomb.isCollided == false) {
        if (bombCollision(this.bomb, zombies)) {
          this.zombieLength = this.zombieLength - this.bomb.decreaseZombies;

          this.bomb.isDisplay = false;
          this.bomb.isCollided = true;
          this.createZombies();
        }
      }
    });

    this.human.update();
    // this.human2.update();
    this.car.update();
    this.bus.update();
    this.tank.update();
  }

  homeGame() {
    // zombies Tsunami
    this.context.drawImage(this.menuSprite, 289, 0, 789, 325, 120, 0, 300, 150);

    // play button
    this.context.drawImage(
      this.menuSprite,
      1090,
      647,
      271,
      180,
      520,
      300,
      70,
      50
    );

    this.context.font = "16px Arial";
    this.context.fillStyle = "white";

    this.context.fillText("Best Score", 10, 300);
    // high Score
    this.context.drawImage(
      this.menuSprite,
      1852,
      1000,
      182,
      135,
      10,
      310,
      40,
      40
    );
  }

  playGame() {
    // score
    this.context.drawImage(
      this.menuSprite,
      1852,
      1000,
      182,
      135,
      10,
      10,
      30,
      30
    );

    // coin
    this.context.drawImage(
      this.menuSprite,
      1363,
      649,
      169,
      176,
      10,
      50,
      30,
      30
    );

    // Pause Button
    this.context.drawImage(this.menuSprite, 0, 1918, 61, 54, 560, 10, 30, 30);

    // zombies count
    this.context.drawImage(
      this.menuSprite,
      1497,
      1700,
      100,
      90,
      240,
      10,
      30,
      30
    );

    // multiply sign
    this.context.drawImage(
      this.menuSprite,
      1648,
      1396,
      55,
      61,
      270,
      20,
      20,
      20
    );
    // no of zombies
    this.context.font = "28px Arial";
    this.context.fillStyle = "white";
    this.context.fillText(this.zombieLength, 295, 35);

    // score

    this.context.font = "25px Arial";
    this.context.fillStyle = "white";
    this.context.fillText(this.score, 50, 35);
  }

  pauseGame() {
    // paused button
    this.context.drawImage(
      this.menuSprite,
      1040,
      825,
      408,
      184,
      210,
      10,
      120,
      80
    );

    // restart button
    this.context.drawImage(
      this.menuSprite,
      232,
      746,
      280,
      156,
      240,
      90,
      60,
      60
    );

    // resume button
    this.context.drawImage(
      this.menuSprite,
      176,
      910,
      292,
      166,
      240,
      160,
      60,
      60
    );

    // home button
    this.context.drawImage(
      this.menuSprite,
      466,
      922,
      270,
      158,
      240,
      230,
      60,
      60
    );
  }

  overGame() {
    // score
    this.context.drawImage(
      this.menuSprite,
      1852,
      1000,
      182,
      135,
      10,
      10,
      30,
      30
    );

    // coin
    this.context.drawImage(
      this.menuSprite,
      1363,
      649,
      169,
      176,
      10,
      50,
      30,
      30
    );

    // home button
    this.context.drawImage(
      this.menuSprite,
      466,
      922,
      270,
      158,
      530,
      10,
      60,
      60
    );

    // Restart Again button
    this.context.drawImage(
      this.menuSprite,
      1467,
      230,
      310,
      190,
      230,
      110,
      120,
      60
    );
  }
}
