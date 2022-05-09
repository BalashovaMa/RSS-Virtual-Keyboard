const outputArea = document.createElement('textarea');
outputArea.classList.add('output-area');
document.body.append(outputArea);

const title = document.createElement('h2');
document.body.append(title);
title.textContent = 'Клавиатура создана в операционной системе Windows';
title.classList.add('title');

const keysEng = [{
    top: "~",
    down: "`"
}, {
    top: "!",
    down: "1"
}, {
    top: "@",
    down: "2"
}, {
    top: "#",
    down: "3"
}, {
    top: "$",
    down: "4"
}, {
    top: "%",
    down: "5"
}, {
    top: "^",
    down: "6"
}, {
    top: "&",
    down: "7"
}, {
    top: "*",
    down: "8"
}, {
    top: "(",
    down: "9"
}, {
    top: ")",
    down: "0"
}, {
    top: "_",
    down: "-"
}, {
    top: "+",
    down: "="
}, "backspace",
    "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", {
    top: "{",
    down: "["
}, {
    top: "}",
    down: "]"
}, {
    top: "|",
    down: "/"
},
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", {
    top: ":",
    down: ";"
}, {
    top: '"',
    down: '\''
}, "enter",
    "shift", "z", "x", "c", "v", "b", "n", "m", {
    top: '<',
    down: ','
}, {
    top: '>',
    down: '.'
}, {
    top: "?",
    down: "/"
}, "shift",
    "ru", "en", "space", "back", "next"
]
/*const keysRu = [
    "ё", {
        top: "!",
        down: "1"
    }, {
        top: '"',
        down: "2"
    }, {
        top: "№",
        down: "3"
    }, {
        top: ";",
        down: "4"
    }, {
        top: "%",
        down: "5"
    }, {
        top: ":",
        down: "6"
    }, {
        top: "?",
        down: "7"
    }, {
        top: "*",
        down: "8"
    }, {
        top: "(",
        down: "9"
    }, {
        top: ")",
        down: "0"
    }, {
        top: "_",
        down: "-"
    }, {
        top: "+",
        down: "="
    }, "backspace",
    "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/",
    "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
    "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", {
        top: ",",
        down: "."
    }, {
        top: "",
        down: "shift"
    },
    {
        top: "en",
        down: "ru"
    }, "sound", "space", "back", "next"
]*/
const keysCode = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7",
    "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT",
    "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "CapsLock", "KeyA", "KeyS",
    "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ",
    "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ControlLeft", "AltLeft", "Space", "ArrowLeft", "ArrowRight"
]
let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
document.body.append(keyboard);

const drawKeyboard = (keys) => {
    keys.forEach(elem => {
        const keyElement = document.createElement("button");
        keyElement.classList.add("keyboard_key");
        if (typeof elem === 'object') {
            keyElement.classList.add('keyboard-key-num')
            const topSymbol = document.createElement('div')
            topSymbol.textContent = elem.top
            const downSymbol = document.createElement('div')
            downSymbol.textContent = elem.down
            keyElement.append(topSymbol)
            keyElement.append(downSymbol)
        } else {
            keyElement.textContent = elem;
            if (elem === "backspace" || elem === "shift") {
                keyElement.classList.add('keyboard-key-triple');
            }
            if (elem === "tab" || elem === "caps" || elem === "enter") {
                keyElement.classList.add('keyboard-key-double');
            }
            if (elem === "space") {
                keyElement.classList.add('keyboard-key-space');
            } else {
                keyElement.classList.add('keyboard-key-num');
            }
        }
        keyboard.appendChild(keyElement)
    })
}

drawKeyboard(keysEng);

const btnKeys = keyboard.querySelectorAll('.keyboard_key');
for (let i = 0; i < btnKeys.length; i++) {
    btnKeys[i].setAttribute('data-code', keysCode[i])
}
keyboard.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('keyboard_key')) {
        outputArea.focus();
        outputArea.setRangeText(evt.target.textContent, 10, 10)

    }
})
document.addEventListener("DOMContentLoaded", outputArea.focus());
document.addEventListener('keydown', function (event) {
    if (keysCode.includes(event.code)) {
        console.log(event.code)

    }
});
const keyDown = (btn) => {
    btnKeys.forEach(elem => {
        if (elem.getAttribute('data-code') === btn.code) {
            elem.classList.add('down')
        }
    })
}
const keyUp = (btn) => {
    btnKeys.forEach(elem => {
        if (elem.getAttribute('data-code') === btn.code) {
            elem.classList.remove('down')
        }
    })
}
outputArea.addEventListener('keydown', keyDown);
outputArea.addEventListener('keyup', keyUp);