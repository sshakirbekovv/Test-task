(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{11:function(e,s,c){e.exports={courses:"Courses_courses__2fSJX",courses__card:"Courses_courses__card__3BjrF",courses__card_img:"Courses_courses__card_img__1LDn4",courses__card_header:"Courses_courses__card_header__1bIr_",courses__card_lessons:"Courses_courses__card_lessons__oUhb9",courses__card_duration:"Courses_courses__card_duration__3QS-5",courses__card_footer:"Courses_courses__card_footer__2Af3U"}},13:function(e,s,c){e.exports={sidebar:"Sidebar_sidebar__3SRsY",nav__menu:"Sidebar_nav__menu__2gh8H",active:"Sidebar_active__1KXSy"}},18:function(e,s,c){e.exports={header:"Header_header__IfVlN",header__menu:"Header_header__menu__2J4ra",header__menu_mainLink:"Header_header__menu_mainLink__3AxCC",active:"Header_active__QszIp"}},41:function(e,s,c){},42:function(e,s,c){},65:function(e,s,c){"use strict";c.r(s);var t=c(0),a=c.n(t),n=c(19),r=c.n(n),i=(c(41),c(42),c(20)),o=c(11),d=c.n(o),_=c.p+"static/media/play.e05ce849.svg",u=c(10),l=c.p+"static/media/illustrations.ac815878.png",j=c(1),b=Object(i.a)((function(e){return Object(j.jsx)("div",{className:d.a.courses,children:e.blocksResponse.blocksResponse.blocks.map((function(s,c){return Object(j.jsx)("div",{className:d.a.courses__card,children:Object(j.jsxs)(u.b,{to:"/",children:[Object(j.jsxs)("div",{className:d.a.courses__card_header,children:[Object(j.jsxs)("div",{className:d.a.courses__card_lessons,children:[Object(j.jsx)("h2",{children:s}),Object(j.jsx)("span",{children:"24 lessons"})]}),Object(j.jsx)("div",{className:d.a.courses__card_duration,children:e.minutesResponse.minutesResponse.minutes.slice(c,c+1).map((function(e){return Object(j.jsxs)("span",{children:[e.time," min"]},e.id)}))})]}),Object(j.jsx)("img",{src:l,alt:"illustrations",className:d.a.courses__card_img}),Object(j.jsx)("div",{className:d.a.courses__card_footer,children:Object(j.jsx)("img",{src:_,alt:"play"})})]})},c)}))})})),h=c(3),m=c(18),p=c.n(m),O=Object(i.a)((function(e){var s=Object(h.d)().pathname;return Object(j.jsx)("header",{className:p.a.header,children:Object(j.jsxs)("nav",{className:p.a.header__menu,children:[Object(j.jsx)("div",{className:p.a.header__menu_mainLink,children:Object(j.jsx)(u.b,{to:"/",children:"Courses"})}),Object(j.jsx)("div",{children:Object(j.jsx)("ul",{children:e.categoriesResponse.categoriesResponse.categories.map((function(e,c){return Object(j.jsx)("li",{children:Object(j.jsx)(u.b,{to:"/".concat(e),className:0===s.indexOf("/".concat(e))?p.a.active:"",children:e})},c)}))})})]})})})),v=c(13),x=c.n(v),f=c.p+"static/media/dashboard.a55e5ca4.svg",g=c.p+"static/media/shopping.b4ce50f7.svg",k=c.p+"static/media/customer.c23a8c5d.svg",R=function(){var e=Object(h.d)().pathname;return Object(j.jsx)("div",{className:x.a.sidebar,children:Object(j.jsx)("div",{className:x.a.nav,children:Object(j.jsx)("nav",{className:x.a.nav__menu,children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(u.b,{to:"/",className:"/"===e?x.a.active:"",children:Object(j.jsx)("img",{src:f,alt:"dashboard"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.b,{to:"/shopping-list",className:0===e.indexOf("/shopping-list")?x.a.active:"",children:Object(j.jsx)("img",{src:g,alt:"shopping"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(u.b,{to:"/customer",className:0===e.indexOf("/customer")?x.a.active:"",children:Object(j.jsx)("img",{src:k,alt:"customer"})})})]})})})})},N=c(14),C=c(15),S=c(2),L="https://rpback.com/api/games/",y=c(16),B=c.n(y),w=function(){function e(){Object(N.a)(this,e),this.blocksResponse=void 0,this.blocksResponse="",this.loadBlocks()}return Object(C.a)(e,[{key:"loadBlocks",value:function(){var e=this;B.a.get("".concat(L,"test_blocks"),{params:{project_id:"2"}}).then((function(s){e.blocksResponse=s.data})).catch((function(e){console.error("Load Blocks Server Error",e)}))}}]),e}();Object(S.d)(w,{blocksResponse:S.f,loadBlocks:S.b});var F=new w,H=function(){function e(){Object(N.a)(this,e),this.categoriesResponse=void 0,this.categoriesResponse="",this.loadCategories()}return Object(C.a)(e,[{key:"loadCategories",value:function(){var e=this;B.a.get("".concat(L,"test_categories"),{params:{project_id:"2"}}).then((function(s){e.categoriesResponse=s.data})).catch((function(e){console.error("Load Categories Server Error",e)}))}}]),e}();Object(S.d)(H,{categoriesResponse:S.f,loadCategories:S.b});var I=new H,M=function(){function e(){Object(N.a)(this,e),this.minutesResponse=void 0,this.minutesResponse="",this.loadMinutes()}return Object(C.a)(e,[{key:"loadMinutes",value:function(){var e=this;B.a.get("".concat(L,"test_minutes"),{params:{project_id:"2"}}).then((function(s){e.minutesResponse=s.data})).catch((function(e){console.error("Load Minutes Server Error",e)}))}}]),e}();Object(S.d)(M,{minutesResponse:S.f,loadMinutes:S.b});var E=new M;var J=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(O,{categoriesResponse:I}),Object(j.jsx)(R,{}),Object(j.jsx)("main",{children:Object(j.jsx)(b,{blocksResponse:F,minutesResponse:E})})]})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(s){var c=s.getCLS,t=s.getFID,a=s.getFCP,n=s.getLCP,r=s.getTTFB;c(e),t(e),a(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(u.a,{children:Object(j.jsx)(J,{})})}),document.getElementById("root")),A()}},[[65,1,2]]]);
//# sourceMappingURL=main.e1452f3b.chunk.js.map