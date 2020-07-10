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
  /*Luminance Light*/
  #luminance {
    background: 50% 100% / 50% 50% no-repeat
      radial-gradient(ellipse at bottom, #fff, transparent, transparent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: reveal 3000ms ease-in-out forwards 200ms,
      glow 2500ms linear infinite 2000ms;
  }
  #slide1-row1 {
    font-size: 1.5em;
    font-family: "Limelight", cursive;
  }
  #slide1-row2 {
    font-size: 2em;
    font-family: "Limelight", cursive;
  }

  @keyframes reveal {
    80% {
      letter-spacing: 8px;
    }
    100% {
      background-size: 300% 300%;
    }
  }
  @keyframes glow {
    40% {
      text-shadow: 0 0 8px #fff;
    }
  }
  /* effetto slide 2 BIG YIKES */
  #fumetto {
    font-family: "Luckiest Guy", cursive;
    margin: 0;
    font-size: 3em;
    padding: 0;
    color: white;
    text-shadow: 0 0.1em 20px rgba(0, 0, 0, 1),
      0.05em -0.03em 0 rgba(0, 0, 0, 1), 0.05em 0.005em 0 rgba(0, 0, 0, 1),
      0em 0.08em 0 rgba(0, 0, 0, 1), 0.05em 0.08em 0 rgba(0, 0, 0, 1),
      0px -0.03em 0 rgba(0, 0, 0, 1), -0.03em -0.03em 0 rgba(0, 0, 0, 1),
      -0.03em 0.08em 0 rgba(0, 0, 0, 1), -0.03em 0 0 rgba(0, 0, 0, 1);
  }
  #fumetto span {
    transform: scale(0.9);
    display: inline-block;
  }
  #fumetto span:nth-child(1) {
    animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite
      alternate;
  }
  #fumetto span:nth-child(2) {
    animation: bopB 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
      infinite alternate;
  }
  #fumetto span:nth-child(3) {
    animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite
      alternate;
  }

  @keyframes bop {
    0% {
      transform: scale(0.9);
    }
    50%,
    100% {
      transform: scale(1);
    }
  }

  @keyframes bopB {
    0% {
      transform: scale(0.9);
    }
    80%,
    100% {
      transform: scale(1.5) rotateZ(-3deg);
    }
  }
</style>

<div class="reveal">
  <div class="slides">
    <section
      data-background-image="/slide1-bg.jpg"
      data-background-color="#555555"
    >
      <div id="luminance">
        <span id="slide1-row1">SEMPRE LE STESSE IDEE</span>
        <span id="slide1-row2">PROMOZIONALI?</span>
      </div>
    </section>

    <section data-background="https://i.giphy.com/90F8aUepslB84.gif">
      <div id="fumetto">
        <span>ALLORA</span>
      </div>
      <div id="fumetto">
        <span></span>
        <span>STUPISCI</span>
        <span>il tuo pubblico!</span>
      </div>
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
