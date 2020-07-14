<script>
    let risultatoGratta = 'vuoto';
    let risultatoGrattaURL = './images/gratta_vinci.jpg';
    const grattaOnClick = () => {
        risultatoGratta = 'vuoto';
        risultatoGrattaURL = './images/gratta_vinci.jpg';
        setTimeout(() => {
            const numeroGenerato = Math.floor(Math.random() * 11);
            const risultatoVintoPerso = isEven(numeroGenerato);
            if (risultatoVintoPerso) {
                risultatoGratta = 'vinto';
                risultatoGrattaURL = './images/gratta_vinci-vinto.jpg';
            } else {
                risultatoGratta = 'perso';
                risultatoGrattaURL = './images/gratta_vinci-perso.jpg';
            }
        }, 500);
        
    };
    const isEven = (value) => {
        if (value % 2 == 0) {
            return true;
        } else {
            return false;
        }
    };
    const grattaReset = () => {
        risultatoGratta = 'vuoto';
        risultatoGrattaURL = './images/gratta_vinci.jpg';
    };
    
</script>

<style>
    #cf2 {
        margin: 0 auto;
    }
    #cf2 img {
      width: 100%;
    }

    .elementToFadeIn {
      -webkit-animation: fadein 0.7s linear forwards;
      animation: fadein 0.7s linear forwards;
    }
    
    @-webkit-keyframes fadein {
      0%,50% { opacity: 0; }
      100% { opacity: 1; }
    }
    
    @keyframes fadein {
      0%,50% { opacity: 0; }
      100% { opacity: 1; }
    }

    /* .elementToFadeOut {
      -webkit-animation: fadeout 1s linear forwards;
      animation: fadeout 1s linear forwards;
    }
    
    @-webkit-keyframes fadeout {
      0%,50% { opacity: 1; }
      100% { opacity: 0; }
    }
    
    @keyframes fadeout {
      0%,50% { opacity: 1; }
      100% { opacity: 0; }
    } */
</style>

<svelte:head>
	<title>Gratta</title>
</svelte:head>
<br>

<div 
    class="columns"
    style="
        background-image: url('./images/sfondo-landing-gratta.jpg');
        background-size: cover;
        min-height: 100vh;
    "
>
  <div class="column" style="text-align: center; margin-top: 20px;">
    <img
      src="./images/logo-gratta-vinci.png"
      alt="Lucky Scratch"
      style="
        max-width: 500px;
        width: 100%;
        height: auto;
      "
    >
    <div class="columns">
      <div class="column" style="margin-top: 20px;">
        <button type="button" class="button is-warning" style="color: #fff; font-weight: bold;" on:click={grattaOnClick}>CLICCA QUI PER GRATTARE</button>
        <button type="button" class="button is-danger" style="color: #fff; font-weight: bold;" on:click={grattaReset}>RESET</button>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div
          id="cf2"
          style="
          background-image: url(./images/gratta_vinci.jpg);
          background-size: cover;
          max-width: 900px;
          width: 100%;
          height: auto;
          border-radius: 20px;
          "
        >
            <!-- <img class="top" src="./images/gratta_vinci.jpg" style="border-radius: 20px; display: block;" alt="card"/> -->
            <img class="top {risultatoGratta !== 'vuoto' ? 'elementToFadeIn' : ''}" src={risultatoGrattaURL} style="border-radius: 20px; display: block;" alt="card"/>
            
            <!-- 
            {#if risultatoGratta === 'vinto'}
            	<img class="top elementToFadeIn" src="./images/gratta_vinci-vinto.jpg" style="border-radius: 20px; display: block;" alt="card"/>
            {:else if risultatoGratta === 'perso'}
            	<img class="top elementToFadeIn" src="./images/gratta_vinci-perso.jpg" style="border-radius: 20px; display: block;" alt="card"/>
            {:else}
            	<img class="top elementToFadeOut" src="./images/gratta_vinci.jpg" style="border-radius: 20px; display: block;" alt="card"/>
            {/if} 
            -->
        </div>
      </div>
    </div>
  </div>
</div>