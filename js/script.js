const domElements = {
  buttons: document.querySelectorAll('.show-btn'),
  root: document.documentElement,
  bodyEl: document.querySelector('body'),
  showBox: document.querySelector('.show-box'),
  showBoxText: document.getElementById('show-box-text'),
}

const effects = {
  squeezeMe: `<pre><p id="effect-css">  button {
    border: 8px solid transparent;
    transition: 150ms;
  }
  
  button:hover {
    border-right: 8px solid #fa0;
    border-left: 8px solid #fa0;
  }</p></pre>`,

  rocketMe: `<pre><p id="effect-css">button {
  transition: 200ms;
}

button:hover {
  transform: translateY(-4px);
  box-shadow: 0px 10px 6px -2px #fa0;
  color: #fa0;
}</p></pre>`,

  lightMe: `<pre><p id="effect-css">button {
  transition: box-shadow 200ms, color 200ms;
}

button:hover {
  color: #fa0;
  box-shadow: 0px 1px 3px 3px #fa0;
}</p></pre>`,

  transparentMe: `<pre><p id="effect-css">button {
  border: 5px solid transparent;
  transition: border 150ms, background-color 150ms;
}

button:hover {
  border: 5px solid #fa0;
  background-color: transparent;
}</p></pre>`,

  shadowMe: `<pre><p id="effect-css">button {
  transition: box-shadow 150ms;
}

button:hover {
  box-shadow: inset 0px 0px 3px 3px #fa0;
}</p></pre>`,


  offsetMe: `<pre><p id="effect-css">button {
  outline: 5px solid transparent;
  outline-offset: -9px;
  transition: transition: outline-offset 200ms, outline-color 200ms;
}

button:hover {
  outline-color: #fa0;
  outline-offset: -2px;
}</p></pre>`,

  scaleMe: `<pre><p id="effect-css">button {
  transition: transform 150ms, background-color 150ms;
}

button:hover {
  transform: scale(1.03);
  background-color: #fa0;
}</p></pre>`,

  pushMe: `<pre><p id="effect-css">button {
  border: none;
  border-bottom: 6px solid #000;
  transition: 150ms;
}

button:hover {
  border-bottom: 3px solid #000;
  transform: translateY(2px);
  background-color: #fa0;
}</p></pre>`,

  skewMe: `<pre><p id="effect-css">button {
  transition: transform 150ms, background-color 150ms;
}

button:hover {
  transform: skew(-6deg);
  background-color: #fa0;
}</p></pre>`,

  colorMe: `<pre><p id="effect-css">button {
  background-color: transparent;
  border: 3px solid #000;
  transition: 200ms;
}

button:hover {
  border-color: transparent;
  background-color: #fa0;
  box-shadow: 0 0 6px 3px #fa0;
}</p></pre>`,

  descendMe: `<pre><p id="effect-css">button {
  transition: transform 200ms, background-color 200ms;
}

button:hover {
  background-color: #fa0;
  transform: translateY(4px);
}</p></pre>`,

  squareMe: `<pre><p id="effect-css">button {
  transition: border-color 150ms, border-radius 150ms;
  border: 3px solid transparent;
}

button:hover {
  border-radius: 0px;
  border-color: #fa0;
}
</p></pre>`,
}

//CSS presets to change via JS
let theme = 'light';
const fontSize = 3;

function changeTheme(){
  switch(theme){
    case 'light':
      domElements.root.style.setProperty('--main-color', '#bbb');
      domElements.root.style.setProperty('--secondary-color', '#888');
      domElements.bodyEl.style.color = 'var(--gray-color)';
      theme = 'dark'
      break
    case 'dark':
      domElements.root.style.setProperty('--main-color', '#777');
      domElements.root.style.setProperty('--secondary-color', '#333');
      domElements.bodyEl.style.color = '#fff';
      theme = 'light'
  }
}

function changeSize(sign){
  switch(sign){
    case '+':
      if(fontSize < 9) fontSize++
      break
    case '-':
      if(fontSize > 1) fontSize--
      break
  }
  domElements.buttons.forEach(el => el.style.fontSize = `1.${fontSize}em`)
}

function showMe(buttonId){
  let cssText = effects[buttonId]
  domElements.showBoxText.innerHTML = cssText
  domElements.showBox.style.display = 'flex';
}

function closeShowBox(){
  domElements.showBox.style.display = 'none'
}

function reload(){
  window.location.reload()
}
