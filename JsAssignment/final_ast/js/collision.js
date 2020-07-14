export function humanCollision(human, zombies) {
  for (let i = 0; i < zombies.length; i++) {
    let zomb = zombies[i];
    if (
      zomb.x + 90 > human.x &&
      zomb.x < human.x + human.showSize &&
      zomb.y + 90 > human.y &&
      zomb.y < human.y + human.showSize
    ) {
      return true;
    }
    return false;
  }
}

export function carCollision(car, zombies) {
  for (let i = 0; i < zombies.length; i++) {
    let zomb = zombies[i];

    if (
      zomb.x + 90 > car.x &&
      zomb.x < car.x + car.showSize &&
      zomb.y + 90 > car.y &&
      zomb.y < car.y + car.showSize
    ) {
      return true;
    }
    return false;
  }
}
