"use strict";

class Airpod {
  price = 25000;
  image = "./images/airdrop";
  color = "white";

  playMusic() {
    console.log("music is playing");
  }

  switchMode() {
    console.log("Music is Switching");

    setTimeout(() => {
      console.log("music is switched");
    }, 5000);
  }
}


class SamsungAirpod extends Airpod{
company="samsung";
}

new SamsungAirpod().switchMode();




//class with constructor

class Human{
public eyeColor:string;

constructor(eye:string){
this.eyeColor=eye;
console.log("The color of eye is: "+this.eyeColor);

}

}

new Human("blue");