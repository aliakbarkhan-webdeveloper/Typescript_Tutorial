"use Strict";
function myName(cb) {
    cb("ali");
}
myName(function (name) { return console.log("My name is ".concat(name, ".")); });
function restFunc() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    for (var i = 0; i < data.length - 1; i++) {
        console.log(data[i] * 10);
    }
}
restFunc(3, 5, 6, 7, 1, 4);

