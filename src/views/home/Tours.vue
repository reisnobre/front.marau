<template>
  <section class="homeSec" id="tours">
    <div class="wrapper">
      <h2>TOURS EM DESTAQUE</h2>
      <swiper :options="swiperOption" :not-next-tick="false" ref="mySwiper">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="content">
            <div class="columns">
              <div class="column">
                <img :src="`/img/slider/${slide.img}.jpg`" alt=""/>
              </div>
              <div class="column">
                <h5>{{ slide.title }}</h5>
                <p>{{ slide.body }}</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'tours',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        }
      },
      slides: [
        {
          title: 'TOUR PELA PENÍSULA',
          body: 'Passeio exclusivo e personalizado. Conheça as praias, trilha das Bromélias, lagoas, Taipu de Dentro, rio Carapitangui e o por do sol na Ponta do Mutá.',
          img: 'tour'
        },
        {
          title: 'ALUGUEL DE QUADRI',
          body: 'Explore a Península de quadriciclo. Suba o morro do Farol, nade nas lagoas Azul e do Cassange, faça a trilha das Bromélias e conheça as praias.',
          img: 'quadri'
        },
        {
          title: 'PASSEIO AS ILHAS',
          body: 'Desvende as ilhas da Baia de Camamu e a cachoeira de Tremembé a bordo de lancha exclusiva. Com paradas para banho e almoço.',
          img: 'ilhas'
        }
      ]
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
