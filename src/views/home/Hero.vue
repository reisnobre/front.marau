<template>
  <section class="homeSec" id="hero">
    <div class="blur"></div>
    <div class="wrapper">
      <div class="content">
        <h1>BEM VINDO A PENÍSULA DE MARAÚ</h1>
        <button id="play" @click="$refs.modal.open()">
          <img src="/img/icons/play.png" alt=""/>
        </button>
        <p>Descubra com a Maraú Turismo esse pedaço de paraíso que faz parte da costa do Dendê no litoral sul da Bahia.</p>
        <p>Translados dos aeroportos de Ilhéus, Valença e Salvador e entre cidades do sul da Bahia.</p>
        <p>Passeios por terra e mar para conhecer a diversidade de paisagens desse pedaço de terra encravado entre o mar e a Baía de Camamu.</p>
        <router-link id="homeMainCta" :to="{ name: 'home' }" tag="button">PLANEJE JÁ A SUA VIAGEM</router-link>
      </div>
    </div>
    <sweet-modal v-if="loaded" ref="modal" modal-theme="dark" overlay-theme="dark">
      <iframe height="100%" width="100%" allowfullscreen="" frameborder="0" title="External Facebook" aria-label="External Facebook" src="//www.facebook.com/plugins/video.php?href=https://www.facebook.com/marcaokareca/videos/990727647684232&amp;autoplay=false&amp;width=821&amp;height=460"></iframe>
    </sweet-modal>
  </section>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'
export default {
  name: 'hero',
  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.loaded = true
    }, 1500)
  },
  components: {
    SweetModal
  }
}
</script>
