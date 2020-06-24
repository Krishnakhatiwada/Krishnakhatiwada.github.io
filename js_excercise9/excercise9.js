function creteWrapperDiv(circle) {
  var speed = 2;
  var new_top = 0;
  var div = document.createElement("div");
  div.setAttribute("id", "bounce-wrapper");
  div.style.height = "450px";
  div.style.width = "400px";
  div.style.position = "relative";
  div.style.border = "2px solid black";
  div.appendChild(circle);

  setInterval(function () {
    // console.log();
    if (new_top > parseInt(div.style.height) - 50) {
      speed = -2;
    }

    if (new_top < 0) {
      speed = +2;
    }
    new_top = new_top + speed;
    circle.style.top = new_top + "px";
  }, 800 / 60);
  document.body.append(div);
}

function createBall() {
  var ball = document.createElement("div");
  ball.setAttribute("id", "ball");
  ball.style.height = "50px";
  ball.style.width = "50px";
  ball.style.borderRadius = "30px";
  ball.style.background = "red";
  ball.style.position = "absolute";
  ball.style.left = "150px";
  ball.style.top = "0px";
  return ball;
  //   console.log(ball.top);
}

var balls = createBall();
creteWrapperDiv(balls);
