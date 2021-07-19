(this["webpackJsonpreact-array-methods"]=this["webpackJsonpreact-array-methods"]||[]).push([[0],{32:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var r,c,i,o,s,a,l,h,j,d=n(0),u=n.n(d),b=n(15),f=n.n(b),m=(n(32),n(5)),O=n(8),g=n(3),x=n(4),p=n(2),y=Object(x.a)(m.b)(r||(r=Object(g.a)(["\n  font-size: 24px;\n  font-family: 'Raleway';\n  color: rgb(82, 81, 84);\n  font-weight: bold;\n  line-height: 1.2;\n"]))),v=x.a.span(c||(c=Object(g.a)(["\n  font-size: 24px;\n  font-family: 'Raleway';\n  color: rgb(82, 81, 84);\n  font-weight: bold;\n  line-height: 1.2;\n"]))),w=n(1),k=x.a.ul(i||(i=Object(g.a)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n"]))),L=function(){var t=Object(p.i)().pathname.split("/").filter((function(t){return t}));return Object(w.jsxs)(k,{children:[Object(w.jsx)(y,{to:"/",children:"home"}),t.map((function(e,n){return Object(w.jsx)("li",{children:n<t.length-1?Object(w.jsxs)(y,{to:"/".concat(t.slice(0,n+1).join("/")),children:["\xa0","> ".concat(e)]}):Object(w.jsxs)(v,{children:["\xa0","> ".concat(e)]})},e)}))]})},S={home:"/",game:"/game",solution:"/solution",reference:"/reference",method:"/reference/:methodName",prodStartingPoint:"/anton-kan-06-onl-01-Kahn-Anton-JS-advanced/react-array-methods/build/"},N="nav-item-active",K=Object(x.a)(m.b).attrs({activeClassName:N})(o||(o=Object(g.a)(["\n  font-size: 40px;\n  font-family: 'Raleway';\n  color: rgb(198, 196, 196);\n  font-weight: bold;\n  line-height: 1.2;\n  &."," {\n    color: rgb(143, 119, 119);\n  }\n"])),N),A=function(){return Object(w.jsxs)("header",{className:"App-header",children:[Object(w.jsx)("h1",{className:"App-header-title",children:"Array Methods"}),Object(w.jsx)("nav",{className:"App-header-menu",children:Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsx)(K,{to:S.home,exact:!0,children:"Home"})}),Object(w.jsx)("li",{children:Object(w.jsx)(K,{to:S.game,children:"Game"})}),Object(w.jsx)("li",{children:Object(w.jsx)(K,{to:S.solution,children:"Solution"})}),Object(w.jsx)("li",{children:Object(w.jsx)(K,{to:S.reference,children:"Reference"})})]})}),Object(w.jsx)(L,{})]})},C=x.a.footer(s||(s=Object(g.a)(["\n  flex-grow: 0;\n  padding: 25px 0;\n  background-color: #282c34;\n  color: white;\n"]))),M=function(){return Object(w.jsx)(C,{children:"\xa9 Anton Kahn, 2021"})},R=function(){return Object(w.jsx)("section",{children:Object(w.jsx)("h2",{children:"Welcome to Array Methods game!"})})},P=n(27),T=n(12),E=Object(T.b)({name:"counter",initialState:{total:0,right:0,wrong:0},reducers:{increment:function(t,e){var n=e.payload,r=Object(P.a)({},t);return r.total++,n.right?r.right++:r.wrong++,r}}}),J=E.actions.increment,F=E.reducer,I=n(17),z=function(){return Object.getOwnPropertyNames(Array.prototype).filter((function(t){return"function"===typeof Array.prototype[t]}))},B={mutating:[],source:z(),nonMutating:[]},D=Object(T.b)({name:"lists",initialState:B,reducers:{move:function(t,e){var n=e.payload,r=n.source,c=n.dest,i=n.method;return t[c]=[].concat(Object(I.a)(t[c]||[]),[i]),t[r]=(t[r]||[]).filter((function(t){return t!==i})),t}}}),U=D.actions.move,W=D.reducer,G=(n(40),function(t){var e=t.withLinks,n=t.method,r=t.ownListKey,c=t.leftListKey,i=t.rightListKey,o=Object(O.b)(),s=Object(p.f)(S.method,{methodName:n}),a=function(t){t&&(o(J({right:!0})),o(U({source:r,dest:t,method:n})))};return Object(w.jsxs)("li",{className:"MethodItem",children:[c&&Object(w.jsx)("button",{onClick:function(){return a(c)},children:"\u2190"}),Object(w.jsx)("span",{"data-tooltip":n,children:e?Object(w.jsx)(m.b,{to:s,children:n}):n}),i&&Object(w.jsx)("button",{onClick:function(){return a(i)},children:"\u2192"})]})}),H=n(13),_=function(t){var e=t.filterKey,n=new URLSearchParams(Object(p.i)().search),r=n.get(e)||"",c=Object(p.h)(),i=Object(p.i)(),o=Object(d.useState)(r),s=Object(H.a)(o,2),a=s[0],l=s[1],h=Object(d.useRef)();Object(d.useEffect)((function(){return l(r)}),[r]);return Object(w.jsx)("input",{type:"text",placeholder:"Start typing to filter...",value:a,onChange:function(t){var r=t.target.value;l(r),h.current&&clearTimeout(h.current),h.current=setTimeout((function(){!function(t){n.set(e,t),i.search=n.toString(),c.push(i)}(r)}),1e3)}})},q=function(t){var e=t.withLinks,n=t.title,r=t.ownListKey,c=t.leftListKey,i=t.rightListKey,o=t.list,s="".concat(n,"Filter"),a=new URLSearchParams(Object(p.i)().search).get(s),l=a?o.filter((function(t){return t.toLowerCase().includes(a.toLowerCase())})):o;return Object(w.jsxs)("div",{className:"MethodsList",children:[Object(w.jsx)("h3",{children:n}),Object(w.jsx)(_,{filterKey:s}),Object(w.jsx)("ul",{children:l.map((function(t){return Object(w.jsx)(G,{withLinks:e,method:t,ownListKey:r,leftListKey:c,rightListKey:i},t)}))})]})},Q=(n(41),function(){var t=Object(d.useState)({top:"0px",left:"0px"}),e=Object(H.a)(t,2),n=e[0],r=e[1],c=Object(d.useState)(""),i=Object(H.a)(c,2),o=i[0],s=i[1],a=Object(d.useState)(!1),l=Object(H.a)(a,2),h=l[0],j=l[1],u=function(t){var e=t.target.closest("[data-tooltip]");if(e)return r({top:"".concat(e.getBoundingClientRect().bottom,"px"),left:"".concat(e.getBoundingClientRect().left,"px")}),s(e.dataset.tooltip||""),void j(!0);r({top:"0px",left:"0px"}),s(""),j(!1)};Object(d.useEffect)((function(){return document.addEventListener("mousemove",u),function(){return document.removeEventListener("mousemove",u)}}));var b={left:n.left,top:n.top};return Object(w.jsx)("div",{className:"Tooltip ".concat(!h&&"Tooltip-hidden"),style:b,children:o})}),V=(n(42),function(t){var e=t.readonly,n=t.withLinks,r=t.lists;return Object(w.jsxs)("div",{className:"MethodsListsContainer",children:[Object(w.jsx)(Q,{}),r.map((function(t,c){return Object(w.jsx)(q,{withLinks:n,title:t.title,ownListKey:t.key,leftListKey:!e&&c>0&&r[c-1].key||void 0,rightListKey:!e&&c<r.length-1&&r[c+1].key||void 0,list:t.list},t.key)}))]})}),X=x.a.div(a||(a=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Y=x.a.div(l||(l=Object(g.a)(["\n  border: 1px black solid;\n  border-radius: 5px;\n  padding: 5px;\n"]))),Z=x.a.h3(h||(h=Object(g.a)(["\n  margin: 0;\n"]))),$=function(){var t=Object(O.c)((function(t){return t.counter}));return Object(w.jsx)(X,{children:Object(w.jsxs)(Y,{children:[Object(w.jsx)(Z,{children:"Clicks"}),Object(w.jsxs)("div",{children:["Total: ",t.total," Right: ",t.right," Wrong: ",t.wrong]})]})})},tt=function(){var t=[{title:"Mutating",key:"mutating",list:[]},{title:"Source",key:"source",list:[]},{title:"Non-mutating",key:"nonMutating",list:[]}],e=Object(O.c)((function(t){return t.lists}));return t.forEach((function(t){return t.list=e[t.key]||[]})),Object(w.jsxs)("section",{children:[Object(w.jsx)("h2",{children:"The game has started!"}),Object(w.jsx)($,{}),Object(w.jsx)(V,{readonly:!1,lists:t,withLinks:!1})]})},et=[0,3,4],nt=[function(t){return t<4}],rt=[3],ct=[],it=function(){return[{method:"concat",args:et},{method:"copyWithin",args:et},{method:"entries",args:ct},{method:"every",args:nt},{method:"fill",args:et},{method:"filter",args:nt},{method:"find",args:nt},{method:"findIndex",args:nt},{method:"flat",args:ct},{method:"flatMap",args:nt},{method:"forEach",args:nt},{method:"includes",args:rt},{method:"indexOf",args:rt},{method:"join",args:ct},{method:"keys",args:ct},{method:"lastIndexOf",args:rt},{method:"map",args:nt},{method:"pop",args:ct},{method:"push",args:rt},{method:"reduce",args:nt},{method:"reduceRight",args:nt},{method:"reverse",args:ct},{method:"shift",args:ct},{method:"slice",args:et},{method:"some",args:nt},{method:"sort",args:ct},{method:"splice",args:et},{method:"toLocaleString",args:ct},{method:"toString",args:ct},{method:"unshift",args:rt},{method:"values",args:ct}]},ot=function(t,e,n){var r=JSON.stringify(t);return t[e].apply(t,Object(I.a)(n)),JSON.stringify(t)!==r},st=function(){return[1,2,3,4,5,[6,7],3,new Date,8,9,10]},at=function(){return it().filter((function(t){var e=t.method,n=t.args;return ot(st(),e,n)})).map((function(t){return t.method}))},lt=function(){var t=at();return it().filter((function(e){return!t.includes(e)})).map((function(t){return t.method}))},ht=function(){var t=it().map((function(t){return t.method}));return z().filter((function(e){return!t.includes(e)}))},jt=function(){var t=[{title:"Mutating",key:"mutating",list:at()},{title:"Unknown",key:"unknown",list:ht()},{title:"Non-mutating",key:"nonMutating",list:lt()}];return Object(w.jsxs)("section",{children:[Object(w.jsx)("h2",{children:"Correct solution"}),Object(w.jsx)(V,{readonly:!0,withLinks:!1,lists:t})]})},dt=function(){var t=Object(p.j)().methodName;return Object(w.jsxs)("section",{children:[Object(w.jsx)("h2",{children:t}),Object(w.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/".concat(t),target:"blank",children:"MDN Documentation"})]})},ut=function(){var t=[{title:"All methods",key:"all",list:z()}];return Object(w.jsxs)("section",{children:[Object(w.jsx)("h2",{children:"JavaScript Array methods Reference"}),Object(w.jsx)(V,{readonly:!0,withLinks:!0,lists:t})]})},bt=function(){return Object(w.jsx)("section",{children:Object(w.jsx)("h2",{children:"Page not found"})})},ft=x.a.main(j||(j=Object(g.a)(["\n  flex-grow: 1;\n"]))),mt=function(){return Object(w.jsx)(ft,{children:Object(w.jsx)("div",{className:"App-container",children:Object(w.jsxs)(p.d,{children:[Object(w.jsx)(p.b,{path:S.prodStartingPoint,children:Object(w.jsx)(p.a,{to:S.home})}),Object(w.jsx)(p.b,{exact:!0,path:S.home,component:R}),Object(w.jsx)(p.b,{path:S.game,component:tt}),Object(w.jsx)(p.b,{path:S.solution,component:jt}),Object(w.jsx)(p.b,{path:S.method,component:dt}),Object(w.jsx)(p.b,{path:S.reference,component:ut}),Object(w.jsx)(p.b,{path:"*",component:bt})]})})})},Ot={lists:W,counter:F},gt=Object(T.a)({reducer:Ot}),xt=(n(43),function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(O.a,{store:gt,children:Object(w.jsxs)(m.a,{children:[Object(w.jsx)(A,{}),Object(w.jsx)(mt,{}),Object(w.jsx)(M,{})]})})})}),pt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),i(t),o(t)}))};f.a.render(Object(w.jsx)(u.a.StrictMode,{children:Object(w.jsx)(xt,{})}),document.getElementById("root")),pt()}},[[44,1,2]]]);
//# sourceMappingURL=main.9002a2d4.chunk.js.map