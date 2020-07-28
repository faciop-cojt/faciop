<template>
  <b-overlay :show="loading" rounded="sm">
    <div class="container">
      <h1>3Dデータの入稿</h1>
      <div class="debug">ID: {{ $route.query.dp }}</div>
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
        <b-button @click="upload($route.query.dp)" ref="submit-btn" disabled>
          アップロード！
        </b-button>
      </div>
      <b-link :to="{ path: '/good', query: { dp: $route.query.dp } }">
        ←商品詳細へ戻る
      </b-link>
    </div>
  </b-overlay>
</template>

<script>
import Path from "path";
import axios from "axios";

export default {
  head() {
    return {
      title: "3Dデータ入稿"
    };
  },
  data() {
    return {
      file: [],
      loading: false
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
    upload: async function(id) {
      // curl -F 'goodid=12' -F 'data=@glasses.glb' \
      // https://immense-brook-99073.herokuapp.com/api/v1/model/
      const end = "https://immense-brook-99073.herokuapp.com/api/v1/model/";
      // 入稿できたらgoodにリダイレクト
      // できなかったら同じところ
      this.loading = true;
      let params = new FormData();
      params.append("goodid", id);
      params.append("data", this.file);
      const uploadOK = await axios
        .post(end, params, {
          headers: {
            "content-type": "multipart/form-data",
            Accept: "*/*"
          }
        })
        .then(function(response) {
          if (response.status == 200) {
            return true;
          }
        })
        .catch(function(error) {
          // エラーメッセージ
          alert(`ファイル入稿通信時エラー`);
          return false;
        });
      // .finally(function(){
      //   console.log(uploadOK)
      // })
      console.log(uploadOK);
      if (uploadOK) {
        this.$router.push(`/good?dp=${id}`, () => {});
      } else {
        this.loading = false;
        alert(`エラー`);
      }
    }
  }
};
</script>

<style scoped></style>
