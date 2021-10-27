(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],d=0,v=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/movie-listing-app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",[r("v-app-bar",{staticClass:"d-flex justify-center",attrs:{dark:""}},[r("h1",[e._v("Movie Listing App")])]),r("SearchCard",{attrs:{search:e.state.search},on:{search:e.handleSearch}}),r("v-card",{staticClass:"mx-6",attrs:{color:"white"}},[r("v-card-title",{staticClass:"text-h5 red white--text"},[e._v(" Movies ")]),e.state.isLoading?r("v-card-text",{staticClass:"text-center mt-4"},[r("v-progress-circular",{attrs:{indeterminate:"",size:60,width:6,color:"green"}})],1):r("v-card-text",{staticClass:"d-flex justify-start flex-wrap"},e._l(e.state.movies,(function(t){return r("MovieCard",{key:t.imdbID,attrs:{movie:t},on:{select:e.handleSelect}})})),1),e.isError.error?r("v-alert",{staticClass:"mx-5",attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.isError.message)+" ")]):e.state.noData&&"Movie not found!"===e.state.message?r("v-alert",{staticClass:"mx-5",attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.state.message)+" ")]):e._e()],1)],1)],1)},o=[],s=(r("ac1f"),r("841c"),r("d3b7"),r("a6f4")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"my-6 mx-6",attrs:{color:"white"}},[r("v-card-title",{staticClass:"text-h5 green white--text",attrs:{dark:""}},[e._v(" Search ")]),r("v-card-text",[e._v(" Explore hundreds of movies! For more information visit "),r("a",{staticClass:"green--text text--lighten-1",attrs:{href:"http://www.omdbapi.com/",target:"_blank"}},[e._v(" OMDb API")]),e._v(". ")]),r("v-card-text",{staticClass:"d-flex"},[r("v-autocomplete",{attrs:{items:e.movies,loading:e.isLoading,"search-input":e.searchVal,color:"green","hide-no-data":"",clearable:"","hide-selected":"","item-text":"Title","item-value":"string",label:"Search for Movies",placeholder:"Start typing to Search","prepend-icon":"mdi-movie-search","return-object":""},on:{"update:searchInput":function(t){e.searchVal=t},"update:search-input":function(t){e.searchVal=t},keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleChange.apply(null,arguments)}},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}}),r("v-btn",{staticClass:"ml-3",attrs:{dark:""},on:{click:e.handleChange}},[e._v("Search")]),e.isError.error?r("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.isError.message)+" ")]):e._e()],1)],1)},c=[],l={getMovie:function(e){var t="https://www.omdbapi.com/?s="+e+"&y=2020&apikey=da4c7db4";return t}},u={name:"SearchCard",props:["search"],setup:function(e,t){var r=e.search,a=t.emit,n=Object(s["d"])([]),o=Object(s["d"])(!1),i=Object(s["d"])(null),c=Object(s["d"])(r),u=Object(s["c"])({error:!1,message:""});return Object(s["e"])(c,(function(){if(!(n.length>0)&&!o.value){o.value=!0;var e=l.getMovie(c.value);fetch(e).then((function(e){return e.clone().json()})).then((function(e){var t=e.Search;n.value=t})).catch((function(e){u.error=!0,u.message=e})).finally((function(){o.value=!1}))}})),{movies:n,isLoading:o,model:i,searchVal:c,isError:u,handleChange:function(){a("search",c.value,n.value)}}}},d=u,v=r("2877"),f=r("6544"),h=r.n(f),p=r("0798"),m=r("c6a6"),g=r("8336"),b=r("b0af"),x=r("99d9"),y=Object(v["a"])(d,i,c,!1,null,null,null),C=y.exports;h()(y,{VAlert:p["a"],VAutocomplete:m["a"],VBtn:g["a"],VCard:b["a"],VCardText:x["b"],VCardTitle:x["c"]});var _=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mx-8 my-3 movieCard",attrs:{width:"240","max-width":"350"},on:{click:e.cardSelected}},[r("v-img",{staticClass:"moviePoster",attrs:{"min-height":"370",alt:e.altTxt,src:e.movie.Poster}}),r("v-card-title",{staticClass:"movieTitle"},[e._v(e._s(e.movie.Title))]),r("v-card-subtitle",{staticClass:"movieYear"},[e._v("Published: "+e._s(e.movie.Year))])],1)},S=[],w={name:"MovieCard",props:["movie"],setup:function(e,t){var r=e.movie,a=t.emit,n=Object(s["a"])((function(){return"The movie called: ".concat(r.Title)})),o=function(){a("select",r.Title)};return{altTxt:n,cardSelected:o}}},j=w,O=r("adda"),V=Object(v["a"])(j,_,S,!1,null,null,null),k=V.exports;h()(V,{VCard:b["a"],VCardSubtitle:x["a"],VCardTitle:x["c"],VImg:O["a"]});var M={name:"App",components:{SearchCard:C,MovieCard:k},mounted:function(){},setup:function(){var e=Object(s["c"])({model:null,search:null,isLoading:!1,movies:null,movieNames:[],noData:!1,isSearchedBefore:!1,message:null}),t=Object(s["c"])({error:!1,message:""});return Object(s["e"])((function(){return e.search}),(function(){if(!e.isLoading){for(var r in e.isLoading=!0,localStorage)r===e.search&&(e.isSearchedBefore=!0);var a=l.getMovie(e.search);e.isSearchedBefore?(e.movies=JSON.parse(localStorage.getItem("".concat(e.search))),e.isLoading=!1,e.isSearchedBefore=!1):fetch(a).then((function(e){return e.json()})).then((function(t){"False"===t.Response?(e.isLoading=!1,e.noData=!0,e.message=t.Error):(e.movies=t.Search,localStorage.setItem("".concat(e.search),JSON.stringify(t.Search)),e.noData=!1,e.isLoading=!1)})).catch((function(e){t.error=!0,t.message=e}))}})),{state:e,isError:t,handleSearch:function(t,r,a){e.isLoading=!0,e.movies=r,e.search=t,e.isLoading=a},handleSelect:function(t){e.search=t}}}},T=M,E=r("7496"),L=r("40dc"),P=r("f6c4"),A=r("490a"),B=Object(v["a"])(T,n,o,!1,null,null,null),D=B.exports;h()(B,{VAlert:p["a"],VApp:E["a"],VAppBar:L["a"],VCard:b["a"],VCardText:x["b"],VCardTitle:x["c"],VMain:P["a"],VProgressCircular:A["a"]});var I=r("2f62");a["default"].use(I["a"]);var J=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}}),$=r("f309");a["default"].use($["a"]);var N=new $["a"]({});a["default"].use(s["b"]),a["default"].config.productionTip=!1,"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js")}));var F=new a["default"]({store:J,vuetify:N,render:function(e){return e(D)}});F.$mount("#app")}});
//# sourceMappingURL=app.daa167ab.js.map