let W;
let H;
let r = 10;

let c;
let grid = [];

function setup() {
    W = ((PADDING * 2) + (5 * (BIG_CIRCLE_WIDTH + 2 * BIG_CIRCLE_PAD) + BIG_CIRCLE_PAD) +
        (5 * (SMALL_CIRCLE_WIDTH + 2 * SMALL_CIRCLE_PAD) + SMALL_CIRCLE_PAD));

    H = ((PADDING * 2) + (r * (BIG_CIRCLE_WIDTH + BIG_CIRCLE_PAD * 2)) +
        (COLS * SQUARE_WIDTH + SQARES_PAD * 2));

    createCanvas(W, H)

    for (let i = 0; i < r; i++) {
        grid.push([])
        for (let j = 0; j < 5; j++) {
            grid[i].push(
                new Circle(
                    PADDING + j * (BIG_CIRCLE_WIDTH + BIG_CIRCLE_PAD * 2) + BIG_CIRCLE_WIDTH / 2 + BIG_CIRCLE_PAD,
                    PADDING + i * (BIG_CIRCLE_WIDTH + BIG_CIRCLE_PAD * 2) + BIG_CIRCLE_WIDTH / 2 + BIG_CIRCLE_PAD,
                    BIG_CIRCLE_WIDTH
                )
            );
        }
    }
}


function draw() {
    background(BG);

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < 5; j++) {
            grid[i][j].show();
        }
    }
}
