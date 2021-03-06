function ImageSlider(container) {
  var slide_index = 0;
  this.container = container;
  var wrapper = document.querySelector(".carousel-image-wrapper");
  var imageWidth = document.querySelector("img");
  var imageNo = document.getElementsByTagName("img");

  var pos = 0;
  var SPEED = 10;

  function animate() {
    var animation = window.requestAnimationFrame(animate);

    if (pos == -slide_index * imageWidth.width) {
      window.cancelAnimationFrame(animation);
    }
    if (pos < -slide_index * imageWidth.width) {
      pos += SPEED;
    } else {
      pos -= SPEED;
    }
    wrapper.style.left = pos + "px";
  }

  this.slideRight = function () {
    slide_index = (slide_index + 1) % imageNo.length;
    animate();
  };

  this.slideLeft = function () {
    if (slide_index === 0) {
      slide_index = imageNo.length - 1;
    } else {
      slide_index--;
    }
    animate();
  };

  this.getElement = function () {
    wrapper.style.width = imageNo.length * imageWidth.width + "px";
  };

  function changeImage(i) {
    slide_index = i;
    animate();
    // wrapper.style.left = -(i * imageWidth.width) + "px";
  }

  this.prevButton = function () {
    var btn = document.createElement("button");
    btn.setAttribute("id", "prev-btn");
    btn.style.cursor = "pointer";
    btn.innerHTML = "<";
    btn.style.position = "absolute";
    btn.style.top = "90px";
    btn.style.background = "transparent";
    btn.style.fontSize = "30px";
    btn.style.borderStyle = "none";
    btn.style.color = "lightblue";

    return btn;
  };
  this.nextButton = function () {
    var btn = document.createElement("button");
    btn.setAttribute("id", "next-btn");
    btn.style.cursor = "pointer";
    btn.innerHTML = ">";
    btn.style.left = "364px";
    btn.style.position = "absolute";
    btn.style.top = "90px";
    btn.style.background = "transparent";
    btn.style.fontSize = "30px";
    btn.style.borderStyle = "none";
    btn.style.color = "lightblue";

    return btn;
  };

  this.showButton = function () {
    var nxtbtn = this.nextButton();
    var prevbtn = this.prevButton();
    nxtbtn.addEventListener("click", this.slideRight);
    prevbtn.addEventListener("click", this.slideLeft);
    this.container.appendChild(nxtbtn);
    this.container.appendChild(prevbtn);
  };

  this.createDot = function () {
    var allDots = [];
    for (i = 0; i < imageNo.length; i++) {
      var dot = document.createElement("span");
      dot.style.position = "relative";
      dot.setAttribute("class", "dot");
      dot.setAttribute("id", "dot" + i);
      dot.style.height = "15px";
      dot.style.width = "15px";
      dot.style.margin = "375px 1px 0px 10px";
      dot.style.backgroundColor = " #bbb";
      dot.style.display = "inline-block";
      dot.style.borderRadius = "50%";
      dot.style.cursor = "pointer";
      allDots.push(dot);
    }

    return allDots;
  };

  this.setDot = function () {
    var multipleDots = this.createDot();
    var div = document.createElement("div");
    div.style.textAlign = "center";
    multipleDots.forEach((dot, i) => {
      multipleDots[i].addEventListener("click", function () {
        changeImage(i);
      });
      div.appendChild(multipleDots[i]);
      this.container.appendChild(div);
    });
  };
  this.showButton();
  this.setDot();
}
var container = document.querySelector(".carousel-container");

var slide = new ImageSlider(container);
