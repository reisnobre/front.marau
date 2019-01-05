<template>
  <header id="super">
    <div class="wrapper" id="desktop">
      <div class="columns">
        <div class="column">
          <div class="content" id="logo">
            <logo></logo>
          </div>
        </div>
        <div class="column">
          <nav>
            <ul>
              <router-link tag="li" :to="{ name: 'home' }">Início</router-link>
              <router-link tag="li" :to="{ name: 'rides' }">Passeios</router-link>
              <router-link tag="li" :to="{ name: 'gallery' }">Galeria</router-link>
              <router-link tag="li" :to="{ name: 'plan' }">Planeje Sua Viagem</router-link>
              <router-link tag="li" :to="{ name: 'contact' }">Contato</router-link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="wrapper" id="mobile">
      <div class="columns">
        <div class="column">
          <div class="content" id="logo">
            <logo></logo>
          </div>
        </div>
        <div class="column">
          <slide ref="mobile" right>
            <router-link tag="span" :to="{ name: 'home' }">Início</router-link>
            <router-link tag="span" :to="{ name: 'rides' }">Passeios</router-link>
            <router-link tag="span" :to="{ name: 'gallery' }">Galeria</router-link>
            <router-link tag="span" :to="{ name: 'plan' }">Planeje Sua Viagem</router-link>
            <router-link tag="span" :to="{ name: 'contact' }">Contato</router-link>
          </slide>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import logo from '../../public/img/logo.svg'
import { Slide } from 'vue-burger-menu'
export default {
  name: 'vHeader',
  components: {
    logo,
    Slide
  }
}
</script>
