function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#FAEBD7');
  angleMode(DEGREES);
}

function draw() {

let x = random (0, width) // imposto una variabile affinché le coordinate della posizione delle geometrie sia randomica
let y = random (0, height)
if(random()<0.7) // imposto un framerate diverso per la comparsa delle forme, con due opzioni valide
{ frameRate(500)
} else {
  frameRate(100)
}

// ora procedo a definire le forme, tre cerchi di colori diversi che possono creare ulteriori colori diversi per sovrapposizione, e dei quadrati con solo stroke nero
push()
scale (random(0, 5)) // do un attributo randomico anche allo scaling per ottenere cerchi di grandezze diverse
blendMode(SCREEN)
fill ("lime")
noStroke()
ellipse(x,y,15)
pop()

push()
scale (random(0, 5))
blendMode(SCREEN)
fill ("coral")
noStroke()
ellipse(x,y,10)
pop()

push()
scale (random(0, 10))
blendMode(SCREEN)
fill ("blue")
noStroke()
ellipse(x,y,10)
pop()

push()
rotate(45*frameCount);
noFill();
stroke('black');
strokeWeight(0.5);
rect(x,y,5)
pop()

// imposto un if statement per fare in modo che il disegno finisca dopo un certo framecount 
if (frameCount == 800) {

  noLoop();
}

}
