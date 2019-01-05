<template>
  <div class="photoContainer" v-if="media" @click="$emit('show', media.media_details.sizes.large)">
    <img :src="media.media_details.sizes.thumbnail.source_url" alt=""/>
  </div>
</template>
<script>
export default {
  name: 'photo',
  props: ['p'],
  data () {
    return {
      media: undefined
    }
  },
  beforeMount () {
    this.getMedia()
  },
  methods: {
    getMedia () {
      this.$http.get(this.$cms(`media/${this.p.featured_media}`, ``)).then(response => {
        this.media = response.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
