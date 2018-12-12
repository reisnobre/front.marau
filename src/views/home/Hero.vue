<template>
  <section class="homeSec" id="hero">
    <div class="wrapper">
      <div class="content">
        <h1>BEM VINDO A PENÍSULA DE MARAÚ</h1>
        <button id="play">
          <img src="/img/icons/play.png" alt=""/>
        </button>
        <p>Descubra com a Maraú Turismo esse pedaço de paraíso que faz parte da costa do Dendê no litoral sul da Bahia.</p>
        <p>Translados dos aeroportos de Ilhéus, Valença e Salvador e entre cidades do sul da Bahia.</p>
        <p>Passeios por terra e mar para conhecer a diversidade de paisagens desse pedaço de terra encravado entre o mar e a Baía de Camamu.</p>
        <router-link id="homeMainCta" :to="{ name: 'home' }" tag="button">PLANEJE JÁ A SUA VIAGEM</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hero'
}
</script>
