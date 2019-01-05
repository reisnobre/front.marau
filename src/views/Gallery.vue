<template>
  <main class="page" id="gallery">
    <div class="wrapper">
      <div class="galleryContainer">
        <photo @show="openModal($event)" v-for="(p, index) in photos" :key="index" :p="p"></photo>
      </div>
    </div>
    <sweet-modal v-if="modal" :width="modal.width" @close="modal = undefined" ref="modal" modal-theme="dark" overlay-theme="dark">
      <img :src="modal.source_url" alt=""/>
    </sweet-modal>
  </main>
</template>

<script>
import photo from './gallery/Photo.vue'
import { SweetModal } from 'sweet-modal-vue'
export default {
  name: 'gallery',
  data () {
    return {
      photos: [],
      block: 100,
      size: 25,
      offset: 0,
      modal: undefined
    }
  },
  beforeMount () {
    this.getPhotos()
  },
  methods: {
    getPhotos () {
      this.$http.get(this.$cms('photo', `per_page=${this.block}&offset=${this.offset}&orderby=title&order=asc`)).then(response => {
        this.photos = response.data
      }).catch(err => {
        console.log(err)
      })
    },
    openModal (target) {
      this.modal = target
      setTimeout(() => {
        this.$refs.modal.open()
      }, 100)
    }
  },
  components: {
    photo,
    SweetModal
  }
}
</script>
