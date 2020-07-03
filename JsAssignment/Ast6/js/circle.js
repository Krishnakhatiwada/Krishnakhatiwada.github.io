export default class Circle {
  constructor(context, isphase) {
    this.speed = 2;
    this.context = context;
    // console.log(this.context.beginPath);
    this.x = 100;
    this.y = 150;
    this.sX = 60;
    this.sY = 100;
    this.radius = 8;
    this.radiusSize = 8;
    this.stangle = 0;
    this.endAngle = 2 * Math.PI;
    this.frame = 4;
    this.color = "#70c5ce";
    this.phase = isphase ? Math.PI : 0;
    this.volume = 30;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.radius, this.stangle, this.endAngle);
    this.context.closePath();
    this.context.fill();
  }

  swing() {
    this.sX = ++this.sX % 180;
    this.y =
      this.volume *
        Math.sin((this.speed * (this.sX * Math.PI)) / 180 + this.phase) +
      this.sY;

    this.radius =
      (this.radiusSize / 2) *
        Math.cos((this.speed * this.sX * Math.PI) / 180 + this.phase) +
      this.radiusSize / 2;

    this.frame++;
  }
}
