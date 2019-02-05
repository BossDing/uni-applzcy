(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goodsDetails/goodsDetails"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/x1c/Desktop/lczy-app/lzcy/pages/goodsDetails/goodsDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






































































































































































































































































































var _uniIcon = _interopRequireDefault(__webpack_require__(/*! @/components/uni-icon/uni-icon.vue */ "C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\components\\uni-icon\\uni-icon.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  data: function data() {
    return {
      itemList: [
      '../../static/raw_1522116065.png',
      '../../static/raw_1522116070.png',
      '../../static/raw_1522116062.png'] };


  },
  components: {
    uniIcon: _uniIcon.default },

  methods: {
    back: function back() {
      uni.navigateBack({
        delta: 1 });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue?vue&type=style&index=0&id=222e4356&scoped=true&lang=stylus&ref=stylesheet%2Fstylus&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-1!./node_modules/css-loader??ref--11-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-3!./node_modules/stylus-loader??ref--11-oneOf-1-4!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/x1c/Desktop/lczy-app/lzcy/pages/goodsDetails/goodsDetails.vue?vue&type=style&index=0&id=222e4356&scoped=true&lang=stylus&ref=stylesheet%2Fstylus& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue?vue&type=template&id=222e4356&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/x1c/Desktop/lczy-app/lzcy/pages/goodsDetails/goodsDetails.vue?vue&type=template&id=222e4356&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: "content" }, [
    _c("view", { staticClass: "mianImageBox" }, [
      _c(
        "view",
        { staticClass: "operateBox" },
        [
          _c("uni-icon", {
            staticClass: "titleIcon",
            attrs: {
              type: "arrowleft",
              size: "30",
              eventid: "da28a616-0",
              mpcomid: "da28a616-0"
            },
            on: { click: _vm.back }
          }),
          _c("uni-icon", {
            staticClass: "titleIcon right",
            attrs: { type: "upload", size: "30", mpcomid: "da28a616-1" }
          })
        ],
        1
      ),
      _c(
        "view",
        { staticClass: "casual" },
        [
          _c(
            "swiper",
            {
              staticClass: "swiper-box",
              attrs: {
                "indicator-dots": "true",
                autoplay: "true",
                interval: "3000",
                duration: "500"
              }
            },
            _vm._l(_vm.itemList, function(item, index) {
              return _c(
                "swiper-item",
                {
                  key: index,
                  staticClass: "swiper",
                  attrs: { mpcomid: "da28a616-2-" + index }
                },
                [_c("image", { staticClass: "image", attrs: { src: item } })]
              )
            })
          )
        ],
        1
      ),
      _vm._m(0),
      _c("view", { staticClass: "goodsInfor" }, [
        _vm._m(1),
        _vm._m(2),
        _vm._m(3),
        _vm._m(4),
        _vm._m(5),
        _c("view", { staticClass: "brandStore" }, [
          _vm._m(6),
          _c("view", { staticClass: "goodgoods" }, [
            _c(
              "view",
              {
                staticClass: "recomend-goods-item2",
                attrs: { eventid: "da28a616-1" },
                on: { click: _vm.enterDetailsPage }
              },
              [
                _vm._m(7),
                _c("text", { staticClass: "des" }, [
                  _vm._v("MEDIHEAL美迪尔惠")
                ]),
                _c("text", { staticClass: "price" }, [_vm._v("$ 310")])
              ]
            ),
            _c(
              "view",
              {
                staticClass: "recomend-goods-item2",
                attrs: { eventid: "da28a616-2" },
                on: { click: _vm.enterDetailsPage }
              },
              [
                _vm._m(8),
                _c("text", { staticClass: "des" }, [
                  _vm._v("MEDIHEAL美迪尔惠")
                ]),
                _c("text", { staticClass: "price" }, [_vm._v("$ 310")])
              ]
            ),
            _c(
              "view",
              {
                staticClass: "recomend-goods-item2",
                attrs: { eventid: "da28a616-3" },
                on: { click: _vm.enterDetailsPage }
              },
              [
                _vm._m(9),
                _c("text", { staticClass: "des" }, [
                  _vm._v("MEDIHEAL美迪尔惠")
                ]),
                _c("text", { staticClass: "price" }, [_vm._v("$ 310")])
              ]
            ),
            _c(
              "view",
              {
                staticClass: "recomend-goods-item2",
                attrs: { eventid: "da28a616-4" },
                on: { click: _vm.enterDetailsPage }
              },
              [
                _vm._m(10),
                _c("text", { staticClass: "des" }, [
                  _vm._v("MEDIHEAL美迪尔惠")
                ]),
                _c("text", { staticClass: "price" }, [_vm._v("$ 310")])
              ]
            )
          ]),
          _c("view", { staticClass: "guessGoodsBox" }, [
            _vm._m(11),
            _vm._m(12),
            _vm._m(13),
            _c("view", { staticClass: "imgDetails" }, [
              _vm._m(14),
              _vm._m(15),
              _c(
                "view",
                { staticClass: "getMore" },
                [
                  _c("text", [_vm._v("展开")]),
                  _c("uni-icon", {
                    attrs: {
                      type: "arrowdown",
                      size: "30",
                      mpcomid: "da28a616-3"
                    }
                  })
                ],
                1
              ),
              _vm._m(16)
            ])
          ])
        ])
      ]),
      _vm._m(17)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "price" }, [
      _c("text", [_vm._v("￥169.00")]),
      _c("text", [_vm._v("单价￥56.4")]),
      _c("text", [_vm._v("特价")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "discountCard" }, [
      _c("text", [_vm._v("V")]),
      _c("text", [_vm._v("96折扣")]),
      _c("text", [_vm._v("黑卡下单再享96折")]),
      _c("text", [_vm._v("开卡 >")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "goodsdes" }, [
      _c("view", { staticClass: "choose-kinds" }, [
        _c("text", [_vm._v("1件装 | 单价79元")]),
        _c("text", { staticClass: "ex" }, [_vm._v("3件装 | 单件56.4元")])
      ]),
      _c("view", { staticClass: "goods-name" }, [
        _c("text", { staticClass: "self" }, [_vm._v("自营")]),
        _c("text", { attrs: { clas: "all-name" } }, [
          _vm._v("3件装 | MEDIHEAL 美迪惠尔 N.M.F针剂量水库保湿面膜 10片/盒")
        ]),
        _c("text", { staticClass: "details-des" }, [
          _vm._v(
            "韩国MBS/KBS/SBS三大电视台共同推荐！赴韩必买！NMF天然保湿因子强力补水，每敷一篇相当于做一次深层补水SPA。收缩毛孔，保湿锁水，晒后镇静都需要它！"
          )
        ])
      ]),
      _c("view", { staticClass: "other-des" }, [
        _c("view", { staticClass: "origin" }, [
          _c("image", {
            staticClass: "img",
            attrs: { src: "../../static/raw_1522223516.png", mode: "" }
          }),
          _c("text", [_vm._v("韩国品牌")])
        ]),
        _c("view", { staticClass: "method" }, [
          _c("image", { attrs: { src: "../../static/fly.png", mode: "" } }),
          _c("text", [_vm._v("跨境商品")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "deliverInfor" }, [
      _c("view", { staticClass: "to" }, [
        _c("text", { staticClass: "first" }, [_vm._v("配送")]),
        _c("text", { staticClass: "to" }, [_vm._v("至")]),
        _c("text", [_vm._v("广州荔湾区")]),
        _c("text", { staticClass: "icon" }, [_vm._v(">")])
      ]),
      _c("view", { staticClass: "freight" }, [
        _c("text", { staticClass: "first" }, [_vm._v("运费")]),
        _c("text", [_vm._v("免运费")]),
        _c("text", { staticClass: "icon" }, [_vm._v(">")])
      ]),
      _c("view", { staticClass: "intro" }, [
        _c("text", { staticClass: "first" }, [_vm._v("说明")]),
        _c("text", { staticClass: "des" }, [
          _vm._v("假一赔十 | 7天无忧退货 | 自营保税仓发货 | 黑卡会员96折")
        ]),
        _c("text", { staticClass: "icon" }, [_vm._v(">")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "remark" }, [
      _c("view", { staticClass: "remark-title" }, [
        _c("text", [_vm._v("商品评价 (38925)")]),
        _c("text", [_vm._v("好评 98.7%")]),
        _c("text", { staticClass: "icon" }, [_vm._v(">")])
      ]),
      _c("view", { staticClass: "remark-box" }, [
        _c("view", { staticClass: "remark-item" }, [
          _c("view", { staticClass: "left" }, [
            _c("view", { staticClass: "user-infor" }, [
              _c("image", {
                attrs: { src: "../../static/raw_1523146001.jpeg", mode: "" }
              }),
              _c("text", { staticClass: "user-name" }, [_vm._v("用户昵称")])
            ]),
            _c("text", { staticClass: "thought" }, [_vm._v("心得")]),
            _c("text", { staticClass: "thought-des" }, [
              _vm._v(
                "对于面膜来说，我一直觉得只要做好补水就是好的面膜了，这个面膜补水非常好！"
              )
            ])
          ]),
          _c("view", { staticClass: "img-box" }, [
            _c("image", {
              attrs: { src: "../../static/raw_1523146543.jpeg", mode: "" }
            })
          ])
        ]),
        _c("view", { staticClass: "remark-item" }, [
          _c("view", { staticClass: "left" }, [
            _c("view", { staticClass: "user-infor" }, [
              _c("image", {
                attrs: { src: "../../static/raw_1523146001.jpeg", mode: "" }
              }),
              _c("text", { staticClass: "user-name" }, [_vm._v("用户昵称")])
            ]),
            _c("text", { staticClass: "thought" }, [_vm._v("心得")]),
            _c("text", { staticClass: "thought-des" }, [
              _vm._v(
                "对于面膜来说，我一直觉得只要做好补水就是好的面膜了，这个面膜补水非常好！"
              )
            ])
          ]),
          _c("view", { staticClass: "img-box" }, [
            _c("image", {
              attrs: { src: "../../static/raw_1523146543.jpeg", mode: "" }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "ask" }, [
      _c("text", { staticClass: "ask-title" }, [
        _c("text", [_vm._v("问大家 (84)")]),
        _c("text", { staticClass: "icon" }, [_vm._v(">")])
      ]),
      _c("view", { staticClass: "ask-item" }, [
        _c("view", { staticClass: "text" }, [
          _c("text", { staticClass: "askS" }, [_vm._v("问")]),
          _c("text", { staticClass: "askW" }, [
            _vm._v("为什么和我在韩国买的不一样，面膜布质地...")
          ]),
          _c("text", { staticClass: "reply" }, [_vm._v("1个回答")])
        ]),
        _c("view", { staticClass: "text" }, [
          _c("text", { staticClass: "askS" }, [_vm._v("问")]),
          _c("text", { staticClass: "askW" }, [_vm._v("这个价格是三盒？")]),
          _c("text", { staticClass: "reply" }, [_vm._v("1个回答")])
        ]),
        _c("view", { staticClass: "text" }, [
          _c("text", { staticClass: "askS" }, [_vm._v("问")]),
          _c("text", { staticClass: "askW" }, [
            _vm._v("这个质量到底好不好？请告知一下")
          ]),
          _c("text", { staticClass: "reply" }, [_vm._v("1个回答")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "brand-title" }, [
      _c("image", {
        attrs: { src: "../../static/f27da758a86543d7.jpg", mode: "" }
      }),
      _c("view", { staticClass: "good-items" }, [
        _c("text", [_vm._v("MEDIHEAL 美迪惠尔")]),
        _c("text", [_vm._v("在售商品 69件")])
      ]),
      _c("text", { staticClass: "enter" }, [_vm._v("进入品牌")]),
      _c("text", { staticClass: "icon" }, [_vm._v(">")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "img-box" }, [
      _c("image", {
        attrs: { src: "../../static/raw_1521984570.png", mode: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "img-box" }, [
      _c("image", {
        attrs: { src: "../../static/raw_1523148325.png", mode: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "img-box" }, [
      _c("image", {
        attrs: { src: "../../static/raw_1523148325.png", mode: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "img-box" }, [
      _c("image", {
        attrs: { src: "../../static/raw_1523148325.png", mode: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "topBar" }, [
      _c("view", { staticClass: "active" }, [
        _c("text", { staticClass: "active" }, [_vm._v("相似推荐")])
      ]),
      _c("view", { staticClass: "normal" }, [
        _c("text", { staticClass: "normal" }, [_vm._v("同类热销排行")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "goodsContentBox" }, [
      _c("view", { staticClass: "goods-item" }, [
        _c("image", {
          attrs: { src: "../../static/raw_1523148325.png", mode: "" }
        }),
        _c("text", { staticClass: "goods-name" }, [
          _vm._v("美迪尔惠 N.M.F水润保湿面膜-玄彬面")
        ]),
        _c("text", { staticClass: "now-price" }, [_vm._v("￥85")])
      ]),
      _c("view", { staticClass: "goods-item" }, [
        _c("image", {
          attrs: { src: "../../static/raw_1523148325.png", mode: "" }
        }),
        _c("text", { staticClass: "goods-name" }, [
          _vm._v("美迪尔惠 N.M.F水润保湿面膜-玄彬面")
        ]),
        _c("text", { staticClass: "now-price" }, [_vm._v("￥85")])
      ]),
      _c("view", { staticClass: "goods-item" }, [
        _c("image", {
          attrs: { src: "../../static/raw_1523148325.png", mode: "" }
        }),
        _c("text", { staticClass: "goods-name" }, [
          _vm._v("美迪尔惠 N.M.F水润保湿面膜-玄彬面")
        ]),
        _c("text", { staticClass: "now-price" }, [_vm._v("￥85")])
      ]),
      _c("view", { staticClass: "goods-item" }, [
        _c("image", {
          attrs: { src: "../../static/raw_1523148325.png", mode: "" }
        }),
        _c("text", { staticClass: "goods-name" }, [
          _vm._v("美迪尔惠 N.M.F水润保湿面膜-玄彬面")
        ]),
        _c("text", { staticClass: "now-price" }, [_vm._v("￥85")])
      ]),
      _c("view", { staticClass: "goods-item" }, [
        _c("image", {
          attrs: { src: "../../static/raw_1523148325.png", mode: "" }
        }),
        _c("text", { staticClass: "goods-name" }, [
          _vm._v("美迪尔惠 N.M.F水润保湿面膜-玄彬面")
        ]),
        _c("text", { staticClass: "now-price" }, [_vm._v("￥85")])
      ]),
      _c("view", { staticClass: "goods-item" }, [
        _c("image", {
          attrs: { src: "../../static/raw_1523148325.png", mode: "" }
        }),
        _c("text", { staticClass: "goods-name" }, [
          _vm._v("美迪尔惠 N.M.F水润保湿面膜-玄彬面")
        ]),
        _c("text", { staticClass: "now-price" }, [_vm._v("￥85")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "button-box" }, [
      _c("text", { staticClass: "details" }, [_vm._v("图文详情")]),
      _c("text", [_vm._v("购买咨询")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "imgDetails-title" }, [
      _c("text", [_vm._v("图文详情")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "productsBox" }, [
      _c("text", { staticClass: "infor" }, [_vm._v("产品信息")]),
      _c("view", { staticClass: "origin" }, [
        _c("view", { staticClass: "infor-items" }, [
          _c("text", [_vm._v("质地")]),
          _c("text", [_vm._v("水状")])
        ]),
        _c("view", { staticClass: "infor-items" }, [
          _c("text", [_vm._v("品名")]),
          _c("text", [_vm._v("蜂蜜补水保湿面膜")])
        ]),
        _c("view", { staticClass: "infor-items" }, [
          _c("text", [_vm._v("保质期")]),
          _c("text", [_vm._v("3年")])
        ]),
        _c("view", { staticClass: "infor-items" }, [
          _c("text", [_vm._v("试用部位")]),
          _c("text", [_vm._v("面部")])
        ]),
        _c("view", { staticClass: "infor-items" }, [
          _c("text", [_vm._v("试用群体")]),
          _c("text", [_vm._v("中性")])
        ]),
        _c("view", { staticClass: "infor-items" }, [
          _c("text", [_vm._v("功能")]),
          _c("text", [_vm._v("补水温润 湿润")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "brandAuth" }, [
      _c("text", [_vm._v("品牌")]),
      _c("text", [_vm._v("授权")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "shoppingCarBox" }, [
      _c("view", { staticClass: "collection" }, [
        _c("image", { attrs: { src: "../../static/like.png", mode: "" } }),
        _c("text", { staticClass: "collection-text" }, [_vm._v("收藏")])
      ]),
      _c("view", { staticClass: "shoppingCar" }, [
        _c("image", {
          attrs: { src: "../../static/shoppingCar.png", mode: "" }
        }),
        _c("text", { staticClass: "shoppingCar-text" }, [_vm._v("购物车")])
      ]),
      _c("text", { staticClass: "add" }, [_vm._v("加入购物车")]),
      _c("text", { staticClass: "buy" }, [_vm._v("立即购买")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\main.js?{\"page\":\"pages%2FgoodsDetails%2FgoodsDetails\"}":
/*!*************************************************************************************************!*\
  !*** C:/Users/x1c/Desktop/lczy-app/lzcy/main.js?{"page":"pages%2FgoodsDetails%2FgoodsDetails"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _goodsDetails = _interopRequireDefault(__webpack_require__(/*! ./pages/goodsDetails/goodsDetails.vue */ "C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_goodsDetails.default));

/***/ }),

/***/ "C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue":
/*!******************************************************************************!*\
  !*** C:/Users/x1c/Desktop/lczy-app/lzcy/pages/goodsDetails/goodsDetails.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goodsDetails_vue_vue_type_template_id_222e4356_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goodsDetails.vue?vue&type=template&id=222e4356&scoped=true& */ "C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue?vue&type=template&id=222e4356&scoped=true&");
/* harmony import */ var _goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goodsDetails.vue?vue&type=script&lang=js& */ "C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goodsDetails_vue_vue_type_style_index_0_id_222e4356_scoped_true_lang_stylus_ref_stylesheet_2Fstylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goodsDetails.vue?vue&type=style&index=0&id=222e4356&scoped=true&lang=stylus&ref=stylesheet%2Fstylus& */ "C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue?vue&type=style&index=0&id=222e4356&scoped=true&lang=stylus&ref=stylesheet%2Fstylus&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goodsDetails_vue_vue_type_template_id_222e4356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goodsDetails_vue_vue_type_template_id_222e4356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "222e4356",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/x1c/Desktop/lczy-app/lzcy/pages/goodsDetails/goodsDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** C:/Users/x1c/Desktop/lczy-app/lzcy/pages/goodsDetails/goodsDetails.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./goodsDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue?vue&type=style&index=0&id=222e4356&scoped=true&lang=stylus&ref=stylesheet%2Fstylus&":
/*!******************************************************************************************************************************************************************!*\
  !*** C:/Users/x1c/Desktop/lczy-app/lzcy/pages/goodsDetails/goodsDetails.vue?vue&type=style&index=0&id=222e4356&scoped=true&lang=stylus&ref=stylesheet%2Fstylus& ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_11_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_style_index_0_id_222e4356_scoped_true_lang_stylus_ref_stylesheet_2Fstylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-1!./node_modules/css-loader??ref--11-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--11-oneOf-1-3!./node_modules/stylus-loader??ref--11-oneOf-1-4!./node_modules/vue-loader/lib??vue-loader-options!./goodsDetails.vue?vue&type=style&index=0&id=222e4356&scoped=true&lang=stylus&ref=stylesheet%2Fstylus& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue?vue&type=style&index=0&id=222e4356&scoped=true&lang=stylus&ref=stylesheet%2Fstylus&");
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_11_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_style_index_0_id_222e4356_scoped_true_lang_stylus_ref_stylesheet_2Fstylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_11_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_style_index_0_id_222e4356_scoped_true_lang_stylus_ref_stylesheet_2Fstylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_11_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_style_index_0_id_222e4356_scoped_true_lang_stylus_ref_stylesheet_2Fstylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_11_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_style_index_0_id_222e4356_scoped_true_lang_stylus_ref_stylesheet_2Fstylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_11_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_style_index_0_id_222e4356_scoped_true_lang_stylus_ref_stylesheet_2Fstylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue?vue&type=template&id=222e4356&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/x1c/Desktop/lczy-app/lzcy/pages/goodsDetails/goodsDetails.vue?vue&type=template&id=222e4356&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_template_id_222e4356_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./goodsDetails.vue?vue&type=template&id=222e4356&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\pages\\goodsDetails\\goodsDetails.vue?vue&type=template&id=222e4356&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_template_id_222e4356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goodsDetails_vue_vue_type_template_id_222e4356_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\x1c\\Desktop\\lczy-app\\lzcy\\main.js?{\"page\":\"pages%2FgoodsDetails%2FgoodsDetails\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goodsDetails/goodsDetails.js.map