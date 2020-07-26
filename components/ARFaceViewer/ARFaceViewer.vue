<template>
  <div class="viewer-wrapper" :style="wrapperSize">
    <facemesh-video
      class="viewer-element video"
      v-show="isVisible"
      ref="videoElement"
      v-on:onSizeChanged="videoSizeChanged"
    />
    <three-canvas
      class="viewer-element canvas"
      v-show="isVisible"
      ref="canvasElement"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FacemeshVideo from "~/components/ARFaceViewer/FacemeshVideo.vue";
import ThreeCanvas from "~/components/ARFaceViewer/ThreeCanvas.vue";
import { log, any } from "@tensorflow/tfjs-core";

export default Vue.extend({
  components: {
    FacemeshVideo,
    ThreeCanvas
  },
  data() {
    return {
      isVisible: true,
      wrapperSize: {
        width: "0px",
        height: "0px"
      }
    };
  },
  mounted() {
    console.log(this.$route.name, this.$route.query.id);
  },
  methods: {
    videoSizeChanged(w: number, h: number): void {

      this.wrapperSize = {
        width: w + "px",
        height: h + "px"
      };
    }
  }
});
</script>

<style lang="scss" scoped>
.viewer-wrapper {
  margin: 0 auto;
  position: relative;

  .viewer-element {
    position: absolute;
  }
}
</style>
