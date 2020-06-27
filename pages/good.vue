<template>
  <div class="container">
    <div>
      <b-img center :src="items.data.thumbnail" alt="Center image"></b-img>
    </div>
    <div>
      {{ items }}
      <b-list-group>
        <b-list-group-item>商品名: {{ items.data.name }}</b-list-group-item>
        <b-list-group-item
          >ショップID: {{ items.data.shopid }}</b-list-group-item
        >
        <b-list-group-item
          >説明: {{ items.data.description }}</b-list-group-item
        >
        <b-list-group-item
          >購入サイトへ！(外部): {{ items.data.link }}</b-list-group-item
        >
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      dp: ""
    };
  },
  // created() {
  //   this.setQuery()
  // },
  // methods: {
  //   setQuery() {
  //     this.dp = this.$route.query.dp || ''
  //   },
  // },
  async asyncData({ app, query }) {
    //goodIDを指定して単体のデータが取ってこれるといいなあ
    const getUrl = `https://immense-brook-99073.herokuapp.com/api/v1/goods/${query.dp}`;
    return await app.$axios.$get(getUrl).then(res => {
      console.log(res);
      return {
        items: res
      };
    });
  }
};
</script>
