(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(8),i=n.n(r),o=(n(28),n(29),n(4)),s=n.n(o),l=n(5),u=n(6),d=(n(31),n(21)),f=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),v="a121101f2a13921f3651ca347f6ad695",h={fetchTrending:"/trending/all/week?api_key=".concat(v,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(v,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(v,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(v,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(v,"with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(v,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(v,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(v,"&with_genres=99")},b=n(1);var j=function(){var e,t,n=Object(c.useState)([]),a=Object(u.a)(n,2),r=a[0],i=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(h.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(r),Object(b.jsxs)("header",{className:"banner",style:{backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===r||void 0===r?void 0:r.backdrop_path,'")')},children:[Object(b.jsx)("div",{className:"banner--fadeLeft "}),Object(b.jsxs)("div",{className:"banner__contents",children:[Object(b.jsx)("h1",{className:"banner__title",children:(null===r||void 0===r?void 0:r.title)||(null===r||void 0===r?void 0:r.name)||(null===r||void 0===r?void 0:r.original_name)}),Object(b.jsx)("h1",{className:"banner__description",children:(e=null===r||void 0===r?void 0:r.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)}),Object(b.jsxs)("div",{className:"banner__buttons",children:[Object(b.jsx)("button",{className:"banner__button",children:"Play"}),Object(b.jsx)("button",{className:"banner__button",children:"My List"})]})]}),Object(b.jsx)("div",{className:"banner--fadeBottom"})]})};n(51),n(52);var m=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],r=function(){window.scrollY>100?a(!0):a(!1)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}}),[]),Object(b.jsx)("div",{className:"nav ".concat(n&&"nav__black"),children:Object(b.jsxs)("div",{className:"nav__contents",children:[Object(b.jsx)("img",{className:"nav__logo",src:"https://crm7.com.br/wp-content/uploads/2020/11/Netflix-Logo.png",alt:"logo"}),Object(b.jsx)("img",{className:"nav__avatar",src:"https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png",alt:""})]})})};n(53);var p=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,r=void 0!==a&&a,i=Object(c.useState)([]),o=Object(u.a)(i,2),d=o[0],v=o[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("div",{className:"row__posters",children:d.map((function(e){return(r&&e.poster_path||!r&&e.backdrop_path)&&Object(b.jsx)("img",{className:"row__poster ".concat(r&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))})]})};var O=function(){return Object(b.jsxs)("div",{className:"homeScreen",children:[Object(b.jsx)(m,{}),Object(b.jsx)(j,{}),Object(b.jsx)(p,{title:"NETFLIX ORIGINALS",fetchUrl:h.fetchNetflixOriginals,isLargeRow:!0}),Object(b.jsx)(p,{title:"Trending Now",fetchUrl:h.fetchTrending}),Object(b.jsx)(p,{title:"Top Rated",fetchUrl:h.fetchTopRated}),Object(b.jsx)(p,{title:"Action Movies",fetchUrl:h.fetchActionMovies}),Object(b.jsx)(p,{title:"Comedy Movies",fetchUrl:h.fetchComedyMovies}),Object(b.jsx)(p,{title:"Horror Movies",fetchUrl:h.fetchHorrorMovies}),Object(b.jsx)(p,{title:"Romance Movies",fetchUrl:h.fetchRomanceMovies}),Object(b.jsx)(p,{title:"Documentaries",fetchUrl:h.fetchDocumentaries})]})};var g=function(){return Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(O,{})})},_=n(7);function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var w=Object(_.b)("counter/fetchCount",function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),y=Object(_.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(w.pending,(function(e){e.status="loading"})).addCase(w.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),N=y.actions,k=(N.increment,N.decrement,N.incrementByAmount,y.reducer),M=Object(_.a)({reducer:{counter:k}}),U=n(23);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(U.a,{store:M,children:Object(b.jsx)(g,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[60,1,2]]]);
//# sourceMappingURL=main.71d43e6f.chunk.js.map