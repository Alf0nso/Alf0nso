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
let resolution = 10;

function setup() {

    createCanvas(1000, 700);
    frameRate(20);
    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;
        }
    }
    //the block
    grid[30][20] = 1;
    grid[30][21] = 1;
    grid[31][20] = 1;
    grid[31][21] = 1;

    
    grid[40][20] = 1;
    grid[40][21] = 1;
    grid[40][22] = 1;
    //3
    grid[41][23] = 1;
    grid[42][24] = 1;
    grid[43][24] = 1;


    grid[45][23] = 1;
    grid[46][22] = 1;
    //3
    grid[44][21] = 1;
    grid[46][21] = 1;
    grid[47][21] = 1;

    grid[46][20] = 1;
    grid[45][19] = 1;
    grid[43][18] = 1;
    grid[42][18] = 1;
    grid[41][19] = 1;

    grid[50][20] = 1;
    grid[50][19] = 1;
    grid[50][18] = 1;
    grid[51][20] = 1;
    grid[51][19] = 1;
    grid[51][18] = 1;

    grid[52][17] = 1;
    grid[52][21] = 1;
    grid[54][17] = 1;
    grid[54][21] = 1;
    grid[54][16] = 1;
    grid[54][22] = 1;
    grid[64][19] = 1;
    grid[64][18] = 1;
    grid[65][19] = 1;
    grid[65][18] = 1;
}


function draw() {
    background(0);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                fill(225);
                stroke(0);
                rect(x, y, resolution - 2, resolution - 2 );
            }
        }
    }


    let next = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            let state = grid[i][j];
            let sum = 0;

            if(i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
                next[i][j] = state;
            } else {
                    let sum = 0;
                let neighbors = neighbor(grid, i, j);

                if(state == 0 && neighbors == 3) { //first rule
                    next[i][j] = 1;
                } else if (state == 1 && (neighbors < 2 || neighbors > 3)) { //second rule
                    next[i][j] = 0;
                } else {
                    next[i][j] = state;
                }
            }

        }
    }

    grid = next;
}

//sum += grid[i - 1][j - 1];
//sum += grid[i][j - 1];
//sum += grid[i + 1][j - 1];
//sum += grid[i + 1][j];
//sum += grid[i + 1][j + 1];
//sum += grid[i][j + 1];
//sum += grid[i - 1][j + 1];
//sum += grid[i - 1][j];

function neighbor(grid, x, y) {
    let sum = 0;
    for(let i = -1; i < 2; i++) {
        for(let j = -1; j < 2; j++) {
            sum += grid[x + i][y + j];
        }
    }

    sum -= grid[x][y];
    return sum;

}