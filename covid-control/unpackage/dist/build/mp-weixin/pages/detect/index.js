(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detect/index"],{7707:function(e,t,n){},a700:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this.$createElement;this._self._c},i=[]},af3f:function(e,t,n){"use strict";(function(e){var a=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("e1e1")),o={data:function(){return{symptoms:[{value:"咳嗽",name:"咳嗽"},{value:"呼吸困难",name:"呼吸困难"},{value:"发烧",name:"发烧"},{value:"喉咙疼痛",name:"喉咙疼痛"},{value:"头痛",name:"头痛"},{value:"与阳性患者接触过",name:"与阳性患者接触过"}],currSymptoms:[],sex:"男",age:1,sexindex:null,sexrange:[{val:"男"},{val:"女"}],agerange:[],ageindex:null,qqmapsdk:null,temperature:[{val:"35.7以下"},{val:"35.7"},{val:"35.8"},{val:"35.9"},{val:"36.0"},{val:"36.1"},{val:"36.2"},{val:"36.3"},{val:"36.4"},{val:"36.5"},{val:"36.6"},{val:"36.7"},{val:"36.8"},{val:"36.9"},{val:"37.0"},{val:"37.1"},{val:"37.2"},{val:"37.3"},{val:"37.4"},{val:"37.5"},{val:"37.6"},{val:"37.7"},{val:"37.8"},{val:"37.9"},{val:"38.0"},{val:"38.0以上"}],index:16,currTemp:"37.2",country:null,province:null,city:null,district:null}},onLoad:function(){this.agerange=new Array;for(var e=1;e<100;e++){var t={val:e};this.agerange.push(t)}this.agerange.push({val:"100及以上"}),console.log("加载表格页面"),this.qqmapsdk=new i.default({key:"L32BZ-VJSCU-INJVN-4CIEX-XWUVS-CHF7Q"}),this.getUserLocation()},methods:{getUserLocation:function(){var t=this;e.getSetting({success:function(n){n.authSetting&&n.authSetting.hasOwnProperty("scope.userLocation")?n.authSetting["scope.userLocation"]?t.getCityInfo():e.showModal({title:"提示",content:"请重新授权获取你的地理位置，否则部分功能将无法使用",success:function(n){n.confirm?e.openSetting({success:function(){return t.getCityInfo()}}):reject("请授权获取你的地理位置，否则部分功能将无法使用！")}}):(console.log("正确"),console.log(n),t.getCityInfo())}})},getCityInfo:function(){var t=this;console.log("调用getCityInfo"),e.authorize({scope:"scope.userLocation",success:function(){console.log("授权"),e.getLocation({type:"gcj02",success:function(n){console.log("获取位置");var a=n.latitude,i=n.longitude,o={latitude:a,longitude:i};t.qqmapsdk.reverseGeocoder({location:o,success:function(e){var n=e.result.ad_info.name;console.log(n),t.country=n.split(",")[0],t.province=n.split(",")[1],t.city=n.split(",")[2],t.district=n.split(",")[3]},fail:function(t){e.showModal({title:"错误",content:"获取地理位置错误,请刷新重试",showCancel:!0,confirmText:"确定"}),console.log(t)}})},fail:function(){e.showModal({title:"错误",content:"获取地理位置错误,请刷新重试",showCancel:!0,confirmText:"确定"})}})},fail:function(){return reject("请授权获取你的位置，否则部分功能将无法使用！")}})},submit:function(){},reset:function(){this.index=16,this.currTemp="37.2",this.currSymptoms=[]},bindsexChange:function(e){this.sex=this.sexrange[e.detail.value].val},checkboxChange:function(e){this.currSymptoms=e.detail.value},bindageChange:function(e){this.age=this.ageindex[e.detail.value].val},bindPickerChange:function(e){this.index=e.detail.value,this.currTemp=this.temperature[this.index].val},handleSexchange:function(e){this.ismale=e.detail.value}}};t.default=o}).call(this,n("543d")["default"])},b0ca:function(e,t,n){"use strict";(function(e){var t=n("4ea4");n("99be");t(n("66fd"));var a=t(n("cff6"));wx.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("543d")["createPage"])},c69c:function(e,t,n){"use strict";n.r(t);var a=n("af3f"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},cff6:function(e,t,n){"use strict";n.r(t);var a=n("a700"),i=n("c69c");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("f1ef");var c=n("f0c5"),l=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"5a4af5e6",null,!1,a["a"],void 0);t["default"]=l.exports},f1ef:function(e,t,n){"use strict";var a=n("7707"),i=n.n(a);i.a}},[["b0ca","common/runtime","common/vendor"]]]);