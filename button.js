class Button {
    constructor(x, y, w, h, txt, fntSize, callback) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = txt;
        this.fontSize = fntSize
        this.callback = callback
    }

    show() {
        fill(EMPTY)
        rect(this.x, this.y, this.w, this.h)
        noFill()
        rect(this.x, this.y, this.w, this.h)

        textSize(this.fontSize)
        fill(BLACK)
        textAlign(CENTER, CENTER)
        text(
            this.text,
            this.x + this.w / 2,
            this.y + this.h / 2
        )
    }

    clicked(x, y) {
        if (this.x <= x && x <= (this.x + this.w) &&
            this.y <= y && y <= (this.y + this.h)) {
            this.callback()
        }
    }

}