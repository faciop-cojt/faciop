<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <img class="logo" src="@/assets/logos/logo.png" />
      <!-- <h1 class="title">faciop-client</h1> -->
      <h2 class="subtitle">
          Let's try it on on the web!
          Web上で試着しよう!
      </h2>
      <div class="links">
         <nuxt-link
            :to="{ path: '/goods'}"
             class="button--green"
          >
          商品一覧へ
          </nuxt-link>
        <!-- <a href="/goods" target="_blank" class="button--green">
          商品一覧へ
        </a> -->
        <a
          href="https://github.com/faciop-cojt"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from "@/components/Logo.vue";

export default Vue.extend({
  components: {
    Logo
  }
});
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.logo {
  width: 200px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
