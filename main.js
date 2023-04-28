/* global document */
/* Массив с клавишами */
const keys = [
  {
    class: 'BackQuote',
    rusLower: 'ё',
    rusUpper: 'Ё',
    engLower: '`',
    engUpper: '~',
  },
  {
    class: 'Digit1',
    rusLower: '1',
    rusUpper: '!',
    engLower: '1',
    engUpper: '!',
  },
  {
    class: 'Digit2',
    rusLower: '2',
    rusUpper: '"',
    engLower: '2',
    engUpper: '@',
  },
  {
    class: 'Digit3',
    rusLower: '3',
    rusUpper: '№',
    engLower: '3',
    engUpper: '#',
  },
  {
    class: 'Digit4',
    rusLower: '4',
    rusUpper: ';',
    engLower: '4',
    engUpper: '$',
  },
  {
    class: 'Digit5',
    rusLower: '5',
    rusUpper: '%',
    engLower: '5',
    engUpper: '%',
  },
  {
    class: 'Digit6',
    rusLower: '6',
    rusUpper: ':',
    engLower: '6',
    engUpper: '^',
  },
  {
    class: 'Digit7',
    rusLower: '7',
    rusUpper: '?',
    engLower: '7',
    engUpper: '&',
  },
  {
    class: 'Digit8',
    rusLower: '8',
    rusUpper: '*',
    engLower: '8',
    engUpper: '*',
  },
  {
    class: 'Digit9',
    rusLower: '9',
    rusUpper: '(',
    engLower: '9',
    engUpper: '(',
  },
  {
    class: 'Digit0',
    rusLower: '0',
    rusUpper: ')',
    engLower: '0',
    engUpper: ')',
  },
  {
    class: 'Minus',
    rusLower: '-',
    rusUpper: '_',
    engLower: '-',
    engUpper: '_',
  },
  {
    class: 'Equal',
    rusLower: '=',
    rusUpper: '+',
    engLower: '=',
    engUpper: '+',
  },
  {
    class: 'BackSpace',
    rusLower: 'BackSpace',
    rusUpper: 'BackSpace',
    engLower: 'BackSpace',
    engUpper: 'BackSpace',
  },
  {
    class: 'Tab',
    rusLower: 'Tab',
    rusUpper: 'Tab',
    engLower: 'Tab',
    engUpper: 'Tab',
  },
  {
    class: 'KeyQ',
    rusLower: 'й',
    rusUpper: 'Й',
    engLower: 'q',
    engUpper: 'Q',
  },
  {
    class: 'KeyW',
    rusLower: 'ц',
    rusUpper: 'Ц',
    engLower: 'w',
    engUpper: 'W',
  },
  {
    class: 'KeyE',
    rusLower: 'у',
    rusUpper: 'У',
    engLower: 'e',
    engUpper: 'E',
  },
  {
    class: 'KeyR',
    rusLower: 'к',
    rusUpper: 'К',
    engLower: 'r',
    engUpper: 'R',
  },
  {
    class: 'KeyT',
    rusLower: 'е',
    rusUpper: 'Е',
    engLower: 't',
    engUpper: 'T',
  },
  {
    class: 'KeyY',
    rusLower: 'н',
    rusUpper: 'Н',
    engLower: 'y',
    engUpper: 'Y',
  },
  {
    class: 'KeyU',
    rusLower: 'г',
    rusUpper: 'Г',
    engLower: 'u',
    engUpper: 'U',
  },
  {
    class: 'KeyI',
    rusLower: 'ш',
    rusUpper: 'Ш',
    engLower: 'i',
    engUpper: 'I',
  },
  {
    class: 'KeyO',
    rusLower: 'щ',
    rusUpper: 'Щ',
    engLower: 'o',
    engUpper: 'O',
  },
  {
    class: 'KeyP',
    rusLower: 'з',
    rusUpper: 'З',
    engLower: 'p',
    engUpper: 'P',
  },
  {
    class: 'BracketLeft',
    rusLower: 'х',
    rusUpper: 'Х',
    engLower: '[',
    engUpper: '{',
  },
  {
    class: 'BracketRight',
    rusLower: 'ъ',
    rusUpper: 'Ъ',
    engLower: ']',
    engUpper: '}',
  },
  {
    class: 'BackSlash',
    rusLower: '\\',
    rusUpper: '/',
    engLower: '\\',
    engUpper: '|',
  },
  {
    class: 'Delete',
    rusLower: 'Del',
    rusUpper: 'Del',
    engLower: 'Del',
    engUpper: 'Del',
  },
  {
    class: 'CapsLock',
    rusLower: 'CapsLock',
    rusUpper: 'CapsLock',
    engLower: 'CapsLock',
    engUpper: 'CapsLock',
  },
  {
    class: 'KeyA',
    rusLower: 'ф',
    rusUpper: 'Ф',
    engLower: 'a',
    engUpper: 'A',
  },
  {
    class: 'KeyS',
    rusLower: 'ы',
    rusUpper: 'Ы',
    engLower: 's',
    engUpper: 'S',
  },
  {
    class: 'KeyD',
    rusLower: 'в',
    rusUpper: 'В',
    engLower: 'd',
    engUpper: 'D',
  },
  {
    class: 'KeyF',
    rusLower: 'а',
    rusUpper: 'А',
    engLower: 'f',
    engUpper: 'F',
  },
  {
    class: 'KeyG',
    rusLower: 'п',
    rusUpper: 'П',
    engLower: 'g',
    engUpper: 'G',
  },
  {
    class: 'KeyH',
    rusLower: 'р',
    rusUpper: 'Р',
    engLower: 'h',
    engUpper: 'H',
  },
  {
    class: 'KeyJ',
    rusLower: 'о',
    rusUpper: 'О',
    engLower: 'j',
    engUpper: 'J',
  },
  {
    class: 'KeyK',
    rusLower: 'л',
    rusUpper: 'Л',
    engLower: 'k',
    engUpper: 'K',
  },
  {
    class: 'KeyL',
    rusLower: 'д',
    rusUpper: 'Д',
    engLower: 'l',
    engUpper: 'L',
  },
  {
    class: 'Semicolon',
    rusLower: 'ж',
    rusUpper: 'Ж',
    engLower: ';',
    engUpper: ':',
  },
  {
    class: 'Quote',
    rusLower: 'э',
    rusUpper: 'Э',
    engLower: "'",
    engUpper: '"',
  },
  {
    class: 'Enter',
    rusLower: 'Enter',
    rusUpper: 'Enter',
    engLower: 'Enter',
    engUpper: 'Enter',
  },
  {
    class: 'ShiftLeft',
    rusLower: 'Shift',
    rusUpper: 'Shift',
    engLower: 'Shift',
    engUpper: 'Shift',
  },
  {
    class: 'KeyZ',
    rusLower: 'я',
    rusUpper: 'Я',
    engLower: 'z',
    engUpper: 'Z',
  },
  {
    class: 'KeyX',
    rusLower: 'ч',
    rusUpper: 'Ч',
    engLower: 'x',
    engUpper: 'X',
  },
  {
    class: 'KeyC',
    rusLower: 'с',
    rusUpper: 'С',
    engLower: 'c',
    engUpper: 'C',
  },
  {
    class: 'KeyV',
    rusLower: 'м',
    rusUpper: 'М',
    engLower: 'v',
    engUpper: 'V',
  },
  {
    class: 'KeyB',
    rusLower: 'и',
    rusUpper: 'И',
    engLower: 'b',
    engUpper: 'B',
  },
  {
    class: 'KeyN',
    rusLower: 'т',
    rusUpper: 'Т',
    engLower: 'n',
    engUpper: 'N',
  },
  {
    class: 'KeyM',
    rusLower: 'ь',
    rusUpper: 'Ь',
    engLower: 'm',
    engUpper: 'M',
  },
  {
    class: 'Comma',
    rusLower: 'б',
    rusUpper: 'Б',
    engLower: ',',
    engUpper: '&lt;',
  },
  {
    class: 'Period',
    rusLower: 'ю',
    rusUpper: 'Ю',
    engLower: '.',
    engUpper: '&gt;>',
  },
  {
    class: 'Slash',
    rusLower: '.',
    rusUpper: ',',
    engLower: '/',
    engUpper: '?',
  },
  {
    class: 'ArrowUp',
    rusLower: '▲',
    rusUpper: '▲',
    engLower: '▲',
    engUpper: '▲',
  },
  {
    class: 'ShiftRight',
    rusLower: 'Shift',
    rusUpper: 'Shift',
    engLower: 'Shift',
    engUpper: 'Shift',
  },
  {
    class: 'ControlLeft',
    rusLower: 'Ctrl',
    rusUpper: 'Ctrl',
    engLower: 'Ctrl',
    engUpper: 'Ctrl',
  },
  {
    class: 'MetaLeft',
    rusLower: 'Win',
    rusUpper: 'Win',
    engLower: 'Win',
    engUpper: 'Win',
  },
  {
    class: 'AltLeft',
    rusLower: 'Alt',
    rusUpper: 'Alt',
    engLower: 'Alt',
    engUpper: 'Alt',
  },
  {
    class: 'Space',
    rusLower: ' ',
    rusUpper: ' ',
    engLower: ' ',
    engUpper: ' ',
  },
  {
    class: 'AltRight',
    rusLower: 'Alt',
    rusUpper: 'Alt',
    engLower: 'Alt',
    engUpper: 'Alt',
  },
  {
    class: 'ArrowLeft',
    rusLower: '◄',
    rusUpper: '◄',
    engLower: '◄',
    engUpper: '◄',
  },
  {
    class: 'ArrowDown',
    rusLower: '▼',
    rusUpper: '▼',
    engLower: '▼',
    engUpper: '▼',
  },
  {
    class: 'ArrowRight',
    rusLower: '►',
    rusUpper: '►',
    engLower: '►',
    engUpper: '►',
  },
  {
    class: 'ControlRight',
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
let lang = false; // false - английский
let caps = false; // false - строчные

/* Извлекаем язык */
/* global localStorage:writable */
const language = localStorage.getItem('language');
if (language !== null) {
  if (language === 'rus') lang = true; // true - русский
} else localStorage.setItem('language', 'eng');

/* Меняем язык */
function saveLanguage() {
  if (lang === false) localStorage.setItem('language', 'eng');
  else localStorage.setItem('language', 'rus');
}

/* Функция создания клавиш и добавления их к родительскому элементу */
keys.forEach((key) => {
  const button = document.createElement('button');
  button.className = key.class;

  const rusSpan = document.createElement('span');
  if (lang) rusSpan.className = 'rus';
  else rusSpan.className = 'rus hidden';

  const rusLowerSpan = document.createElement('span');
  if (caps) rusLowerSpan.className = 'caseDown hidden';
  else rusLowerSpan.className = 'caseDown';

  rusLowerSpan.textContent = key.rusLower;
  rusSpan.appendChild(rusLowerSpan);

  const rusUpperSpan = document.createElement('span');
  if (caps) rusUpperSpan.className = 'caseUp';
  else rusUpperSpan.className = 'caseUp hidden';

  rusUpperSpan.textContent = key.rusUpper;
  rusSpan.appendChild(rusUpperSpan);

  button.appendChild(rusSpan);

  const engSpan = document.createElement('span');
  if (lang) engSpan.className = 'eng hidden';
  else engSpan.className = 'eng';

  const engLowerSpan = document.createElement('span');
  if (caps) engLowerSpan.className = 'caseDown hidden';
  else engLowerSpan.className = 'caseDown';

  engLowerSpan.textContent = key.engLower;
  engSpan.appendChild(engLowerSpan);

  const engUpperSpan = document.createElement('span');
  if (caps) engUpperSpan.className = 'caseUp';
  else engUpperSpan.className = 'caseUp hidden';

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
p2.innerHTML = 'To switch the language use the combination <code>ctrl</code> + <code>shift</code>';

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

const CapsLock = document.querySelector('.CapsLock');
const ShiftLeft = document.querySelector('.ShiftLeft');
const ShiftRight = document.querySelector('.ShiftRight');
const BackQuote = document.querySelector('.BackQuote');
const Digit1 = document.querySelector('.Digit1');
const Digit2 = document.querySelector('.Digit2');
const Digit3 = document.querySelector('.Digit3');
const Digit4 = document.querySelector('.Digit4');
const Digit5 = document.querySelector('.Digit5');
const Digit6 = document.querySelector('.Digit6');
const Digit7 = document.querySelector('.Digit7');
const Digit8 = document.querySelector('.Digit8');
const Digit9 = document.querySelector('.Digit9');
const Digit0 = document.querySelector('.Digit0');
const Minus = document.querySelector('.Minus');
const Equal = document.querySelector('.Equal');
const BackSpace = document.querySelector('.BackSpace');
const Tab = document.querySelector('.Tab');
const KeyQ = document.querySelector('.KeyQ');
const KeyW = document.querySelector('.KeyW');
const KeyE = document.querySelector('.KeyE');
const KeyR = document.querySelector('.KeyR');
const KeyT = document.querySelector('.KeyT');
const KeyY = document.querySelector('.KeyY');
const KeyU = document.querySelector('.KeyU');
const KeyI = document.querySelector('.KeyI');
const KeyO = document.querySelector('.KeyO');
const KeyP = document.querySelector('.KeyP');
const BracketLeft = document.querySelector('.BracketLeft');
const BracketRight = document.querySelector('.BracketRight');
const BackSlash = document.querySelector('.BackSlash');
const KeyDelete = document.querySelector('.Delete');
const KeyA = document.querySelector('.KeyA');
const KeyS = document.querySelector('.KeyS');
const KeyD = document.querySelector('.KeyD');
const KeyF = document.querySelector('.KeyF');
const KeyG = document.querySelector('.KeyG');
const KeyH = document.querySelector('.KeyH');
const KeyJ = document.querySelector('.KeyJ');
const KeyK = document.querySelector('.KeyK');
const KeyL = document.querySelector('.KeyL');
const Semicolon = document.querySelector('.Semicolon');
const Quote = document.querySelector('.Quote');
const Enter = document.querySelector('.Enter');
const KeyZ = document.querySelector('.KeyZ');
const KeyX = document.querySelector('.KeyX');
const KeyC = document.querySelector('.KeyC');
const KeyV = document.querySelector('.KeyV');
const KeyB = document.querySelector('.KeyB');
const KeyN = document.querySelector('.KeyN');
const KeyM = document.querySelector('.KeyM');
const Comma = document.querySelector('.Comma');
const Period = document.querySelector('.Period');
const Slash = document.querySelector('.Slash');
const ArrowUp = document.querySelector('.ArrowUp');
const ControlLeft = document.querySelector('.ControlLeft');
const MetaLeft = document.querySelector('.MetaLeft');
const AltLeft = document.querySelector('.AltLeft');
const Space = document.querySelector('.Space');
const AltRight = document.querySelector('.AltRight');
const ArrowLeft = document.querySelector('.ArrowLeft');
const ArrowDown = document.querySelector('.ArrowDown');
const ArrowRight = document.querySelector('.ArrowRight');
const ControlRight = document.querySelector('.ControlRight');

/* Функция обновления внешнего вида клавиатуры */
function updateKeyboard() {
  for (let i = 0; i < buttons.length; i += 1) {
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

/* Обработчик нажатия клавиш */
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey) {
    event.preventDefault();
    lang = !lang;
    updateKeyboard();
    saveLanguage();
  }
  if (event.code === 'CapsLock') {
    caps = !caps;
    if (caps) CapsLock.classList.add('active');
    else CapsLock.classList.remove('active');
    updateKeyboard();
  }
  if (event.code === 'ShiftLeft') {
    caps = !caps;
    ShiftLeft.classList.add('active');
    updateKeyboard();
  }
  if (event.code === 'ShiftRight') {
    caps = !caps;
    ShiftRight.classList.add('active');
    updateKeyboard();
  }
  if (event.code === 'Backquote') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'BackQuote').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'BackQuote').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'BackQuote').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'BackQuote').engLower;
    }
    BackQuote.classList.add('active');
  }
  if (event.code === 'Digit1') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Digit1').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Digit1').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit1').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit1').engLower;
    }
    Digit1.classList.add('active');
  }
  if (event.code === 'Digit2') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Digit2').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Digit2').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit2').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit2').engLower;
    }
    Digit2.classList.add('active');
  }
  if (event.code === 'Digit3') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Digit3').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Digit3').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit3').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit3').engLower;
    }
    Digit3.classList.add('active');
  }
  if (event.code === 'Digit4') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Digit4').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Digit4').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit4').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit4').engLower;
    }
    Digit4.classList.add('active');
  }
  if (event.code === 'Digit5') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Digit5').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Digit5').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit5').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit5').engLower;
    }
    Digit5.classList.add('active');
  }
  if (event.code === 'Digit6') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Digit6').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Digit6').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit6').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit6').engLower;
    }
    Digit6.classList.add('active');
  }
  if (event.code === 'Digit7') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Digit7').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Digit7').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit7').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit7').engLower;
    }
    Digit7.classList.add('active');
  }
  if (event.code === 'Digit8') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Digit8').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Digit8').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit8').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit8').engLower;
    }
    Digit8.classList.add('active');
  }
  if (event.code === 'Digit9') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Digit9').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Digit9').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit9').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit9').engLower;
    }
    Digit9.classList.add('active');
  }
  if (event.code === 'Digit0') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Digit0').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Digit0').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit0').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit0').engLower;
    }
    Digit0.classList.add('active');
  }
  if (event.code === 'Minus') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Minus').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Minus').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Minus').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Minus').engLower;
    }
    Minus.classList.add('active');
  }
  if (event.code === 'Equal') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Equal').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Equal').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Equal').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Equal').engLower;
    }
    Equal.classList.add('active');
  }
  if (event.code === 'KeyQ') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyQ').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyQ').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyQ').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyQ').engLower;
    }
    KeyQ.classList.add('active');
  }
  if (event.code === 'KeyW') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyW').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyW').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyW').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyW').engLower;
    }
    KeyW.classList.add('active');
  }
  if (event.code === 'KeyE') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyE').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyE').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyE').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyE').engLower;
    }
    KeyE.classList.add('active');
  }
  if (event.code === 'KeyR') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyR').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyR').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyR').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyR').engLower;
    }
    KeyR.classList.add('active');
  }
  if (event.code === 'KeyT') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyT').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyT').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyT').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyT').engLower;
    }
    KeyT.classList.add('active');
  }
  if (event.code === 'KeyY') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyY').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyY').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyY').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyY').engLower;
    }
    KeyY.classList.add('active');
  }
  if (event.code === 'KeyU') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyU').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyU').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyU').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyU').engLower;
    }
    KeyU.classList.add('active');
  }
  if (event.code === 'KeyI') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyI').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyI').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyI').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyI').engLower;
    }
    KeyI.classList.add('active');
  }
  if (event.code === 'KeyO') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyO').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyO').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyO').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyO').engLower;
    }
    KeyO.classList.add('active');
  }
  if (event.code === 'KeyP') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyP').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyP').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyP').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyP').engLower;
    }
    KeyP.classList.add('active');
  }
  if (event.code === 'KeyA') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyA').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyA').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyA').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyA').engLower;
    }
    KeyA.classList.add('active');
  }
  if (event.code === 'KeyS') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyS').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyS').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyS').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyS').engLower;
    }
    KeyS.classList.add('active');
  }
  if (event.code === 'KeyD') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyD').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyD').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyD').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyD').engLower;
    }
    KeyD.classList.add('active');
  }
  if (event.code === 'KeyF') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyF').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyF').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyF').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyF').engLower;
    }
    KeyF.classList.add('active');
  }
  if (event.code === 'KeyG') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyG').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyG').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyG').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyG').engLower;
    }
    KeyG.classList.add('active');
  }
  if (event.code === 'KeyH') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyH').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyH').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyH').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyH').engLower;
    }
    KeyH.classList.add('active');
  }
  if (event.code === 'KeyJ') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyJ').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyJ').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyJ').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyJ').engLower;
    }
    KeyJ.classList.add('active');
  }
  if (event.code === 'KeyK') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyK').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyK').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyK').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyK').engLower;
    }
    KeyK.classList.add('active');
  }
  if (event.code === 'KeyL') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyL').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyL').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyL').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyL').engLower;
    }
    KeyL.classList.add('active');
  }
  if (event.code === 'KeyZ') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyZ').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyZ').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyZ').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyZ').engLower;
    }
    KeyZ.classList.add('active');
  }
  if (event.code === 'KeyX') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyX').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyX').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyX').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyX').engLower;
    }
    KeyX.classList.add('active');
  }
  if (event.code === 'KeyC') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyC').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyC').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyC').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyC').engLower;
    }
    KeyC.classList.add('active');
  }
  if (event.code === 'KeyV') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyV').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyV').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyV').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyV').engLower;
    }
    KeyV.classList.add('active');
  }
  if (event.code === 'KeyB') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyB').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyB').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyB').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyB').engLower;
    }
    KeyB.classList.add('active');
  }
  if (event.code === 'KeyN') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyN').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyN').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyN').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyN').engLower;
    }
    KeyN.classList.add('active');
  }
  if (event.code === 'KeyM') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'KeyM').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'KeyM').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyM').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyM').engLower;
    }
    KeyM.classList.add('active');
  }
  if (event.code === 'BracketLeft') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'BracketLeft').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'BracketLeft').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'BracketLeft').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'BracketLeft').engLower;
    }
    BracketLeft.classList.add('active');
  }
  if (event.code === 'BracketRight') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'BracketRight').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'BracketRight').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'BracketRight').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'BracketRight').engLower;
    }
    BracketRight.classList.add('active');
  }
  if (event.code === 'BackSlash') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'BackSlash').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'BackSlash').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'BackSlash').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'BackSlash').engLower;
    }
    BackSlash.classList.add('active');
  }
  if (event.code === 'Semicolon') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Semicolon').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Semicolon').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Semicolon').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Semicolon').engLower;
    }
    Semicolon.classList.add('active');
  }
  if (event.code === 'Quote') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Quote').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Quote').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Quote').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Quote').engLower;
    }
    Quote.classList.add('active');
  }
  if (event.code === 'Comma') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Comma').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Comma').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Comma').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Comma').engLower;
    }
    Comma.classList.add('active');
  }
  if (event.code === 'Period') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Period').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Period').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Period').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Period').engLower;
    }
    Period.classList.add('active');
  }
  if (event.code === 'Slash') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'Slash').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'Slash').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'Slash').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Slash').engLower;
    }
    Slash.classList.add('active');
  }
  if (event.code === 'ArrowUp') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'ArrowUp').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'ArrowUp').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'ArrowUp').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'ArrowUp').engLower;
    }
    ArrowUp.classList.add('active');
  }
  if (event.code === 'ArrowDown') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'ArrowDown').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'ArrowDown').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'ArrowDown').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'ArrowDown').engLower;
    }
    ArrowDown.classList.add('active');
  }
  if (event.code === 'ArrowLeft') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'ArrowLeft').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'ArrowLeft').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'ArrowLeft').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'ArrowLeft').engLower;
    }
    ArrowLeft.classList.add('active');
  }
  if (event.code === 'ArrowRight') {
    event.preventDefault();
    if (lang) {
      if (caps) {
        textarea.value += keys.find((key) => key.class === 'ArrowRight').rusUpper;
      } else {
        textarea.value += keys.find((key) => key.class === 'ArrowRight').rusLower;
      }
    } else if (caps) {
      textarea.value += keys.find((key) => key.class === 'ArrowRight').engUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'ArrowRight').engLower;
    }
    ArrowRight.classList.add('active');
  }
  if (event.code === 'Space') {
    event.preventDefault();
    textarea.value += ' ';
    Space.classList.add('active');
  }
  if (event.code === 'Backspace') {
    event.preventDefault();
    const cursorPosition = textarea.selectionStart;
    if (cursorPosition > 0) {
      const textBeforeCursor = textarea.value.slice(0, cursorPosition);
      const textAfterCursor = textarea.value.slice(cursorPosition);
      const updatedText = textBeforeCursor.slice(0, -1) + textAfterCursor;
      textarea.value = updatedText;
      textarea.selectionStart = cursorPosition - 1;
      textarea.selectionEnd = cursorPosition - 1;
    }
    BackSpace.classList.add('active');
  }
  if (event.code === 'Tab') {
    event.preventDefault();
    textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, 'end');
    Tab.classList.add('active');
  }
  if (event.code === 'Delete') {
    event.preventDefault();
    const start = textarea.selectionStart;
    textarea.value = textarea.value.slice(0, start) + textarea.value.slice(start + 1);
    textarea.setSelectionRange(start, start);
    KeyDelete.classList.add('active');
  }
  if (event.code === 'Enter') {
    event.preventDefault();
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    textarea.value = `${textarea.value.slice(0, start)}\n${textarea.value.slice(end)}`;
    textarea.setSelectionRange(start + 1, start + 1);
    Enter.classList.add('active');
  }
  if (event.code === 'MetaLeft') {
    MetaLeft.classList.add('active');
  }
  if (event.code === 'ControlLeft') {
    ControlLeft.classList.add('active');
  }
  if (event.code === 'AltLeft') {
    event.preventDefault();
    AltLeft.classList.add('active');
  }
  if (event.code === 'AltRight') {
    event.preventDefault();
    AltRight.classList.add('active');
  }
  if (event.code === 'ControlRight') {
    ControlRight.classList.add('active');
  }
});
document.addEventListener('keyup', (event) => {
  if (event.ctrlKey && event.shiftKey) {
    event.preventDefault();
  }
  if (event.code === 'CapsLock') {
    event.preventDefault();
  }
  if (event.code === 'ShiftLeft') {
    caps = !caps;
    ShiftLeft.classList.remove('active');
    updateKeyboard();
  }
  if (event.code === 'ShiftRight') {
    caps = !caps;
    ShiftRight.classList.remove('active');
    updateKeyboard();
  }
  if (event.code === 'BackQuote') {
    event.preventDefault();
    BackQuote.classList.remove('active');
  }
  if (event.code === 'Digit1') {
    event.preventDefault();
    Digit1.classList.remove('active');
  }
  if (event.code === 'Digit2') {
    event.preventDefault();
    Digit2.classList.remove('active');
  }
  if (event.code === 'Digit3') {
    event.preventDefault();
    Digit3.classList.remove('active');
  }
  if (event.code === 'Digit4') {
    event.preventDefault();
    Digit4.classList.remove('active');
  }
  if (event.code === 'Digit5') {
    event.preventDefault();
    Digit5.classList.remove('active');
  }
  if (event.code === 'Digit6') {
    event.preventDefault();
    Digit6.classList.remove('active');
  }
  if (event.code === 'Digit7') {
    event.preventDefault();
    Digit7.classList.remove('active');
  }
  if (event.code === 'Digit8') {
    event.preventDefault();
    Digit8.classList.remove('active');
  }
  if (event.code === 'Digit9') {
    event.preventDefault();
    Digit9.classList.remove('active');
  }
  if (event.code === 'Digit0') {
    event.preventDefault();
    Digit0.classList.remove('active');
  }
  if (event.code === 'Minus') {
    event.preventDefault();
    Minus.classList.remove('active');
  }
  if (event.code === 'Equal') {
    event.preventDefault();
    Equal.classList.remove('active');
  }
  if (event.code === 'KeyQ') {
    event.preventDefault();
    KeyQ.classList.remove('active');
  }
  if (event.code === 'KeyW') {
    event.preventDefault();
    KeyW.classList.remove('active');
  }
  if (event.code === 'KeyE') {
    event.preventDefault();
    KeyE.classList.remove('active');
  }
  if (event.code === 'KeyR') {
    event.preventDefault();
    KeyR.classList.remove('active');
  }
  if (event.code === 'KeyT') {
    event.preventDefault();
    KeyT.classList.remove('active');
  }
  if (event.code === 'KeyY') {
    event.preventDefault();
    KeyY.classList.remove('active');
  }
  if (event.code === 'KeyU') {
    event.preventDefault();
    KeyU.classList.remove('active');
  }
  if (event.code === 'KeyI') {
    event.preventDefault();
    KeyI.classList.remove('active');
  }
  if (event.code === 'KeyO') {
    event.preventDefault();
    KeyO.classList.remove('active');
  }
  if (event.code === 'KeyP') {
    event.preventDefault();
    KeyP.classList.remove('active');
  }
  if (event.code === 'KeyA') {
    event.preventDefault();
    KeyA.classList.remove('active');
  }
  if (event.code === 'KeyS') {
    event.preventDefault();
    KeyS.classList.remove('active');
  }
  if (event.code === 'KeyD') {
    event.preventDefault();
    KeyD.classList.remove('active');
  }
  if (event.code === 'KeyF') {
    event.preventDefault();
    KeyF.classList.remove('active');
  }
  if (event.code === 'KeyG') {
    event.preventDefault();
    KeyG.classList.remove('active');
  }
  if (event.code === 'KeyH') {
    event.preventDefault();
    KeyH.classList.remove('active');
  }
  if (event.code === 'KeyJ') {
    event.preventDefault();
    KeyJ.classList.remove('active');
  }
  if (event.code === 'KeyK') {
    event.preventDefault();
    KeyK.classList.remove('active');
  }
  if (event.code === 'KeyL') {
    event.preventDefault();
    KeyL.classList.remove('active');
  }
  if (event.code === 'KeyZ') {
    event.preventDefault();
    KeyZ.classList.remove('active');
  }
  if (event.code === 'KeyX') {
    event.preventDefault();
    KeyX.classList.remove('active');
  }
  if (event.code === 'KeyC') {
    event.preventDefault();
    KeyC.classList.remove('active');
  }
  if (event.code === 'KeyV') {
    event.preventDefault();
    KeyV.classList.remove('active');
  }
  if (event.code === 'KeyB') {
    event.preventDefault();
    KeyB.classList.remove('active');
  }
  if (event.code === 'KeyN') {
    event.preventDefault();
    KeyN.classList.remove('active');
  }
  if (event.code === 'KeyM') {
    event.preventDefault();
    KeyM.classList.remove('active');
  }
  if (event.code === 'BracketLeft') {
    event.preventDefault();
    BracketLeft.classList.remove('active');
  }
  if (event.code === 'BracketRight') {
    event.preventDefault();
    BracketRight.classList.remove('active');
  }
  if (event.code === 'BackSlash') {
    event.preventDefault();
    BackSlash.classList.remove('active');
  }
  if (event.code === 'Semicolon') {
    event.preventDefault();
    Semicolon.classList.remove('active');
  }
  if (event.code === 'Quote') {
    event.preventDefault();
    Quote.classList.remove('active');
  }
  if (event.code === 'Comma') {
    event.preventDefault();
    Comma.classList.remove('active');
  }
  if (event.code === 'Period') {
    event.preventDefault();
    Period.classList.remove('active');
  }
  if (event.code === 'Slash') {
    event.preventDefault();
    Slash.classList.remove('active');
  }
  if (event.code === 'ArrowUp') {
    event.preventDefault();
    ArrowUp.classList.remove('active');
  }
  if (event.code === 'ArrowDown') {
    event.preventDefault();
    ArrowDown.classList.remove('active');
  }
  if (event.code === 'ArrowLeft') {
    event.preventDefault();
    ArrowLeft.classList.remove('active');
  }
  if (event.code === 'ArrowRight') {
    event.preventDefault();
    ArrowRight.classList.remove('active');
  }
  if (event.code === 'Space') {
    event.preventDefault();
    Space.classList.remove('active');
  }
  if (event.code === 'Backspace') {
    event.preventDefault();
    BackSpace.classList.remove('active');
  }
  if (event.code === 'Tab') {
    event.preventDefault();
    Tab.classList.remove('active');
  }
  if (event.code === 'Delete') {
    event.preventDefault();
    KeyDelete.classList.remove('active');
  }
  if (event.code === 'Enter') {
    event.preventDefault();
    Enter.classList.remove('active');
  }
  if (event.code === 'MetaLeft') {
    MetaLeft.classList.remove('active');
  }
  if (event.code === 'ControlLeft') {
    ControlLeft.classList.remove('active');
  }
  if (event.code === 'AltLeft') {
    event.preventDefault();
    AltLeft.classList.remove('active');
  }
  if (event.code === 'AltRight') {
    event.preventDefault();
    AltRight.classList.remove('active');
  }
  if (event.code === 'ControlRight') {
    ControlRight.classList.remove('active');
  }
});

/* Обработчики мыши */
BackQuote.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'BackQuote').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'BackQuote').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'BackQuote').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'BackQuote').engLower;
  }
  BackQuote.classList.add('active');
});
BackQuote.addEventListener('mouseup', () => {
  BackQuote.classList.remove('active');
});

Digit1.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit1').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit1').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Digit1').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Digit1').engLower;
  }
  Digit1.classList.add('active');
});
Digit1.addEventListener('mouseup', () => {
  Digit1.classList.remove('active');
});

Digit2.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit2').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit2').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Digit2').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Digit2').engLower;
  }
  Digit2.classList.add('active');
});
Digit2.addEventListener('mouseup', () => {
  Digit2.classList.remove('active');
});

Digit3.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit3').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit3').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Digit3').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Digit3').engLower;
  }
  Digit3.classList.add('active');
});
Digit3.addEventListener('mouseup', () => {
  Digit3.classList.remove('active');
});

Digit4.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit4').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit4').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Digit4').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Digit4').engLower;
  }
  Digit4.classList.add('active');
});
Digit4.addEventListener('mouseup', () => {
  Digit4.classList.remove('active');
});

Digit5.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit5').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit5').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Digit5').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Digit5').engLower;
  }
  Digit5.classList.add('active');
});
Digit5.addEventListener('mouseup', () => {
  Digit5.classList.remove('active');
});

Digit6.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit6').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit6').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Digit6').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Digit6').engLower;
  }
  Digit6.classList.add('active');
});
Digit6.addEventListener('mouseup', () => {
  Digit6.classList.remove('active');
});

Digit7.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit7').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit7').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Digit7').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Digit7').engLower;
  }
  Digit7.classList.add('active');
});
Digit7.addEventListener('mouseup', () => {
  Digit7.classList.remove('active');
});

Digit8.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit8').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit8').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Digit8').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Digit8').engLower;
  }
  Digit8.classList.add('active');
});
Digit8.addEventListener('mouseup', () => {
  Digit8.classList.remove('active');
});

Digit9.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit9').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit9').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Digit9').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Digit9').engLower;
  }
  Digit9.classList.add('active');
});
Digit9.addEventListener('mouseup', () => {
  Digit9.classList.remove('active');
});

Digit0.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Digit0').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Digit0').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Digit0').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Digit0').engLower;
  }
  Digit0.classList.add('active');
});
Digit0.addEventListener('mouseup', () => {
  Digit0.classList.remove('active');
});

Minus.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Minus').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Minus').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Minus').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Minus').engLower;
  }
  Minus.classList.add('active');
});
Minus.addEventListener('mouseup', () => {
  Minus.classList.remove('active');
});

Equal.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Equal').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Equal').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Equal').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Equal').engLower;
  }
  Equal.classList.add('active');
});
Equal.addEventListener('mouseup', () => {
  Equal.classList.remove('active');
});

KeyQ.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyQ').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyQ').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyQ').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyQ').engLower;
  }
  KeyQ.classList.add('active');
});
KeyQ.addEventListener('mouseup', () => {
  KeyQ.classList.remove('active');
});

KeyW.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyW').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyW').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyW').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyW').engLower;
  }
  KeyW.classList.add('active');
});
KeyW.addEventListener('mouseup', () => {
  KeyW.classList.remove('active');
});

KeyE.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyE').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyE').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyE').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyE').engLower;
  }
  KeyE.classList.add('active');
});
KeyE.addEventListener('mouseup', () => {
  KeyE.classList.remove('active');
});

KeyR.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyR').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyR').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyR').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyR').engLower;
  }
  KeyR.classList.add('active');
});
KeyR.addEventListener('mouseup', () => {
  KeyR.classList.remove('active');
});

KeyT.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyT').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyT').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyT').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyT').engLower;
  }
  KeyT.classList.add('active');
});
KeyT.addEventListener('mouseup', () => {
  KeyT.classList.remove('active');
});

KeyY.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyY').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyY').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyY').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyY').engLower;
  }
  KeyY.classList.add('active');
});
KeyY.addEventListener('mouseup', () => {
  KeyY.classList.remove('active');
});

KeyU.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyU').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyU').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyU').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyU').engLower;
  }
  KeyU.classList.add('active');
});
KeyU.addEventListener('mouseup', () => {
  KeyU.classList.remove('active');
});

KeyI.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyI').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyI').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyI').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyI').engLower;
  }
  KeyI.classList.add('active');
});
KeyI.addEventListener('mouseup', () => {
  KeyI.classList.remove('active');
});

KeyO.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyO').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyO').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyO').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyO').engLower;
  }
  KeyO.classList.add('active');
});
KeyO.addEventListener('mouseup', () => {
  KeyO.classList.remove('active');
});

KeyP.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyP').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyP').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyP').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyP').engLower;
  }
  KeyP.classList.add('active');
});
KeyP.addEventListener('mouseup', () => {
  KeyP.classList.remove('active');
});

BracketLeft.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'BracketLeft').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'BracketLeft').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'BracketLeft').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'BracketLeft').engLower;
  }
  BracketLeft.classList.add('active');
});
BracketLeft.addEventListener('mouseup', () => {
  BracketLeft.classList.remove('active');
});
BracketRight.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'BracketRight').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'BracketRight').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'BracketRight').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'BracketRight').engLower;
  }
  BracketRight.classList.add('active');
});
BracketRight.addEventListener('mouseup', () => {
  BracketRight.classList.remove('active');
});

BackSlash.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'BackSlash').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'BackSlash').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'BackSlash').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'BackSlash').engLower;
  }
  BackSlash.classList.add('active');
});
BackSlash.addEventListener('mouseup', () => {
  BackSlash.classList.remove('active');
});

KeyA.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyA').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyA').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyA').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyA').engLower;
  }
  KeyA.classList.add('active');
});
KeyA.addEventListener('mouseup', () => {
  KeyA.classList.remove('active');
});

KeyS.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyS').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyS').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyS').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyS').engLower;
  }
  KeyS.classList.add('active');
});
KeyS.addEventListener('mouseup', () => {
  KeyS.classList.remove('active');
});

KeyD.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyD').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyD').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyD').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyD').engLower;
  }
  KeyD.classList.add('active');
});
KeyD.addEventListener('mouseup', () => {
  KeyD.classList.remove('active');
});

KeyF.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyF').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyF').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyF').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyF').engLower;
  }
  KeyF.classList.add('active');
});
KeyF.addEventListener('mouseup', () => {
  KeyF.classList.remove('active');
});

KeyG.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyG').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyG').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyG').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyG').engLower;
  }
  KeyG.classList.add('active');
});
KeyG.addEventListener('mouseup', () => {
  KeyG.classList.remove('active');
});

KeyH.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyH').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyH').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyH').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyH').engLower;
  }
  KeyH.classList.add('active');
});
KeyH.addEventListener('mouseup', () => {
  KeyH.classList.remove('active');
});

KeyJ.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyJ').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyJ').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyJ').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyJ').engLower;
  }
  KeyJ.classList.add('active');
});
KeyJ.addEventListener('mouseup', () => {
  KeyJ.classList.remove('active');
});

KeyK.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyK').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyK').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyK').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyK').engLower;
  }
  KeyK.classList.add('active');
});
KeyK.addEventListener('mouseup', () => {
  KeyK.classList.remove('active');
});

KeyL.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyL').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyL').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyL').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyL').engLower;
  }
  KeyL.classList.add('active');
});
KeyL.addEventListener('mouseup', () => {
  KeyL.classList.remove('active');
});

Semicolon.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Semicolon').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Semicolon').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Semicolon').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Semicolon').engLower;
  }
  Semicolon.classList.add('active');
});
Semicolon.addEventListener('mouseup', () => {
  Semicolon.classList.remove('active');
});

Quote.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Quote').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Quote').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Quote').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Quote').engLower;
  }
  Quote.classList.add('active');
});
Quote.addEventListener('mouseup', () => {
  Quote.classList.remove('active');
});

KeyZ.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyZ').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyZ').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyZ').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyZ').engLower;
  }
  KeyZ.classList.add('active');
});
KeyZ.addEventListener('mouseup', () => {
  KeyZ.classList.remove('active');
});

KeyX.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyX').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyX').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyX').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyX').engLower;
  }
  KeyX.classList.add('active');
});
KeyX.addEventListener('mouseup', () => {
  KeyX.classList.remove('active');
});

KeyC.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyC').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyC').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyC').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyC').engLower;
  }
  KeyC.classList.add('active');
});
KeyC.addEventListener('mouseup', () => {
  KeyC.classList.remove('active');
});

KeyV.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyV').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyV').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyV').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyV').engLower;
  }
  KeyV.classList.add('active');
});
KeyV.addEventListener('mouseup', () => {
  KeyV.classList.remove('active');
});

KeyB.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyB').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyB').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyB').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyB').engLower;
  }
  KeyB.classList.add('active');
});
KeyB.addEventListener('mouseup', () => {
  KeyB.classList.remove('active');
});

KeyN.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyN').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyN').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyN').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyN').engLower;
  }
  KeyN.classList.add('active');
});
KeyN.addEventListener('mouseup', () => {
  KeyN.classList.remove('active');
});

KeyM.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'KeyM').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'KeyM').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'KeyM').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'KeyM').engLower;
  }
  KeyM.classList.add('active');
});
KeyM.addEventListener('mouseup', () => {
  KeyM.classList.remove('active');
});

Comma.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Comma').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Comma').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Comma').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Comma').engLower;
  }
  Comma.classList.add('active');
});
document.addEventListener('mouseup', () => {
  Comma.classList.remove('active');
});

Period.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Period').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Period').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Period').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Period').engLower;
  }
  Period.classList.add('active');
});
Period.addEventListener('mouseup', () => {
  Period.classList.remove('active');
});

Slash.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'Slash').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'Slash').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'Slash').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'Slash').engLower;
  }
  Slash.classList.add('active');
});
Slash.addEventListener('mouseup', () => {
  Slash.classList.remove('active');
});

ArrowUp.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'ArrowUp').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'ArrowUp').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'ArrowUp').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'ArrowUp').engLower;
  }
  ArrowUp.classList.add('active');
});
ArrowUp.addEventListener('mouseup', () => {
  ArrowUp.classList.remove('active');
});

ArrowLeft.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'ArrowLeft').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'ArrowLeft').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'ArrowLeft').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'ArrowLeft').engLower;
  }
  ArrowLeft.classList.add('active');
});
ArrowLeft.addEventListener('mouseup', () => {
  ArrowLeft.classList.remove('active');
});

ArrowDown.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'ArrowDown').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'ArrowDown').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'ArrowDown').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'ArrowDown').engLower;
  }
  ArrowDown.classList.add('active');
});
ArrowDown.addEventListener('mouseup', () => {
  ArrowDown.classList.remove('active');
});

ArrowRight.addEventListener('mousedown', () => {
  if (lang) {
    if (caps) {
      textarea.value += keys.find((key) => key.class === 'ArrowRight').rusUpper;
    } else {
      textarea.value += keys.find((key) => key.class === 'ArrowRight').rusLower;
    }
  } else if (caps) {
    textarea.value += keys.find((key) => key.class === 'ArrowRight').engUpper;
  } else {
    textarea.value += keys.find((key) => key.class === 'ArrowRight').engLower;
  }
  ArrowRight.classList.add('active');
});
ArrowRight.addEventListener('mouseup', () => {
  ArrowRight.classList.remove('active');
});

Space.addEventListener('mousedown', () => {
  textarea.value += ' ';
  Space.classList.add('active');
});
Space.addEventListener('mouseup', () => {
  Space.classList.remove('active');
});

CapsLock.addEventListener('mousedown', () => {
  caps = !caps;
  if (caps) CapsLock.classList.add('active');
  else CapsLock.classList.remove('active');
  updateKeyboard();
});

ShiftLeft.addEventListener('mousedown', () => {
  caps = !caps;
  ShiftLeft.classList.add('active');
  updateKeyboard();
});
ShiftLeft.addEventListener('mouseup', () => {
  caps = !caps;
  ShiftLeft.classList.remove('active');
  updateKeyboard();
});

ShiftRight.addEventListener('mousedown', () => {
  caps = !caps;
  ShiftRight.classList.add('active');
  updateKeyboard();
});
ShiftRight.addEventListener('mouseup', () => {
  caps = !caps;
  ShiftRight.classList.remove('active');
  updateKeyboard();
});

BackSpace.addEventListener('mousedown', () => {
  const cursorPosition = textarea.selectionStart;
  if (cursorPosition > 0) {
    const textBeforeCursor = textarea.value.slice(0, cursorPosition);
    const textAfterCursor = textarea.value.slice(cursorPosition);
    const updatedText = textBeforeCursor.slice(0, -1) + textAfterCursor;
    textarea.value = updatedText;
    textarea.selectionStart = cursorPosition - 1;
    textarea.selectionEnd = cursorPosition - 1;
  }
});
BackSpace.addEventListener('mouseup', () => {
  BackSpace.classList.remove('active');
});

Tab.addEventListener('mousedown', () => {
  textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, 'end');
  Tab.classList.add('active');
});
Tab.addEventListener('mouseup', () => {
  Tab.classList.remove('active');
});

KeyDelete.addEventListener('mousedown', () => {
  const start = textarea.selectionStart;
  textarea.value = textarea.value.slice(0, start) + textarea.value.slice(start + 1);
  textarea.setSelectionRange(start, start);
  KeyDelete.classList.add('active');
});
KeyDelete.addEventListener('mouseup', () => {
  KeyDelete.classList.remove('active');
});

Enter.addEventListener('mousedown', () => {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  textarea.value = `${textarea.value.slice(0, start)}\n${textarea.value.slice(end)}`;
  textarea.setSelectionRange(start + 1, start + 1);
  Enter.classList.add('active');
});
Enter.addEventListener('mouseup', () => {
  Enter.classList.remove('active');
});

MetaLeft.addEventListener('mousedown', () => {
  MetaLeft.classList.add('active');
});
MetaLeft.addEventListener('mouseup', () => {
  MetaLeft.classList.remove('active');
});

ControlLeft.addEventListener('mousedown', () => {
  ControlLeft.classList.add('active');
});
ControlLeft.addEventListener('mouseup', () => {
  ControlLeft.classList.remove('active');
});

AltLeft.addEventListener('mousedown', () => {
  AltLeft.classList.add('active');
});
AltLeft.addEventListener('mouseup', () => {
  AltLeft.classList.remove('active');
});

AltRight.addEventListener('mousedown', () => {
  AltRight.classList.add('active');
});
AltRight.addEventListener('mouseup', () => {
  AltRight.classList.remove('active');
});

ControlRight.addEventListener('mousedown', () => {
  ControlRight.classList.add('active');
});
ControlRight.addEventListener('mouseup', () => {
  ControlRight.classList.remove('active');
});
