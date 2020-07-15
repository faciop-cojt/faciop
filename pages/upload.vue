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
      <b-button @click="upload($route.query.dp)" ref="submit-btn" disabled
        >アップロード！</b-button
      >
    </div>
    <!-- <b-form-select v-model="selectedItem" :options="options"> </b-form-select> -->
  </div>
</template>

<script>
import Path from "path";
import axios from 'axios';

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
        alert(`ファイルの形式が間違ってそう
               直してね`);
        this.$refs["submit-btn"].disabled = true;
      }
    },
    upload: function(id){
      // curl -F 'goodid={id}' -F 'data=@{this.file}' {end}
    const end = 'https://immense-brook-99073.herokuapp.com/api/v1/model/';
    axios.post(end, {
      params: {
        "goodid": id,
        "data": this.file
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });  
    }
  }
};
</script>
