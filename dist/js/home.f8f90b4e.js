(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"09dd":function(e,t,n){e.exports=n.p+"img/santos.1a4e0390.jpg"},"0fd9":function(e,t,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var a=n("ade3"),o=n("5530"),r=(n("4b85"),n("2b0e")),i=n("d9f7"),c=n("80d2"),s=["sm","md","lg","xl"],l=["start","end","center"];function u(e,t){return s.reduce((function(n,a){return n[e+Object(c["s"])(a)]=t(),n}),{})}var p=function(e){return[].concat(l,["baseline","stretch"]).includes(e)},d=u("align",(function(){return{type:String,default:null,validator:p}})),f=function(e){return[].concat(l,["space-between","space-around"]).includes(e)},g=u("justify",(function(){return{type:String,default:null,validator:f}})),b=function(e){return[].concat(l,["space-between","space-around","stretch"]).includes(e)},v=u("alignContent",(function(){return{type:String,default:null,validator:b}})),m={align:Object.keys(d),justify:Object.keys(g),alignContent:Object.keys(v)},h={align:"align",justify:"justify",alignContent:"align-content"};function j(e,t,n){var a=h[e];if(null!=n){if(t){var o=t.replace(e,"");a+="-".concat(o)}return a+="-".concat(n),a.toLowerCase()}}var y=new Map;t["a"]=r["default"].extend({name:"v-row",functional:!0,props:Object(o["a"])(Object(o["a"])(Object(o["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:p}},d),{},{justify:{type:String,default:null,validator:f}},g),{},{alignContent:{type:String,default:null,validator:b}},v),render:function(e,t){var n=t.props,o=t.data,r=t.children,c="";for(var s in n)c+=String(n[s]);var l=y.get(c);return l||function(){var e,t;for(t in l=[],m)m[t].forEach((function(e){var a=n[e],o=j(t,e,a);o&&l.push(o)}));l.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(e,"align-".concat(n.align),n.align),Object(a["a"])(e,"justify-".concat(n.justify),n.justify),Object(a["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),y.set(c,l)}(),e(n.tag,Object(i["a"])(o,{staticClass:"row",class:l}),r)}})},"106a":function(e,t,n){e.exports=n.p+"img/era-mecina.0261ed96.jpg"},"109a":function(e,t,n){e.exports=n.p+"img/rio-alto.012bf778.jpg"},"200f":function(e,t,n){e.exports=n.p+"img/desbrozadora.49d99c24.jpg"},"38c9":function(e,t,n){e.exports=n.p+"img/fondales.e95ff866.jpg"},"3b58":function(e,t,n){e.exports=n.p+"img/fondales-casa.daef13b2.jpg"},"51f7":function(e,t,n){e.exports=n.p+"img/puente.4fcd698e.jpeg"},"5a63":function(e,t,n){e.exports=n.p+"img/pueblos.622ebd86.jpeg"},"5ced":function(e,t,n){},"62ad":function(e,t,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var a=n("ade3"),o=n("5530"),r=(n("4b85"),n("2b0e")),i=n("d9f7"),c=n("80d2"),s=["sm","md","lg","xl"],l=function(){return s.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),u=function(){return s.reduce((function(e,t){return e["offset"+Object(c["s"])(t)]={type:[String,Number],default:null},e}),{})}(),p=function(){return s.reduce((function(e,t){return e["order"+Object(c["s"])(t)]={type:[String,Number],default:null},e}),{})}(),d={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(p)};function f(e,t,n){var a=e;if(null!=n&&!1!==n){if(t){var o=t.replace(e,"");a+="-".concat(o)}return"col"!==e||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var g=new Map;t["a"]=r["default"].extend({name:"v-col",functional:!0,props:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},p),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,o=t.data,r=t.children,c=(t.parent,"");for(var s in n)c+=String(n[s]);var l=g.get(c);return l||function(){var e,t;for(t in l=[],d)d[t].forEach((function(e){var a=n[e],o=f(t,e,a);o&&l.push(o)}));var o=l.some((function(e){return e.startsWith("col-")}));l.push((e={col:!o||!n.cols},Object(a["a"])(e,"col-".concat(n.cols),n.cols),Object(a["a"])(e,"offset-".concat(n.offset),n.offset),Object(a["a"])(e,"order-".concat(n.order),n.order),Object(a["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),g.set(c,l)}(),e(n.tag,Object(i["a"])(o,{class:l}),r)}})},"71be":function(e,t,n){e.exports=n.p+"img/rio.339877f7.jpg"},"74e1":function(e,t,n){var a={"./mecina-fondales2.jpeg":"90a4","./pueblos.jpeg":"5a63","./puente.jpeg":"51f7"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="74e1"},"7b92":function(e,t,n){e.exports=n.p+"img/fondales-placeta.2b98d2d9.jpg"},"852c":function(e,t,n){e.exports=n.p+"img/mecinilla.3b49fa89.jpg"},"90a4":function(e,t,n){e.exports=n.p+"img/mecina-fondales2.b56bf15a.jpeg"},a031:function(e,t,n){e.exports=n.p+"img/plano.c336d922.jpg"},a07b:function(e,t,n){e.exports=n.p+"img/fondales-calle.3dca3c04.jpg"},a3c9:function(e,t,n){e.exports=n.p+"img/era-fondales.e7954025.jpg"},bb51:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{dense:""}},e._l(e.cards,(function(t){return n("v-col",{key:t.title,staticStyle:{padding:"8px"},attrs:{cols:t.flex}},[t.clickable?n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(a){var o=a.hover;return[n("v-card",{class:{"on-hover":o},attrs:{elevation:o?12:2,tile:""},on:{click:function(n){return e.changeView(t.path)}}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.getImage(t.src),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"25rem"}},[n("v-card-title",[n("span",{staticClass:"title-pueblos"},[e._v(e._s(t.title))])])],1)],1)]}}],null,!0)}):n("v-card",{attrs:{tile:""}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.getImage(t.src),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"25rem"}},[n("v-card-title",{domProps:{textContent:e._s(t.title)}})],1)],1)],1)})),1),n("v-row",[n("div",{staticClass:"body"},[n("h1",[e._v("Mecina Fondales")]),n("span",[e._v(" En el corazón de la Alpujarra granadina se encuentra Mecina Fondales, escalón natural entre Sierra Nevada y la costa mediterránea. "),n("br"),n("br"),e._v(" Conserva y define a la perfección la esencia de lo que es un "),n("i",[e._v("pueblo alpujarreño")]),e._v(". "),n("br"),n("br"),e._v(" Un lugar recóndito que ha sobrevivido al paso del turismo y del tiempo, tradiciones que se conservan, así como singular arquitectura de sus viviendas, perfectamente adaptadas al irregular terreno y climatología de la zona, con un caracter donde se refleja la memoria de su pasado morisco."),n("br"),n("br"),e._v(" Dividido en 3 núcleos: "),n("b",[e._v("Mecina, Mecinilla y Fondales")]),e._v(" que conforman la pedanía de "),n("b",[e._v("Mecina Fondales")]),e._v(" y que conviven como uno solo, próximo al margen derecho del rio Trevélez. "),n("br"),n("br"),e._v(" Explora sus calles, conoce sus costumbres, satisface tu estómago con sus suculentos platos y déjate embriagar por un entorno único que visites te verás obligado a volver. ")])])]),n("v-row",{staticStyle:{"margin-top":"8px"},attrs:{dense:""}},[n("v-card",{staticStyle:{height:"450px",width:"100%"},attrs:{tile:""}},[e.showMap?n("l-map",{staticStyle:{height:"100%"},attrs:{zoom:e.zoom,center:e.center,options:e.mapOptions},on:{"update:center":e.centerUpdate,"update:zoom":e.zoomUpdate}},[n("l-tile-layer",{attrs:{url:e.url,attribution:e.attribution}}),n("l-marker",{attrs:{"lat-lng":e.popupMecina}},[n("l-popup",[n("div",[e._v(" Mecina ")])])],1),n("l-marker",{attrs:{"lat-lng":e.popupMecinilla}},[n("l-popup",[n("div",[e._v(" Mecinilla ")])])],1),n("l-marker",{attrs:{"lat-lng":e.popupFondales}},[n("l-popup",[n("div",[e._v(" Fondales ")])])],1)],1):e._e()],1)],1)],1)},o=[],r=n("e11e"),i=n("2699"),c=n("a40a"),s=n("4e2b"),l=function(e){return e&&"function"===typeof e.charAt?e.charAt(0).toUpperCase()+e.slice(1):e},u=function(e,t,n,a){var o=function(a){var o="set"+l(a),i=n[a].type===Object||n[a].type===Array||Array.isArray(n[a].type);n[a].custom&&e[o]?e.$watch(a,(function(t,n){e[o](t,n)}),{deep:i}):"setOptions"===o?e.$watch(a,(function(e,n){Object(r["setOptions"])(t,e)}),{deep:i}):t[o]&&e.$watch(a,(function(e,n){t[o](e)}),{deep:i})};for(var i in n)o(i)},p=function(e){var t={};for(var n in e){var a=e[n];null!==a&&void 0!==a&&(t[n]=a)}return t},d=function(e,t){var n=t.options&&t.options.constructor===Object?t.options:{};e=e&&e.constructor===Object?e:{};var a=p(n);e=p(e);var o=t.$options.props;for(var r in e){var i=o[r]?o[r].default&&"function"===typeof o[r].default?o[r].default.call():o[r].default:Symbol("unique"),c=!1;c=Array.isArray(i)?JSON.stringify(i)===JSON.stringify(e[r]):i===e[r],a[r]&&!c?(console.warn(r+" props is overriding the value passed in the options props"),a[r]=e[r]):a[r]||(a[r]=e[r])}return a},f=function(e){var t=!1;while(e&&!t)void 0===e.mapObject?e=e.$parent:t=!0;return e},g={props:{content:{type:String,default:null,custom:!0}},mounted:function(){this.popperOptions={}},methods:{setContent:function(e){this.mapObject&&null!==e&&void 0!==e&&this.mapObject.setContent(e)}},render:function(e){return this.$slots.default?e("div",this.$slots.default):null}},b={props:{options:{type:Object,default:function(){return{}}}}},v={name:"LPopup",mixins:[g,b],props:{latLng:{type:[Object,Array],default:function(){return[]}}},mounted:function(){var e=this,t=d(this.popperOptions,this);this.mapObject=Object(r["popup"])(t),void 0!==this.latLng&&this.mapObject.setLatLng(this.latLng),r["DomEvent"].on(this.mapObject,this.$listeners),u(this,this.mapObject,this.$options.props),this.mapObject.setContent(this.content||this.$el),this.parentContainer=f(this.$parent),this.parentContainer.mapObject.bindPopup(this.mapObject),this.$nextTick((function(){e.$emit("ready",e.mapObject)}))},beforeDestroy:function(){this.parentContainer&&(this.parentContainer.unbindPopup?this.parentContainer.unbindPopup():this.parentContainer.mapObject&&this.parentContainer.mapObject.unbindPopup&&this.parentContainer.mapObject.unbindPopup())}};function m(e,t,n,a,o,r,i,c,s,l){"boolean"!==typeof i&&(s=c,c=i,i=!1);var u,p="function"===typeof n?n.options:n;if(e&&e.render&&(p.render=e.render,p.staticRenderFns=e.staticRenderFns,p._compiled=!0,o&&(p.functional=!0)),a&&(p._scopeId=a),r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,s(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},p._ssrRegister=u):t&&(u=i?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,c(e))}),u)if(p.functional){var d=p.render;p.render=function(e,t){return u.call(t),d(e,t)}}else{var f=p.beforeCreate;p.beforeCreate=f?[].concat(f,u):[u]}return n}var h=v,j=void 0,y=void 0,O=void 0,x=void 0,C=m({},j,h,y,x,O,!1,void 0,void 0,void 0),_=C,w={name:"Home",components:{LMap:i["a"],LTileLayer:c["a"],LMarker:s["a"],LPopup:_},data:function(){return{cards:[{title:"Mecina Fondales",path:"/mecina-fondales",src:"mecina-fondales",flex:12,clickable:!1},{title:"Mecina",path:"/mecinilla",src:"mecina",flex:4,clickable:!0},{title:"Mecinilla",path:"/mecina-fondales",src:"mecinilla",flex:4,clickable:!0},{title:"Fondales",path:"/fondales",src:"fondales",flex:4,clickable:!0},{src:"plano",flex:0,clickable:!1}],zoom:16,center:Object(r["latLng"])(36.92753,-3.321636),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',popupMecina:Object(r["latLng"])(36.929812,-3.323031),popupMecinilla:Object(r["latLng"])(36.927462,-3.323361),popupFondales:Object(r["latLng"])(36.925708,-3.321693),currentZoom:11.5,currentCenter:Object(r["latLng"])(47.41322,-1.219482),showParagraph:!1,mapOptions:{zoomSnap:.5},showMap:!0}},methods:{changeView:function(e){if(console.log("CAMBIO A ESTA VISTA!",e),e){var t=this;t.$router.push(e)}},getImage:function(e){var t=n("ee5f"),a=n("74e1");switch(e){case"mecina-fondales2":return a("./".concat(e,".jpeg"));default:return t("./".concat(e,".jpg"))}},zoomUpdate:function(e){this.currentZoom=e},centerUpdate:function(e){this.currentCenter=e},showLongText:function(){this.showParagraph=!this.showParagraph},innerClick:function(){alert("Click!")}}},S=w,k=(n("cccb"),n("2877")),M=n("6544"),L=n.n(M),$=n("b0af"),A=n("99d9"),E=n("62ad"),N=n("a523"),z=n("16b7"),F=n("f2e7"),T=n("58df"),U=n("d9bd"),V=Object(T["a"])(z["a"],F["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(U["c"])("v-hover should only contain a single element",this),e)):(Object(U["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var e}}),P=n("adda"),D=n("0fd9"),q=Object(k["a"])(S,a,o,!1,null,null,null);t["default"]=q.exports;L()(q,{VCard:$["a"],VCardTitle:A["c"],VCol:E["a"],VContainer:N["a"],VHover:V,VImg:P["a"],VRow:D["a"]})},bcd3:function(e,t,n){e.exports=n.p+"img/mecina.027bf7ab.jpg"},cccb:function(e,t,n){"use strict";var a=n("5ced"),o=n.n(a);o.a},d406:function(e,t,n){e.exports=n.p+"img/mecina-fondales.1ae0659a.jpg"},e6d4:function(e,t,n){e.exports=n.p+"img/mecina-arcoiris.027bf7ab.jpg"},e8e7:function(e,t,n){e.exports=n.p+"img/caballos.f8a0d1a8.jpg"},ee5f:function(e,t,n){var a={"./caballos.jpg":"e8e7","./desbrozadora.jpg":"200f","./era-fondales.jpg":"a3c9","./era-mecina.jpg":"106a","./fondales-calle.jpg":"a07b","./fondales-casa.jpg":"3b58","./fondales-placeta.jpg":"7b92","./fondales.jpg":"38c9","./mecina-arcoiris.jpg":"e6d4","./mecina-fondales.jpg":"d406","./mecina.jpg":"bcd3","./mecinilla.jpg":"852c","./plano.jpg":"a031","./rio-alto.jpg":"109a","./rio.jpg":"71be","./santos.jpg":"09dd"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="ee5f"}}]);
//# sourceMappingURL=home.f8f90b4e.js.map