<template>
  <div class="container">
    <h1>商品一覧</h1>
    <!-- <div class="pagination">
      <div class="total">ページ {{ page }}/{{ totalPage }}</div>
    </div> -->
    <GoodsCards :items="items" />
  </div>
</template>

<script>
import GoodsCards from "@/components/goodsCards.vue";

export default {
  components: {
    GoodsCards
  },
  data() {
    return {
      items: [],
      page: 1,
      perPage: 10
    };
  },
  async asyncData({ app }) {
    const getUrl = "https://immense-brook-99073.herokuapp.com/api/v1/goods/";
    const response = await app.$axios.$get(getUrl);
    console.log(response);
    return {
      items: response
      // totalPage: Math.ceil(response.length / 10),
      // count: response.length
    };
  },
  //メソッド, ページレンダリングの中で使用
  //算出プロパティ, レンダリング前に内部的なデータを処理して返す
  computed: {
    filterItems() {
      console.log(this.items.data);
      return this.items.data.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    }
  }
};
</script>

<style scoped></style>
