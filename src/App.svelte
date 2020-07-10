<script>
  import { onMount } from "svelte";
  // More info about initialization & config:
  // - https://revealjs.com/initialization/
  // - https://revealjs.com/config/
  import Reveal from "reveal.js";
  //import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
  let active = false;
  onMount(() => {
    console.log("the component has mounted");
    Reveal.initialize({
      hash: true,
      progress: false,
      mouseWheel: true,
      hideAddressBar: true,
      transitionSpeed: "slow", // default/fast/slow
      backgroundTransition: "convex", // none/fade/slide/convex/concave/zoom
      //plugins: [  ]
    });
    Reveal.on("slidetransitionend", (event) => {
      event.indexh === 6 ? (active = true) : (active = false);
    });
  });
</script>

<style>
  /* THEME override */
  .reveal .slides section[data-vertical-align-bottom] {
    top: 80vh !important;
  }

  .reveal h1,
  .reveal h2,
  .reveal h3,
  .reveal h4,
  .reveal h5,
  .reveal h6 {
    text-transform: none;
  }

  /* .reveal .slides section .fragment.highlight-color1,
.reveal .slides section .fragment.highlight-color2,
.reveal .slides section .fragment.highlight-color3,
.reveal .slides section .fragment.highlight-color4 {
	opacity: 1;
	visibility: visible;
}
.reveal .slides section .fragment.highlight-color1.visible {
	background: linear-gradient(90deg, #1a2980 0%, #26d0ce 100%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
.reveal .slides section .fragment.highlight-color2.visible {
	background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
.reveal .slides section .fragment.highlight-color3.visible {
	background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
}
.reveal .slides section .fragment.highlight-color4.visible {
	background-image: linear-gradient(90deg, #fee140 0%, #fa709a 100%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
} */
  /*sfondo dinamico*/
  .reveal {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradientBG 10s ease infinite;
  }

  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  /* effetto landing page SPECIALI */
  svg {
    display: block;
    font: 4em "Roboto";
    width: 100%;
    /* height: 20vh; */
    margin: 0 auto;
  }

  .text-copy {
    fill: none;
    stroke: white;
    stroke-dasharray: 6% 29%;
    stroke-width: 5px;
    stroke-dashoffset: 0%;
    animation: stroke-offset 5.5s infinite linear;
  }

  .text-copy:nth-child(1) {
    stroke: #4d163d;
    animation-delay: -1;
  }

  .text-copy:nth-child(2) {
    stroke: #840037;
    animation-delay: -2s;
  }

  .text-copy:nth-child(3) {
    stroke: #bd0034;
    animation-delay: -3s;
  }

  .text-copy:nth-child(4) {
    stroke: #bd0034;
    animation-delay: -4s;
  }

  .text-copy:nth-child(5) {
    stroke: #fdb731;
    animation-delay: -5s;
  }

  .text-copy:nth-child(6) {
    stroke: darkorange;
    animation-delay: -6s;
  }

  .text-copy:nth-child(7) {
    stroke: #ffffff;
    animation-delay: -7s;
  }

  @keyframes stroke-offset {
    100% {
      stroke-dashoffset: -35%;
    }
  }

  /* animazione CREATIVO*/

  .word span {
    cursor: pointer;
    display: inline-block;
    font-size: 100px;
    user-select: none;
    line-height: 0.8;
  }

  .word span:nth-child(1).active {
    animation: balance 1.5s ease-out;
    transform-origin: bottom left;
  }

  @keyframes balance {
    0%,
    100% {
      transform: rotate(0deg);
    }

    30%,
    60% {
      transform: rotate(-45deg);
    }
  }

  .word span:nth-child(2).active {
    animation: shrinkjump 1s ease-in-out;
    transform-origin: bottom center;
  }

  @keyframes shrinkjump {
    10%,
    35% {
      transform: scale(2, 0.2) translate(0, 0);
    }

    45%,
    50% {
      transform: scale(1) translate(0, -150px);
    }

    80% {
      transform: scale(1) translate(0, 0);
    }
  }

  .word span:nth-child(3).active {
    animation: falling 2s ease-out;
    transform-origin: bottom center;
  }

  @keyframes falling {
    12% {
      transform: rotateX(240deg);
    }

    24% {
      transform: rotateX(150deg);
    }

    36% {
      transform: rotateX(200deg);
    }

    48% {
      transform: rotateX(175deg);
    }

    60%,
    85% {
      transform: rotateX(180deg);
    }

    100% {
      transform: rotateX(0deg);
    }
  }

  .word span:nth-child(4).active {
    animation: rotate 1s ease-out;
  }

  @keyframes rotate {
    20%,
    80% {
      transform: rotateY(180deg);
    }

    100% {
      transform: rotateY(360deg);
    }
  }

  .word span:nth-child(5).active {
    animation: toplong 1.5s linear;
  }

  .word span:nth-child(6).active {
    animation: falling 2s ease-out;
    transform-origin: bottom center;
  }

  .word span:nth-child(7).active {
    animation: rotate 1s ease-out;
  }

  .word span:nth-child(8).active {
    animation: balance 1.5s ease-out;
    transform-origin: top right;
  }

  @keyframes toplong {
    10%,
    40% {
      transform: translateY(-48vh) scaleY(1);
    }

    90% {
      transform: translateY(-48vh) scaleY(4);
    }
  }

  /*effetto test*/
  .burn {
    text-shadow: 0px -1px 4px white, 0px -2px 10px yellow,
      0px -10px 20px #ff8000, 0px -18px 40px red;
  }

  .text3D {
    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777,
      0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #666, 0px 7px 0px #777,
      0px 8px 7px #999;
  }
  /*Flickering Light*/
  /* :root {
    --white: #f1f1f1;
  } */
  div > span {
    opacity: 0.15;
  }
  #flick-div {
    /* font-family: "Source Sans Pro", Helvetica, sans-serif;
    letter-spacing: 0.1em; */
    font-size: 1.5em;
    font-weight: 600;
  }
  #I {
    opacity: 1;
    animation: flickerI 2s linear reverse infinite;
  }
  #I::after {
    content: "";
    width: 150%;
    -webkit-box-shadow: -35px 0px 60px 8px rgba(255, 255, 255, 1);
    -moz-box-shadow: -35px 0px 60px 8px rgba(255, 255, 255, 1);
    box-shadow: -35px 0px 60px 8px rgba(255, 255, 255, 1);
  }
  #L,
  #G {
    animation: flickerLG 2s linear reverse infinite;
    position: relative;
  }
  #L::after,
  #L::before {
    content: " ";
    width: 100px;
    height: 100px;
    background: var(--white);
    position: absolute;
    top: -50%;
    left: 100%;
    border-radius: 100%;
    opacity: 0.05;
    filter: blur(10px);
  }
  #L::after {
    width: 200px;
    height: 200px;
    top: -150%;
    left: -5%;
    opacity: 0.1;
    filter: blur(10px);
  }
  #H {
    animation: flickerH 2s linear reverse infinite;
  }

  #T {
    animation: flickerH 2s linear reverse infinite;
  }

  @keyframes flickerI {
    0% {
      opacity: 0.4;
    }
    5% {
      opacity: 0.5;
    }
    10% {
      opacity: 0.6;
    }
    15% {
      opacity: 0.85;
    }
    25% {
      opacity: 0.5;
    }
    30% {
      opacity: 1;
    }
    35% {
      opacity: 0.1;
    }
    40% {
      opacity: 0.25;
    }
    45% {
      opacity: 0.5;
    }
    60% {
      opacity: 1;
    }
    70% {
      opacity: 0.85;
    }
    80% {
      opacity: 0.4;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes flickerLG {
    0% {
      opacity: 0.19;
    }
    5% {
      opacity: 0.2;
    }
    10% {
      opacity: 0.25;
    }
    15% {
      opacity: 0.35;
    }
    25% {
      opacity: 0.2;
    }
    30% {
      opacity: 0.4;
    }
    35% {
      opacity: 0.1;
    }
    40% {
      opacity: 0.25;
    }
    45% {
      opacity: 0.2;
    }
    60% {
      opacity: 0.4;
    }
    70% {
      opacity: 0.35;
    }
    80% {
      opacity: 0.4;
    }
    90% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.4;
    }
  }

  @keyframes flickerH {
    0% {
      opacity: 0.15;
    }
    5% {
      opacity: 0.2;
    }
    10% {
      opacity: 0.12;
    }
    15% {
      opacity: 0.2;
    }
    25% {
      opacity: 0.15;
    }
    30% {
      opacity: 0.4;
    }
    35% {
      opacity: 0.05;
    }
    40% {
      opacity: 0.12;
    }
    45% {
      opacity: 0.15;
    }
    60% {
      opacity: 0.3;
    }
    70% {
      opacity: 0.2;
    }
    80% {
      opacity: 0.3;
    }
    90% {
      opacity: 0.18;
    }
    100% {
      opacity: 0.3;
    }
  }

  @keyframes flickerT {
    0% {
      opacity: 0.01;
    }
    5% {
      opacity: 0.05;
    }
    10% {
      opacity: 0.03;
    }
    15% {
      opacity: 0.1;
    }
    25% {
      opacity: 0.07;
    }
    30% {
      opacity: 0.1;
    }
    35% {
      opacity: 0.05;
    }
    40% {
      opacity: 0.06;
    }
    45% {
      opacity: 0.1;
    }
    60% {
      opacity: 0;
    }
    70% {
      opacity: 0.1;
    }
    80% {
      opacity: 0;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 0.1;
    }
  }
</style>

<div class="reveal">
  <div class="slides">
    <section data-background-image="/slide1-bg.jpg">
      <h2>SEMPRE LE STESSE IDEE</h2>
      <!-- <h1>PROMOZIONALI?</h1> -->
      <div id="flick-div">
        <span id="L">P</span>
        <span id="I">R</span>
        <span id="G">O</span>
        <span id="H">M</span>
        <span id="T">O</span>
        <span id="L">Z</span>
        <span id="I">I</span>
        <span id="G">O</span>
        <span id="H">N</span>
        <span id="T">A</span>
        <span id="L">L</span>
        <span id="G">I</span>
        <span id="I">?</span>
      </div>
      <!-- <h3>Allora rendi la tua memorabile..</h3> -->
    </section>

    <section data-background="https://i.giphy.com/90F8aUepslB84.gif">
      <h1>...e STUPISCI il tuo pubblico!</h1>
    </section>

    <section>
      <h3 class="text3D">comunicando in modo</h3>
      <h3 class="fragment fade-up text3D">INTERATTIVO</h3>
      <h3 class="fragment fade-left text3D">INNOVATIVO</h3>
      <h3 class="fragment fade-right text3D">DIVERTENTE</h3>
    </section>

    <section>
      <!-- <h1>
			<span class="fragment highlight-color1">con</span>
			<span class="fragment highlight-color2">LANDING</span>
			<span class="fragment highlight-color3">PAGE</span>
		</h1> -->
      <h1><span class="burn">con LANDING PAGE</span></h1>
      <svg viewBox="0 0 900 150">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="80%">SPECIALI</text>
        </symbol>

        <g class="g-ants">
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
          <use xlink:href="#s-text" class="text-copy"></use>
        </g>
      </svg>
    </section>

    <section>
      <section>
        <h1>attraverso CONCORSI</h1>
        <h3>(spazio freccia giu)</h3>
      </section>
      <section
        data-background-iframe="gratta.html"
        data-background-interactive
      ></section>
    </section>

    <section>
      <section>
        <h2>e coinvolgenti ESPERIENZE 360°</h2>
        <h3>(spazio freccia giu)</h3>
      </section>
      <section
        data-background-iframe="https://espansione8.com/360"
        data-background-interactive
      ></section>
    </section>

    <section data-state="creativo">
      <h3 class="text3D">Rivoluziona la tua promozione in modo</h3>
      <div class="word">
        <span class="text3D" class:active="{active}">C</span>
        <span class="text3D" class:active="{active}">R</span>
        <span class="text3D" class:active="{active}">E</span>
        <span class="text3D" class:active="{active}">A</span>
        <span class="text3D" class:active="{active}">T</span>
        <span class="text3D" class:active="{active}">I</span>
        <span class="text3D" class:active="{active}">V</span>
        <span class="text3D" class:active="{active}">O</span>
      </div>
    </section>
    <section>
      <h2 class="text3D">e falla conoscere al mondo</h2>
    </section>
  </div>
</div>
