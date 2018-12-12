<template>
  <section class="ridesSec" id="plan">
    <div class="wrapper">
      <div class="content">
        <h2>Planeje sua viagem</h2>
        <p>Assim que a reserva for confirmada, nós nos esforçamos para facilitar sua viagem. Para realmente aproveitar sua viagem, nós criamos uma ferramenta para que você possa nos contar como seria a viagem dos seus sonhos.</p>
        <router-link class="__small" tag="button" :to="{ name: 'plan' }">Planeje Ja a sua viagem</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'plan'
}
</script>
