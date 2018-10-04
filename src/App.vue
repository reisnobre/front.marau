<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view :scroll="scroll"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      scroll: 0,
      login: 'admin@admin.com',
      password: '$LSaP$*v'
    }
  },
  mounted () {
    this.getAuthToken([this, {
      username: this.login, password: this.password
    }]).then(response => {
      console.log(response)
    })
  },
  methods: {
    ...mapActions([
      'getAuthToken'
    ])
  },
  components: {
  }
}
</script>

<style lang="scss">
  @import "scss/main.scss";
</style>
