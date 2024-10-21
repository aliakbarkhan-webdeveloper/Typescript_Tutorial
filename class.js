"use strict";
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
    };
    return Airpod;
}());
