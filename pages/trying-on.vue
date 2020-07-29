<template>
  <div>
    <ar-face-viewer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ArFaceViewer from '~/components/ARFaceViewer/ArFaceViewer.vue'

export default Vue.extend({
  components: {
    ArFaceViewer
  },
  mounted() {
    this.$facecanvas.itemObjectLoad('./glasses.glb')
  }
})
</script>