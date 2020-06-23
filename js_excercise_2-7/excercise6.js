var arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Mary" },
  { id: 3, name: "Andrew" },
];

function sortBy(array, key) {
  var unsorted = array;

  unsorted.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  console.log(unsorted);
}

var sorted = sortBy(arr, "name");
