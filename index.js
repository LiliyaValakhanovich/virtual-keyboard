const wrapper = document.querySelector(".wrapper");

function createKeyBoard() {
  const input = createInput();
  const board = createBoard();
  wrapper.append(input, board);
}

createKeyBoard();

const keyboard = ['~ `', '! 1', '@ 2', '# 3', '$ 4', '% 5', '^ 6', '& 7', '* 8', '( 9', ') 0', '_ -', ' + =', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y',
                     'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLk', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
                     'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt',
                     'Ctrl', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
document.onkeydown = function (event) {
  console.log(event);
  console.log(event.code);
  /*keyboard.push(event.key);
  console.log(keyboard);*/
}

function init() {
  let out = "";
  for (let i = 0; i < keyboard.length; i += 1) {
    if (keyboard[i] === "ArrowUp") {
      out += "<div class = 'pul'><div class = 'up'></div></div>";
    } else if (keyboard[i] === "ArrowDown") {
      out += "<div class = 'pul'><div class = 'down'></div></div>";
    } else if (keyboard[i] === "ArrowLeft") {
      out += "<div class = 'pul'><div class = 'left'></div></div>";
    } else if (keyboard[i] === "ArrowRight") {
      out += "<div class = 'pul'><div class = 'right'></div></div>";
    } else {
      out += `<div class = 'pul'>${keyboard[i]}</div>`;
    }
  }
  document.querySelector(".inner").innerHTML = out;
}

init();