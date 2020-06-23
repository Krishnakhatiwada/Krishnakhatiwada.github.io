var name = prompt("Enter Fruit name Apple/Banana");

var numbers = [1, 2, 3, 4, 5];
var result = new Array();
function transform(collection, tranFunc) {
  for (var i = 0; i < collection.length; i++) {
    result.push(tranFunc(collection[i]));
  }
}
var output = transform(numbers, function (num) {
  return num * 2;
});
console.log(result);
