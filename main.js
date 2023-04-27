/* eslint-disable no-mixed-spaces-and-tabs */
/* global document */
/* Массив с клавишами */
const keys = [
  {
    class: 'backquote',
    rusLower: 'ё',
    rusUpper: 'Ё',
    engLower: '`',
    engUpper: '~',
  },
  {
    class: 'digit1',
    rusLower: '1',
    rusUpper: '!',
    engLower: '1',
    engUpper: '!',
  },
  {
    class: 'digit2',
    rusLower: '2',
    rusUpper: '"',
    engLower: '2',
    engUpper: '@',
  },
  {
    class: 'digit3',
    rusLower: '3',
    rusUpper: '№',
    engLower: '3',
    engUpper: '#',
  },
  {
    class: 'digit4',
    rusLower: '4',
    rusUpper: ';',
    engLower: '4',
    engUpper: '$',
  },
  {
    class: 'digit5',
    rusLower: '5',
    rusUpper: '%',
    engLower: '5',
    engUpper: '%',
  },
  {
    class: 'digit6',
    rusLower: '6',
    rusUpper: ':',
    engLower: '6',
    engUpper: '^',
  },
  {
    class: 'digit7',
    rusLower: '7',
    rusUpper: '?',
    engLower: '7',
    engUpper: '&',
  },
  {
    class: 'digit8',
    rusLower: '8',
    rusUpper: '*',
    engLower: '8',
    engUpper: '*',
  },
  {
    class: 'digit9',
    rusLower: '9',
    rusUpper: '(',
    engLower: '9',
    engUpper: '(',
  },
  {
    class: 'digit0',
    rusLower: '0',
    rusUpper: ')',
    engLower: '0',
    engUpper: ')',
  },
  {
    class: 'minus',
    rusLower: '-',
    rusUpper: '_',
    engLower: '-',
    engUpper: '_',
  },
  {
    class: 'equal',
    rusLower: '=',
    rusUpper: '+',
    engLower: '=',
    engUpper: '+',
  },
  {
    class: 'backspace',
    rusLower: 'Backspace',
    rusUpper: 'Backspace',
    engLower: 'Backspace',
    engUpper: 'Backspace',
  },
  {
    class: 'tab',
    rusLower: 'Tab',
    rusUpper: 'Tab',
    engLower: 'Tab',
    engUpper: 'Tab',
  },
  {
    class: 'keyQ',
    rusLower: 'й',
    rusUpper: 'Й',
    engLower: 'q',
    engUpper: 'Q',
  },
  {
    class: 'keyW',
    rusLower: 'ц',
    rusUpper: 'Ц',
    engLower: 'w',
    engUpper: 'W',
  },
  {
    class: 'keyE',
    rusLower: 'у',
    rusUpper: 'У',
    engLower: 'e',
    engUpper: 'E',
  },
  {
    class: 'keyR',
    rusLower: 'к',
    rusUpper: 'К',
    engLower: 'r',
    engUpper: 'R',
  },
  {
    class: 'keyT',
    rusLower: 'е',
    rusUpper: 'Е',
    engLower: 't',
    engUpper: 'T',
  },
  {
    class: 'keyY',
    rusLower: 'н',
    rusUpper: 'Н',
    engLower: 'y',
    engUpper: 'Y',
  },
  {
    class: 'keyU',
    rusLower: 'г',
    rusUpper: 'Г',
    engLower: 'u',
    engUpper: 'U',
  },
  {
    class: 'keyI',
    rusLower: 'ш',
    rusUpper: 'Ш',
    engLower: 'i',
    engUpper: 'I',
  },
  {
    class: 'keyO',
    rusLower: 'щ',
    rusUpper: 'Щ',
    engLower: 'o',
    engUpper: 'O',
  },
  {
    class: 'keyP',
    rusLower: 'з',
    rusUpper: 'З',
    engLower: 'p',
    engUpper: 'P',
  },
  {
    class: 'bracketLeft',
    rusLower: 'х',
    rusUpper: 'Х',
    engLower: '[',
    engUpper: '{',
  },
  {
    class: 'bracketRight',
    rusLower: 'ъ',
    rusUpper: 'Ъ',
    engLower: ']',
    engUpper: '}',
  },
  {
    class: 'backslash',
    rusLower: '\\',
    rusUpper: '/',
    engLower: '\\',
    engUpper: '|',
  },
  {
    class: 'delete',
    rusLower: 'Del',
    rusUpper: 'Del',
    engLower: 'Del',
    engUpper: 'Del',
  },
  {
    class: 'capsLock',
    rusLower: 'CapsLock',
    rusUpper: 'CapsLock',
    engLower: 'CapsLock',
    engUpper: 'CapsLock',
  },
  {
    class: 'keyA',
    rusLower: 'ф',
    rusUpper: 'Ф',
    engLower: 'a',
    engUpper: 'A',
  },
  {
    class: 'keyS',
    rusLower: 'ы',
    rusUpper: 'Ы',
    engLower: 's',
    engUpper: 'S',
  },
  {
    class: 'keyD',
    rusLower: 'в',
    rusUpper: 'В',
    engLower: 'd',
    engUpper: 'D',
  },
  {
    class: 'keyF',
    rusLower: 'а',
    rusUpper: 'А',
    engLower: 'f',
    engUpper: 'F',
  },
  {
    class: 'keyG',
    rusLower: 'п',
    rusUpper: 'П',
    engLower: 'g',
    engUpper: 'G',
  },
  {
    class: 'keyH',
    rusLower: 'р',
    rusUpper: 'Р',
    engLower: 'h',
    engUpper: 'H',
  },
  {
    class: 'keyJ',
    rusLower: 'о',
    rusUpper: 'О',
    engLower: 'j',
    engUpper: 'J',
  },
  {
    class: 'keyK',
    rusLower: 'л',
    rusUpper: 'Л',
    engLower: 'k',
    engUpper: 'K',
  },
  {
    class: 'keyL',
    rusLower: 'д',
    rusUpper: 'Д',
    engLower: 'l',
    engUpper: 'L',
  },
  {
    class: 'semicolon',
    rusLower: 'ж',
    rusUpper: 'Ж',
    engLower: ';',
    engUpper: ':',
  },
  {
    class: 'quote',
    rusLower: 'э',
    rusUpper: 'Э',
    engLower: "'",
    engUpper: '"',
  },
  {
    class: 'enter',
    rusLower: 'Enter',
    rusUpper: 'Enter',
    engLower: 'Enter',
    engUpper: 'Enter',
  },
  {
    class: 'shiftLeft',
    rusLower: 'Shift',
    rusUpper: 'Shift',
    engLower: 'Shift',
    engUpper: 'Shift',
  },
  {
    class: 'keyZ',
    rusLower: 'я',
    rusUpper: 'Я',
    engLower: 'z',
    engUpper: 'Z',
  },
  {
    class: 'keyX',
    rusLower: 'ч',
    rusUpper: 'Ч',
    engLower: 'x',
    engUpper: 'X',
  },
  {
    class: 'keyC',
    rusLower: 'с',
    rusUpper: 'С',
    engLower: 'c',
    engUpper: 'C',
  },
  {
    class: 'keyV',
    rusLower: 'м',
    rusUpper: 'М',
    engLower: 'v',
    engUpper: 'V',
  },
  {
    class: 'keyB',
    rusLower: 'и',
    rusUpper: 'И',
    engLower: 'b',
    engUpper: 'B',
  },
  {
    class: 'keyN',
    rusLower: 'т',
    rusUpper: 'Т',
    engLower: 'n',
    engUpper: 'N',
  },
  {
    class: 'keyM',
    rusLower: 'ь',
    rusUpper: 'Ь',
    engLower: 'm',
    engUpper: 'M',
  },
  {
    class: 'comma',
    rusLower: 'б',
    rusUpper: 'Б',
    engLower: ',',
    engUpper: '&lt;',
  },
  {
    class: 'period',
    rusLower: 'ю',
    rusUpper: 'Ю',
    engLower: '.',
    engUpper: '&gt;>',
  },
  {
    class: 'slash',
    rusLower: '.',
    rusUpper: ',',
    engLower: '/',
    engUpper: '?',
  },
  {
    class: 'arrowUp',
    rusLower: '▲',
    rusUpper: '▲',
    engLower: '▲',
    engUpper: '▲',
  },
  {
    class: 'shiftRight',
    rusLower: 'Shift',
    rusUpper: 'Shift',
    engLower: 'Shift',
    engUpper: 'Shift',
  },
  {
    class: 'controlLeft',
    rusLower: 'Ctrl',
    rusUpper: 'Ctrl',
    engLower: 'Ctrl',
    engUpper: 'Ctrl',
  },
  {
    class: 'metaLeft',
    rusLower: 'Win',
    rusUpper: 'Win',
    engLower: 'Win',
    engUpper: 'Win',
  },
  {
    class: 'altLeft',
    rusLower: 'Alt',
    rusUpper: 'Alt',
    engLower: 'Alt',
    engUpper: 'Alt',
  },
  {
    class: 'space',
    rusLower: ' ',
    rusUpper: ' ',
    engLower: ' ',
    engUpper: ' ',
  },
  {
    class: 'altRight',
    rusLower: 'Alt',
    rusUpper: 'Alt',
    engLower: 'Alt',
    engUpper: 'Alt',
  },
  {
    class: 'arrowLeft',
    rusLower: '◄',
    rusUpper: '◄',
    engLower: '◄',
    engUpper: '◄',
  },
  {
    class: 'arrowDown',
    rusLower: '▼',
    rusUpper: '▼',
    engLower: '▼',
    engUpper: '▼',
  },
  {
    class: 'arrowRight',
    rusLower: '►',
    rusUpper: '►',
    engLower: '►',
    engUpper: '►',
  },
  {
    class: 'controlRight',
    rusLower: 'Ctrl',
    rusUpper: 'Ctrl',
    engLower: 'Ctrl',
    engUpper: 'Ctrl',
  },
];

/* Элементы, атрибуты, содержимое */
const header = document.createElement('header');
header.className = 'header';

const h1 = document.createElement('h1');
h1.innerHTML = 'Virtual keyboard';

const textareaSection = document.createElement('section');
textareaSection.className = 'textarea';

const area = document.createElement('textarea');
area.id = 'textarea';
area.rows = 5;
area.cols = 50;

const keyboardSection = document.createElement('section');
keyboardSection.className = 'keyboard';

/* Начальные значения языка и регистра */
const lang = false; // false - английский
const caps = false; // false - строчные

/* Функция создания клавиш и добавления их к родительскому элементу */
keys.forEach((key) => {
  const button = document.createElement('button');
  button.className = key.class;

  const rusSpan = document.createElement('span');
  if (lang) {
    rusSpan.className = 'rus';
  } else {
    rusSpan.className = 'rus hidden';
  }

  const rusLowerSpan = document.createElement('span');
  if (caps) {
    rusLowerSpan.className = 'caseDown hidden';
  } else {
    rusLowerSpan.className = 'caseDown';
  }
  rusLowerSpan.textContent = key.rusLower;
  rusSpan.appendChild(rusLowerSpan);

  const rusUpperSpan = document.createElement('span');
  if (caps) {
    rusUpperSpan.className = 'caseUp';
  } else {
    rusUpperSpan.className = 'caseUp hidden';
  }
  rusUpperSpan.textContent = key.rusUpper;
  rusSpan.appendChild(rusUpperSpan);

  button.appendChild(rusSpan);

  const engSpan = document.createElement('span');
  if (lang) {
    engSpan.className = 'eng hidden';
  } else {
    engSpan.className = 'eng';
  }

  const engLowerSpan = document.createElement('span');
  if (caps) {
    engLowerSpan.className = 'caseDown hidden';
  } else {
    engLowerSpan.className = 'caseDown';
  }
  engLowerSpan.textContent = key.engLower;
  engSpan.appendChild(engLowerSpan);

  const engUpperSpan = document.createElement('span');
  if (caps) {
    engUpperSpan.className = 'caseUp';
  } else {
    engUpperSpan.className = 'caseUp hidden';
  }
  engUpperSpan.textContent = key.engUpper;
  engSpan.appendChild(engUpperSpan);

  button.appendChild(engSpan);

  keyboardSection.appendChild(button);
});

const footer = document.createElement('footer');
footer.className = 'footer';

const p1 = document.createElement('p');
p1.innerHTML = 'Keyboard was created for operating system Windows';

const p2 = document.createElement('p');
p2.innerHTML = 'To switch the language use the combination left <code>ctrl</code> + <code>shift</code>';

/* Добавляем элементы на страницу */
document.body.appendChild(header);
header.appendChild(h1);

document.body.appendChild(textareaSection);
textareaSection.appendChild(area);

document.body.appendChild(keyboardSection);

document.body.appendChild(footer);
footer.appendChild(p1);
footer.appendChild(p2);

/* Обработка событий клавиатуры */
const textarea = document.getElementById('textarea');
const buttons = document.querySelectorAll('.keyboard button');

const capsLock = document.querySelector('.capsLock');
const shiftLeft = document.querySelector('.shiftLeft');
const shiftRight = document.querySelector('.shiftRight');
const backquote = document.querySelector('.backquote');
const digit1 = document.querySelector('.digit1');
const digit2 = document.querySelector('.digit2');
const digit3 = document.querySelector('.digit3');
const digit4 = document.querySelector('.digit4');
const digit5 = document.querySelector('.digit5');
const digit6 = document.querySelector('.digit6');
const digit7 = document.querySelector('.digit7');
const digit8 = document.querySelector('.digit8');
const digit9 = document.querySelector('.digit9');
const digit0 = document.querySelector('.digit0');
const minus = document.querySelector('.minus');
const equal = document.querySelector('.equal');
const backspace = document.querySelector('.backspace');
const tab = document.querySelector('.tab');
const keyQ = document.querySelector('.keyQ');
const keyW = document.querySelector('.keyW');
const keyE = document.querySelector('.keyE');
const keyR = document.querySelector('.keyR');
const keyT = document.querySelector('.keyT');
const keyY = document.querySelector('.keyY');
const keyU = document.querySelector('.keyU');
const keyI = document.querySelector('.keyI');
const keyO = document.querySelector('.keyO');
const keyP = document.querySelector('.keyP');
const bracketLeft = document.querySelector('.bracketLeft');
const bracketRight = document.querySelector('.bracketRight');
const backslash = document.querySelector('.backslash');
const keydelete = document.querySelector('.delete');
const keyA = document.querySelector('.keyA');
const keyS = document.querySelector('.keyS');
const keyD = document.querySelector('.keyD');
const keyF = document.querySelector('.keyF');
const keyG = document.querySelector('.keyG');
const keyH = document.querySelector('.keyH');
const keyJ = document.querySelector('.keyJ');
const keyK = document.querySelector('.keyK');
const keyL = document.querySelector('.keyL');
const semicolon = document.querySelector('.semicolon');
const quote = document.querySelector('.quote');
const enter = document.querySelector('.enter');
const keyZ = document.querySelector('.keyZ');
const keyX = document.querySelector('.keyX');
const keyC = document.querySelector('.keyC');
const keyV = document.querySelector('.keyV');
const keyB = document.querySelector('.keyB');
const keyN = document.querySelector('.keyN');
const keyM = document.querySelector('.keyM');
const comma = document.querySelector('.comma');
const period = document.querySelector('.period');
const slash = document.querySelector('.slash');
const arrowUp = document.querySelector('.arrowUp');
const controlLeft = document.querySelector('.controlLeft');
const metaLeft = document.querySelector('.metaLeft');
const altLeft = document.querySelector('.altLeft');
const space = document.querySelector('.space');
const altRight = document.querySelector('.altRight');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowDown = document.querySelector('.arrowDown');
const arrowRight = document.querySelector('.arrowRight');
const controlRight = document.querySelector('.controlRight');

/* Функция обновления внешнего вида клавиатуры */
function updateKeyboard() {
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const eng = button.querySelector('.eng');
    const rus = button.querySelector('.rus');
    const rusCaseUp = rus.querySelector('.caseUp');
    const rusCaseDown = rus.querySelector('.caseDown');
    const engCaseUp = eng.querySelector('.caseUp');
    const engCaseDown = eng.querySelector('.caseDown');
    if (lang) {
      eng.classList.add('hidden');
      rus.classList.remove('hidden');
      if (caps) {
        rusCaseUp.classList.remove('hidden');
        rusCaseDown.classList.add('hidden');
      } else {
        rusCaseUp.classList.add('hidden');
        rusCaseDown.classList.remove('hidden');
      }
    } else {
      rus.classList.add('hidden');
      eng.classList.remove('hidden');
      if (caps) {
        engCaseUp.classList.remove('hidden');
        engCaseDown.classList.add('hidden');
      } else {
        engCaseUp.classList.add('hidden');
        engCaseDown.classList.remove('hidden');
      }
    }
  }
}

/* Обработчик нажатия клавиш ctrl + shift */
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey) {
    lang = !lang;
    updateKeyboard();
  }
});

/* Обработчик нажатия клавиши CapsLock */
document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') {
    caps = !caps;
    if (caps) {
      capsLock.classList.add('active');
    } else {
      capsLock.classList.remove('active');
    }
    updateKeyboard();
  }
});

/* Обработчик нажатия клавиши ShiftLeft */
document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft') {
    caps = !caps;
    shiftLeft.classList.add('active');
    updateKeyboard();
  }
});
/* Обработчик отпускания клавиши ShiftLeft */
document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft') {
    caps = !caps;
    shiftLeft.classList.remove('active');
    updateKeyboard();
  }
});

/* Обработчик нажатия клавиши ShiftRight */
document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftRight') {
    caps = !caps;
    shiftRight.classList.add('active');
    updateKeyboard();
  }
});
/* Обработчик отпускания клавиши ShiftRight */
document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftRight') {
    caps = !caps;
    shiftRight.classList.remove('active');
    updateKeyboard();
  }
});

/* Обработчики буквенно-цифровых клавиш */
document.addEventListener('keydown', (event) => {
  if (event.code === 'Backquote') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'backquote').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'backquote').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'backquote').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'backquote').engLower;
    }
    backquote.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Backquote') {
    event.preventDefault();
    backquote.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit1') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'digit1').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'digit1').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'digit1').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'digit1').engLower;
    }
    digit1.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit1') {
    event.preventDefault();
    digit1.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit2') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'digit2').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'digit2').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'digit2').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'digit2').engLower;
    }
    digit2.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit2') {
    event.preventDefault();
    digit2.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit3') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'digit3').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'digit3').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'digit3').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'digit3').engLower;
    }
    digit3.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit3') {
    event.preventDefault();
    digit3.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit4') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'digit4').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'digit4').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'digit4').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'digit4').engLower;
    }
    digit4.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit4') {
    event.preventDefault();
    digit4.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit5') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'digit5').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'digit5').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'digit5').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'digit5').engLower;
    }
    digit5.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit5') {
    event.preventDefault();
    digit5.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit6') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'digit6').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'digit6').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'digit6').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'digit6').engLower;
    }
    digit6.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit6') {
    event.preventDefault();
    digit6.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit7') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'digit7').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'digit7').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'digit7').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'digit7').engLower;
    }
    digit7.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit7') {
    event.preventDefault();
    digit7.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit8') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'digit8').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'digit8').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'digit8').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'digit8').engLower;
    }
    digit8.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit8') {
    event.preventDefault();
    digit8.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit9') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'digit9').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'digit9').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'digit9').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'digit9').engLower;
    }
    digit9.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit9') {
    event.preventDefault();
    digit9.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Digit0') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'digit0').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'digit0').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'digit0').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'digit0').engLower;
    }
    digit0.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Digit0') {
    event.preventDefault();
    digit0.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Minus') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'minus').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'minus').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'minus').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'minus').engLower;
    }
    minus.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Minus') {
    event.preventDefault();
    minus.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Equal') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'equal').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'equal').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'equal').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'equal').engLower;
    }
    equal.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Equal') {
    event.preventDefault();
    equal.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyQ') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyQ').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyQ').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyQ').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyQ').engLower;
    }
    keyQ.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyQ') {
    event.preventDefault();
    keyQ.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyW') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyW').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyW').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyW').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyW').engLower;
    }
    keyW.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyW') {
    event.preventDefault();
    keyW.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyE') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyE').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyE').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyE').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyE').engLower;
    }
    keyE.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyE') {
    event.preventDefault();
    keyE.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyR') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyR').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyR').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyR').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyR').engLower;
    }
    keyR.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyR') {
    event.preventDefault();
    keyR.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyT') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyT').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyT').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyT').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyT').engLower;
    }
    keyT.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyT') {
    event.preventDefault();
    keyT.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyY') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyY').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyY').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyY').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyY').engLower;
    }
    keyY.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyY') {
    event.preventDefault();
    keyY.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyU') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyU').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyU').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyU').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyU').engLower;
    }
    keyU.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyU') {
    event.preventDefault();
    keyU.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyI') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyI').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyI').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyI').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyI').engLower;
    }
    keyI.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyI') {
    event.preventDefault();
    keyI.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyO') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyO').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyO').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyO').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyO').engLower;
    }
    keyO.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyO') {
    event.preventDefault();
    keyO.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyP') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyP').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyP').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyP').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyP').engLower;
    }
    keyP.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyP') {
    event.preventDefault();
    keyP.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyA') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyA').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyA').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyA').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyA').engLower;
    }
    keyA.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyA') {
    event.preventDefault();
    keyA.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyS') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyS').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyS').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyS').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyS').engLower;
    }
    keyS.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyS') {
    event.preventDefault();
    keyS.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyD') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyD').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyD').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyD').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyD').engLower;
    }
    keyD.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyD') {
    event.preventDefault();
    keyD.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyF') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyF').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyF').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyF').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyF').engLower;
    }
    keyF.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyF') {
    event.preventDefault();
    keyF.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyG') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyG').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyG').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyG').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyG').engLower;
    }
    keyG.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyG') {
    event.preventDefault();
    keyG.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyH') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyH').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyH').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyH').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyH').engLower;
    }
    keyH.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyH') {
    event.preventDefault();
    keyH.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyJ') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyJ').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyJ').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyJ').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyJ').engLower;
    }
    keyJ.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyJ') {
    event.preventDefault();
    keyJ.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyK') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyK').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyK').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyK').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyK').engLower;
    }
    keyK.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyK') {
    event.preventDefault();
    keyK.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyL') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyL').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyL').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyL').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyL').engLower;
    }
    keyL.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyL') {
    event.preventDefault();
    keyL.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyZ') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyZ').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyZ').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyZ').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyZ').engLower;
    }
    keyZ.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyZ') {
    event.preventDefault();
    keyZ.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyX') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyX').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyX').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyX').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyX').engLower;
    }
    keyX.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyX') {
    event.preventDefault();
    keyX.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyC') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyC').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyC').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyC').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyC').engLower;
    }
    keyC.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyC') {
    event.preventDefault();
    keyC.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyV') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyV').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyV').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyV').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyV').engLower;
    }
    keyV.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyV') {
    event.preventDefault();
    keyV.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyB') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyB').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyB').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyB').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyB').engLower;
    }
    keyB.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyB') {
    event.preventDefault();
    keyB.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyN') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyN').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyN').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyN').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyN').engLower;
    }
    keyN.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyN') {
    event.preventDefault();
    keyN.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyM') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'keyM').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'keyM').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'keyM').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'keyM').engLower;
    }
    keyM.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'KeyM') {
    event.preventDefault();
    keyM.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'BracketLeft') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'bracketLeft').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'bracketLeft').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'bracketLeft').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'bracketLeft').engLower;
    }
    bracketLeft.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'BracketLeft') {
    event.preventDefault();
    bracketLeft.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'BracketRight') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'bracketRight').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'bracketRight').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'bracketRight').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'bracketRight').engLower;
    }
    bracketRight.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'BracketRight') {
    event.preventDefault();
    bracketRight.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Backslash') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'backslash').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'backslash').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'backslash').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'backslash').engLower;
    }
    backslash.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Backslash') {
    event.preventDefault();
    backslash.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Semicolon') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'semicolon').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'semicolon').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'semicolon').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'semicolon').engLower;
    }
    semicolon.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Semicolon') {
    event.preventDefault();
    semicolon.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Quote') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'quote').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'quote').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'quote').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'quote').engLower;
    }
    quote.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Quote') {
    event.preventDefault();
    quote.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Comma') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'comma').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'comma').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'comma').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'comma').engLower;
    }
    comma.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Comma') {
    event.preventDefault();
    comma.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Period') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'period').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'period').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'period').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'period').engLower;
    }
    period.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Period') {
    event.preventDefault();
    period.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Slash') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'slash').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'slash').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'slash').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'slash').engLower;
    }
    slash.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Slash') {
    event.preventDefault();
    slash.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowUp') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'arrowUp').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'arrowUp').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'arrowUp').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'arrowUp').engLower;
    }
    arrowUp.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowUp') {
    event.preventDefault();
    arrowUp.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowDown') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'arrowDown').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'arrowDown').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'arrowDown').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'arrowDown').engLower;
    }
    arrowDown.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowDown') {
    event.preventDefault();
    arrowDown.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'arrowLeft').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'arrowLeft').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'arrowLeft').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'arrowLeft').engLower;
    }
    arrowLeft.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowLeft') {
    event.preventDefault();
    arrowLeft.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowRight') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'arrowRight').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'arrowRight').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'arrowRight').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'arrowRight').engLower;
    }
    arrowRight.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'ArrowRight') {
    event.preventDefault();
    arrowRight.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'space').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'space').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'space').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'space').engLower;
    }
    space.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    event.preventDefault();
    space.classList.remove('active');
  }
});

// "backspace"
// "tab"
// "delete"
// "enter"
// "controlLeft"
// "metaLeft"
// "altLeft"
// "space"
// "altRight"
// "controlRight"
