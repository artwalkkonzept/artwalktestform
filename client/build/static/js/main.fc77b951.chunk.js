(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),r=n.n(i),s=n(17),a=n.n(s),l=n(3),o=n(6),j=n(8),d=n(7),b=n.n(d);n(42),n(43);var u=function(){var e=Object(i.useState)([{title:"",description:""}]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(i.useState)({title:"",description:""}),a=Object(j.a)(s,2),d=a[0],u=a[1];function h(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(l.a)({},n,c))}))}return Object(i.useEffect)((function(){fetch("/artwalks").then((function(e){if(e.ok)return e.json()})).then((function(e){return r(e)}))})),Object(c.jsx)("div",{className:"container",style:{marginTop:20},children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h3",{children:"Create New Article"}),Object(c.jsx)("h3",{children:"Add Artwalk"}),Object(c.jsxs)("form",{className:"formPost",onSubmit:this.onSubmit,children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Title of the article: "}),Object(c.jsx)("input",{id:"Title",onChange:h,name:"title",value:d.title})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Article's description: "}),Object(c.jsx)("input",{id:"Description",onChange:h,name:"description",value:d.description})]}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"submit",value:"Create artwalk",className:"btn btn-primary"})}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault();var t={title:d.title,description:d.description};b.a.post("/newartwalk",t)},children:"Add artwalk"})]}),n.map((function(e){return Object(c.jsxs)("div",{className:"formPost",children:[Object(c.jsx)("h1",{children:"Artwalks"}),Object(c.jsx)("h1",{className:"h1Title",children:e.title}),Object(c.jsx)("p",{className:"pDescription",children:e.description}),Object(c.jsx)("button",{class:"btn btn-primary",onClick:function(){return t=e._id,void b.a.delete("/delete/"+t);var t},children:"Delete"})]})}))]})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};a.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),h()}},[[44,1,2]]]);
//# sourceMappingURL=main.fc77b951.chunk.js.map