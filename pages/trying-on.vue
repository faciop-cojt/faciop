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
    const item_id = this.$route.query.id;
    fetch('https://immense-brook-99073.herokuapp.com/api/v1/goods/'+ item_id)
    .then(res=>{
      if(res.ok){
        return res.json()
      }
    })
    .then(data=>{
      const path:string = 'https://immense-brook-99073.herokuapp.com' + data.data.data;
      // console.log(data.data.data);
      this.$facecanvas.itemObjectLoad(path);
      
    })
    .catch(err=>{
      console.log(err);
      
    })
  }
})
</script>