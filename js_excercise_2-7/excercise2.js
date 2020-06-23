// reduce can convert array in any type
// accumulator , value, index, srcmm
// IIFE=>(Immediately Invoked FUnction Expression), Closures
//document is provided by browser
// event handler
// document.addEventListener('keydown')
//  postition rleative for div absolute for points x,y = top,left

function showPattern(value) {
  var a = "";
  var x = value;
  for (var i = 1; i < x; i++) {
    for (var j = 1; j < x; j++) {
      if (j >= i) {
        a = a.concat("*");
      }
    }
    a = a.concat("\n");
  }
  console.log(a);
}

showPattern(20);
