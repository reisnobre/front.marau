<template>
  <header id="super">
    <div class="wrapper">
      <div class="columns">
        <div class="column">
          <div class="content">
            <div id="logo">
              <logo></logo>
              <!-- <img src="/img/logo.png" alt=""/> -->
            </div>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <nav id="desktop">
              <ul>
                <router-link tag="li" :to="{ name: 'home' }">Início</router-link>
                <router-link tag="li" :to="{ name: 'rides' }">Passeios</router-link>
                <li>Galeria</li>
                <router-link tag="li" :to="{ name: 'plan' }">Planeje Sua Viagem</router-link>
                <li>Fale Conosco</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <!-- <nav id="mobile"> -->
    <!-- </nav> -->
  </header>
</template>

<script>
import logo from '../../public/img/logo.svg'
export default {
  name: 'vHeader',
  components: {
    logo
  }
}
</script>
