export function humanCollision(human, zomb) {
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

export function carCollision(car, zomb) {
  if (
    //yo overlap wala haena
    zomb.x + 90 > car.x &&
    zomb.x < car.x + car.showSize &&
    zomb.y + 90 > car.y &&
    zomb.y < car.y + car.showSize
  ) {
    return true;
  }
  return false;
}

export function busCollision(bus, zomb) {
  if (zomb.x + 90 > bus.x && zomb.x < bus.x + bus.showSize) {
    return 1; //left collision
    //   console.log("left");
  }

  if (zomb.y + 90 > bus.y && zomb.y < bus.y + bus.showSize) {
    return 0; //top collision
    //   console.log("top");
  }
}

export function bombCollision(bomb, zomb) {
  if (
    zomb.x + 90 > bomb.x &&
    zomb.x < bomb.x + bomb.showSize &&
    zomb.y + 90 > bomb.y &&
    zomb.y < bomb.y + bomb.showSize
  ) {
    return true;
  }
  return false;
}

export function tankCollision(tank, zomb) {
  // console.log(zomb);
  if (zomb.x + 90 > tank.x && zomb.x < tank.x + tank.showSize) {
    // console.log("left");
    return 1; //left collision
  }

  if (zomb.y + 90 > tank.y && zomb.y < tank.y + tank.showSize) {
    // console.log("top");
    return 0; //top collision
  }
}

export function planeCollision(plane, zomb) {
  // console.log(zomb);
  if (zomb.x + 90 > plane.x && zomb.x < plane.x + plane.showSize) {
    // console.log("left");
    return 1; //left collision
  }

  if (zomb.y + 90 > plane.y && zomb.y < plane.y + plane.showSize) {
    // console.log("top");
    return 0; //top collision
  }
}
