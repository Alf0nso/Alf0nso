let y = [];
let x = [];
let fourierY;
let fourierX;

let time = 0;
let path = [];

function setup() {
    createCanvas(700, 700);
    for(let i = 0; i < 500; i++) {
        x[i] = 150 * noise(100 - i);
        y[i] = 150 * noise(200 - i);
    }
    fourierY = dft(y);
    fourierX = dft(x);
}

function draw() {
    background(0);

    let vx = epiCycles(300, 50, 0, fourierX);
    let vy = epiCycles(50, 200, HALF_PI, fourierY);
    let v = createVector(vx.x, vy.y);
    path.unshift(v);
    
    line(vx.x, vx.y, v.x, v.y);
    line(vy.x, vy.y, v.x, v.y);

    beginShape();
    noFill();
    for(let i = 0; i < path.length; i++) {
        vertex(path[i].x, path[i].y);
    }
    endShape();

    const dt = TWO_PI / fourierY.length
    time += dt;

    if(path.length > 300) {path.pop();}
}