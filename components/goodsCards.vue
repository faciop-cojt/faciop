<template>
  <div class="cards">
    <div v-for="row in items" :key="row.id" class="card">
      <b-card no-body img-alt="thumbnail" img-top class="mb-2 border-info">
        <nuxt-link :to="{ path: '/good', query: { dp: row.id } }">
          <b-card-img :src="row.thumbnail" />
        </nuxt-link>
        <b-card-body>
          <b-card-title>{{ row.name }}</b-card-title>
          <b-card-sub-title class="mb-2"> ￥{{ row.price }} </b-card-sub-title>
          <b-card-text>
            {{ stringToArray(row.description) }}
          </b-card-text>
          <nuxt-link :to="{ path: '/good', query: { dp: row.id } }">
            商品詳細
          </nuxt-link>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    stringToArray: arrStr => {
      return arrStr
        .replace(/[\[\]\"]/g, "")
        .split(",")
        .join("\n");
    }
  }
};
</script>
