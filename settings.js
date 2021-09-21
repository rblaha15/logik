const options = window.location.search.substr(1).split("&").map(function (it, i, a) { return it.split("=", 2) })

for (pair of options) {
    const a = pair[0]; const b = pair[1]
    switch (a) {
        case "repeat":
            document.forms["settings"]["repeat"].checked = b == "on"
            break
        case "easyMode":
            document.forms["settings"]["easyMode"].checked = b == "on"
            break
        case "rows":
            if (b < 1) {
                document.forms["settings"]["rows"].value = 10
            } else {
                document.forms["settings"]["rows"].value = b
            }

    }

}

let r = document.forms["settings"]["rows"].value
let easy = document.forms["settings"]["easyMode"].checked
let rep = document.forms["settings"]["repeat"].checked

console.log(document.forms["settings"]["easyMode"].checked)
