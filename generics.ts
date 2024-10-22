`use strict`

//function generic

function funcGen <T> (a:T,b:string):void{

    console.log(`the type of generic is ${typeof a} and the other data type is ${typeof b}`);
    

}funcGen <boolean>(false,"true");