"use strict";
//function generic
function funcGen(a, b) {
  console.log(
    "the type of generic is "
      .concat(typeof a, " and the other data type is ")
      .concat(typeof b)
  );
}
funcGen(false, "true");
function employee(obj) {
  console.log(
    "\n    The type of name is "
      .concat(typeof obj.name, "\n    The type of age is ")
      .concat(typeof obj.age, "\n    The type of key is ")
      .concat(typeof obj.key, "\n    ")
  );
}
employee({ name: "ali", age: 24, key: "akdkasd7wdas" });
//Class generics
var bottleMaker = /** @class */ (function () {
  function bottleMaker(data) {
    this.data = data;
    console.log(typeof data);
  }
  return bottleMaker;
})();
new bottleMaker(false);
new bottleMaker(12);
new bottleMaker("asd");
new bottleMaker(1715271572n);
