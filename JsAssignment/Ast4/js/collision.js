export function isCollide(PlayerCar, EnemyCars) {
  for (let i = 0; i < EnemyCars.length; i++) {
    let EnemyCar = EnemyCars[i];
    /*
    calculting the positon of playerCar by its actual position - its height
    calculting the positon of playerCar by its actual position + its height
    to find position of enemy near player
    */

    if (EnemyCar._positionTop > 90 && EnemyCar._positionTop <= 160) {
      if (Math.abs(EnemyCar.positionX - PlayerCar.positionX == 0)) {
        return true;
      } else {
        return 2;
      }
    }
  }
  return false;
}
