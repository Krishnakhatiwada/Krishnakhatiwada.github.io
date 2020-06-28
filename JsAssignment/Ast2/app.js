function ImageSlider(container, speed, holdTime) {
  var self = this;
  this.speed = speed;
  var slide_index = 0;
  this.container = container;
  var wrapper = this.container.querySelector(".carousel-image-wrapper");
  var imageWidth = this.container.querySelector("img");
  var imageNo = this.container.getElementsByTagName("img");

  var pos = 0;
  var SPEED = this.speed;

  // auto animation of slides
  setInterval(function () {
    self.slideRight();
  }, holdTime);

  // animation of sliding images
  function animate() {
    var animation = window.requestAnimationFrame(animate);

    if (pos == -slide_index * imageWidth.width) {
      window.cancelAnimationFrame(animation);
    } else if (pos < -slide_index * imageWidth.width) {
      pos += SPEED;
    } else {
      pos -= SPEED;
    }

    wrapper.style.left = pos + "px";
  }

  this.slideRight = function () {
    slide_index = (slide_index + 1) % imageNo.length;

    // self.showSelected();
    animate();
  };

  this.slideLeft = function () {
    if (slide_index === 0) {
      slide_index = imageNo.length - 1;
    } else {
      slide_index--;
    }

    // self.showSelected();
    animate();
  };

  // set width dynamically
  this.setWidth = function () {
    wrapper.style.width = imageNo.length * imageWidth.width + "px";
  };

  // change of image in dot click
  function changeImage(i) {
    slide_index = i;

    animate();
  }

  this.showSelected = function () {
    var multipleDots = this.createDot();
    multipleDots.forEach((dots, i) => {
      if (i === slide_index) {
        dots.classList.add("active");
      } else {
        dots.classList.remove("active");
      }
    });
  };

  // returns previous button
  this.prevButton = function () {
    var btn = document.createElement("button");
    btn.setAttribute("id", "prev-btn");
    btn.setAttribute("class", "btn");
    btn.innerHTML = "<";

    return btn;
  };

  // returns next button
  this.nextButton = function () {
    var btn = document.createElement("button");
    btn.setAttribute("id", "next-btn");
    btn.setAttribute("class", "btn");
    btn.innerHTML = ">";

    return btn;
  };

  // appends buttons and added event listener
  this.showButton = function () {
    var nxtbtn = this.nextButton();
    var prevbtn = this.prevButton();
    nxtbtn.addEventListener("click", this.slideRight);
    prevbtn.addEventListener("click", this.slideLeft);
    this.container.appendChild(nxtbtn);
    this.container.appendChild(prevbtn);
  };

  // creates all dots according to images and returns array
  this.createDot = function () {
    var allDots = [];
    for (i = 0; i < imageNo.length; i++) {
      var dot = document.createElement("span");
      dot.style.position = "relative";
      dot.setAttribute("class", "dot");
      dot.setAttribute("id", "dot" + i);

      allDots.push(dot);
    }

    return allDots;
  };

  // append all dots array an click function to change image
  this.setDot = function () {
    var multipleDots = this.createDot();
    var div = document.createElement("div");
    div.style.textAlign = "center";
    multipleDots.forEach((dot, i) => {
      multipleDots[i].addEventListener("click", function () {
        changeImage(i);
      });

      div.appendChild(dot);

      this.container.appendChild(div);
    });
  };

  this.showButton(); //Shows left and right button
  this.setDot(); // Shows all the dots tag
  this.setWidth(); // Sets the width of carousel-wrapper according to image width
}

// Should Specify ID of main container
var container = document.getElementById("carouselFrst");
var slide = new ImageSlider(container, 5, 2000);

var container2 = document.getElementById("carouselScnd");
var slide = new ImageSlider(container2, 20, 5000);

var container2 = document.getElementById("carouselTrd");
var slide = new ImageSlider(container2, 20, 5000);
