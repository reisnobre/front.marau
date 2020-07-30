<template>
  <div id="app">
    <v-header></v-header>
    <transition name="fade" mode="out-in">
      <router-view :scroll="scroll"></router-view>
    </transition>
    <a href="https://api.whatsapp.com/send?l=pt&amp;phone=5573999027066" target="_blank"><img src="img/icons/wp-icon.png" data-selector="img" style="height: 64px; position: fixed; bottom: 25px; right: 25px; z-index: 100;"></a>
    <v-footer :class="{ __revert: revert }"></v-footer>
  </div>
</template>

<script>
import vHeader from './components/VHeader'
import vFooter from './components/VFooter'
const REVERTABLE = ['rides', 'plan', 'contact']
export default {
  name: 'app',
  data () {
    return {
      scroll: 0
    }
  },
  computed: {
    revert () {
      if (REVERTABLE.indexOf(this.$route.fullPath) !== -1) return true
      return false
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
    vHeader,
    vFooter
  }
}
</script>

<style lang="scss">
  @import "scss/main.scss";
</style>
