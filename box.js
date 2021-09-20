class Box {
    constructor(x, y, w, col, callback) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.color = col
        this.callback = callback
    }

    show() {

        fill(this.color);
        rect(this.x, this.y, this.w, this.w);

        noFill()
        rect(this.x, this.y, this.w, this.w);
    }

    clicked(x, y) {
        if (this.x <= x && x <= (this.x + this.w) &&
            this.y <= y && y <= (this.y + this.w)) {
            this.callback()
        }
    }
}