(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var i=n(0),c=n(2),r=n.n(c),a=n(17),s=n.n(a),l=n(3),o=n(6),j=n(8),u=n(7),d=n.n(u);n(42),n(43);var b=function(){var t=Object(c.useState)([{title:"",description:""}]),e=Object(j.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)({title:"",description:""}),s=Object(j.a)(a,2),u=s[0],b=s[1];function h(t){var e=t.target,n=e.name,i=e.value;b((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},n,i))}))}return Object(c.useEffect)((function(){fetch("/artwalks").then((function(t){if(t.ok)return t.json()})).then((function(t){return r(t)}))})),Object(i.jsxs)("div",{className:"App container",style:{marginTop:20},children:[Object(i.jsx)("h3",{children:"Add Artwalk"}),Object(i.jsxs)("form",{className:"formPost",onSubmit:this.onSubmit,children:[Object(i.jsx)("label",{children:"Title of the Artwalk: "}),Object(i.jsx)("input",{id:"Title",onChange:h,name:"title",value:u.title}),Object(i.jsx)("label",{children:"Description of the Artwalk: "}),Object(i.jsx)("input",{id:"Description",onChange:h,name:"description",value:u.description}),Object(i.jsx)("button",{className:"btn btn-primary",onClick:function(t){t.preventDefault();var e={title:u.title,description:u.description};d.a.post("/newartwalk",e)},children:"Add artwalk"})]}),n.map((function(t){return Object(i.jsxs)("div",{className:"formPost",children:[Object(i.jsx)("h1",{children:"Artwalks"}),Object(i.jsx)("h1",{className:"h1Title",children:t.title}),Object(i.jsx)("p",{className:"pDescription",children:t.description}),Object(i.jsx)("button",{onClick:function(){return e=t._id,void d.a.delete("/delete/"+e);var e},children:"Delete"})]})}))]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),r(t),a(t)}))};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),h()}},[[44,1,2]]]);
//# sourceMappingURL=main.bbf5b0c8.chunk.js.map