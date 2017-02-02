
var arr = [
  { name: "adam", age: 17 },
  { name: "daniel", age: 26 },
  { name: "simon", age: 24 }
];


var filtreradArr = arr.filter(function(item, i) {
  if(item.age > 18) {
    return true;
  }

  return false;
});

