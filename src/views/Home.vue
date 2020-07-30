<template>
  <main class="page" id="home">
    <hero></hero>
    <tours></tours>
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
