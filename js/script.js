console.log('Remember about project factory')

const domElements = {
  buttons: document.querySelectorAll('.show-btn'),
  root: document.documentElement,
  bodyEl: document.querySelector('body'),
  showBox: document.querySelector('.show-box'),
  showBoxText: document.getElementById('show-box-text'),
}

const effects = {
  squeezeMe: `<pre><p id="effect-css">  button{
    border: 8px solid transparent;
    transition: 150ms;
  }
  button:hover{
    border-right: 8px solid gold;
    border-left: 8px solid gold;
    transform: scaleX(0.95);
  }</p></pre>`,
  hangMe: `<pre><p id="effect-css">  button:hover{
    animation-name: hangMe;
    animation-duration: 250ms;
    animation-fill-mode: forwards;
  }
  @keyframes hangMe{
    from{
      transform: rotateX(0deg);
    } to {
      transform: rotate(4deg);
      background-color: gold;
    }
  }</p></pre>`,
  lightMe: `<pre><p id="effect-css">button{
  transition: 180ms;
}
button:hover{
  box-shadow: 5px 5px gold;
  color: gold;
}</p></pre>`,
  transparentMe: `<pre><p id="effect-css">  button{
    transition: 200ms;
    border: 5px solid white;
  }
  button:hover{
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    background-color: transparent;
    transform: scale(1.05);
  }</p></pre>`,
  skewMe: `<pre><p id="effect-css">button{
  transition: 200ms;
}
button:hover{
  transform: skew(-7deg);
  background-color: gold;
}</p></pre>`,
  offsetMe: `<pre><p id="effect-css">button{
  outline: 5px solid transparent;
  outline-offset: -9px;
  transition: 250ms;
}
button:hover{
  outline-color: gold;
  outline-offset: -2px;
}</p></pre>`,
  pushMe: `<pre><p id="effect-css">button{
  border-radius: 13px;
  border-bottom: 6px solid #444;
  transition: 200ms;
}
button:hover{
  border-bottom: 4px solid #444;
  transform: translateY(1px);
  background-color: gold;
}</p></pre>`,
  scaleMe: `<pre><p id="effect-css">button{
  transition: 150ms;
}
button:hover{
  transform: scale(1.05);
  background-color: gold;
}</p></pre>`,
  shadowMe: `<pre><p id="effect-css">button{
  transition: 250ms;
}
button:hover{
  box-shadow: inset 0px 0px 3px 3px gold;
}</p></pre>`,
  colorMe: `<pre><p id="effect-css">button{
  background-color: transparent;
  border: 3px solid black;
  transition: 200ms;
}
button:hover{
  border: 3px solid transparent;
  background-color: gold;
  color: white;
}</p></pre>`,
  descendMe: `<pre><p id="effect-css">button{
  transition: 150ms;
}
button:hover{
  background-color: gold;
  transform: translateY(2.5px);
}</p></pre>`,
  squareMe: `<pre><p id="effect-css">button{
  border-radius: 25px;
  transition: 150ms;
  border: 3px solid transparent;
}
button:hover{
  border-radius: 0px;
  border: 3px solid gold;
}
</p></pre>`,
}// `<pre><p id="effect-css"></p></pre>`

//CSS presets to change via JS
let theme = 'dark'
let fontSize = 3

function changeTheme(){
  switch(theme){
    case 'light':
      domElements.root.style.setProperty('--main-color', 'hsl(200, 90%, 75%)')
      domElements.root.style.setProperty('--second-color', 'hsl(200, 100%, 50%)')
      domElements.bodyEl.style.color = 'var(--gray-color)';
      theme = 'dark'
      break
    case 'dark':
      domElements.root.style.setProperty('--main-color', 'hsl(200, 70%, 45%)')
      domElements.root.style.setProperty('--second-color', 'hsl(200, 80%, 20%)')
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
