let result = document.getElementById("result");

function display(value) {
    result.value += value;
}

function clearScreen() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0, -1);
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (err) {
        alert("Invalid Input");
    }
}