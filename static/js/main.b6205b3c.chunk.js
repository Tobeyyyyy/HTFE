(this["webpackJsonphacker-tracker-fe"]=this["webpackJsonphacker-tracker-fe"]||[]).push([[0],{58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(11),i=n.n(r),s=(n(58),n(25)),l=n(50),j=n(100),o=n(33),h=n(34),b=n(101),d=(n(59),n(91)),u=n(93),f=n(104),O=n(103),x=(n(60),n(42)),m=n.n(x),g=n(4),p=function(e){var t=e.profile,n=(new Date).getTime()-t.banDate.getTime()/1e3/60/60/24;return Object(g.jsxs)(d.a,{children:[Object(g.jsx)(u.a,{align:"left",children:Object(g.jsx)(f.a,{src:t.avatar,className:"avatar",variant:"rounded"})}),Object(g.jsx)(u.a,{align:"left",children:Object(g.jsx)("a",{href:t.profileUrl,target:"blank",children:t.userName})}),Object(g.jsx)(u.a,{align:"left",children:m()(t.encountered).format("DD.MM.YYYY HH:mm:ss")}),Object(g.jsx)(u.a,{align:"left",children:t.comment}),Object(g.jsx)(u.a,{align:"left",children:Object(g.jsx)("a",{href:t.matchUrl,target:"blank",children:t.matchUrl})}),Object(g.jsx)(u.a,{align:"left",children:t.vac||t.overwatch?Object(g.jsx)(O.a,{title:n+" days since last ban",children:Object(g.jsx)("span",{className:"ban",children:t.vac?"VAC":"Overwatch"})}):""})]},t.steamId)},v=n(49),y=n(70),k=n(94),w=n(102),D=n(95),C=n(96),N=n(97),S=n(98),T=n(99),B=function(e){var t=e.list,n=e.headline,a=Object(c.useState)(!1),r=Object(s.a)(a,2),i=r[0],l=r[1],j=t.filter((function(e){return e.vac||e.overwatch})).length;return i&&(t=t.filter((function(e){return e.vac||e.overwatch}))),Object(g.jsxs)("div",{style:{padding:"10px"},children:[Object(g.jsx)(y.a,{variant:"h4",style:{marginBottom:20},children:n}),j>0&&Object(g.jsx)(k.a,{style:{float:"right",marginRight:0},control:Object(g.jsx)(w.a,{checked:i,onChange:function(){return l(!i)},name:"checkedB",color:"primary"}),label:"Zeige "+j+" gebannt(e) Profile an."}),Object(g.jsx)(D.a,{component:C.a,children:Object(g.jsxs)(N.a,{size:"small",children:[Object(g.jsx)(S.a,{children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(u.a,{style:{width:"15px"}}),Object(g.jsx)(u.a,{children:"Name"}),Object(g.jsx)(u.a,{children:"Datum"}),Object(g.jsx)(u.a,{children:"Kommentar"}),Object(g.jsx)(u.a,{children:"Match URL"}),Object(g.jsx)(u.a,{children:"Status"})]})}),Object(g.jsx)(T.a,{children:t.sort((function(e,t){return new Date(t.encountered).getTime()-new Date(e.encountered).getTime()})).map((function(e){return Object(g.jsx)(p,{profile:e},Object(v.v4)())}))})]})})]})},F=Object(l.a)({palette:{primary:o.a,secondary:h.a}});var M=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(s.a)(r,2),l=i[0],o=i[1];return Object(c.useEffect)((function(){o(!0),fetch("https://dazzling-minsky-b2c2da.netlify.app/.netlify/functions/api/profiles",{headers:{"Cache-Control":"no-store, no-cache"}}).then((function(e){return e.json()})).then((function(e){a(e),o(!1)})).catch((function(e){return console.log(e)}))}),[]),Object(g.jsx)("div",{className:"root",children:Object(g.jsxs)(j.a,{theme:F,children:[l&&Object(g.jsx)(b.a,{}),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(B,{list:n.filter((function(e){return"obv"===e.type})),headline:"Obvious"}),Object(g.jsx)(B,{list:n.filter((function(e){return"maybe"===e.type})),headline:"Vielleicht"})]})]})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,105)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(M,{})}),document.getElementById("root")),U()}},[[69,1,2]]]);
//# sourceMappingURL=main.b6205b3c.chunk.js.map