"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Tree = /** @class */ (function () {
  function Tree(leaf, root) {
    this.leaf = leaf;
    this.root = root;
  }
  return Tree;
})();
var FruitTree = /** @class */ (function (_super) {
  __extends(FruitTree, _super);
  function FruitTree(fruit, leaf, root) {
    var _this = _super.call(this, leaf, root) || this;
    _this.fruit = fruit;
    _this.leaf = leaf;
    _this.root = root;
    _this.fruit = fruit;
    return _this;
  }
  FruitTree.prototype.getData = function () {
    console.log(
      "This is "
        .concat(this.fruit, " tree with ")
        .concat(this.leaf, " leaves and ")
        .concat(this.root, " roots")
    );
  };
  return FruitTree;
})(Tree);
new FruitTree("Mango", "50", "countless").getData();
