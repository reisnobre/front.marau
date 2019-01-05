<template>
  <main class="page" id="home">
    <hero></hero>
    <tours></tours>
    <a href="https://api.whatsapp.com/send?l=pt&amp;phone=5573999027066" target="_blank"><img src="https://i.imgur.com/XMsxHpu.png" data-selector="img" style="height: 80px; position: fixed; bottom: 25px; right: 25px; z-index: 100;"></a>
  </main>
</template>

<script>
import hero from './home/Hero'
import tours from './home/Tours'
export default {
  name: 'home',
  components: {
    hero,
    tours
  }
}
</script>
