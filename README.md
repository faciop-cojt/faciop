# faciop-client

- 2020年度COJTで作成しているソフトのフロントエンド.
- Nuxt(typescript)で実装中…
- バックエンド
  - https://github.com/faciop-cojt/faciop-api
- フロントエンド
  - https://github.com/faciop-cojt/faciop-client
- 3Dモデルの試着部分の実装
  - https://github.com/faciop-cojt/faciop-face-detection-sandbox

## 資料

- 2020/07/31に[筑波大学COJTソフトウェアコース](http://www.cojt.or.jp/tkb/curriculum/index.html#c) 第12期春学期成果発表会にて発表.
  - 発表模様: [YouTube](https://youtu.be/c-l7xawEoDs?t=1905)
  - スライド: [SpeakerDeck](https://speakerdeck.com/drumath2237/zhu-bo-da-xue-cojt2020-facioppuroziekuto)
  - デモ: [Google Drive](https://drive.google.com/file/d/1uwJUxDpyV1RVoOSOfVYEbmSPYFgaPCMT/view?usp=sharing)

## 初めにやって

```bash
# 依存パッケージ入れる
$ yarn install

# サーバをlocalhost:3000に
$ yarn dev --port 3000

# GitHub Pagesへデプロイ
$ yarn run generate:gh-pages
$ yarn run deploy
```

# ページ案

- ワイヤフレーム
- どこまで実装できるんだろうね

![page_plot](https://raw.githubusercontent.com/faciop-cojt/faciop-client/master/page_plot_v3.png)
