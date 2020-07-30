<template>
  <div class="container">
    <!-- <h1>試着する！</h1> -->
    <div></div>
    <b-button
      variant="outline-secondary"
      class="mb-3"
      :to="{ path: '/good', query: { dp: $route.query.id } }"
      >←商品詳細へ戻る</b-button
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "試着する！"
    };
  },
  created() {
    this.$store.dispatch("FaceViewer/changeViewerVisible");
  },
  mounted() {
    const item_id = this.$route.query.id;
    fetch("https://faciop-api.herokuapp.com/api/v1/goods/" + item_id)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(data => {
        const path: string =
          "https://faciop-api.herokuapp.com" + data.data.data;
        // console.log(data.data.data);
        this.$facecanvas.itemObjectLoad(path);
      })
      .catch(err => {
        console.log(err);
      });

    this.$nuxt.$emit("tryonMounted");
  },
  destroyed() {
    this.$store.dispatch("FaceViewer/changeViewerInvisible");
  }
});
</script>
