"use strict";

class Airpod {
  price = 25000;
  image = "./images/airdrop";
  color = "white";

  playMusic() {
    console.log("music is playing");
  }

  switchMode(){
console.log("music is switched");

  }
}


new Airpod().switchMode();