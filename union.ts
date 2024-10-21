"use strict";
//Union
var data: string | number;
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

var schoolData: school = {
  Qualification: "BS",
  name: "ali",
};
