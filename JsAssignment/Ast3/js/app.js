function BounceBall() {
  var self = this;
  var ball = [],
    context,
    canvas;

  // initialize canvas and updates widht and height
  this.init = function () {
    canvas = document.getElementById("bounceCanvas");
    context = canvas.getContext("2d");
    canvas.height = "500";
    canvas.width = "500";

    this.createBallAarray();
    window.requestAnimationFrame(animate);
  };

  // creates array of balls
  this.createBallAarray = function () {
    for (i = 0; i < 10; i++) {
      var ballObj = {
        x: Math.floor(Math.random() * 400) + 1,
        y: Math.floor(Math.random() * 400) + 1,
        color: "red",
        radius: 20,
        velocityX:
          (Math.random() * 2 + 2) * (Math.floor(Math.random() * 2) || -1),
        velocityY:
          (Math.random() * 2 + 2) * (Math.floor(Math.random() * 2) || -1),
        checkCollision: function (other) {
          var dx = this.x - other.x;
          var dy = this.y - other.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < this.radius + other.radius) {
            return true;
          } else {
            return false;
          }
        },
      };
      ball.push(ballObj);
    }
  };

  //   draws array of balls in canvas
  this.draw = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < ball.length; i++) {
      context.beginPath();
      context.arc(ball[i].x, ball[i].y, ball[i].radius, 0, Math.PI * 2, true);
      context.fillStyle = ball[i].color;
      context.fill();
    }
  };

  //   animates the balls around canvas
  function animate() {
    window.requestAnimationFrame(animate);
    for (i = 0; i < ball.length; i++) {
      // bounce bottom
      if (ball[i].y + ball[i].radius >= canvas.height) {
        ball[i].velocityY = -ball[i].velocityY;
        ball[i].y = canvas.height - ball[i].radius;
      }

      // bounce top
      if (ball[i].y + ball[i].radius <= 0) {
        ball[i].velocityY = -ball[i].velocityY;
        ball[i].y = ball[i].radius;
      }

      //   bounce left
      if (ball[i].x - ball[i].radius <= 0) {
        ball[i].velocityX = -ball[i].velocityX;
        ball[i].x = ball[i].radius;
      }

      //   bounce right
      if (ball[i].x - ball[i].radius >= canvas.width) {
        ball[i].velocityX = -ball[i].velocityX;
        ball[i].x = canvas.width - ball[i].radius;
      }

      //   after checking collision of circle
      for (j = 0; j < ball.length; j++) {
        if (i != j && ball[i].checkCollision(ball[j])) {
          ball[i].x += 5;
        }
      }

      //   update X,Y position of ball
      ball[i].x += ball[i].velocityX;
      ball[i].y += ball[i].velocityY;
    }
    self.draw();
  }
}

var bBall = new BounceBall();
bBall.init();
