
let result = document.getElementById("result");

function dis(val) {
    result.value += val;
}

function solve() {
    let y = eval(result.value);
    result.value = y;
}

function clr() {
    result.value = "";
}
function backspace() {
    result.value = result.value.slice(0, -1);
}
