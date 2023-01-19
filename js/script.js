import effects from './effects.js';

const state = {
  theme: 'dark',
  btnsFontSize: 20,
}

const dom = {
  root: document.documentElement,
  body: document.querySelector('body'),
  buttons: document.querySelectorAll('.show-btn'),

  themeBtn: document.querySelector('.header__btn_theme'),
  sizeUpBtn: document.querySelector('.header__btn_size-up'),
  sizeDownBtn: document.querySelector('.header__btn_size-down'),

  showBox: document.querySelector('.show-box'),
  showBoxText: document.getElementById('show-box-text'),
  showBoxInfo: document.querySelector('.show-box__info'),
  copyCodeBtn: document.querySelector('.show-box__btn_copy'),
  closeShowboxBtn: document.querySelector('.show-box__btn_close'),
}

function changeTheme() {
  if (state.theme === 'dark') {
    dom.root.style.setProperty('--main-color', '#bbb');
    dom.root.style.setProperty('--secondary-color', '#888');
    dom.body.style.color = 'var(--gray-color)';
    state.theme = 'light';
  } else {
    dom.root.style.setProperty('--main-color', '#777');
    dom.root.style.setProperty('--secondary-color', '#333');
    dom.body.style.color = '#fff';
    state.theme = 'dark';
  }
}

function changeSize(up) {
  if(up && state.btnsFontSize < 30) state.btnsFontSize += 2;
  else if(!up && state.btnsFontSize > 12) state.btnsFontSize -= 2;
  dom.buttons.forEach(btn => btn.style.fontSize = `${state.btnsFontSize}px`);
}


function showCode(buttonId) {
  dom.showBoxText.innerHTML = effects[buttonId];
  dom.showBox.style.display = 'flex';
  hljs.highlightAll();
}

function copyCode() {
  const showBoxCode = document.querySelector('.show-box__code').textContent;
  navigator.clipboard.writeText(showBoxCode);
  dom.showBoxInfo.textContent = 'Copied the code to your clipboard.';
  setTimeout(() => dom.showBoxInfo.textContent = ' ', 3000);
}

function closeShowBox() {
  dom.showBox.style.display = 'none';
}

dom.themeBtn.addEventListener('click', changeTheme);
dom.sizeUpBtn.addEventListener('click', changeSize.bind(null, true));
dom.sizeDownBtn.addEventListener('click', changeSize.bind(null, false));
dom.buttons.forEach(btn => btn.addEventListener('click', () => showCode(btn.id)));
dom.closeShowboxBtn.addEventListener('click', closeShowBox);
dom.copyCodeBtn.addEventListener('click', copyCode);
