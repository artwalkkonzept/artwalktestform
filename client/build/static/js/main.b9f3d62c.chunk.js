(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),r=n.n(i),a=n(17),l=n.n(a),s=n(3),d=n(6),j=n(8),o=n(7),u=n.n(o);n(42),n(43);var b=function(){var e=Object(i.useState)([{title:"",description:"",date:""}]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)({title:"",description:"",date:""}),l=Object(j.a)(a,2),o=l[0],b=l[1];function h(e){var t=e.target,n=t.name,c=t.value;b((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(s.a)({},n,c))}))}return Object(i.useEffect)((function(){fetch("/artwalks").then((function(e){if(e.ok)return e.json()})).then((function(e){return r(e)}))})),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h3",{children:"Add Artwalk"}),Object(c.jsxs)("form",{class:"formPost",children:[Object(c.jsx)("p",{children:"Title"}),Object(c.jsx)("li",{children:Object(c.jsx)("input",{onChange:h,name:"title",value:o.title})}),Object(c.jsx)("p",{children:"Description"}),Object(c.jsx)("li",{children:Object(c.jsx)("input",{onChange:h,name:"description",value:o.description})}),Object(c.jsx)("p",{children:"Date"}),Object(c.jsx)("li",{children:Object(c.jsx)("input",{onChange:h,name:"date",value:o.date})}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),alert("artwalk added");var t={title:o.title,description:o.description,date:o.date};u.a.post("/newartwalk",t)},children:"Add artwalk"})]}),n.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Artwalks"}),Object(c.jsx)("h1",{children:e.title}),Object(c.jsx)("p",{children:e.description}),Object(c.jsx)("p",{children:e.date}),Object(c.jsx)("button",{class:"btn btn-primary",onClick:function(){return t=e._id,u.a.delete("/delete/"+t),void alert("artwalk deleted");var t},children:"DELETE"})]})}))]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),h()}},[[44,1,2]]]);
//# sourceMappingURL=main.b9f3d62c.chunk.js.map