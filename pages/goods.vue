<template>
  <div class="container">
    <h1>商品一覧</h1>
    <div class="form-group">
      <div>
        <b-form-input
          v-model="keyword"
          placeholder="キーワード検索"
        ></b-form-input>
      </div>
      <div class="btn-group">
        <div>
          <b-dropdown id="dropdown-1" text="検索フィルタ" class="m-md-2">
            <b-dropdown-item @click="uploadByFilter(`all`)"
              >すべて</b-dropdown-item
            >
            <b-dropdown-item @click="uploadByFilter(`uploaded`)"
              >試着可能</b-dropdown-item
            >
            <b-dropdown-item @click="uploadByFilter(`yet_uploaded`)"
              >3Dデータ未入稿</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <div>
          <b-dropdown id="dropdown-2" text="カテゴリ" class="m-md-2">
            <b-dropdown-item @click="categoryByFilter(`all`)"
              >すべて</b-dropdown-item
            >
            <b-dropdown-item @click="categoryByFilter(`grass`)"
              >メガネ</b-dropdown-item
            >
            <b-dropdown-item @click="categoryByFilter(`hat`)"
              >帽子</b-dropdown-item
            >
            <b-dropdown-item @click="categoryByFilter(`mask`)"
              >マスク</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <div>
          <b-dropdown
            id="dropdown-3"
            text="表示順"
            class="m-md-2"
            @change="sortByFilter"
          >
            <b-dropdown-item @click="sortByFilter(`price_desc`)"
              >価格が安い順</b-dropdown-item
            >
            <b-dropdown-item @click="sortByFilter(`price_asc`)"
              >価格が高い順</b-dropdown-item
            >
            <b-dropdown-item @click="sortByFilter(`date_desc`)"
              >発売が新しい順</b-dropdown-item
            >
            <b-dropdown-item @click="sortByFilter(`date_asc`)"
              >発売が古い順</b-dropdown-item
            >
          </b-dropdown>
        </div>
      </div>
    </div>
    <GoodsCards :items="searchKeyword" />
  </div>
</template>

<script>
import GoodsCards from "@/components/goodsCards.vue";

export default {
  components: {
    GoodsCards
  },
  head() {
    return {
      title: "商品一覧"
    };
  },
  data() {
    return {
      keyword: "",
      items: [],
      o_items: []
    };
  },
  async asyncData({ app }) {
    const getUrl = "https://faciop-api.herokuapp.com/api/v1/goods/";
    const response = await app.$axios.$get(getUrl);
    console.log(response);
    return {
      items: response,
      o_items: JSON.parse(JSON.stringify(response))
    };
  },
  //メソッド, ページレンダリングの中で使用
  methods: {
    sortByFilter: function(filter) {
      console.log(filter);
      switch (filter) {
        case "price_desc":
          this.items.data.sort(function(a, b) {
            if (a.price < b.price) return -1;
            if (a.price > b.price) return 1;
            return 0;
          });
          break;
        case "price_asc":
          this.items.data.sort(function(a, b) {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
            return 0;
          });
          break;
        case "date_asc":
          this.items.data.sort(function(a, b) {
            if (a.created_at > b.created_at) return -1;
            if (a.created_at < b.created_at) return 1;
            return 0;
          });
          break;
        case "date_asc":
          this.items.data.sort(function(a, b) {
            if (a.created_at > b.created_at) return 1;
            if (a.created_at < b.created_at) return -1;
            return 0;
          });
          break;
      }
    },
    categoryByFilter: function(filter) {
      const a = this.o_items.data;

      switch (filter) {
        case "all":
          console.log(this.o_items.data);
          this.items.data = a;
          break;
        case "grass":
          console.log(this.o_items.data);
          this.items.data = a.filter(d => d.category === "メガネ");
          break;
        case "hat":
          console.log(this.o_items.data);
          this.items.data = a.filter(d => d.category === "帽子");
          break;
        case "mask":
          console.log(this.o_items.data);
          this.items.data = a.filter(d => d.category === "マスク");
          break;
      }
    },
    uploadByFilter: function(filter) {
      const a = this.o_items.data;

      switch (filter) {
        case "all":
          console.log(this.o_items.data);
          this.items.data = a;
          break;
        case "uploaded":
          console.log(this.o_items.data);
          this.items.data = a.filter(d => d.data !== "");
          break;
        case "yet_uploaded":
          console.log(this.o_items.data);
          this.items.data = a.filter(d => d.data === "");
          break;
      }
    }
  },
  //算出プロパティ, レンダリング前に内部的なデータを処理して返す
  computed: {
    //キーワードに応じてitemsに破壊的な変更
    searchKeyword: function() {
      var hits = this.items.data;
      var newhits;
      if (this.keyword !== "") {
        const regexp = new RegExp(this.keyword, "i");
        newhits = hits.filter(item => {
          return (
            Object.values(item)
              .toString()
              .match(regexp) !== null
          );
        });
        return newhits;
      } else {
        return hits;
      }
    }
  }
};
</script>

<style scoped>
h1 {
  top: 20px;
  bottom: 20px;
}
.form-group {
  bottom: 20px;
}
</style>
