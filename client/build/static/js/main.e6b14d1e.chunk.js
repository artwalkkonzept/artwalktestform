(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),a=n.n(i),s=n(17),l=n.n(s),r=n(3),j=n(6),b=n(8),d=n(7),o=n.n(d);n(42),n(43);var u=function(){var e=Object(i.useState)([{name:"",bilds:""}]),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)({name:"",bilds:""}),l=Object(b.a)(s,2),d=l[0],u=l[1];function h(e){var t=e.target,n=t.name,c=t.value;u((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(r.a)({},n,c))}))}return Object(i.useEffect)((function(){fetch("/artwalks").then((function(e){if(e.ok)return e.json()})).then((function(e){return a(e)}))})),Object(c.jsxs)("div",{className:"App",style:{marginTop:20},children:[Object(c.jsx)("h3",{children:"Add Artwalk"}),Object(c.jsxs)("form",{className:"formPost",children:[Object(c.jsx)("label",{children:"ArtWalk: "}),Object(c.jsx)("li",{children:Object(c.jsx)("input",{id:"Name",onChange:h,name:"name",value:d.name})}),Object(c.jsx)("label",{children:"Bilds: "}),Object(c.jsx)("li",{children:Object(c.jsx)("input",{id:"Bilds",onChange:h,name:"bilds",value:d.bilds})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault();var t={name:d.name,bilds:d.bilds};o.a.post("/newartwalk",t)},children:"Add artwalk"})})]}),Object(c.jsx)("h3",{children:"Liste der Artwalks"}),n.map((function(e){return Object(c.jsxs)("div",{className:"formPost",children:[Object(c.jsx)("hr",{}),Object(c.jsx)("h4",{className:"h1Title",children:e.name}),Object(c.jsx)("p",{className:"pDescription",children:e.bilds}),Object(c.jsx)("button",{onClick:function(){return t=e._id,void o.a.delete("/delete/"+t);var t},children:"Delete"})]})}))]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),h()}},[[44,1,2]]]);
//# sourceMappingURL=main.e6b14d1e.chunk.js.map