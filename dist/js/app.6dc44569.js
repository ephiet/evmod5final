(function(t){function e(e){for(var o,c,s=e[0],i=e[1],l=e[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],o=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(o=!1)}o&&(n.splice(e--,1),t=c(c.s=r[0]))}return t}var o={},a={app:0},n=[];function c(e){if(o[e])return o[e].exports;var r=o[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=o,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(r,o,function(e){return t[e]}.bind(null,o));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=i;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"256c":function(t,e,r){},"3bd4":function(t,e,r){"use strict";r("b9f3")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("e792"),r("0cdd");var o=r("2b0e"),a=r("5f5b");r("ab8b"),r("2dd8");o["default"].use(a["a"]);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-jumbotron",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("VueJS")]},proxy:!0}])}),r("Form"),r("Lista"),r("Calc")],1)},c=[],s=r("5530"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form"},[r("b-form",{staticClass:"mb-3 d-flex justify-content-center",attrs:{inline:""}},[r("b-form-input",{staticClass:"col-md-5 mb-2 mr-sm-2 mb-sm-0",attrs:{id:"input-nombre",placeholder:"Descripcion del producto"},model:{value:t.producto.nombre,callback:function(e){t.$set(t.producto,"nombre",e)},expression:"producto.nombre"}}),r("b-form-input",{staticClass:"col-md-3 mb-2 mr-sm-2 mb-sm-0",attrs:{id:"input-precio",placeholder:"Monto",type:"number"},model:{value:t.producto.precio,callback:function(e){t.$set(t.producto,"precio",t._n(e))},expression:"producto.precio"}}),r("b-button",{attrs:{id:"btn-agregar",variant:"success"},on:{click:function(e){return e.preventDefault(),t.agregarProducto(t.producto)}}},[t._v(" Agregar ")])],1),r("transition",{attrs:{name:"fade"}},[t.error?r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("span",{staticClass:"mb-3 d-block p-2 error text-danger"},[t._v(t._s(t.error))])])],1):t._e()],1)],1)},l=[],u=r("2f62"),d={name:"Form",props:{msg:String},data:function(){return{producto:{id:"",nombre:"",precio:null,cancelado:!1},error:""}},methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["ADD_PRODUCT"])),{},{agregarProducto:function(t){t.nombre&&t.precio?(this.ADD_PRODUCT(this.producto),this.error=""):this.error="Por favor complete todos los campos.",t.nombre="",t.precio=null}})},p=d,b=(r("3bd4"),r("2877")),f=Object(b["a"])(p,i,l,!1,null,"3b25503d",null),m=f.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"lista"},[r("b-table",{attrs:{items:t.productos,fields:t.fields,stacked:"md","show-empty":"",medium:""},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[t._v(" "+t._s(e.value.first)+" "+t._s(e.value.last)+" ")]}},{key:"cell(actions)",fn:function(e){return[r("div",{staticClass:"d-flex justify-content-center"},[r("b-button",{staticClass:"px-4 mx-1",attrs:{id:"btn-pagado",size:"sm",disabled:t.isDisabled(e.item.id),variant:"success"},on:{"~click":function(r){return t.PAY_PRODUCT(e.item)}}},[t._v(" Pagado ")]),r("b-button",{staticClass:"px-4 mx-1",attrs:{id:"btn-eliminar",size:"sm",variant:"danger"},on:{click:function(r){return t.DELETE_PRODUCT(e.item)}}},[t._v(" Eliminar ")])],1)]}}])})],1)},v=[],_=(r("4de4"),{name:"Form",props:{msg:String},data:function(){return{fields:[{key:"id",label:"N°"},{key:"nombre",label:"Descripcion del Producto"},{key:"precio",label:"Precio",formatter:function(t){return t.toLocaleString("en-US",{style:"currency",currency:"USD"})}},{key:"actions",label:"Acciones"}]}},computed:Object(s["a"])({},Object(u["c"])(["productos"])),methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["DELETE_PRODUCT","PAY_PRODUCT"])),{},{isDisabled:function(t){return this.productos.filter((function(e){return e.id===t}))[0].cancelado}})}),O=_,P=Object(b["a"])(O,g,v,!1,null,"c0384ab8",null),y=P.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"calc"},[r("b-row",{staticClass:"mt-3 pt-3 border-top border-secondary text-danger"},[r("b-col",{staticClass:"text-right",attrs:{cols:"7"}},[t._v("Por pagar")]),r("b-col",{staticClass:"porpagar",attrs:{cols:"5"}},[t._v(t._s(t.formatter(t.porPagar)))])],1),r("b-row",{staticClass:"mt-3 pt-3 border-top border-secondary text-success"},[r("b-col",{staticClass:"text-right",attrs:{cols:"7"}},[t._v("Pagado")]),r("b-col",{staticClass:"pagado",attrs:{cols:"5"}},[t._v(t._s(t.formatter(t.pagado)))])],1),r("b-row",{staticClass:"mt-3 pt-3 border-top border-secondary text-primary"},[r("b-col",{staticClass:"text-right",attrs:{cols:"7"}},[t._v("Total")]),r("b-col",{staticClass:"total",attrs:{cols:"5"}},[t._v(t._s(t.formatter(t.total)))])],1)],1)},j=[],C={name:"Lista",props:{msg:String},computed:Object(s["a"])({},Object(u["c"])(["pagado","porPagar","total"])),methods:{formatter:function(t){return t.toLocaleString("en-US",{style:"currency",currency:"USD"})}}},D=C,x=(r("e5ee"),Object(b["a"])(D,h,j,!1,null,"79113100",null)),T=x.exports,w={name:"App",components:{Form:m,Lista:y,Calc:T},computed:Object(s["a"])({},Object(u["c"])(["productos","totalPagado","totalPorPagar","total"])),methods:Object(s["a"])({},Object(u["b"])(["ADD_PRODUCT","DELETE_PRODUCT","PAY_PRODUCT"]))},S=w,k=(r("5c0b"),Object(b["a"])(S,n,c,!1,null,null,null)),E=k.exports,U=r("8c4f");o["default"].use(U["a"]);var R=[],A=new U["a"]({routes:R}),L=A,$=r("3835");r("c740");o["default"].use(u["a"]);var M=new u["a"].Store({state:{productos:[],porPagar:0,pagado:0,total:0,idbase:1,index:"0"},mutations:{PAY_PRODUCT:function(t,e){var r=t.productos.findIndex((function(t){return t.id===e.id}));t.productos[r].cancelado=!0,t.pagado+=e.precio,t.porPagar-=e.precio,t.total=t.porPagar+t.pagado},ADD_PRODUCT:function(t,e){t.productos.push(Object(s["a"])(Object(s["a"])({},e),{},{id:t.idbase++})),t.porPagar+=e.precio,t.porPagar+=t.pagado,t.total=t.porPagar+t.pagado},DELETE_PRODUCT:function(t,e){var r,o=t.productos.filter((function(t){return t.id===e.id})),a=Object($["a"])(o,1);r=a[0],1==r.cancelado?t.pagado-=e.precio:t.porPagar-=e.precio,t.total=t.porPagar+t.pagado,t.productos=t.productos.filter((function(t){return t.id!==e.id}))}},actions:{},modules:{}});o["default"].config.productionTip=!1,new o["default"]({router:L,store:M,render:function(t){return t(E)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";r("9c0c")},"9c0c":function(t,e,r){},b9f3:function(t,e,r){},e5ee:function(t,e,r){"use strict";r("256c")}});
//# sourceMappingURL=app.6dc44569.js.map