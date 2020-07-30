<template>
  <section class="planSec __small" id="form">
    <div class="wrapper">
      <div class="columns">
        <div class="column">
          <h3>Fale Conosco</h3>
          <form @submit.prevent="send">
            <input v-model="name" placeholder="Nome" type="text" value="" name="" id="" required/>
            <input v-model="email" placeholder="Email" type="email" value="" name="" id="" required/>
            <input v-model="phone" placeholder="Telefone" v-mask="['(##) ####-####', '(##) #####-####']" type="phone" value="" name="" id="" required/>
            <textarea v-model="message" placeholder="Mensagem"></textarea>
            <button class="__small" type="submit">Enviar</button>
          </form>
        </div>
        <div class="column">
          <h3>Reservas</h3>
          <h4><a href="tel:73999027066" target="_blank">(73) 99902.7066</a></h4>
          <h4><a href="tel:73999814097" target="_blank">(73) 99981.4097</a></h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'vForm',
  data () {
    return {
      name: null,
      email: null,
      phone: null,
      message: null
    }
  },
  computed: {
  },
  beforeMount () {
  },
  methods: {
    send () {
      let data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message
      }
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
  }
}
</script>
