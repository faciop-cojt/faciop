(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{268:function(t,e,n){"use strict";n.r(e);n(56);var r=n(20),o=(n(13),n(19),{head:function(){return{title:"商品詳細"}},data:function(){return{items:[],dp:""}},computed:{stringToArray:function(){return this.items.data.description.replace(/[\[\]\"]/g,"").split(",").join("\n")},hasData:function(){return""!==this.items.data.data}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,r=t.query,o="https://faciop-api.herokuapp.com/api/v1/goods/".concat(r.dp),e.next=4,n.$axios.$get(o).then((function(t){return console.log(t),{items:t}}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))()}}),c=n(26),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("商品詳細")]),t._v(" "),n("div",[n("b-img",{attrs:{center:"",src:t.items.data.thumbnail,fluid:"",alt:"Center image"}})],1),t._v(" "),n("div",{staticClass:"mb-10"},[n("b-list-group",[n("b-list-group-item",[t._v("商品名: "+t._s(t.items.data.name))]),t._v(" "),n("b-list-group-item",[t._v("ショップ: "+t._s(t.items.shopdata.name))]),t._v(" "),n("b-list-group-item",[t._v("説明: "+t._s(t.stringToArray))]),t._v(" "),n("b-list-group-item",[t._v("価格: "+t._s(t.items.data.price)+"円")]),t._v(" "),n("b-list-group-item",[n("b-button",{attrs:{variant:"outline-info",href:t.items.data.link}},[t._v("購入サイトへ！(外部)")])],1),t._v(" "),t.hasData?n("b-list-group-item",[n("b-button",{attrs:{variant:"outline-success",to:{path:"/trying-on",query:{id:t.items.data.id}}}},[t._v("試着する！")])],1):n("b-list-group-item",[n("b-button",{attrs:{variant:"outline-danger",to:{path:"/upload",query:{dp:t.items.data.id}}}},[t._v("入稿する！")])],1),t._v(" "),n("b-list-group-item",[n("b-button",{attrs:{variant:"outline-secondary",to:{path:"/goods"}}},[t._v("←商品一覧に戻る")])],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);