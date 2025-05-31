let display = document.getElementById("display");

function append(val) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = val;
    } else {
        display.innerText += val;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function deleteLast() {
    if (display.innerText.length === 1 || display.innerText === "Error") {
        display.innerText = "0";
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate() {
    try {
        let expression = display.innerText
            .replace(/÷/g, "/")
            .replace(/×/g, "*")
            .replace(/(\d+(\.\d+)?)%/g, "($1/100)");

        let result = eval(expression);
        display.innerText = result;
    } catch {
        display.innerText = "Error";
    }
}

document.addEventListener("keydown", function (e) {
    const key = e.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        if (key === "*") append("×");
        else if (key === "/") append("÷");
        else append(key);
    } else if (key === "Enter" || key === "=") {
        e.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    } else if (key === ".") {
        append(".");
    }
});
