<template>
  <div id="app">
    <v-header></v-header>
    <transition name="fade" mode="out-in">
      <router-view :scroll="scroll"></router-view>
    </transition>
  </div>
</template>

<script>
import vHeader from './components/VHeader'
export default {
  name: 'app',
  data () {
    return {
      scroll: 0
    }
  },
  beforeMount () {
    if (!this.$route.matched.length) {
      const target = this.$route.path.split('/').pop()
      if (this.$router.options.routes.map(r => r.name).indexOf(target) !== -1) this.$router.push({ name: target })
      else this.$router.push({ name: 'home' })
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    vHeader
  }
}
</script>

<style lang="scss">
  @import "scss/main.scss";
</style>
