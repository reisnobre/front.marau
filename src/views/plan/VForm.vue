<template>
  <section class="planSec __small" id="form">
    <form @submit.prevent="" class="wrapper">
      <div class="content">
        <label>Data da Viagem</label>
        <div class="columns">
          <div class="column">
            <date-picker format="DD/MM/YYYY" lang="en" placeholder="Chegada" :not-before="new Date()" v-model="checkIn"></date-picker>
            <!-- <input type="text" value="" name="" id=""/> -->
          </div>
          <div class="column">
            <date-picker format="DD/MM/YYYY" lang="en" placeholder="Partida" :not-before="new Date(checkIn)" v-model="checkOut"></date-picker>
            <!-- <input type="text" value="" name="" id=""/> -->
          </div>
        </div>
        <label>Informações para Contato</label>
        <div class="columns">
          <div class="column">
            <input placeholder="Nome" type="text" value="" name="" id=""/>
            <input placeholder="Email" type="email" value="" name="" id=""/>
            <input placeholder="Telefone" v-mask="['(##) ####-####', '(##) #####-####']" type="phone" value="" name="" id=""/>
          </div>
        </div>
        <label>Traslados</label>
        <div class="columns">
          <div class="column">
            <input type="text" value="" name="" id=""/>
          </div>
          <div class="column">
            <input type="text" value="" name="" id=""/>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import datePicker from 'vue2-datepicker'
export default {
  name: 'vForm',
  data () {
    return {
      today: null,
      checkIn: null,
      checkOut: null
    }
  },
  computed: {
  },
  beforeMount () {
  },
  components: {
    datePicker
  }
}
</script>
