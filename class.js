"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Airpod = /** @class */ (function () {
    function Airpod() {
        this.price = 25000;
        this.image = "./images/airdrop";
        this.color = "white";
    }
    Airpod.prototype.playMusic = function () {
        console.log("music is playing");
    };
    Airpod.prototype.switchMode = function () {
        console.log("Music is Switching");
        setTimeout(function () {
            console.log("music is switched");
        }, 5000);
    };
    return Airpod;
}());
var SamsungAirpod = /** @class */ (function (_super) {
    __extends(SamsungAirpod, _super);
    function SamsungAirpod() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.company = "samsung";
        return _this;
    }
    return SamsungAirpod;
}(Airpod));
new SamsungAirpod().switchMode();
//class with constructor
var Human = /** @class */ (function () {
    function Human(eye) {
        this.eyeColor = eye;
        console.log("The color of eye is: " + this.eyeColor);
    }
    return Human;
}());
new Human("blue");


