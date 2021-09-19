class Circle {
    constructor(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.color = EMPTY
    }

    show() {
        if (this.color != EMPTY) {
            fill(this.color);
            circle(this.x, this.y, this.d);
        }
        noFill()
        circle(this.x, this.y, this.d);
    }
}