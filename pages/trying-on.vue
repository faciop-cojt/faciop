<template>
  <div class="container">
    <!-- <h1>試着する！</h1> -->
    <div></div>
    <div class="text-center">
      <b-button
        variant="outline-secondary"
        class="mb-3 mt-3"
        :to="{ path: '/good', query: { dp: $route.query.id } }"
        >←商品詳細に戻る</b-button
      >
      <!-- 商品リンク -->
      <b-button variant="outline-info" class="mb-3 mt-3" :href="link"
        >購入サイトへ！(外部)</b-button
      >
      <!-- 商品一覧へ戻る -->
      <b-button
        variant="outline-success"
        class="mb-3 mt-3"
        :to="{ path: '/goods' }"
        >商品一覧に戻る</b-button
      >
    </div>
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
  data() {
    return {
      link: ""
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
        // console.log(data.data);
        this.link = data.data.link;
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
