const BG = [255, 63, 63];

const EMPTY = [127, 127, 127];

const RED = [255, 0, 0];
const GREEN = [0, 255, 0];
const BLUE = [0, 0, 255];
const YELLOW = [255, 255, 0];
const PINK = [255, 0, 255];
const CYAN = [0, 255, 255];
const WHITE = [255, 255, 255];
const BLACK = [0, 0, 0];

const WRONG = [255, 255, 255];
const RIGHT = [0, 0, 0];

const COLORS = [RED, GREEN, BLUE, YELLOW, PINK, CYAN, WHITE, BLACK];



const PADDING = 10;

const BIG_CIRCLE_WIDTH = 20;
const SMALL_CIRCLE_WIDTH = 10;
const BIG_CIRCLE_PAD = 2;
const SMALL_CIRCLE_PAD = 1;

const SQUARE_WIDTH = 15;
const SQARES_PAD = 2;

const BTN_SIZE = [50, 20];
const FONT_SIZE = 12;
const END_FONT_SIZE = 20;

const COLS = COLORS.length;

const EXTRA_PAD = (BIG_CIRCLE_WIDTH / 2 + BIG_CIRCLE_PAD) -
    (SMALL_CIRCLE_WIDTH / 2 + SMALL_CIRCLE_PAD);

const SQ_PAD = (BIG_CIRCLE_WIDTH / 2 + BIG_CIRCLE_PAD) -
    (SQUARE_WIDTH / 2 + SQARES_PAD);

const TEXT_PAD = (BTN_SIZE[1] - FONT_SIZE) / 2;
