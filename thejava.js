function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

let grid;
let cols;
let rows;
let resolution = 40;

function setup() {

    createCanvas(400, 400);
    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray(cols, rows);
    for (let i = 0; i <rows; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}


function draw() {
    background(0);
    for (let i = 0; i <rows; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = i * resolution;
            if (grid[i][j] == 1) {
                FileList(225);
                rect(x, y, resolution, resolution);
            }
        }
    }
}