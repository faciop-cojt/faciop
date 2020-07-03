<template>
  <div class="container">
    <h1>3Dデータの入稿</h1>
    <div class="debug">{{ $route.query.dp }}</div>
    <div class="form-group">
      <!-- .gltf, .glb -->
      <b-form-file
        @input="validateType"
        id="file-large"
        ref="file-input"
        v-model="file"
        :state="Boolean(file)"
        placeholder="3Dデータを選択(.gltf, .glb)"
        accept=".gltf, .glb"
      ></b-form-file>
      <b-button @click="upload" ref="submit-btn" disabled
        >アップロード！</b-button
      >
    </div>
    <!-- <b-form-select v-model="selectedItem" :options="options"> </b-form-select> -->
  </div>
</template>

<script>
import Path from "path";

export default {
  data() {
    return {
      file: []
    };
  },
  methods: {
    validateType: function(event) {
      var ext;
      try {
        ext = Path.extname(event.name);
      } catch (e) {
        console.log(e);
      }
      if (ext === ".gltf" || ext === ".glb") {
        //送信ボタン表示 or active
        this.$refs["submit-btn"].disabled = false;
      } else {
        //通知、選択解除
        // this.file = [];
        // this.$refs["file-input"].reset();
        alert(`ファイルの形式が間違ってそう
               直してね`);
        this.$refs["submit-btn"].disabled = true;
      }
    }
  }
};
</script>
