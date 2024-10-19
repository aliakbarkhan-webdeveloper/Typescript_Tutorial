// function name(a:number,b:string):{name:string,age:number} {
//     console.log(a,b);

//     return {name:"ALi",age:24}
// }
// name(2,"e")
// export{}

//////type aliases
// type user = {
//   name: string;
//   age: number;
//   qualities: boolean;
// };
// let a: user = { name: "ali", age: 14, qualities: true };
// console.log(a.age);

//combining two type aliases by using &(intersection) operator between two type aliases
// type a = {
//   name: string;
// };
// type b = {
//   cell: number;
// };

// type c = a & b;

// let a: c = {
//   name: "ali",
//   cell: 87,
// };

//readonly
//use to make a field unchangale once it initialized  like readonly id:dtring
// type user={
//     readonly _id:string;
//     name:string
// }

// let a:user={_id:"oooo",name:"ali"}
//will give error if we will try to change value
//a._id="jj"

//optional  "?"  like a?:string it means a is optional, if we are not initializing a it will not give any error
// type user = {
//       name: string;
//       age: number;
//       qualities?: boolean;
//     };

//     let a:user={name:"ali",age:24}

//Union
//in union we can use different data types for one variavle by using | sysmbol between tyes

// let a: (number | string)[] = [3, "6"];
//in this example a variable contains an array data type which can hold numbers and strings in it

// let b: string | boolean;
// b = true;
// b = "ali";
// console.log(b);

// function name(a:string|number|boolean) {
//     if (typeof a==="string") {
//         let b=a.toUpperCase()
//         console.log(b);
        
//         return b
//     }else if (typeof a ==="number") {
//         let b=a*9
//         console.log(b);
        
//         return b 
//     } else{
//         throw new Error("please put number or string")
//     }
// }
// name("ali")
// name(5)
//name(true)


//Intersection
//we combine two types by using & operator then it takes common values.
type a={
    name:string;
    gender:string
}
type b={
    id:number;
    gender:string
}
type ab=a&b;
type cd=a|b
let a:ab={
    name:"ali Akbar khan",
    id:23,gender:"male"
}
let c:cd={
    id:9,
    gender:"male"
}
console.log(a.id);
console.log(c.gender);

export {};
