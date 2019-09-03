function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  point(240, 60);
  point(10, 10);
  point(470, 10);
  point(10, 110);
  point(470, 110);

  i = 20;
  j = 20;

  //drawing a straight line of points
  for (let i = 20 ; i <= 460; i++) {
    point(i, 20);
    point(i, 100);
  }

  //drawing a diagonal line with POINTS
  //not correct, just shows parallel straight lines between the lines.
  for (let i = 20; i <= 460; i = i + 4) {
    for (let j = 20; j <= 100; j = j + (2/11)) {
      point(i, j);
    }
  }
}
