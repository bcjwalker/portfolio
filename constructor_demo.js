// Piranesi's Dimension

// buncha different image keywords we randomly pull from
let randomImage = [
  "https://source.unsplash.com/random/?old%20paper",
  "https://source.unsplash.com/random/?arch%20vault",
  "https://source.unsplash.com/random/?escher",
  "https://source.unsplash.com/random/?arched%20hall",
  "https://source.unsplash.com/random/?stone%20corridor",
];

// class arrays
let backgroundElements = [];
let foregroundElements = [];
// fills for background shapes
let bgBuildingFills = 0;

// html containers
let bgInput, fgInput, sliderInput;
let sliderValX, sliderValY;

// class containers for foreground
let hozPerson, vertPerson;

function preload() {
  // choose one of the image urls from the array
  img = loadImage(random(randomImage));
}

function setup() {
  createCanvas(600, 450);
  angleMode(DEGREES);
  imageMode(CENTER);

  let sliderLabel = createP("move the figure up or down the stairs");
  sliderLabel.position(85, 10);
  // slider for moving foreground figures: slider goes from 1 - 100, starts at 50
  sliderInput = createSlider(1, 100, 50);
  sliderInput.size(300, 20);
  sliderInput.style("-webkit-appearance", "none");
  sliderInput.style("background", "lightgray");
  sliderInput.style("cursor", "pointer");
  sliderInput.changed(sliderInputChanged);

  let bgLabel = createP("reset the density of background buildings:");
  bgLabel.style("font-style", "italic");
  // slider for changing bg building number: slider goes from 0 - 100, starts at 10
  bgInput = createSlider(0, 100, 10);
  bgInput.changed(bgSliderChanged);

  let fgLabel = createP("reset the density of foreground staircases:");
  fgLabel.style("font-style", "italic");
  // slider for changing fg stairs number: slider goes from 0 - 100, starts at 4
  fgInput = createSlider(0, 100, 4);
  fgInput.changed(fgSliderChanged);

  // create a controls box and adopt labels + sliders into it
  let controls = createDiv();
  controls.child(sliderLabel);
  controls.child(sliderInput);
  controls.child(bgLabel);
  controls.child(bgInput);
  controls.child(fgLabel);
  controls.child(fgInput);
  controls.style("padding", "50px");
  controls.style("border", "1px solid black");
  controls.style("background", "darkgray");
  controls.position(100, height);

  // initialise the array of background elements
  initialiseBackground();

  // initialise the array of stairs
  initialiseForeground();

  // horizontal and vertical person classes
  hozPerson = new Person();
  vertPerson = new Person();
}

function initialiseBackground() {
  // create however many class instances we need
  for (i = 0; i < bgInput.value(); i++) {
    bgBuildingFills = map(i, 0, bgInput.value(), 200, 5);
    backgroundElements[i] = new BackgroundShapes();
  }
}

function initialiseForeground() {
  // create however many stairs class instances we need
  for (i = 0; i < fgInput.value(); i++) {
    foregroundElements[i] = new Stairs();
  }
}

function draw() {
  background(255);
  // tint image a bit so it's translucent, and use it as subtle background
  tint(255, 15);
  image(img, width / 2, height / 2);

  drawBackground();
  noLoop();
  drawForeground();
}

// creates background elements (towers, bridges)
function drawBackground() {
  for (i = 0; i < bgInput.value(); i++) {
    backgroundElements[i].create();
  }
}

// creates the foreground elements (stairs, figures, etc.)
function drawForeground() {
  for (i = 0; i < fgInput.value(); i++) {
    foregroundElements[i].create();
  }
}

// background elements
class BackgroundShapes {
  constructor() {
    // initialise colour
    this.fillColour = bgBuildingFills;

    // random scales for different elements
    this.randomScale = [
      random(0.5, 1.25),
      random(1, 2),
      random(1, 1.6),
      random(0.375, 1.25),
      random(0.75, 1.5),
    ];
    // random X transformation calcs for different buildings
    this.randomX = [random(height), random(-300, 0)];
    // random Y transformation calcs for different buildings
    this.randomY = [random(-50, 100), random(175), random(height), random(-50)];
    // random no. generators for misc purposes
    this.randomVar = [random(2), random(2), random(3), round(random(3))];

    this.randomRot = random(-10, 10); // random rotation var
    this.variant = round(random(8)); // determines which building we draw
  }

  create() {
    // decide between different buildings (some are repeated for balance)
    switch (this.variant) {
      case 0:
        this.tower0(); // tower + patterned top
        break;
      case 1:
        this.tower1(); // tower + base bridge tunnel
        break;
      case 2:
        this.tower2(); // tall tower
        break;
      case 3:
        this.bridge0(); // arch bridge
        break;
      case 4:
        this.bridge1(); // blocky bridge
        break;
      case 5:
        this.arch0(); // stone arch(es)
        break;
      case 6:
        this.arch0(); // stone arch(es)
        break;
      case 7:
        this.bridge1(); // blocky bridge
        break;
      case 8:
        this.arch0(); // stone arch(es)
    }
  }

  // tower + patterned top
  tower0() {
    push();
    scale(this.randomScale[1]); // scaled up or stays the same
    translate(this.randomX[0], 0); // translated randomly either to left or right

    // small chance of having a vault to the left of the tower
    if (this.randomVar[0] < 0.5) {
      stroke(this.fillColour - 20);
      fill(this.fillColour - 10);

      rect(-325, 0, 25, height); // pillar

      // vault arch
      beginShape();
      vertex(0, 0);
      vertex(0, 150);
      vertex(-20, 110);
      vertex(-55, 80);
      vertex(-100, 60);
      vertex(-150, 50);
      vertex(-200, 60);
      vertex(-245, 80);
      vertex(-280, 110);
      vertex(-300, 150);
      vertex(-300, 0);
      endShape(CLOSE);
      // arch stone lines
      line(-20, 110, 0, 75);
      line(-55, 80, -15, 0);
      line(-100, 60, -75, 0);
      line(-150, 50, -150, 0);
      line(-200, 60, -225, 0);
      line(-245, 80, -285, 0);
      line(-280, 110, -300, 75);
    }

    stroke(this.fillColour - 50);
    strokeWeight(1);
    fill(this.fillColour);
    rect(0, 0, 100, height); // tower block

    // stone pattern
    for (let i = 0; i < 20; i++) {
      let stoneS = map(i, 0, 20, 0, height);
      line(0, stoneS, 100, stoneS);
    }

    // chance of having a window, randomised y pos and scale
    if (this.randomVar[0] < 1) {
      push();
      translate(0, this.randomY[0]);
      scale(this.randomScale[0]);
      noStroke();
      fill(this.fillColour - 20);

      arc(50, 151, 50, 50, PI, 0);
      rect(25, 150, 50);
      pop();
    }

    // top of the tower bust
    fill(this.fillColour + 10);
    quad(-25, 0, 125, 0, 105, 100, -5, 100);
    noStroke();
    fill(this.fillColour - 30);
    rect(-5, 0, 20, 30);
    rect(23, 0, 20, 50);
    rect(56, 0, 20, 50);
    rect(84, 0, 20, 30);

    pop();
  }
  // tower + base bridge tunnel
  tower1() {
    push();
    translate(this.randomX[0], 0); // translated randomly to right

    // small chance of having a bridge off to the right
    if (this.randomVar[1] < 0.5) {
      strokeWeight(5);
      stroke(this.fillColour - 10);
      line(100, 175, 175, 120);
      strokeWeight(0.35);
      fill(this.fillColour + 5);
      rect(100, 100, 900, 20);
    }

    fill(this.fillColour);
    stroke(this.fillColour - 50);
    rect(0, 0, 100, 350); // tower block
    // stone pattern
    for (let i = 0; i < 15; i++) {
      let stoneS = map(i, 0, 15, 0, 350);
      line(0, stoneS, 100, stoneS);
    }

    rect(-10, 350, 300, 100); // bridge block
    // stone pattern
    for (let i = 0; i < 5; i++) {
      let stoneIncrement = map(i, 0, 5, 350, height);
      line(-10, stoneIncrement, 290, stoneIncrement);
    }

    // chance of having a window
    if (this.randomVar[0] < 1) {
      push();
      translate(0, this.randomY[0]);
      scale(this.randomScale[0]);
      noStroke();
      fill(this.fillColour - 20);

      arc(50, 151, 50, 50, PI, 0);
      rect(25, 150, 50);
      pop();
    }

    // small chance of tunnel being lit vs default black
    if (this.randomVar[1] < 0.5) {
      strokeWeight(10);
      fill(255);
      arc(150, height, 150, 150, PI, 0);
    } else {
      noStroke();
      fill(this.fillColour - 50);
      arc(150, height, 150, 150, PI, 0);
    }

    // base of the tower bust
    fill(this.fillColour);
    stroke(this.fillColour - 50);
    strokeWeight(1);
    quad(-15, 325, 115, 325, 105, 350, -5, 350);
    noStroke();
    fill(this.fillColour - 30);
    rect(2, 325, 20, 10);
    rect(27, 325, 20, 10);
    rect(52, 325, 20, 10);
    rect(77, 325, 20, 10);

    // 50% chance of drawing stairs wrapping around tower
    if (this.randomVar[1] < 1) {
      fill(this.fillColour + 10);
      noStroke();
      for (let i = 0; i < 4; i++) {
        this.stairsIncrement = map(i, 0, 4, 0, 240);
        push();
        translate(0, 0 + this.stairsIncrement);
        beginShape();
        vertex(0, 100);
        vertex(100, 150);
        vertex(100, 160);
        vertex(0, 110);
        endShape(CLOSE);
        rect(-30, 100, 30, 10);
        rect(100, 150, 30, 10);
        pop();
      }
    }
    pop();
  }
  // tall tower
  tower2() {
    push();
    scale(this.randomScale[0]); // scaled up or down
    translate(this.randomX[0], 0); // translated randomly either to left or right

    stroke(this.fillColour - 50);
    strokeWeight(1);
    fill(this.fillColour);

    rect(0, 0, 100, 1000); // tower block

    // stone pattern
    for (let i = 0; i < 80; i++) {
      let stoneIncrement = map(i, 0, 80, 0, 1000);
      line(0, stoneIncrement, 100, stoneIncrement);
    }

    // 50% chance of having a single window
    if (this.randomVar[0] < 1) {
      push();
      translate(0, this.randomY[0]);
      scale(this.randomScale[0]);
      noStroke();
      fill(this.fillColour - 20);

      arc(50, 151, 50, 50, PI, 0);
      rect(25, 150, 50);
      pop();
    }

    // small chance of having a lamppost
    if (this.randomVar[2] < 0.5) {
      push();
      translate(0, this.randomY[1]);
      stroke(this.fillColour - 10);
      strokeWeight(6);
      line(100, 150, 160, 150);
      line(100, 175, 130, 150);
      strokeWeight(1);
      line(150, 150, 150, 180);
      fill("#fff200");
      noStroke();
      circle(150, 180, 20);
      pop();
    }

    // 50% chance of drawing stairs wrapping around tower
    if (this.randomVar[1] < 1) {
      fill(this.fillColour + 10);
      noStroke();
      for (let i = 0; i < 20; i++) {
        this.stairsIncrement = map(i, 0, 20, 0, 1000);
        push();
        translate(0, 0 + this.stairsIncrement);
        beginShape();
        vertex(0, 100);
        vertex(100, 150);
        vertex(100, 160);
        vertex(0, 110);
        endShape(CLOSE);
        rect(-30, 100, 30, 10);
        rect(100, 150, 30, 10);
        pop();
      }
    }
    pop();
  }

  // arch bridge
  bridge0() {
    push();
    translate(this.randomX[1], 300 + this.randomY[1]); // translated randomly either to left or right + up or down
    stroke(this.fillColour - 20);

    fill(this.fillColour);

    // arch code
    this.bridgeIncrement = 0;
    for (let i = 0; i < 3; i++) {
      push();
      translate(this.bridgeIncrement, 0);
      // vault arch
      beginShape();
      vertex(0, 0);
      vertex(0, 150);
      vertex(20, 110);
      vertex(55, 80);
      vertex(100, 60);
      vertex(150, 50);
      vertex(200, 60);
      vertex(245, 80);
      vertex(280, 110);
      vertex(300, 150);
      vertex(300, 0);
      endShape(CLOSE);
      // arch stone lines
      line(20, 110, 0, 75);
      line(55, 80, 15, 0);
      line(100, 60, 75, 0);
      line(150, 50, 150, 0);
      line(200, 60, 225, 0);
      line(245, 80, 285, 0);
      line(280, 110, 300, 75);

      rect(0, 0, 325, 25);

      // bridge railings, set length then draw a certain amount of lines based on a mapped variable
      line(0, -10, 325, -10);
      for (let i = 0; i < 80; i++) {
        this.railIncrement = map(i, 0, 80, 0, 325);
        line(this.railIncrement, -10, this.railIncrement, 0);
      }
      rect(300, 0, 25, 150); // pillar
      pop();
      this.bridgeIncrement += 325;
    }
    pop();
  }
  // blocky bridge
  bridge1() {
    push();
    translate(0, this.randomY[2]); // translated randomly down or stays the same
    rotate(this.randomRot); // rotated a bit
    scale(this.randomScale[4]); // scaled up or down

    stroke(this.fillColour - 20);

    // short block to randomly select between three different kinds of supports for the horizontal bridges
    strokeWeight(7);
    let randomSupport = this.randomVar[3];
    switch (randomSupport) {
      case 0:
        line(400, 10, 400, height); // support in the middle
        line(350, 10, 400, 60);
        line(450, 10, 400, 60);
        break;
      case 1:
        line(200, 10, -50, 210); // support on the left
        break;
      case 2:
        line(width, 10, 800, 210); // support on the right
        break;
      case 3:
        line(200, 10, -50, 210); // supports on both left and right
        line(width, 10, 950, 210);
    }

    strokeWeight(1);
    fill(this.fillColour);
    rect(-100, 0, 950, 10);

    // bridge railings, set length then draw a certain amount of lines based on a mapped variable
    line(0, -5, 800, -5);
    for (let i = 0; i < 200; i++) {
      this.railIncrement = map(i, 0, 200, 0, 800);
      line(this.railIncrement, -5, this.railIncrement, 0);
    }

    pop();
  }

  // stone arch(es)
  arch0() {
    push();
    translate(0, this.randomY[3]); // translated randomly down or stays the same
    scale(this.randomScale[3]); // scaled up or down

    stroke(this.fillColour - 20);
    fill(this.fillColour - 10);
    rect(0, 1000, 1625, 1250); // ground

    // arch code
    for (let i = 0; i < 5; i++) {
      push();
      translate(i * 325, 0);
      rect(300, 0, 25, 1000); // pillar
      // vault arch
      beginShape();
      vertex(0, 0);
      vertex(0, 150);
      vertex(20, 110);
      vertex(55, 80);
      vertex(100, 60);
      vertex(150, 50);
      vertex(200, 60);
      vertex(245, 80);
      vertex(280, 110);
      vertex(300, 150);
      vertex(300, 0);
      endShape(CLOSE);
      // arch stone lines
      line(20, 110, 0, 75);
      line(55, 80, 15, 0);
      line(100, 60, 75, 0);
      line(150, 50, 150, 0);
      line(200, 60, 225, 0);
      line(245, 80, 285, 0);
      line(280, 110, 300, 75);
      pop();
    }
    pop();
  }
}

// foreground elements
class Stairs {
  constructor() {
    this.randomX = [random(-50, width + 50), random(0 - width / 2, width)];
    this.randomY = random(0 - height / 2, height);
    this.randomScale = [random(0.75, 1.75)];
    this.randomColour = random(90, 150);

    this.randomRot = random(-10, 10);
    this.variant = round(random(2)); // determines which building we draw
    this.vertPersonRand = random(30);

    this.stairCount = random(100, 200);
  }

  create() {
    // decide between hoz and vert - horizontal is more likely
    switch (this.variant) {
      case 0:
        this.variant0(); // vertical stairs
        break;
      case 1:
        this.variant1(); // horizontal stairs
        break;
      case 2:
        this.variant1(); // horizontal stairs
    }
  }

  // vertical stairs
  variant0() {
    push();
    translate(this.randomX[0], 0);
    //scale();
    stroke(0);
    strokeWeight(1);

    // stair bannisters
    fill(this.randomColour);
    rect(-10, 0, 10, width);
    rect(50, 0, 10, width);
    line(-3, 0, -3, width);
    line(53, 0, 53, width);

    // for loop to generate stairs - each step has slightly higher y-val and fill colour than the last
    this.counter = 10;
    for (let i = 0; i < this.stairCount; i++) {
      this.v0StairsColour = map(i, 0, this.stairCount, 100, 200);
      this.v0StairsIncrement = map(i, 0, this.stairCount, 0, height);
      fill(this.v0StairsColour);
      this.counter -= i / this.stairCount;
      rect(0, this.v0StairsIncrement - this.counter * 2, 50, 6);
    }

    // person's start position is randomised
    push();
    translate(this.vertPersonRand, sliderInput.value() * 4.5 + this.randomY);
    vertPerson.vert();
    pop();

    pop();
  }
  // horizontal stairs
  variant1() {
    push();
    translate(-10, this.randomY);
    scale(this.randomScale[0]);
    rotate(this.randomRot);

    // person's start position is randomised
    push();
    translate(sliderInput.value() * 6 + this.randomX[1], 0);
    hozPerson.hoz();
    pop();

    fill(this.randomColour);
    rect(0, 0, 800, 15);

    // bridge railings, set length then draw a certain amount of lines based on a mapped variable
    line(0, -5, 800, -5);
    for (let i = 0; i < 200; i++) {
      this.railIncrement = map(i, 0, 200, 0, 800);
      line(this.railIncrement, -5, this.railIncrement, 0);
    }
    pop();
  }
}

class Person {
  constructor() {}

  vert() {
    strokeWeight(1);
    fill(190);

    rect(4, 15, 20, 30, 5, 5, 3, 3);
    strokeWeight(2);
    line(4, 22, -1, 35);
    line(24, 22, 29, 35);
    line(8, 45, 7, 60);
    line(20, 45, 21, 60);

    strokeWeight(1);
    fill(210);
    circle(14, 10, 15);
  }
  hoz() {
    strokeWeight(1);
    fill(190);
    rect(-5, -10, 10, 15, 5, 5, 3, 3);
    fill(210);
    circle(0, -12, 10);
  }
}

function bgSliderChanged() {
  backgroundElements = [];
  initialiseBackground();
  redraw();
}

function fgSliderChanged() {
  foregroundStairs = [];
  initialiseForeground();
  redraw();
}

function sliderInputChanged() {
  drawForeground();
  redraw();
}
