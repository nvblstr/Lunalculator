(function(e){function t(t){for(var a,u,s=t[0],o=t[1],c=t[2],b=0,f=[];b<s.length;b++)u=s[b],Object.prototype.hasOwnProperty.call(n,u)&&n[u]&&f.push(n[u][0]),n[u]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,s=1;s<r.length;s++){var o=r[s];0!==n[o]&&(a=!1)}a&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var a={},n={app:0},i=[];function u(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=a,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(r,a,function(t){return e[t]}.bind(null,a));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=o;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h2",[e._v("LunaCalculator (ノヴァ計算機)")]),r("Calculator")],1)},i=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{attrs:{id:"container",fluid:"xs"}},[r("b-row",[r("b-col",{staticClass:"label",attrs:{cols:"4"}},[e._v("サブ回数")]),r("b-col",[r("b-form-group",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.ariaDescribedby;return[r("b-form-radio-group",{staticClass:"btn-radio",attrs:{options:e.subNumberOptions,"aria-describedby":a,"button-variant":"outline-primary",size:"lg",name:"radio-btn-outline",buttons:""},model:{value:e.subNumber,callback:function(t){e.subNumber=t},expression:"subNumber"}})]}}])})],1)],1),r("b-row",[r("b-col",{staticClass:"label",attrs:{cols:"4"}},[e._v("特殊ギア")]),r("b-col",[r("b-form-group",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.ariaDescribedby;return[r("b-form-radio-group",{staticClass:"btn-radio",attrs:{options:e.uniqueGearOptions,"aria-describedby":a,"button-variant":"outline-primary",size:"lg",name:"radio-btn-outline",buttons:""},model:{value:e.uniqueGear,callback:function(t){e.uniqueGear=t},expression:"uniqueGear"}})]}}])})],1)],1),r("b-row",[r("b-col",{staticClass:"label",attrs:{cols:"4"}},[e._v("メイン効率")]),r("b-col",{attrs:{cols:"4"}},[r("b-form-spinbutton",{staticClass:"spin-gear",attrs:{min:"0",max:e.gearLLimit,size:"lg"},model:{value:e.gearMainL,callback:function(t){e.gearMainL=t},expression:"gearMainL"}})],1),r("b-col",{attrs:{cols:"4"}},[r("b-form-spinbutton",{staticClass:"spin-gear",attrs:{min:"0",max:"9",size:"lg"},model:{value:e.gearMainS,callback:function(t){e.gearMainS=t},expression:"gearMainS"}})],1)],1),r("b-row",[r("b-col",{staticClass:"label",attrs:{cols:"4"}},[e._v("サブ効率")]),r("b-col",{attrs:{cols:"4"}},[r("b-form-spinbutton",{staticClass:"spin-gear",attrs:{min:"0",max:e.gearLLimit,size:"lg"},model:{value:e.gearSubL,callback:function(t){e.gearSubL=t},expression:"gearSubL"}})],1),r("b-col",{attrs:{cols:"4"}},[r("b-form-spinbutton",{staticClass:"spin-gear",attrs:{min:"0",max:"9",size:"lg"},model:{value:e.gearSubS,callback:function(t){e.gearSubS=t},expression:"gearSubS"}})],1)],1),r("b-row",[r("b-col",{attrs:{cols:"4",offset:"4"}},[e._v("大")]),r("b-col",{attrs:{cols:"4"}},[e._v("小")])],1),r("b-row",[r("b-col",{staticClass:"result"},[e.ink>0?r("div",[r("strong",[e._v(" "+e._s(e.fireNumber)+e._s(e.fireNumberMessage)+"(+"+e._s(e.fireNumberIncrement)+") ")])]):r("div",[r("strong",[e._v(" "+e._s(e.notEnoughMessage1)+e._s(e.subNumber)+e._s(e.notEnoughMessage2)+" ")])])])],1)],1)},s=[],o=(r("a9e3"),{name:"Calculator",data:function(){return{fireNumberMessage:"発撃てます",notEnoughMessage1:"今のギアパワーでは",notEnoughMessage2:"回サブが使えません",subNumber:0,subNumberOptions:[{text:"0",value:0},{text:"1",value:1},{text:"2",value:2}],uniqueGear:"none",uniqueGearOptions:[{text:"なし",value:"none"},{text:"カムバ",value:"comeback"},{text:"ラスパ",value:"lastspurt"}],gearMainL:0,gearMainS:0,gearSubL:0,gearSubS:0}},computed:{gearMain57:function(){return 10*this.gearMainL+3*this.gearMainS+this.calcGearPowerIncrement(this.uniqueGear)},gearSub57:function(){return 10*this.gearSubL+3*this.gearSubS+this.calcGearPowerIncrement(this.uniqueGear)},mainCost:function(){return.075*(1-.5*Math.pow(.033*this.gearMain57-27e-5*Math.pow(this.gearMain57,2),Math.log(.6)/Math.log(.5)))},subCost:function(){return.7*(1-.35*(.033*this.gearSub57-27e-5*Math.pow(this.gearSub57,2)))},fireNumber:function(){return this.calcFireNumber(this.mainCost,this.subCost,this.subNumber)},fireNumberIncrement:function(){return this.calcFireNumberIncrement()},ink:function(){return 1-this.subCost*this.subNumber},gearLLimit:function(){return"none"==this.uniqueGear?3:2}},methods:{calcFireNumber:function(e,t,r){return Math.floor((1-t*r)/e)},calcFireNumberIncrement:function(){return this.calcFireNumber(.075,.7,this.subNumber)>=0?this.fireNumber-this.calcFireNumber(.075,.7,this.subNumber):this.fireNumber},calcGearPowerIncrement:function(e){return"none"==e?0:"comeback"==e?10:"lastspurt"==e?24:void 0}},watch:{gearMainL:function(){Number(this.gearMainL)+Number(this.gearSubL)>this.gearLLimit&&(this.gearSubL=this.gearSubL-1)},gearSubL:function(){Number(this.gearMainL)+Number(this.gearSubL)>this.gearLLimit&&(this.gearMainL=this.gearMainL-1)},gearMainS:function(){Number(this.gearMainS)+Number(this.gearSubS)>9&&(this.gearSubS=this.gearSubS-1)},gearSubS:function(){Number(this.gearMainS)+Number(this.gearSubS)>9&&(this.gearMainS=this.gearMainS-1)},gearLLimit:function(){Number(this.gearMainL)+Number(this.gearSubL)>this.gearLLimit&&(Number(this.gearMainL)>Number(this.gearSubL)?this.gearMainL=this.gearMainL-1:this.gearSubL=this.gearSubL-1)}}}),c=o,l=(r("eca1"),r("2877")),b=Object(l["a"])(c,u,s,!1,null,"37879a5e",null),f=b.exports,g={name:"App",id:"#app",components:{Calculator:f}},m=g,h=(r("034f"),Object(l["a"])(m,n,i,!1,null,null,null)),p=h.exports,d=r("5f5b"),S=r("b1e0");r("f9e3"),r("2dd8");a["default"].use(d["a"]),a["default"].use(S["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,r){},eca1:function(e,t,r){"use strict";r("f737")},f737:function(e,t,r){}});
//# sourceMappingURL=app.a3553991.js.map