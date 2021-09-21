class Game {
    constructor(rows = 10, repeating = true, easy_mode = false) {
        this._r = rows
        this._again = repeating
        console.log(easy_mode)
        this._hard = !easy_mode

        this.grid_pl = []
        this.grid_pc = []

        for (let i = 0; i < this._r; i++) {
            this.grid_pc.push([])
            this.grid_pl.push([])
            for (let j = 0; j < 5; j++) {
                this.grid_pc[i].push(EMPTY)
                this.grid_pl[i].push(EMPTY)
            }
        }

        this.row = this._r - 1

        this._win_comb = this._create_combination()
    }

    _create_combination() {
        let combination = []
        let cols = [...COLORS]

        for (let i = 0; i < 5; i++) {
            let j = floor(random(0, cols.length - 1))
            let col = cols[j]
            combination.push(col)

            if (!this._again) {
                cols.splice(j, 1)
            }
        }
        return combination
    }

    move(combination) {
        this.grid_pl[this.row] = combination

        for (let i = 0; i < 5; i++) {
            if (this.grid_pl[this.row][i] == this._win_comb[i]) {
                this.grid_pc[this.row][i] = RIGHT
            } else if (this._win_comb.includes(this.grid_pl[this.row][i])) {
                this.grid_pc[this.row][i] = WRONG
            } else {
                this.grid_pc[this.row][i] = EMPTY
            }
        }

        console.log(this._hard, this._win_comb)
        if (this._hard) {
            for (let i = this.grid_pc[this.row].length - 1; i > 0; i--) {
                const j = floor(random() * (i + 1));
                [this.grid_pc[this.row][i], this.grid_pc[this.row][j]] = [this.grid_pc[this.row][j], this.grid_pc[this.row][i]];
            }
        }

        this.row -= 1
    }

    reveal_combination() {
        return this._win_comb
    }
}