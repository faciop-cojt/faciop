<template>
  <div class="container">
    <h1>商品一覧</h1>
    <!-- <div class="pagination">
      <div class="total">ページ {{ page }}/{{ totalPage }}</div>
    </div> -->
    <!-- <div class="cards"> -->
      <div v-for="row in items.data" :key="row.goodsID" class="card">
        <b-card
          :title="row.name"
          :img-src="row.thumbnail"
          img-alt="thumbnail"
          img-top
          tag="good"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            {{ row.description }}
          </b-card-text>
          <nuxt-link :to="{ path: '/good', query: { dp: row.id } }">
            リンク
          </nuxt-link>
        </b-card>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
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
  }
};
//   computed: {
//     filterItems() {
//       console.log(this.items.data);
//       return this.items.data.slice(
//         (this.page - 1) * this.perPage,
//         this.page * this.perPage
//       );
//     }
//   }
// };
</script>

<style scoped></style>
