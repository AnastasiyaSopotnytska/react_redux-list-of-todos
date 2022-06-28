(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(5),r=c.n(n),s=c(3),o=(c(21),"SET_TODOS"),i="ADD_TODO",a="SET_USER",l="CLEAR_USER",u=function(e){return e.todos},d=function(e){return e.user},j=(c(22),c(1)),b=function(){var e=Object(s.c)(d),t=Object(s.b)();return e?Object(j.jsxs)("div",{className:"CurrentUser",children:[Object(j.jsx)("h2",{className:"CurrentUser__title",children:Object(j.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(j.jsx)("button",{type:"button",onClick:function(){t({type:l})},children:"Clear"}),Object(j.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(j.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(j.jsx)("p",{className:"CurrentUser__phone",children:e.phone})]}):Object(j.jsx)("p",{children:"No selected user"})},O=c(11),h=c(9),p=c.n(h),f=c(0),x="https://mate.academy/students-api",m=(c(24),function(){var e=Object(s.b)(),t=Object(s.c)(u),c=Object(s.c)(d),n=Object(f.useState)(""),r=Object(O.a)(n,2),i=r[0],l=r[1],b=Object(f.useState)(""),h=Object(O.a)(b,2),m=h[0],_=h[1],v=t.filter((function(e){return e.title.includes(i)}));Object(f.useEffect)((function(){fetch("".concat(x,"/todos")).then((function(e){if(!e.ok)throw new Error("User Error");return e.json()})).then((function(t){return e({type:o,payload:t})}))}),[]);var y=function(t){(function(e){return fetch("".concat(x,"/users/").concat(e)).then((function(e){if(!e.ok)throw new Error("User Error");return e.json()}))})(t).then((function(t){return e({type:a,payload:t})}))};return Object(j.jsxs)("div",{className:"TodoList",children:[Object(j.jsx)("h2",{children:"Todos:"}),Object(j.jsxs)("div",{className:"TodoList__list-container",children:[Object(j.jsx)("p",{children:"Filter todos by title: "}),Object(j.jsx)("input",{type:"text",value:i,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("p",{children:"Filter todos by status: "}),Object(j.jsxs)("select",{onChange:function(e){return _(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"active",children:"Active"}),Object(j.jsx)("option",{value:"completed",children:"Completed"})]}),Object(j.jsx)("ul",{className:"TodoList__list",children:function(e){switch(m){case"active":return e.filter((function(e){return!e.completed}));case"completed":return e.filter((function(e){return e.completed}));default:return e}}(v).map((function(e){return Object(j.jsxs)("li",{className:p()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed}),children:[Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.completed}),Object(j.jsx)("p",{children:e.title})]}),Object(j.jsx)("button",{className:p()("TodoList__user-button","button",{"TodoList__user-button--selected":(null===c||void 0===c?void 0:c.id)===e.userId}),type:"button",onClick:function(){y(e.userId)},children:"User #".concat(e.userId)})]},e.id)}))})]})]})}),_=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"App__sidebar",children:Object(j.jsx)(m,{})}),Object(j.jsx)("div",{className:"App__content",children:Object(j.jsx)("div",{className:"App__content-container",children:Object(j.jsx)(b,{})})})]})},v=c(10),y=c(2),N=c(13),T={todos:[],user:null},C=Object(N.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(y.a)(Object(y.a)({},e),{},{todos:Object(v.a)(t.payload)});case i:return Object(y.a)(Object(y.a)({},e),{},{todos:[].concat(Object(v.a)(e.todos),[t.payload])});case a:return Object(y.a)(Object(y.a)({},e),{},{user:t.payload});case l:return Object(y.a)(Object(y.a)({},e),{},{user:null});default:return e}})),E=function(){return Object(j.jsx)(s.a,{store:C,children:Object(j.jsx)(_,{})})};r.a.render(Object(j.jsx)(E,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5ad685b5.chunk.js.map