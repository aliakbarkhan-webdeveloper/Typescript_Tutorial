`use strict`;

//function generic

function funcGen<T>(a: T, b: string): void {
  console.log(
    `the type of generic is ${typeof a} and the other data type is ${typeof b}`
  );
}
funcGen<boolean>(false, "true");

//Generic Interface

interface employData<T> {
  name: string;
  age: number;
  key: T;
}

function employee(obj: employData<string>) {
  console.log(`
    The type of name is ${typeof obj.name}
    The type of age is ${typeof obj.age}
    The type of key is ${typeof obj.key}
    `);
}

employee({name:"ali",age:24,key:"akdkasd7wdas"});