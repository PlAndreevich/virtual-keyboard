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

const textarea = document.createElement('textarea');
textarea.id = 'textarea';
textarea.rows = 5;
textarea.cols = 50;

const keyboardSection = document.createElement('section');
keyboardSection.className = 'keyboard';

/* Функция создания клавиш и добавления их к родительскому элементу */
keys.forEach((key) => {
  const button = document.createElement('button');
  button.className = key.class;

  const rusSpan = document.createElement('span');
  rusSpan.className = 'rus hidden';

  const rusLowerSpan = document.createElement('span');
  rusLowerSpan.className = 'caseDown hidden';
  rusLowerSpan.textContent = key.rusLower;
  rusSpan.appendChild(rusLowerSpan);

  const rusUpperSpan = document.createElement('span');
  rusUpperSpan.className = 'caseUp hidden';
  rusUpperSpan.textContent = key.rusUpper;
  rusSpan.appendChild(rusUpperSpan);

  const rusCapsSpan = document.createElement('span');
  rusCapsSpan.className = 'caps hidden';
  rusCapsSpan.textContent = key.rusLower;
  rusSpan.appendChild(rusCapsSpan);

  const rusShiftCapsSpan = document.createElement('span');
  rusShiftCapsSpan.className = 'shiftCaps hidden';
  rusShiftCapsSpan.textContent = key.rusUpper;
  rusSpan.appendChild(rusShiftCapsSpan);

  button.appendChild(rusSpan);

  const engSpan = document.createElement('span');
  engSpan.className = 'eng';

  const engLowerSpan = document.createElement('span');
  engLowerSpan.className = 'caseDown';
  engLowerSpan.textContent = key.engLower;
  engSpan.appendChild(engLowerSpan);

  const engUpperSpan = document.createElement('span');
  engUpperSpan.className = 'caseUp hidden';
  engUpperSpan.textContent = key.engUpper;
  engSpan.appendChild(engUpperSpan);

  const engCapsSpan = document.createElement('span');
  engCapsSpan.className = 'caps hidden';
  engCapsSpan.textContent = key.engLower;
  engSpan.appendChild(engCapsSpan);

  const engShiftCapsSpan = document.createElement('span');
  engShiftCapsSpan.className = 'shiftCaps hidden';
  engShiftCapsSpan.textContent = key.engUpper;
  engSpan.appendChild(engShiftCapsSpan);

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
textareaSection.appendChild(textarea);

document.body.appendChild(keyboardSection);

document.body.appendChild(footer);
footer.appendChild(p1);
footer.appendChild(p2);
