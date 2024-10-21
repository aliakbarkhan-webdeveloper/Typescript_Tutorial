"use strict";
//Union
let data: string | number;
data = "ali";
console.log(data.indexOf("i"));
data = 16;
console.log(data.toString());


//Intersection
type studentData = {
  name: string;
};

type teacherData = {
  Qualification: string;
};

type school = studentData & teacherData;

let schoolData: school = {
  Qualification: "BS",
  name: "ali",
};
