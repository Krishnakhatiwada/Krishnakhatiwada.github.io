function AntSmasher() {
  var self = this;
  var ant = [],
    context,
    image,
    canvas;

  this.init = function () {
    canvas = document.getElementById("antSmasher");
    context = canvas.getContext("2d");
    canvas.height = "500";
    canvas.width = "500";

    image = document.getElementById("source");
    image.onload = this.drwaImage;

    this.createAntArray();

    window.requestAnimationFrame(animate);
  };

  this.createAntArray = function () {
    for (i = 0; i < 4; i++) {
      var antObj = {
        x: Math.floor(Math.random() * 400) + 1,
        y: Math.floor(Math.random() * 400) + 1,
        color: "black",
        radius: 20,
        velocityX: Math.random() * 2 * (Math.floor(Math.random() * 1) || -1),
        velocityY: Math.random() * 2 * (Math.floor(Math.random() * 1) || -1),

        //check collision of two circle
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
      ant.push(antObj);
    }
  };

  //   draws image of ants in canvas
  this.drawImage = function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < ant.length; i++) {
      context.drawImage(image, ant[i].x, ant[i].y, 70, 70);
    }
  };

  function animate() {
    window.requestAnimationFrame(animate);
    for (i = 0; i < ant.length; i++) {
      // bounce bottom
      if (ant[i].y + ant[i].radius >= canvas.height) {
        ant[i].velocityY = -ant[i].velocityY;
        ant[i].y = canvas.height - ant[i].radius;
      }

      // bounce top
      if (ant[i].y + ant[i].radius <= 0) {
        ant[i].velocityY = -ant[i].velocityY;
        ant[i].y = ant[i].radius;
      }

      //   bounce left
      if (ant[i].x - ant[i].radius <= 0) {
        ant[i].velocityX = -ant[i].velocityX;
        ant[i].x = ant[i].radius;
      }

      //   bounce right
      if (ant[i].x - ant[i].radius >= canvas.width) {
        ant[i].velocityX = -ant[i].velocityX;
        ant[i].x = canvas.width - ant[i].radius;
      }

      //   onclick on ant image
      canvas.addEventListener("mousemove", (e) => {
        var clientX = e.clientX;
        var clientY = e.clientY;

        canvas.addEventListener("click", (event) => {
          for (i = 0; i < ant.length; i++) {
            console.log(clientX, ant[i].x);
            if (ant[i].x == clientX && ant[i].y == clientY) {
              //   removing from array logic
            }
          }
        });
      });

      //   checking collision of ants
      for (j = 0; j < ant.length; j++) {
        if (i != j && ant[i].checkCollision(ant[j])) {
          ant[i].x += 5 || (ant[i].y += 3);
        }
      }

      //   update X,Y position of ant
      ant[i].x += ant[i].velocityX;
      ant[i].y += ant[i].velocityY;
    }

    self.drawImage();
  }
}
var ants = new AntSmasher();
ants.init();
