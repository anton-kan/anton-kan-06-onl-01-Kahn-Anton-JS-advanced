(this["webpackJsonpreact-array-methods"]=this["webpackJsonpreact-array-methods"]||[]).push([[0],{32:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var r,c,i,o,s,a,l,j,u,d,h,b,f,O,m,x=n(1),g=n.n(x),p=n(16),v=n.n(p),y=(n(32),n(7)),w=n(5),k=n(2),S=n(3),L=n(4),R=Object(S.a)(y.b)(r||(r=Object(k.a)(["\n  font-size: 24px;\n  font-family: 'Raleway';\n  color: rgb(82, 81, 84);\n  font-weight: bold;\n  line-height: 1.2;\n"]))),N=S.a.span(c||(c=Object(k.a)(["\n  font-size: 24px;\n  font-family: 'Raleway';\n  color: rgb(82, 81, 84);\n  font-weight: bold;\n  line-height: 1.2;\n"]))),C=n(0),K=S.a.ul(i||(i=Object(k.a)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n"]))),M=function(){var t=Object(L.i)().pathname.split("/").filter((function(t){return t}));return Object(C.jsxs)(K,{children:[Object(C.jsx)(R,{to:"/",children:"home"}),t.map((function(e,n){return Object(C.jsx)("li",{children:n<t.length-1?Object(C.jsxs)(R,{to:"/".concat(t.slice(0,n+1).join("/")),children:["\xa0","> ".concat(e)]}):Object(C.jsxs)(N,{children:["\xa0","> ".concat(e)]})},e)}))]})},A={home:"/",game:"/game",solution:"/solution",reference:"/reference",method:"/reference/:methodName",topScores:"/top-scores",prodStartingPoint:"/anton-kan-06-onl-01-Kahn-Anton-JS-advanced/react-array-methods/build/"},T="nav-item-active",E=Object(S.a)(y.b).attrs({activeClassName:T})(o||(o=Object(k.a)(["\n  font-size: 40px;\n  font-family: 'Raleway';\n  color: rgb(198, 196, 196);\n  font-weight: bold;\n  line-height: 1.2;\n  &."," {\n    color: rgb(143, 119, 119);\n  }\n"])),T),I=function(){return Object(C.jsxs)("header",{className:"App-header",children:[Object(C.jsx)("h1",{className:"App-header-title",children:"Array Methods"}),Object(C.jsx)("nav",{className:"App-header-menu",children:Object(C.jsxs)("ul",{children:[Object(C.jsx)("li",{children:Object(C.jsx)(E,{to:A.home,exact:!0,children:"Home"})}),Object(C.jsx)("li",{children:Object(C.jsx)(E,{to:A.game,children:"Game"})}),Object(C.jsx)("li",{children:Object(C.jsx)(E,{to:A.solution,children:"Solution"})}),Object(C.jsx)("li",{children:Object(C.jsx)(E,{to:A.reference,children:"Reference"})}),Object(C.jsx)("li",{children:Object(C.jsx)(E,{to:A.topScores,children:"Top Scores"})})]})}),Object(C.jsx)(M,{})]})},J=S.a.footer(s||(s=Object(k.a)(["\n  flex-grow: 0;\n  padding: 25px 0;\n  background-color: #282c34;\n  color: white;\n"]))),P=function(){return Object(C.jsx)(J,{children:"\xa9 Anton Kahn, 2021"})},F=function(){return Object(C.jsx)("section",{children:Object(C.jsx)("h2",{children:"Welcome to Array Methods game!"})})},W=n(6),z=n(10),B={total:0,right:0,wrong:0},D=Object(z.b)({name:"counter",initialState:B,reducers:{increment:function(t,e){var n=e.payload,r=Object(W.a)({},t);return r.total++,n.right?r.right++:r.wrong++,r},reset:function(){return Object(W.a)({},B)}}}),U=D.actions,G=U.increment,H=U.reset,Y=D.reducer,_=n(18),q=function(){return Object.getOwnPropertyNames(Array.prototype).filter((function(t){return"function"===typeof Array.prototype[t]}))},Q={mutating:[],source:q(),nonMutating:[]},V=Object(z.b)({name:"lists",initialState:Q,reducers:{move:function(t,e){var n=e.payload,r=n.source,c=n.dest,i=n.method;return t[c]=[].concat(Object(_.a)(t[c]||[]),[i]),t[r]=(t[r]||[]).filter((function(t){return t!==i})),t},reset:function(){return Object(W.a)({},Q)}}}),X=V.actions,Z=X.move,$=X.reset,tt=V.reducer,et=Object(z.b)({name:"win",initialState:false,reducers:{set:function(){return!0},reset:function(){return false}}}),nt=et.actions,rt=nt.set,ct=nt.reset,it=et.reducer,ot=Object(z.b)({name:"timer",initialState:{intervalRef:null,value:0},reducers:{setRef:function(t,e){var n=e.payload.intervalRef;return Object(W.a)(Object(W.a)({},t),{},{intervalRef:n})},stop:function(t){return t.intervalRef&&clearInterval(t.intervalRef),Object(W.a)(Object(W.a)({},t),{},{intervalRef:null})},increment:function(t){return Object(W.a)(Object(W.a)({},t),{},{value:t.value+1})},reset:function(t){return Object(W.a)(Object(W.a)({},t),{},{value:0})}}}),st=function(t,e){if(!e().timer.intervalRef){var n=setInterval((function(){t(ot.actions.increment())}),1e3);t(ot.actions.setRef({intervalRef:n}))}},at=ot.actions,lt=at.reset,jt=at.stop,ut=ot.reducer,dt=(n(40),[0,3,4]),ht=[function(t){return t<4}],bt=[3],ft=[],Ot=function(){return[{method:"concat",args:dt},{method:"copyWithin",args:dt},{method:"entries",args:ft},{method:"every",args:ht},{method:"fill",args:dt},{method:"filter",args:ht},{method:"find",args:ht},{method:"findIndex",args:ht},{method:"flat",args:ft},{method:"flatMap",args:ht},{method:"forEach",args:ht},{method:"includes",args:bt},{method:"indexOf",args:bt},{method:"join",args:ft},{method:"keys",args:ft},{method:"lastIndexOf",args:bt},{method:"map",args:ht},{method:"pop",args:ft},{method:"push",args:bt},{method:"reduce",args:ht},{method:"reduceRight",args:ht},{method:"reverse",args:ft},{method:"shift",args:ft},{method:"slice",args:dt},{method:"some",args:ht},{method:"sort",args:ft},{method:"splice",args:dt},{method:"toLocaleString",args:ft},{method:"toString",args:ft},{method:"unshift",args:bt},{method:"values",args:ft},{method:"at",args:bt}]},mt=function(t,e,n){var r=JSON.stringify(t);return t[e].apply(t,Object(_.a)(n)),JSON.stringify(t)!==r},xt=function(){return[1,2,3,4,5,[6,7],3,new Date,8,9,10]},gt=function(){return Ot().filter((function(t){var e=t.method,n=t.args;return mt(xt(),e,n)})).map((function(t){return t.method}))},pt=function(){var t=gt();return Ot().map((function(t){return t.method})).filter((function(e){return!t.includes(e)}))},vt=function(t,e){switch(e){case"mutating":return gt().includes(t);case"nonMutating":return pt().includes(t);default:return!1}},yt=function(t,e){return t.length===e.length&&t.every((function(t){return e.includes(t)}))},wt=function(t){return yt(t.mutating,gt())&&yt(t.nonMutating,pt())},kt=function(t){var e=t.withLinks,n=t.method,r=t.ownListKey,c=t.leftListKey,i=t.rightListKey,o=Object(w.b)(),s=Object(L.f)(A.method,{methodName:n}),a=function(t){t&&o((function(e,c){e(G({right:vt(n,t)})),e(Z({source:r,dest:t,method:n})),wt(c().lists)&&(e(rt()),e(jt()))}))};return Object(C.jsxs)("li",{className:"MethodItem",children:[c&&Object(C.jsx)("button",{onClick:function(){return a(c)},children:"\u2190"}),Object(C.jsx)("span",{"data-tooltip":n,children:e?Object(C.jsx)(y.b,{to:s,children:n}):n}),i&&Object(C.jsx)("button",{onClick:function(){return a(i)},children:"\u2192"})]})},St=n(12),Lt=function(t){var e=t.filterKey,n=new URLSearchParams(Object(L.i)().search),r=n.get(e)||"",c=Object(L.h)(),i=Object(L.i)(),o=Object(x.useState)(r),s=Object(St.a)(o,2),a=s[0],l=s[1],j=Object(x.useRef)();Object(x.useEffect)((function(){return l(r)}),[r]);return Object(C.jsx)("input",{type:"text",placeholder:"Start typing to filter...",value:a,onChange:function(t){var r=t.target.value;l(r),j.current&&clearTimeout(j.current),j.current=setTimeout((function(){!function(t){n.set(e,t),i.search=n.toString(),c.push(i)}(r)}),1e3)}})},Rt=function(t){var e=t.withLinks,n=t.title,r=t.ownListKey,c=t.leftListKey,i=t.rightListKey,o=t.list,s="".concat(n,"Filter"),a=new URLSearchParams(Object(L.i)().search).get(s),l=a?o.filter((function(t){return t.toLowerCase().includes(a.toLowerCase())})):o;return Object(C.jsxs)("div",{className:"MethodsList",children:[Object(C.jsx)("h3",{children:n}),Object(C.jsx)(Lt,{filterKey:s}),Object(C.jsx)("ul",{children:l.map((function(t){return Object(C.jsx)(kt,{withLinks:e,method:t,ownListKey:r,leftListKey:c,rightListKey:i},t)}))})]})},Nt=(n(41),function(){var t=Object(x.useState)({top:"0px",left:"0px"}),e=Object(St.a)(t,2),n=e[0],r=e[1],c=Object(x.useState)(""),i=Object(St.a)(c,2),o=i[0],s=i[1],a=Object(x.useState)(!1),l=Object(St.a)(a,2),j=l[0],u=l[1],d=function(t){var e=t.target.closest("[data-tooltip]");if(e)return r({top:"".concat(e.getBoundingClientRect().bottom,"px"),left:"".concat(e.getBoundingClientRect().left,"px")}),s(e.dataset.tooltip||""),void u(!0);r({top:"0px",left:"0px"}),s(""),u(!1)};Object(x.useEffect)((function(){return document.addEventListener("mousemove",d),function(){return document.removeEventListener("mousemove",d)}}));var h={left:n.left,top:n.top};return Object(C.jsx)("div",{className:"Tooltip ".concat(!j&&"Tooltip-hidden"),style:h,children:o})}),Ct=(n(42),function(t){var e=t.readonly,n=t.withLinks,r=t.lists;return Object(C.jsxs)("div",{className:"MethodsListsContainer",children:[Object(C.jsx)(Nt,{}),r.map((function(t,c){return Object(C.jsx)(Rt,{withLinks:n,title:t.title,ownListKey:t.key,leftListKey:!e&&c>0&&r[c-1].key||void 0,rightListKey:!e&&c<r.length-1&&r[c+1].key||void 0,list:t.list},t.key)}))]})}),Kt=S.a.div(a||(a=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n"]))),Mt=S.a.div(l||(l=Object(k.a)(["\n  border: 1px black solid;\n  border-radius: 5px;\n  padding: 5px;\n"]))),At=S.a.h3(j||(j=Object(k.a)(["\n  margin: 0;\n"]))),Tt=S.a.span(u||(u=Object(k.a)(["\n  color: green;\n"]))),Et=S.a.span(d||(d=Object(k.a)(["\n  color: red;\n"]))),It=function(){var t=Object(w.c)((function(t){return t.counter})),e=Object(w.c)((function(t){return t.timer}));return Object(C.jsx)(Kt,{children:Object(C.jsxs)(Mt,{children:[Object(C.jsx)(At,{children:"Time Elapsed: "}),Object(C.jsxs)("div",{children:[e.value,"s"]}),Object(C.jsx)(At,{children:"Clicks"}),Object(C.jsxs)("div",{children:["Total: ",t.total," ",Object(C.jsxs)(Tt,{children:["Right: ",t.right]})," ",Object(C.jsxs)(Et,{children:["Wrong: ",t.wrong]})]})]})})},Jt="top-scores",Pt=function(){var t=localStorage.getItem(Jt);return t?JSON.parse(t):[]},Ft=function(t){var e=Pt();e.push(t),function(t){localStorage.setItem(Jt,JSON.stringify(t))}(e)},Wt=S.a.div(h||(h=Object(k.a)(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),zt=S.a.div(b||(b=Object(k.a)(["\n  background-color: white;\n  border-radius: 10px;\n  padding: 10px;\n"]))),Bt=S.a.div(f||(f=Object(k.a)(["\n  display: flex;\n  justify-content: space-around;\n  margin: 10px;\n"]))),Dt=function(t){var e=Object(w.b)(),n=Object(x.useState)(""),r=Object(St.a)(n,2),c=r[0],i=r[1],o=Object(w.c)((function(t){return t.counter})),s=Object(w.c)((function(t){return t.timer}));if(t.won){var a=function(){Ft({name:c,time:s.value,total:o.total,right:o.right,wrong:o.wrong})};return Object(C.jsx)(Wt,{children:Object(C.jsxs)(zt,{children:[Object(C.jsx)("h2",{children:"Congratulations!"}),Object(C.jsx)("p",{children:"You Won!"}),Object(C.jsx)("form",{children:Object(C.jsxs)("label",{children:["Enter your name: ",Object(C.jsx)("input",{type:"text",value:c,onChange:function(t){i(t.target.value)}})]})}),Object(C.jsxs)(Bt,{children:[Object(C.jsx)("button",{onClick:function(){e(ct()),a()},children:"Finish"}),Object(C.jsx)("button",{onClick:function(){e(ct()),e($()),e(H()),e(lt()),e(st),a()},children:"Restart"})]})]})})}return Object(C.jsx)(C.Fragment,{})},Ut=function(){var t=Object(w.b)();Object(x.useEffect)((function(){t(st)}),[t]);var e=[{title:"Mutating",key:"mutating",list:[]},{title:"Source",key:"source",list:[]},{title:"Non-mutating",key:"nonMutating",list:[]}],n=Object(w.c)((function(t){return t.lists}));e.forEach((function(t){return t.list=n[t.key]||[]}));var r=Object(w.c)((function(t){return t.win}));return Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:"The game has started!"}),Object(C.jsx)(Dt,{won:r}),Object(C.jsx)(It,{}),Object(C.jsx)(Ct,{readonly:!1,lists:e,withLinks:!1})]})},Gt=function(){var t=Ot().map((function(t){return t.method}));return q().filter((function(e){return!t.includes(e)}))},Ht=function(){var t=[{title:"Mutating",key:"mutating",list:gt()},{title:"Unknown",key:"unknown",list:Gt()},{title:"Non-mutating",key:"nonMutating",list:pt()}];return Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:"Correct solution"}),Object(C.jsx)(Ct,{readonly:!0,withLinks:!1,lists:t})]})},Yt=function(){var t=Object(L.j)().methodName;return Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:t}),Object(C.jsx)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/".concat(t),target:"blank",children:"MDN Documentation"})]})},_t=function(){var t=[{title:"All methods",key:"all",list:q()}];return Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:"JavaScript Array methods Reference"}),Object(C.jsx)(Ct,{readonly:!0,withLinks:!0,lists:t})]})},qt=function(){return Object(C.jsx)("section",{children:Object(C.jsx)("h2",{children:"Page not found"})})},Qt=S.a.table(O||(O=Object(k.a)(["\n  border: 1px solid black;\n  width: 100%;\n  margin-top: 10px;\n"]))),Vt=function(){var t=Pt();t.sort((function(t,e){return t.time-e.time}));var e=t.map((function(t,e){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:e+1}),Object(C.jsx)("td",{children:t.name}),Object(C.jsxs)("td",{children:[t.time,"s"]}),Object(C.jsx)("td",{children:t.total}),Object(C.jsx)("td",{children:t.right}),Object(C.jsx)("td",{children:t.wrong})]},e)}));return Object(C.jsxs)("section",{children:[Object(C.jsx)("h2",{children:"Top Scores ordered by time"}),Object(C.jsxs)(Qt,{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:"Name"}),Object(C.jsx)("th",{children:"Time"}),Object(C.jsx)("th",{children:"Total"}),Object(C.jsx)("th",{children:"Right"}),Object(C.jsx)("th",{children:"Wrong"})]})}),Object(C.jsx)("tbody",{children:e})]})]})},Xt=S.a.main(m||(m=Object(k.a)(["\n  flex-grow: 1;\n"]))),Zt=function(){return Object(C.jsx)(Xt,{children:Object(C.jsx)("div",{className:"App-container",children:Object(C.jsxs)(L.d,{children:[Object(C.jsx)(L.b,{path:A.prodStartingPoint,children:Object(C.jsx)(L.a,{to:A.home})}),Object(C.jsx)(L.b,{exact:!0,path:A.home,component:F}),Object(C.jsx)(L.b,{path:A.game,component:Ut}),Object(C.jsx)(L.b,{path:A.solution,component:Ht}),Object(C.jsx)(L.b,{path:A.method,component:Yt}),Object(C.jsx)(L.b,{path:A.reference,component:_t}),Object(C.jsx)(L.b,{path:A.topScores,component:Vt}),Object(C.jsx)(L.b,{path:"*",component:qt})]})})})},$t={lists:tt,counter:Y,timer:ut,win:it},te=Object(z.a)({reducer:$t}),ee=(n(43),function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(w.a,{store:te,children:Object(C.jsxs)(y.a,{children:[Object(C.jsx)(I,{}),Object(C.jsx)(Zt,{}),Object(C.jsx)(P,{})]})})})}),ne=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),i(t),o(t)}))};v.a.render(Object(C.jsx)(g.a.StrictMode,{children:Object(C.jsx)(ee,{})}),document.getElementById("root")),ne()}},[[44,1,2]]]);
//# sourceMappingURL=main.dd6ca407.chunk.js.map