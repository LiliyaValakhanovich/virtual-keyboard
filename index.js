const wrapper = document.querySelector(".wrapper");

function createKeyBoard() {
  const input = createInput();
  const board = createBoard();
  wrapper.append(input, board);
}

createKeyBoard();

const keyboard = [{ kod: "Backquote", value: "`", symbol: "~" }, { kod: "Digit1", value: "1", symbol: "!" }, { kod: "Digit2", value: "2", symbol: "@" }, { kod: "Digit3", value: "3", symbol: "#" },
  { kod: "Digit4", value: "4", symbol: "$" }, { kod: "Digit5", value: "5", symbol: "%" }, { kod: "Digit6", value: "6", symbol: "^" }, { kod: "Digit7", value: "7", symbol: "&" }, { kod: "Digit8", value: "8", symbol: "*" },
  { kod: "Digit9", value: "9", symbol: "(" }, { kod: "Digit0", value: "0", symbol: ")" }, { kod: "Minus", value: "-", symbol: "_" }, { kod: "Equal", value: "=", symbol: "+" }, { kod: "Backspace", value: "Backspace" },
  { kod: "Tab", value: "Tab" }, { kod: "KeyQ", value: "q" }, { kod: "KeyW", value: "w" }, { kod: "KeyE", value: "e" }, { kod: "KeyR", value: "r" },
  { kod: "KeyT", value: "t" }, { kod: "KeyY", value: "y" }, { kod: "KeyU", value: "u" }, { kod: "KeyI", value: "i" }, { kod: "KeyO", value: "o" },
  { kod: "KeyP", value: "p" }, { kod: "BracketLeft", value: "[" }, { kod: "BracketRight", value: "]" }, { kod: "Backslash", value: "\\" },
  { kod: "CapsLock", value: "CapsLock" }, { kod: "KeyA", value: "a" }, { kod: "KeyS", value: "s" }, { kod: "KeyD", value: "d" },
  { kod: "KeyF", value: "f" }, { kod: "KeyG", value: "g" }, { kod: "KeyH", value: "h" }, { kod: "KeyJ", value: "j" }, { kod: "KeyK", value: "k"},
  { kod: "KeyL", value: "l" }, { kod: "Semicolon", value: ";" }, { kod: "Quote", value: "'" }, { kod: "Enter", value: "Enter" },
  { kod: "ShiftLeft", value: "Shift" }, { kod: "KeyZ", value: "z" }, { kod: "KeyX", value: "x" }, { kod: "KeyC", value: "c" },
  { kod: "KeyV", value: "v"}, { kod: "KeyB", value: "b" }, { kod: "KeyN", value: "n" }, { kod: "KeyM", value: "m" }, { kod: "Comma", value: "," },
  { kod: "Period", value: "." }, { kod: "Slash", value: "/" }, { kod: "ArrowUp", value: "ArrowUp" }, { kod: "ShiftRight", value: "Shift" },
  { kod: "ControlLeft", value: "Ctrl" }, { kod: "MetaLeft", value: "Meta" }, { kod: "AltLeft", value: "Alt" }, { kod: "Space", value: " " },
  { kod: "AltRight", value: "Alt" }, { kod: "ControlRight", value: "Ctrl" }, { kod: "ArrowLeft", value: "ArrowLeft" }, { kod: "ArrowDown", value: "ArrowDown" },
  { kod: "ArrowRight", value: "ArrowRight" }];

const keyboardRus = [{ kod: "Backquote", value: "`", symbol: "~" }, { kod: "Digit1", value: "1", symbol: "!" }, { kod: "Digit2", value: "2", symbol: "@" }, { kod: "Digit3", value: "3", symbol: "#" },
  { kod: "Digit4", value: "4", symbol: "$" }, { kod: "Digit5", value: "5", symbol: "%" }, { kod: "Digit6", value: "6", symbol: "^" }, { kod: "Digit7", value: "7", symbol: "&" }, { kod: "Digit8", value: "8", symbol: "*" },
  { kod: "Digit9", value: "9", symbol: "(" }, { kod: "Digit0", value: "0", symbol: ")" }, { kod: "Minus", value: "-", symbol: "_" }, { kod: "Equal", value: "=", symbol: "+" }, { kod: "Backspace", value: "Backspace" },
  { kod: "Tab", value: "Tab" }, { kod: "KeyQ", value: "й" }, { kod: "KeyW", value: "ц" }, { kod: "KeyE", value: "у" }, { kod: "KeyR", value: "к" },
  { kod: "KeyT", value: "е" }, { kod: "KeyY", value: "н" }, { kod: "KeyU", value: "г" }, { kod: "KeyI", value: "ш" }, { kod: "KeyO", value: "щ" },
  { kod: "KeyP", value: "з" }, { kod: "BracketLeft", value: "х" }, { kod: "BracketRight", value: "ъ" }, { kod: "Backslash", value: "\\" },
  { kod: "CapsLock", value: "CapsLock" }, { kod: "KeyA", value: "ф" }, { kod: "KeyS", value: "ы" }, { kod: "KeyD", value: "в" },
  { kod: "KeyF", value: "а" }, { kod: "KeyG", value: "п" }, { kod: "KeyH", value: "р" }, { kod: "KeyJ", value: "о" }, { kod: "KeyK", value: "л"},
  { kod: "KeyL", value: "д" }, { kod: "Semicolon", value: "ж" }, { kod: "Quote", value: "э" }, { kod: "Enter", value: "Enter" },
  { kod: "ShiftLeft", value: "Shift" }, { kod: "KeyZ", value: "я" }, { kod: "KeyX", value: "ч" }, { kod: "KeyC", value: "с" },
  { kod: "KeyV", value: "м"}, { kod: "KeyB", value: "и" }, { kod: "KeyN", value: "т" }, { kod: "KeyM", value: "ь" }, { kod: "Comma", value: "б" },
  { kod: "Period", value: "ю" }, { kod: "Slash", value: "." }, { kod: "ArrowUp", value: "ArrowUp" }, { kod: "ShiftRight", value: "Shift" },
  { kod: "ControlLeft", value: "Ctrl" }, { kod: "MetaLeft", value: "Meta" }, { kod: "AltLeft", value: "Alt" }, { kod: "Space", value: " " },
  { kod: "AltRight", value: "Alt" }, { kod: "ControlRight", value: "Ctrl" }, { kod: "ArrowLeft", value: "ArrowLeft" }, { kod: "ArrowDown", value: "ArrowDown" },
  { kod: "ArrowRight", value: "ArrowRight" }];

function init() {
  let out = "";
  for (let i = 0; i < keyboard.length; i += 1) {
    if (keyboard[i].value === "ArrowUp") {
      out += `<div class = 'pul' data-kod = '${keyboard[i].kod}'><div class = 'up'></div></div>`;
    } else if (keyboard[i].value === "ArrowDown") {
      out += `<div class = 'pul' data-kod = '${keyboard[i].kod}'><div class = 'down'></div></div>`;
    } else if (keyboard[i].value === "ArrowLeft") {
      out += `<div class = 'pul' data-kod = '${keyboard[i].kod}'><div class = 'left'></div></div>`;
    } else if (keyboard[i].value === "ArrowRight") {
      out += `<div class = 'pul' data-kod = '${keyboard[i].kod}'><div class = 'right'></div></div>`;
    } else {
      out += `<div class = 'pul' data-kod = '${keyboard[i].kod}'>${keyboard[i].value}</div>`;
    }
  }
  document.querySelector(".inner").innerHTML = out;
}

init();

function replaceLanguage() {
  let out = "";
  for (let i = 0; i < keyboardRus.length; i += 1) {
    if (keyboardRus[i].value === "ArrowUp") {
      out += `<div class = 'pul' data-kod = '${keyboardRus[i].kod}'><div class = 'up'></div></div>`;
    } else if (keyboardRus[i].value === "ArrowDown") {
      out += `<div class = 'pul' data-kod = '${keyboardRus[i].kod}'><div class = 'down'></div></div>`;
    } else if (keyboardRus[i].value === "ArrowLeft") {
      out += `<div class = 'pul' data-kod = '${keyboardRus[i].kod}'><div class = 'left'></div></div>`;
    } else if (keyboardRus[i].value === "ArrowRight") {
      out += `<div class = 'pul' data-kod = '${keyboardRus[i].kod}'><div class = 'right'></div></div>`;
    } else {
      out += `<div class = 'pul' data-kod = '${keyboardRus[i].kod}'>${keyboardRus[i].value}</div>`;
    }
  }
  document.querySelector(".inner").innerHTML = out; 
}

const inner = document.querySelector(".inner");
const text = document.querySelector(".screen");
text.textContent = "";

function heandlerClick(event) {
  console.log(event.target.dataset);
  document.querySelectorAll(".pul").forEach((element) => {
    element.classList.remove("active");
  });
  if (!event.target.closest(".pul")) {
    return;
  } document.querySelector(`.pul[data-kod = ${event.target.dataset.kod}`).classList.add("active");

  if (event.target.textContent === "Backspace") {
    text.textContent = text.textContent.slice(0, text.textContent.length - 1);
  } else if (event.target.textContent === "Enter") {
    text.textContent += "\n";
  } else if (event.target.textContent === "Tab") {
    text.textContent += "  ";
  } else {
    text.textContent += event.target.textContent;
  }
}

inner.addEventListener("click", heandlerClick);

document.addEventListener("keydown", (event) => {
  document.querySelectorAll(".pul").forEach((element) => {
    element.classList.remove("active");
  });
  document.querySelector(`.pul[data-kod = ${event.code}]`).classList.add("active");
  console.log(event);
  if (event.key === "Backspace") {
    text.textContent = text.textContent.slice(0, text.textContent.length - 1);
  } else if (event.key === "Tab") {
    text.textContent += "  ";
  } else if (event.key === "Enter") {
    text.textContent += "\n";
  } else if (event.key === "Shift" && event.key.match(/[a-z]/g)) {
    text.textContent += event.key.match(/[a-z]/g).toUpperCase();
  } else if (event.key === "Alt" && event.key === "Shift") {
    replaceLanguage();
  } else {
    text.textContent += event.key;
  }
});