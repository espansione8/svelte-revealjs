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
      backgroundTransition: "fade" // none/fade/slide/convex/concave/zoom
      //plugins: [  ]
    });
    Reveal.on("slidetransitionend", event => {
      event.indexh === 6 ? (active = true) : (active = false);
    });
    ///////////// last item
  }); // end onmount
</script>

<style>
  /* THEME override */

  .reveal h1,
  .reveal h2,
  .reveal h3,
  .reveal h4,
  .reveal h5,
  .reveal h6 {
    text-transform: none;
  }

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
    font-family: "Luckiest Guy", cursive;
    letter-spacing: 0.05em;
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
      transform: scale(1.3) rotateZ(-3deg);
    }
  }
  /* 3d tilt https://codepen.io/noahblon/pen/CsxfH */
  .stage {
    height: 300px;
    width: 35%;
    /* margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0; */
    perspective: 9999px;
    transform-style: preserve-3d;
  }
  .layer {
    width: 100%;
    height: 100%;
    position: absolute;
    transform-style: preserve-3d;
    animation: ಠ_ಠ 5s infinite alternate ease-in-out -7.5s;
    animation-fill-mode: forwards;
    transform: rotateY(40deg) rotateX(30deg) translateZ(0);
  }
  .layer:after {
    font: "Pacifico", "Kaushan Script", Futura, "Roboto", "Trebuchet MS",
      Helvetica, sans-serif;
    font-size: 2.5em;
    content: "            con\A LANDING PAGE\A      SPECIALI !";
    white-space: pre;
    text-align: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50px;
    color: #f5f5f5;
    letter-spacing: -2px;
    text-shadow: 4px 0 10px rgba(0, 0, 0, 0.13);
  }
  .layer:nth-child(1):after {
    transform: translateZ(0px);
  }
  .layer:nth-child(2):after {
    transform: translateZ(-1.5px);
  }
  .layer:nth-child(3):after {
    transform: translateZ(-3px);
  }
  .layer:nth-child(4):after {
    transform: translateZ(-4.5px);
  }
  .layer:nth-child(5):after {
    transform: translateZ(-6px);
  }
  .layer:nth-child(6):after {
    transform: translateZ(-7.5px);
  }
  .layer:nth-child(7):after {
    transform: translateZ(-9px);
  }
  .layer:nth-child(8):after {
    transform: translateZ(-10.5px);
  }
  .layer:nth-child(9):after {
    transform: translateZ(-12px);
  }
  .layer:nth-child(10):after {
    transform: translateZ(-13.5px);
  }
  .layer:nth-child(11):after {
    transform: translateZ(-15px);
  }
  .layer:nth-child(12):after {
    transform: translateZ(-16.5px);
  }
  .layer:nth-child(13):after {
    transform: translateZ(-18px);
  }
  .layer:nth-child(14):after {
    transform: translateZ(-19.5px);
  }
  .layer:nth-child(15):after {
    transform: translateZ(-21px);
  }
  .layer:nth-child(16):after {
    transform: translateZ(-22.5px);
  }
  .layer:nth-child(17):after {
    transform: translateZ(-24px);
  }
  .layer:nth-child(18):after {
    transform: translateZ(-25.5px);
  }
  .layer:nth-child(19):after {
    transform: translateZ(-27px);
  }
  .layer:nth-child(20):after {
    transform: translateZ(-28.5px);
  }
  .layer:nth-child(n + 10):after {
    -webkit-text-stroke: 3px rgba(0, 0, 0, 0.25);
  }
  .layer:nth-child(n + 11):after {
    -webkit-text-stroke: 15px #ff981a;
    text-shadow: 6px 0 6px #b36200, 5px 5px 5px #804600, 0 6px 6px #e67e00;
  }
  .layer:nth-child(n + 12):after {
    -webkit-text-stroke: 15px #804600;
  }
  .layer:last-child:after {
    -webkit-text-stroke: 17px rgba(0, 0, 0, 0.1);
  }
  .layer:first-child:after {
    color: #fff;
    text-shadow: none;
  }
  @keyframes ಠ_ಠ {
    100% {
      transform: rotateY(-40deg) rotateX(-40deg);
    }
  }
</style>

<div class="reveal">
  <div class="slides">
    <section
      data-background-image="/slide1-bg.jpg"
      data-background-color="rgba(0, 0, 0, 0.8)">
      <div id="luminance">
        <span id="slide1-row1">SEMPRE LE STESSE IDEE</span>
        <span id="slide1-row2">PROMOZIONALI?</span>
      </div>
    </section>

    <section data-background="/hero-shape.jpg">
      <div id="fumetto">
        <span>INZIA A</span>
      </div>
      <div id="fumetto">
        <span />
        <span>STUPIRE 😎</span>
        <span>il tuo pubblico!</span>
      </div>
    </section>

    <section>
      <h3 class="text3D">📣 comunicando in modo</h3>
      <h3 class="fragment fade-up text3D">😁 INTERATTIVO</h3>
      <h3 class="fragment fade-left text3D">INNOVATIVO 🤯</h3>
      <h3 class="fragment fade-right text3D">🥳 DIVERTENTE</h3>
    </section>

    <section>
      <!-- <h1>
			<span class="fragment highlight-color1">con</span>
			<span class="fragment highlight-color2">LANDING</span>
			<span class="fragment highlight-color3">PAGE</span>
		</h1> -->
      <!-- <h1>
        <span class="burn">con LANDING PAGE</span>
        SPECIALI
      </h1> -->
      <div class="stage">
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
        <div class="layer" />
      </div>
    </section>

    <section>
      <section>
        <h1 class="text3D">attraverso CONCORSI</h1>
        <span style="font-size: 3em">⏬</span>
      </section>
      <section
        data-background-iframe="gratta.html"
        data-background-interactive />
    </section>

    <section>
      <section>
        <h2 class="text3D">e coinvolgenti ESPERIENZE 360°</h2>
        <span style="font-size: 3em">⏬</span>
      </section>
      <section
        data-background-iframe="https://espansione8.com/360"
        data-background-interactive />
    </section>

    <section data-state="creativo">
      <h3 class="text3D">Rivoluziona la tua promozione in modo</h3>
      <div class="word">
        <span class="text3D" class:active>C</span>
        <span class="text3D" class:active>R</span>
        <span class="text3D" class:active>E</span>
        <span class="text3D" class:active>A</span>
        <span class="text3D" class:active>T</span>
        <span class="text3D" class:active>I</span>
        <span class="text3D" class:active>V</span>
        <span class="text3D" class:active>O</span>
      </div>
    </section>
    <section>
      <!-- <h2 class="text3D">e falla conoscere al mondo</h2> -->
    </section>
  </div>
</div>
