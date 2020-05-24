// CHANGE THE COLOR OF BUTTON

var all_buttons = document.getElementsByTagName("button");
var btn = [];

for (let i = 0; i < all_buttons.length; i++) {
    btn.push(all_buttons.item(i).classList[1]);
}


function btnRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-danger");
    }
}


function btnYellow() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-warning");
    }
}


function btnGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-success");
    }
}


function btnReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(btn[i]);
    }
}


function btnRandom() {
    for (let i = 0; i < all_buttons.length; i++) {
        var randomIndex = Math.floor(Math.random() * 7);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(btn[randomIndex]);
    }
}


function changeButtonClr(btnChoice) {
    if (btnChoice.value === "red") {
        btnRed();
    } else if (btnChoice.value === "yellow") {
        btnYellow();
    } else if (btnChoice.value === "green") {
        btnGreen();
    } else if (btnChoice.value === "reset") {
        btnReset();
    } else if (btnChoice.value === "random") {
        btnRandom();
    }

}

