function CreateDiv(height, width) {
  //   this.totaldiv = totaldiv;
  this.height = height;
  this.width = width;
  this.getDiv = function () {
    var div = document.createElement("div");
    div.setAttribute("id", "bounce-wrapper");
    div.style.height = this.height + "px";
    div.style.width = this.width + "px";
    div.style.position = "relative";
    div.style.border = "2px solid black";

    return div;
  };
}

// var div2 = new CreateDiv(400, 400);

function CreateBall(height, width, radius, top, left) {
  this.height = height;
  this.width = width;
  this.radius = radius;
  this.top = top;
  this.left = left;
  this.getBall = function () {
    var ball = document.createElement("div");
    ball.setAttribute("id", "ball");
    ball.style.height = this.height + "px";
    ball.style.width = this.width + "px";
    ball.style.borderRadius = this.radius + "px";
    ball.style.background = "red";
    ball.style.position = "absolute";
    ball.style.left = this.left + "px";
    ball.style.top = this.top + "px";

    return ball;
  };
}

// console.log(ball1.getBall());

function ShowElements(div, ball, ballMovement) {
  var ball = ball.getBall();
  var div = div.getDiv();
  var speed = 2;
  var new_top = 0;
  var new_left = 0;
  var horizontalMovement = "horizontal";
  var verticalMovement = "vertical";
  setInterval(function () {
    if (ballMovement == horizontalMovement) {
      if (new_top > parseInt(div.style.height) - 20) {
        speed = -2;
      }

      if (new_top < 0) {
        speed = +2;
      }
      new_top = new_top + speed;
      ball.style.top = new_top + "px";
    }

    if (ballMovement == verticalMovement) {
      if (new_left > parseInt(div.style.width) - 20) {
        speed = -2;
      }

      if (new_left < 0) {
        speed = +2;
      }
      new_left = new_left + speed;
      ball.style.left = new_left + "px";
    }
  }, 800 / 60);
  document.body.append(div);
  div.appendChild(ball);
}
var div1 = new CreateDiv(200, 300);
var ball1 = new CreateBall(10, 10, 10, 0, 140);
ShowElements(div1, ball1, "horizontal");

var div2 = new CreateDiv(200, 500);
var ball2 = new CreateBall(20, 20, 30, 80, 0);
ShowElements(div2, ball2, "vertical");
