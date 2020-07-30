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
      console.log('onloaededata', video.videoWidth, video.videoHeight);
      
      
      this.$facecanvas.setCanvasSize(video.videoWidth, video.videoHeight);

      this.$emit('onSizeChanged', video.videoWidth, video.videoHeight);
      
      this.loop(video);
    };

    this.$nuxt.$on('tryonMounted',()=>{      
      this.$emit('onSizeChanged', video.videoWidth, video.videoHeight);
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
