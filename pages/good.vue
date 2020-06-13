<template>
<div class="container">
    <div>
        {{pid}}
        {{parseInt($route.query.dp)}}
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      pid: 1
    };
  },
//   asyncData (context) {
//     console.log(context);
//     return { pid: context.query.dp }
//   },
  async asyncData({ app }) {
    //goodIDを指定して単体のデータが取ってこれるといいなあ
    const getUrl =
      "https://gist.githubusercontent.com/eggplants/c496181ddc8e88f9742e40b9aaebf21f/raw/522e3631111424cf44dc9fbf4cdf6e7e99a07228/goods.json";
    const response = await app.$axios.$get(getUrl);
    console.log(response);
    return {
      data: response
    };
  }
};
}