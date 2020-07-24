<template>
  <div class="viewer-wrapper">
      <facemesh-video class="viewer-element video" v-show="isVisible"/>
      <three-canvas class="viewer-element canvas" v-show="isVisible"/>
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

<style lang="scss" scoped>
.viewer-wrapper {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
  // margin: 0 auto;
  position: relative;
  // width: 100%;

  .viewer-element {
    position: absolute;
    // margin: 0 auto;
  }

}
</style>