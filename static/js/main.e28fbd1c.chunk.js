(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),s=a(3),l=a(5),u=a(4),m="https://jsonplaceholder.typicode.com",i=function(t){var e=t.todo,a=e.id,n=e.title,c=e.completed,r=e.user;return o.a.createElement("li",{className:"todo__item",key:a},o.a.createElement("div",{className:"todo__title"},o.a.createElement("span",{className:"todo__info"},"Title:")," ",n),o.a.createElement("div",{className:"todo__status"},o.a.createElement("span",{className:"todo__info"},"Status:")," ",c?"completed":"in progress"),o.a.createElement("div",{className:"todo__name"},o.a.createElement("span",{className:"todo__info"},"Name:")," ",r?r.name:""))},d=function(t){var e=t.todos;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"todo__list"},e.map((function(t){return o.a.createElement(i,{key:t.id,todo:t})}))))},f=function(t){var e=t.sortByTitle,a=t.sortByStatus,n=t.sortByName;return o.a.createElement("div",{className:"todo__sort"},"Sort by:",o.a.createElement("button",{type:"button",className:"todo__sort-btn",onClick:e},"title"),o.a.createElement("button",{type:"button",className:"todo__sort-btn",onClick:a},"status"),o.a.createElement("button",{type:"button",className:"todo__sort-btn",onClick:n},"name"))},_=(a(13),function(){var t=Object(n.useState)([]),e=Object(u.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)(!1),i=Object(u.a)(r,2),_=i[0],b=i[1];return o.a.createElement("div",{className:"todo"},_&&o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{sortByTitle:function(){c(Object(s.a)(a).sort((function(t,e){return t.title.localeCompare(e.title)})))},sortByStatus:function(){c(Object(s.a)(a).sort((function(t,e){return+e.completed-+t.completed})))},sortByName:function(){c(Object(s.a)(a).sort((function(t,e){return t.user&&e.user?t.user.name.localeCompare(e.user.name):-1})))}}),o.a.createElement(d,{todos:a})),!_&&o.a.createElement("button",{type:"button",className:"todo__start-btn",onClick:function(){var t=fetch("".concat(m,"/todos")).then((function(t){return t.json()})),e=fetch("".concat(m,"/users")).then((function(t){return t.json()}));Promise.all([t,e]).then((function(t){var e=Object(u.a)(t,2),a=e[0],n=e[1],o=a.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{user:n.find((function(e){return e.id===t.userId}))})}));b(!0),c(o)}))}},"Load all todos"))});r.a.render(o.a.createElement(_,null),document.getElementById("root"))},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.e28fbd1c.chunk.js.map