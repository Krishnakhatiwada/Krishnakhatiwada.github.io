class Controls {
  constructor(values) {
    this.playerCar = values.PlayerCar;
    this.init();
  }

  init() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 37) {
        //left arrow key

        this.playerCar.moveLeft();
      }

      if (e.keyCode == 39) {
        //   right arrow key
        this.playerCar.moveRight();
      }
    });
  }
}
export default Controls;
