function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);
  // put setup code here
  document.body.style.backgroundColor = "red";
}

function draw() {
  // put drawing code here
}
function setup() {
  createCanvas(400, 600);
  textAlign(CENTER, CENTER);
}

function draw() {
  background('#6baed6');
  noStroke();

  // rotazione raggi
  push();
  translate(200, 230);
  rotate(frameCount * 0.004);
  fill('#f08a1c');
  for (let i = 0; i < 12; i++) {
    rotate(TWO_PI / 12);
    triangle(-14, -90, 14, -90, 0, -150);
  }
  pop();

  // Sole e viso
  fill('#fcd24a');
  circle(200, 230, 140 + sin(frameCount * 0.04) * 6);
  fill(40);
  circle(180, 220, 10);
  circle(220, 220, 10);
  noFill();
  stroke(40);
  strokeWeight(3);
  arc(200, 235, 50, 35, 0.2, PI - 0.2);

  // terreno
  noStroke();
  fill('#8bb350');
  rect(0, 450, 400, 150);

  // girasoli che crescono
  const top = 460 + abs(frameCount % 240 - 120) / 2;
  for (const x of [80, 200, 320]) {
    stroke('#4d7a2a');
    strokeWeight(4);
    line(x, 520, x, top);
    noStroke();
    fill('#f7c015');
    circle(x, top, 40);
    fill('#6b3a1a');
    circle(x, top, 18);
  }

  // beige card frame
  noStroke();
  fill('#f3e2b3');
  rect(0, 0, 400, 24);
  rect(0, 0, 24, 600);
  rect(376, 0, 24, 600);
  rect(0, 540, 400, 60);
  noFill();
  stroke(40);
  strokeWeight(3);
  rect(24, 24, 352, 516);
  rect(8, 8, 384, 584);

  // titolo
  noStroke();
  fill(40);
  textSize(20);
  text('XIX', 200, 558);
  textSize(24);
  text('THE SUN', 200, 580);
}