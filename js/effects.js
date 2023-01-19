const effects = {
    squeezeMe: `<pre><p class="show-box__code">  button {
    border: 8px solid transparent;
    transition: 150ms;
  }
  
  button:hover {
    border-right: 8px solid #fa0;
    border-left: 8px solid #fa0;
  }</p></pre>`,

    rocketMe: `<pre><p class="show-box__code">button {
  transition: 200ms;
}

button:hover {
  transform: translateY(-4px);
  box-shadow: 0px 10px 6px -2px #fa0;
  color: #fa0;
}</p></pre>`,

    lightMe: `<pre><p class="show-box__code">button {
  transition: box-shadow 200ms, color 200ms;
}

button:hover {
  color: #fa0;
  box-shadow: 0px 1px 3px 3px #fa0;
}</p></pre>`,

    transparentMe: `<pre><p class="show-box__code">button {
  border: 5px solid transparent;
  transition: border 150ms, background-color 150ms;
}

button:hover {
  border: 5px solid #fa0;
  background-color: transparent;
}</p></pre>`,

    shadowMe: `<pre><p class="show-box__code">button {
  transition: box-shadow 150ms;
}

button:hover {
  box-shadow: inset 0px 0px 3px 3px #fa0;
}</p></pre>`,


    offsetMe: `<pre><p class="show-box__code">button {
  outline: 5px solid transparent;
  outline-offset: -9px;
  transition: transition: outline-offset 200ms, outline-color 200ms;
}

button:hover {
  outline-color: #fa0;
  outline-offset: -2px;
}</p></pre>`,

    scaleMe: `<pre><p class="show-box__code">button {
  transition: transform 150ms, background-color 150ms;
}

button:hover {
  transform: scale(1.03);
  background-color: #fa0;
}</p></pre>`,

    pushMe: `<pre><p class="show-box__code">button {
  border: none;
  border-bottom: 6px solid #000;
  transition: 150ms;
}

button:hover {
  border-bottom: 3px solid #000;
  transform: translateY(2px);
  background-color: #fa0;
}</p></pre>`,

    skewMe: `<pre><p class="show-box__code">button {
  transition: transform 150ms, background-color 150ms;
}

button:hover {
  transform: skew(-6deg);
  background-color: #fa0;
}</p></pre>`,

    colorMe: `<pre><p class="show-box__code">button {
  background-color: transparent;
  border: 3px solid #000;
  transition: 200ms;
}

button:hover {
  border-color: transparent;
  background-color: #fa0;
  box-shadow: 0 0 6px 3px #fa0;
}</p></pre>`,

    descendMe: `<pre><p class="show-box__code">button {
  transition: transform 200ms, background-color 200ms;
}

button:hover {
  background-color: #fa0;
  transform: translateY(4px);
}</p></pre>`,

    squareMe: `<pre><p class="show-box__code">button {
  transition: border-color 150ms, border-radius 150ms;
  border: 3px solid transparent;
}

button:hover {
  border-radius: 0px;
  border-color: #fa0;
}
</p></pre>`,
}

export default effects;