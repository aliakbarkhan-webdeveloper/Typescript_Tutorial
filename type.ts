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

console.log(typeof schoolData);

//Type aliases

type age = string | number;

let ali: age = 24;
console.log(ali);
