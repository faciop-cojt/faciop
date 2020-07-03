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
        <!-- 検索条件の変更毎にmethodを呼んでitemsを更新 -->
        <div>
          <b-dropdown id="dropdown-1" text="検索フィルタ" class="m-md-2">
            <b-dropdown-item>3Dデータ未入稿</b-dropdown-item>
            <b-dropdown-item>試着可能</b-dropdown-item>
            <b-dropdown-item></b-dropdown-item>
          </b-dropdown>
        </div>
        <div>
          <b-dropdown id="dropdown-2" text="カテゴリ" class="m-md-2">
            <b-dropdown-item>メガネ</b-dropdown-item>
            <!-- <b-dropdown-item>ピアス・イヤリング</b-dropdown-item> -->
            <b-dropdown-item>帽子</b-dropdown-item>
            <b-dropdown-item>マスク</b-dropdown-item>
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
    <!-- <div class="pagination">
      <div class="total">ページ {{ page }}/{{ totalPage }}</div>
    </div> -->
    <GoodsCards :items="searchKeyword" />
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
      keyword: "",
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
    }
  },
  //算出プロパティ, レンダリング前に内部的なデータを処理して返す
  computed: {
    filterItems: function() {
      // console.log(this.items.data);
      return this.items.data.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
    //キーワードに応じてitemsに破壊的な変更
    searchKeyword: function() {
      var hits = this.items.data;
      var newhits;
      if (this.keyword !== "") {
        newhits = hits.filter(item => {
          return (
            Object.values(item)
              .toString()
              .indexOf(this.keyword) !== -1
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
