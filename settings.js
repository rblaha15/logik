let options = window.location.search.substr(1).split("&").map(function (it, i, a) { return it.split("=", 2); })

console.log(options)

let r = document.forms["settings"]["rows"].value;
let easy = document.forms["settings"]["easyMode"].value;
let rep = document.forms["settings"]["repeat"].value;

function checkForm() {
    let r = document.forms["settings"]["rows"].value;
    let easy = document.forms["settings"]["easyMode"].value;
    let rep = document.forms["settings"]["repeat"].value;
    console.log(r)
    if (r == null) {
        document.forms["settings"]["rows"].value = 1
    }
}