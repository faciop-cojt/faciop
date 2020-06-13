<template>
  <div class="container">
    <h1>goods</h1>
    <ul>
      <li v-for="row in data">
        <details>
          <summary>{{ row.name }}</summary>
          <img :src="row.thumb" />
          <nuxt-link :to="{ path: '/good', query: { dp: row.goodsID } }">
            リンク
          </nuxt-link>
        </details>
      </li>
    </ul>
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

<style></style>
