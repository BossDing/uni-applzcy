require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([12],{100:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a(102),e=a.n(i),c=a(103);var r=function(t){a(101)},o=a(0)(e.a,c.a,r,"data-v-41c5d2a9",null);s.default=o.exports},101:function(t,s){},102:function(t,s,a){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0});var i,e=a(3),c=(i=e)&&i.__esModule?i:{default:i};s.default={components:{uniIcon:c.default},methods:{toRecommend:function(){t.navigateTo({url:"../QRCode/QRCode"})},alterPassword:function(){t.navigateTo({url:"../phone-verification/phone-verification"})},back:function(){t.navigateBack({delta:1})},logOut:function(){t.navigateTo({url:"../register/register"})}}}}).call(s,a(2).default)},103:function(t,s,a){"use strict";var i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("view",{staticClass:"content"},[a("view",{staticClass:"setting-tittle-box",attrs:{eventid:"nNs-0"},on:{click:t.back}},[a("uni-icon",{staticClass:"arrow_right",attrs:{type:"arrowleft",size:"30",mpcomid:"We7-0"}}),a("text",[t._v("设置")])],1),a("view",{staticClass:"main-content"},[a("view",{staticClass:"photo-box"},[a("text",{staticClass:"photo"},[t._v("头像")]),a("image",{attrs:{src:"../../static/user.png",mode:""}}),a("uni-icon",{staticClass:"arrowRight",attrs:{type:"arrowright",size:"30",mpcomid:"ohQ-1"}})],1),a("view",{staticClass:"nickname-box"},[a("text",{staticClass:"nickname"},[t._v("昵称")]),a("text",{staticClass:"nickname_"},[t._v("xxxxx")]),a("uni-icon",{staticClass:"arrowRight",attrs:{type:"arrowright",size:"30",mpcomid:"Rnb-2"}})],1),a("view",{staticClass:"name-box"},[a("text",{staticClass:"name"},[t._v("姓名")]),a("text",{staticClass:"name_"},[t._v("xxxxx")]),a("uni-icon",{staticClass:"arrowRight",attrs:{type:"arrowright",size:"30",mpcomid:"TlY-3"}})],1),a("view",{staticClass:"ID-box"},[a("text",{staticClass:"ID"},[t._v("身份证号码")]),a("text",[t._v("61232XXXXXXXXX0145")]),a("uni-icon",{staticClass:"arrowRight",attrs:{type:"arrowright",size:"30",mpcomid:"eRC-4"}})],1),a("view",{staticClass:"phone-box"},[a("text",{staticClass:"phone"},[t._v("手机号")]),a("text",[t._v("13111111111")]),a("uni-icon",{staticClass:"arrowRight",attrs:{type:"arrowright",size:"30",mpcomid:"gu5-5"}})],1),t._m(0),a("view",{staticClass:"record-box"},[a("text",{staticClass:"record"},[t._v("我的记录")]),a("uni-icon",{staticClass:"arrowRight",attrs:{type:"arrowright",size:"30",mpcomid:"ltN-6"}})],1),t._m(1),a("view",{staticClass:"recommend-box",attrs:{eventid:"nNs-1"},on:{click:t.toRecommend}},[a("text",{staticClass:"recommend"},[t._v("推荐给朋友")]),a("uni-icon",{staticClass:"arrowRight",attrs:{type:"arrowright",size:"30",mpcomid:"0Yw-7"}})],1),a("view",{staticClass:"alter-box",attrs:{eventid:"qEi-2"},on:{click:t.alterPassword}},[a("text",{staticClass:"alter"},[t._v("修改登录密码")]),a("uni-icon",{staticClass:"arrowRight",attrs:{type:"arrowright",size:"30",mpcomid:"E45-8"}})],1),a("view",{staticClass:"about-me-box"},[a("text",{staticClass:"about"},[t._v("关于我们")]),a("text",[t._v("版本1.0.1")]),a("uni-icon",{staticClass:"arrowRight",attrs:{type:"arrowright",size:"30",mpcomid:"luR-9"}})],1)]),a("view",{staticClass:"log-out-box",attrs:{eventid:"BzW-3"},on:{click:t.logOut}},[a("text",[t._v("退出登录")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"news-box"},[s("text",{staticClass:"news"},[this._v("消息推送设置")]),s("view",{staticClass:"btn-box"},[s("text",{staticClass:"btnB"}),s("text",{staticClass:"btnS"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"share-box"},[s("view",{staticClass:"share"},[s("text",{staticClass:"share"},[this._v("已分享人数")])]),s("view",{staticClass:"num"},[s("text",{staticClass:"num"},[this._v("55人")])])])}]};s.a=i},99:function(t,s,a){"use strict";var i=c(a(1)),e=c(a(100));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(e.default))}},[99]);