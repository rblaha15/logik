let W;
let H;

let c;
let g;
const big_circles = [];
const small_circles = [];
const boxes = [];
let currentComb = [];
let btn;

let end = false;
let endtext = "";

function setup() {
    W = ((PADDING * 2) + (5 * (BIG_CIRCLE_WIDTH + 2 * BIG_CIRCLE_PAD) + BIG_CIRCLE_PAD) +
        (5 * (SMALL_CIRCLE_WIDTH + 2 * SMALL_CIRCLE_PAD) + SMALL_CIRCLE_PAD));

    H = ((PADDING * 2) + (r * (BIG_CIRCLE_WIDTH + BIG_CIRCLE_PAD * 2)) +
        (COLS * SQUARE_WIDTH + SQARES_PAD * 2));

    createCanvas(W, H)

    g = new Game(r, rep, easy)

    for (let i = 0; i < 5; i++) {
        currentComb.push(EMPTY);
    }

    for (let i = 0; i < r; i++) {
        big_circles.push([])
        for (let j = 4; j >= 0; j--) {
            big_circles[i].push(
                new Circle(
                    W - (PADDING + j * (BIG_CIRCLE_WIDTH + BIG_CIRCLE_PAD * 2) + BIG_CIRCLE_WIDTH / 2 + BIG_CIRCLE_PAD),
                    PADDING + i * (BIG_CIRCLE_WIDTH + BIG_CIRCLE_PAD * 2) + BIG_CIRCLE_WIDTH / 2 + BIG_CIRCLE_PAD,
                    BIG_CIRCLE_WIDTH
                )
            );
        }
    }
    for (let i = 0; i < r; i++) {
        small_circles.push([])
        for (let j = 0; j < 5; j++) {
            small_circles[i].push(
                new Circle(
                    PADDING + j * (SMALL_CIRCLE_WIDTH + SMALL_CIRCLE_PAD * 2) + SMALL_CIRCLE_WIDTH / 2 + SMALL_CIRCLE_PAD,
                    PADDING + i * (BIG_CIRCLE_WIDTH + BIG_CIRCLE_PAD * 2) + BIG_CIRCLE_WIDTH / 2 + BIG_CIRCLE_PAD,
                    SMALL_CIRCLE_WIDTH
                )
            );
        }
    }

    for (let i = 0; i < COLS; i++) {
        boxes.push([])
        for (let j = 4; j >= 0; j--) {
            boxes[i].push(
                new Box(
                    W - (PADDING + j * (BIG_CIRCLE_WIDTH + BIG_CIRCLE_PAD * 2) +
                        SQUARE_WIDTH + SQARES_PAD + SQ_PAD),
                    PADDING + r * (BIG_CIRCLE_WIDTH + BIG_CIRCLE_PAD * 2) +
                    SQARES_PAD + i * SQUARE_WIDTH + SQ_PAD,
                    SQUARE_WIDTH,
                    COLORS[i],
                    () => {
                        currentComb[4 - j] = COLORS[i]
                    }
                )
            );
        }
    }

    btn = new Button(PADDING, H - (PADDING + BTN_SIZE[1]), BTN_SIZE[0], BTN_SIZE[1], "Potvrdit", FONT_SIZE, () => {
        g.move(currentComb)
        currentComb = []
        for (let i = 0; i < 5; i++) {
            currentComb.push(EMPTY);
        }

        if (g.row == -1) {
            end = true
            endtext = "LOSE"
        }

        if (g.grid_pc[g.row + 1].filter(x => { return x === RIGHT }).length == 5) {
            end = true
            endtext = "WIN"
        }
    })
}


function mouseClicked() {
    if (end) return
    btn.clicked(mouseX, mouseY)
    for (let i = 0; i < COLS; i++) {
        for (let j = 0; j < 5; j++) {
            boxes[i][j].clicked(mouseX, mouseY)
        }
    }
}


function draw() {
    background(BG);

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < 5; j++) {
            if (i == g.row) {
                big_circles[i][j].color = currentComb[j]
            } else {
                big_circles[i][j].color = g.grid_pl[i][j]
            }
            small_circles[i][j].color = g.grid_pc[i][j]
            big_circles[i][j].show();
            small_circles[i][j].show();
        }
    }
    for (let i = 0; i < COLS; i++) {
        for (let j = 0; j < 5; j++) {
            boxes[i][j].show();
        }
    }

    btn.show()


    textSize(END_FONT_SIZE)
    fill(BLACK)
    textAlign(LEFT, BOTTOM)
    textStyle(BOLD)

    text(
        endtext,
        PADDING,
        H - (PADDING + BTN_SIZE[1] + PADDING)
    )
}
