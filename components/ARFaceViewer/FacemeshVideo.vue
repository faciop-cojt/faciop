<template>
  <div>
    <video src="" id="face-video" ref="video"></video>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {
    let video = <HTMLVideoElement>this.$refs.video;
    this.$facemeshVideo.initVideoObject(video);

    video.onloadeddata = ev => {
      this.$facecanvas.setCanvasSize(video.clientWidth, video.clientHeight);

      this.$emit('onSizeChanged', video.clientWidth, video.clientHeight);
      
      this.loop(video);
    };

    this.$nuxt.$on('tryonMounted',()=>{
      console.log('on facemesh video emitted', video.clientWidth, video.clientHeight);
      
      this.$emit('onSizeChanged', video.clientWidth, video.clientHeight);
    })
  },
  methods: {
    loop(video: HTMLVideoElement) {
      this.$facemeshProvider.getFacemeshPointsAsync(video)
      .then(prediction=>{
        this.$facecanvas.setFaceData(prediction[0]);
      })
      requestAnimationFrame(()=>this.loop(video))
    }
  }
});
</script>

<style lang="scss" scoped></style>
