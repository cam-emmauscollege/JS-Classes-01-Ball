//import {Ball} from 'ball.js';
//test
var bal = new Ball(300, 200, 4, 4);

function setup() {
  //bal = new Ball(300, 200, 4, 4);
  createCanvas(800, 450); // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  background("blue"); // Kleur de achtergrond blauw, zodat je het kunt zien
  console.log(bal);
  console.log("setup klaar"); // berichtje voor debuggen
}

function draw() {
  background("black");

  
  bal.update();
  bal.display();
}