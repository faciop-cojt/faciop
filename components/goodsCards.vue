<template>
  <div class="cards">
    <div v-for="row in items" :key="row.id" class="card">
      <b-card
        :title="row.name"
        :img-src="row.thumbnail"
        img-alt="thumbnail"
        img-top
        class="mb-2"
      >
        <b-card-text>
          {{ stringToArray(row.description) }}
        </b-card-text>
        <nuxt-link :to="{ path: '/good', query: { dp: row.id } }">
          リンク
        </nuxt-link>
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
