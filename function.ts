"use Strict";

function myName(cb: (name: string) => void): void {
  cb("ali");
}

myName((name: string) => console.log(`My name is ${name}.`));

function restFunc(...data: number[]): void {
  for (let i = 0; i < data.length - 1; i++) {
    console.log(data[i] * 10);
  }
}

restFunc(3, 5, 6, 7, 1, 4);
