<template>
  <section class="planSec __small" id="form">
    <form @submit.prevent="send" class="wrapper">
      <div class="content">
        <label>Data da Viagem</label>
        <div class="columns">
          <div class="column">
            <date-picker format="DD/MM/YYYY" lang="en" placeholder="Chegada" :not-before="new Date()" v-model="checkIn" required></date-picker>
            <!-- <input type="text" value="" name="" id=""/> -->
          </div>
          <div class="column">
            <date-picker format="DD/MM/YYYY" lang="en" placeholder="Partida" :not-before="new Date(checkIn)" v-model="checkOut" required></date-picker>
            <!-- <input type="text" value="" name="" id=""/> -->
          </div>
        </div>
        <label>Informações para Contato</label>
        <div class="columns">
          <div class="column">
            <input v-model="name" placeholder="Nome" type="text" value="" name="" id="" required/>
            <input v-model="email" placeholder="Email" type="email" value="" name="" id="" required/>
            <input v-model="phone" placeholder="Telefone" v-mask="['(##) ####-####', '(##) #####-####']" type="phone" value="" name="" id="" required/>
          </div>
        </div>
        <label>Traslados</label>
        <div class="columns">
          <div class="column">
            <input v-model="from" type="text" value="" name="" id="" placeholder="De"/>
          </div>
          <div class="column">
            <input v-model="to" type="text" value="" name="" id="" placeholder="Para"/>
          </div>
        </div>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </section>
</template>

<script>
import datePicker from 'vue2-datepicker'
export default {
  name: 'vForm',
  data () {
    return {
      checkIn: null,
      checkOut: null,
      name: null,
      email: null,
      phone: null,
      from: null,
      to: null
    }
  },
  computed: {
  },
  beforeMount () {
  },
  methods: {
    send () {
      let data = {
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        name: this.name,
        email: this.email,
        phone: this.phone,
        from: this.from,
        to: this.to
      }
      console.log(data)
      this.$http.post(this.$mail, data).then(response => {
        this.$toasted.success('Email enviado com sucesso, entraremos em contato em breve!', {
          theme: 'outline',
          position: 'top-center',
          duration: 3000,
          onComplete: () => {
            this.$router.push({ name: 'home' })
          }
        })
      }).catch(err => {
        console.log(err)
        this.$toasted.error('Algo de errado aconteceu. Tente novamente.', {
          theme: 'outline',
          position: 'top-center',
          duration: 3000,
          onComplete: () => {
            this.$router.push({ name: 'home' })
          }
        })
      })
    }
  },
  components: {
    datePicker
  }
}
</script>
