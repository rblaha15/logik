const options = window.location.search.substr(1).split("&").map(function (it, i, a) { return it.split("=", 2) })

console.log(options)

for (pair of options) {
    const a = pair[0]; const b = pair[1]
    switch (a) {
        case "repeating":
            document.forms["settings"]["repeat"].value = b == "on"
        case "easyMode":
            document.forms["settings"]["easyMode"].value = b == "on"
        case "rows":
            if (b < 1) {
                document.forms["settings"]["easyMode"].value = 1
            } else {
                document.forms["settings"]["easyMode"].value = b
            }

    }

}

let r = document.forms["settings"]["rows"].value
let easy = document.forms["settings"]["easyMode"].value
let rep = document.forms["settings"]["repeat"].value

function checkForm() {
    let r = document.forms["settings"]["rows"].value
    let easy = document.forms["settings"]["easyMode"].value
    let rep = document.forms["settings"]["repeat"].value
    console.log(r)
    if (r == null) {
        document.forms["settings"]["rows"].value = 1
    }
}