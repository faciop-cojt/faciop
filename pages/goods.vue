<template>
  <div class="container">
    <h1>商品一覧</h1>
    <div class="cards">
      <div v-for="row in data" :key="row.goodsID" class="card center-block">
        <b-card
          :title="row.name"
          :img-src="row.thumb"
          img-alt="thumbnail"
          img-top
          tag="good"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            ここに説明文
          </b-card-text>
          <nuxt-link :to="{ path: '/good', query: { dp: row.goodsID } }">
            リンク
          </nuxt-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  async asyncData({ app }) {
    const getUrl =
      "https://gist.githubusercontent.com/eggplants/c496181ddc8e88f9742e40b9aaebf21f/raw/522e3631111424cf44dc9fbf4cdf6e7e99a07228/goods.json";
    const response = await app.$axios.$get(getUrl);
    console.log(response);
    return {
      data: response
    };
  }
};
</script>

<style scoped></style>
