
var arr = [
  { name: "adam", age: 17 },
  { name: "daniel", age: 26 },
  { name: "simon", age: 24 }
];



var arr2 = arr.map(function(item, i) {
  if(item.age < 18) {
    item.isUnderAge = true;
  } else {
    item.isUnderAge = false;
  }
  return item
});


// förenklad
var arr3 = arr.map(function(item, i) {
  item.isUnderAge = item.age < 18;
  return item;
});
