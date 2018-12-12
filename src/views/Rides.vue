<template>
  <main class="page" id="rides">
    <brome></brome>
    <lancha></lancha>
    <farol></farol>
    <taipu></taipu>
    <plan></plan>
  </main>
</template>

<script>
import brome from './rides/Brome'
import lancha from './rides/Lancha'
import farol from './rides/Farol'
import taipu from './rides/Taipu'
import plan from './rides/Plan'
export default {
  name: 'rides',
  components: {
    brome,
    lancha,
    farol,
    taipu,
    plan
  }
}
</script>
