"use strict";

class Tree {
  constructor(public leaf: string, public root: string) {}
}

class FruitTree extends Tree {
  constructor(public fruit: string, public leaf: string, public root: string) {
    super(leaf, root);
    this.fruit = fruit;
  }

  getData() {
    console.log(
      `This is ${this.fruit} tree with ${this.leaf} leaves and ${this.root} roots`
    );
  }
}

new FruitTree("Mango", "50", "countless").getData();
