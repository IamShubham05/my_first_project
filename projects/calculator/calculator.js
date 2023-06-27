const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");


buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = this.innerText;
        if (value === "C") {
            display.value = "";
        } else if (value === "CE") {
            display.value = display.value.slice(0, -1);
        } else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "lol";
            }
        } else {
            display.value += value;
        }
    });
});