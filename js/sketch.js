
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','0');
  noStroke();
  frameRate(60);
  fill(199,219,15);
  // Establecer la posición de partida de la forma
  xpos = width / 2;
  ypos = height / 2;
}


let rad = 60; // El ancho de la forma
let xpos, ypos; // Posición inicial de la forma

let xspeed = 1.8; // La velocidad de la forma
let yspeed = 1.5; // La velocidad de la forma

let xdirection = 1; // Izquierda o derecha
let ydirection = 1; // De arriba a abajo

function draw() {
  background(0);

  // Actualizar la posición de la forma
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Prueba para ver si la forma excede los límites de la pantalla
  // Si lo hace, invierta su dirección multiplicando por -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Dibuja la forma
  polygon(xpos, ypos, rad, 9);
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}