(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0156":function(t,e){t.exports="/static/error.png"},"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){return"string"===typeof __channelId__&&__channelId__}function s(t,e){switch(i(e)){case"Function":return"function() { [native code] }";default:return e}}function o(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];console[t].apply(console,n)}function a(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.shift();if(r())return e.push(e.pop().replace("at ","uni-app:///")),console[o].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,s)+"---END:JSON---"}catch(r){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(a.length>1){var c=a.pop();u=a.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=a[0];console[o](u)}n.r(e),n.d(e,"log",(function(){return o})),n.d(e,"default",(function(){return a}))},1063:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},"465f":function(t,e,n){"use strict";n("f8b0");var i=s(n("8bbf")),r=s(n("8e5d"));function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}i.default.config.productionTip=!1,r.default.mpType="app";var c=new i.default(a({},r.default));c.$mount()},"5db9":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[i("view",{staticClass:t._$s(1,"sc","title"),attrs:{_i:1}},[i("view",[t._v(t._$s(2,"t0-0",t._s(t.bomb_total)))]),i("view",{attrs:{_i:3},on:{click:function(e){return t.initMap()}}}),i("view",[t._v(t._$s(4,"t0-0",t._s(t.bomb_num)))])]),t._l(t._$s(5,"f",{forItems:t.maps}),(function(e,r,s,o){return i("view",{key:t._$s(5,"f",{forIndex:s,key:"row-"+r}),staticClass:t._$s("5-"+o,"sc","row"),attrs:{_i:"5-"+o}},t._l(t._$s("6-"+o,"f",{forItems:e}),(function(e,s,a,u){return i("view",{key:t._$s("6-"+o,"f",{forIndex:a,key:"col-"+s})},[i("view",{staticClass:t._$s("7-"+o+"-"+u,"sc","block"),attrs:{_i:"7-"+o+"-"+u},on:{longpress:function(e){return t.setBomb(r,s)},click:function(e){return t.setSafe(r,s)}}},[t._$s("8-"+o+"-"+u,"i",t.is_success||t.is_fail||1==t.shows[r][s])?i("view",[t._$s("9-"+o+"-"+u,"i",-1==t.maps[r][s])?i("view",[i("image",{attrs:{src:t._$s("10-"+o+"-"+u,"a-src",n("dfd0")),_i:"10-"+o+"-"+u}})]):t._e(),t._$s("11-"+o+"-"+u,"i",-2==t.maps[r][s])?i("view",[i("image",{attrs:{src:t._$s("12-"+o+"-"+u,"a-src",n("0156")),_i:"12-"+o+"-"+u}})]):t._e(),t._$s("13-"+o+"-"+u,"i",t.maps[r][s]>0)?i("view",[t._v(t._$s("13-"+o+"-"+u,"t0-0",t._s(t.maps[r][s])))]):t._e()]):i("view")])])})),0)})),i("view",{staticClass:t._$s(15,"sc","desc"),attrs:{_i:15}},[i("p"),i("p"),i("p"),i("p"),i("p")])],2)},s=[]},"76cd":function(t,e,n){"use strict";function i(t,e){return u(t)||a(t,e)||s(t,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function a(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(i=(o=a.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(u){r=!0,s=u}finally{try{i||null==a["return"]||a["return"]()}finally{if(r)throw s}}return n}}function u(t){if(Array.isArray(t))return t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c={props:{width:{type:Number,default:9},height:{type:Number,default:9},bomb_total:{type:Number,default:10}},watch:{width:function(t){this.initMap()},height:function(t){this.initMap()},bombTotal:function(t){this.initMap()}},data:function(){return{maps:[],shows:[],bomb_num:this.bomb_total,is_fail:!1,is_success:!1}},onLoad:function(){this.initMap()},methods:{initMap:function(){this.is_fail=!1,this.is_success=!1,this.bomb_num=this.bomb_total,this.maps=[],this.shows=[];for(var t=0;t<this.width;t++){for(var e=[],n=[],r=0;r<this.height;r++)e.push(0),n.push(0);this.maps.push(e),this.shows.push(n)}var s=this.bomb_total;while(s>0){var o=parseInt(Math.random()*this.width),a=parseInt(Math.random()*this.height);-1!=this.maps[o][a]&&(this.maps[o][a]=-1,s--)}for(var u=0;u<this.width;u++)for(var c=0;c<this.height;c++)if(-1==this.maps[u][c])for(var f=[[u-1,c-1],[u-1,c],[u-1,c+1],[u,c-1],[u,c+1],[u+1,c-1],[u+1,c],[u+1,c+1]],l=0,h=f;l<h.length;l++){var p=i(h[l],2),d=p[0],_=p[1];0<=d&&this.width>d&&0<=_&&this.height>_&&-1!=this.maps[d][_]&&this.maps[d][_]++}},setSafe:function(t,e){if(1!=this.shows[t][e]){if(-1==this.maps[t][e])this.is_fail=!0,this.maps[t][e]=-2;else if(this.maps[t][e]>0)this.shows[t][e]=1;else{var n=t,i=e;this.setShow(n,i)}this.$forceUpdate()}},setShow:function(t,e){t<0||t>=this.height||e<0||e>=this.width||1==this.shows[t][e]||(this.shows[t][e]=1,this.maps[t][e]>0||(this.setShow(t,e-1),this.setShow(t,e+1),this.setShow(t-1,e),this.setShow(t-1,e-1),this.setShow(t-1,e+1),this.setShow(t+1,e),this.setShow(t+1,e-1),this.setShow(t+1,e+1)))},setBomb:function(t,e){1!=this.shows[t][e]&&(-1==this.maps[t][e]?this.bomb_num--:(this.is_fail=!0,this.maps[t][e]=-2),0==this.bomb_num&&(this.is_success=!0),this.shows[t][e]=1,this.$forceUpdate())}}};e.default=c},"8bbf":function(t,e){t.exports=Vue},"8e5d":function(t,e,n){"use strict";n.r(e);var i=n("dacc");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var s,o,a,u,c=n("f0c5"),f=Object(c["a"])(i["default"],s,o,!1,null,null,null,!1,a,u);e["default"]=f.exports},"90e7":function(t,e,n){"use strict";n.r(e);var i=n("76cd"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=r.a},afd3:function(t,e,n){"use strict";n.r(e);var i=n("5db9"),r=n("90e7");for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);var o,a=n("f0c5"),u=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);e["default"]=u.exports},dacc:function(t,e,n){"use strict";n.r(e);var i=n("1063"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=r.a},dfd0:function(t,e){t.exports="/static/boom.png"},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,r,s,o,a,u,c){var f,l="function"===typeof t?t.options:t;if(u){l.components||(l.components={});var h=Object.prototype.hasOwnProperty;for(var p in u)h.call(u,p)&&!h.call(l.components,p)&&(l.components[p]=u[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=f):r&&(f=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),f)if(l.functional){l._injectStyles=f;var d=l.render;l.render=function(t,e){return f.call(e),d(t,e)}}else{var _=l.beforeCreate;l.beforeCreate=_?[].concat(_,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return i}))},f8b0:function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("afd3").default)}))}},[["465f","app-config"]]]);