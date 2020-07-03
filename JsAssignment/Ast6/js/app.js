import Circle from "./circle.js";
class App {
  constructor() {
    this.canvas = document.getElementById("helix");
    this.context = this.canvas.getContext("2d");
    this.cwidth = this.canvas.width;
    this.cheight = this.canvas.height;

    this.numofRow = 7;
    this.numofCol = 15;
    this.circles = [];
    this.numofstrad = 2;
    this.startPos = 50;
    this.gap = 20;
    this.createCircleArray();
    this.gameLoop();
  }

  createCircleArray() {
    // for (let i = 0; i < this.numofstrad; i += 1) {
    var newYposition = this.startPos;
    for (let j = 0; j < this.numofRow; j++) {
      newYposition += this.gap;
      var newXpositon = 0;
      var phaseIncrease = 6;
      var currentPhase = 0;
      for (let k = 0; k < this.numofCol; k++) {
        let isphase = true;
        let circle = new Circle(this.context, isphase);
        circle.x = newXpositon += this.gap;
        circle.y = newYposition;

        circle.sX = currentPhase += phaseIncrease;
        circle.sY = newYposition;

        this.circles.push(circle);
      }
    }

    var newYposition = this.startPos;
    for (let j = 0; j < this.numofRow; j++) {
      newYposition += this.gap;
      var newXpositon = 0;
      var phaseIncrease = 6;
      var currentPhase = 0;
      for (let k = 0; k < this.numofCol; k++) {
        let isphase = false;
        let circle = new Circle(this.context, isphase);
        circle.x = newXpositon += this.gap;
        circle.y = newYposition;

        circle.sX = currentPhase += phaseIncrease;
        circle.sY = newYposition;

        this.circles.push(circle);
      }
    }
  }

  draw() {
    this.context.clearRect(0, 0, this.cwidth, this.cheight);
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, this.cwidth, this.cheight);
    for (let i = 0; i < this.circles.length; i++) {
      let circ = this.circles[i];
      circ.draw();
      circ.swing();
    }
  }

  gameLoop() {
    this.draw();
    requestAnimationFrame(this.gameLoop.bind(this));
  }
}

var app = new App();
