export default class Score {
  constructor(game) {
    this.counter = 0;
    this.game = game;
    this.scoreMeter = document.getElementById("score-meter");
  }

  update() {
    this.updateCounter();
  }

  updateCounter() {
    this.counter += 1;

    this.scoreMeter.innerHTML = this.counter;
  }
}
