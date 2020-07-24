<template>
  <div>
      <three-canvas v-show="isVisible"/>
      <facemesh-video v-show="isVisible"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FacemeshVideo from '~/components/ARFaceViewer/FacemeshVideo.vue'
import ThreeCanvas from '~/components/ARFaceViewer/ThreeCanvas.vue'

export default Vue.extend({
  components: {
    FacemeshVideo,
    ThreeCanvas
  },
  data() {
    return {
      isVisible: true
    }
  }
})
</script>