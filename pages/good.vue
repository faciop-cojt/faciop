<template>
  <div class="container">
    <h1>商品詳細</h1>
    <div>
      <b-img
        center
        :src="items.data.thumbnail"
        fluid
        alt="Center image"
      ></b-img>
    </div>
    <div class="mb-10">
      <b-list-group>
        <b-list-group-item>商品名: {{ items.data.name }}</b-list-group-item>
        <b-list-group-item
          >ショップ: {{ items.shopdata.name }}</b-list-group-item
        >
        <b-list-group-item>説明: {{ stringToArray }}</b-list-group-item>
        <b-list-group-item>価格: {{ items.data.price }}円</b-list-group-item>
        <b-list-group-item>
          <b-button variant="outline-info" :href="items.data.link"
            >購入サイトへ！(外部)</b-button
          >
        </b-list-group-item>
        <b-list-group-item v-if="hasData">
          <b-button
            variant="outline-success"
            :to="{ path: '/trying-on', query: { id: items.data.id } }"
            >試着する！</b-button
          >
        </b-list-group-item>
        <b-list-group-item v-else>
          <b-button
            variant="outline-danger"
            :to="{ path: '/upload', query: { dp: items.data.id } }"
            >入稿する！</b-button
          >
        </b-list-group-item>
        <b-list-group-item>
          <b-button variant="outline-secondary" :to="{ path: '/goods' }"
            >←商品一覧に戻る</b-button
          >
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "商品詳細"
    };
  },
  data() {
    return {
      items: [],
      dp: ""
    };
  },
  computed: {
    stringToArray: function() {
      return this.items.data.description
        .replace(/[\[\]\"]/g, "")
        .split(",")
        .join("\n");
    },
    hasData: function() {
      return this.items.data.data !== "";
    }
  },
  async asyncData({ app, query }) {
    const getUrl = `https://faciop-api.herokuapp.com/api/v1/goods/${query.dp}`;
    return await app.$axios.$get(getUrl).then(res => {
      console.log(res);
      return {
        items: res
      };
    });
  }
};
</script>
