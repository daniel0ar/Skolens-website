
let t = 0; // variable de tiempo
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','0');
  noStroke();
  fill(0, 84, 247, 50);
}

function draw() {
  background(10, 10); // fondo translúcido (crea estelas)

  // grilla de elipses
  for (let x = 0; x <= width; x = x + 100) {
    for (let y = 0; y <= height; y = y + 100) {
      // punto de partida de cada círculo depende de posición del ratón
      const anguloX = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const anguloY = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // y también varía según la posición de la partícula
      const angulo = anguloX * (x / width) + anguloY * (y / height);

      // cada partícula se mueve en forma circular
      const myX = x + 50 * cos(2 * PI * t + angulo);
      const myY = y + 50 * sin(2 * PI * t + angulo);

      ellipse(myX, myY, 15); // dibujar partícula
    }
  }

  t = t + 0.005 ; // actualizar tiempo
}
