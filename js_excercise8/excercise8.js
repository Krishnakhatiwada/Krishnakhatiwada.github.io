function createParentDiv(child) {
  var div = document.createElement("div");
  div.setAttribute("id", "graph-wrapper");
  div.style.height = "300px";
  div.style.width = "300px";
  div.style.border = "1px solid black";
  div.style.position = "relative";

  child.forEach(function (child) {
    div.appendChild(child);
  });

  document.body.appendChild(div);
}

function createDot(x, y) {
  var position = [
    {
      x: x,
      y: y,
    },
  ];
  var div2 = document.createElement("div");
  div2.setAttribute("id", "plot");
  div2.style.backgroundColor = "blue";
  div2.style.height = "10px";
  div2.style.width = "10px";
  div2.style.borderRadius = "17px";
  div2.style.position = "absolute";
  for (i = 0; i < position.length; i++) {
    div2.style.top = position[i].x + "px";
    div2.style.left = position[i].y + "px";
  }

  return div2;
}

var plot1 = createDot(10, 20);
var plot2 = createDot(40, 40);
var plot3 = createDot(60, 20);
var plot4 = createDot(50, 60);
var plot5 = createDot(80, 100);

var plots = [plot1, plot2, plot3, plot4, plot5];
createParentDiv(plots);
