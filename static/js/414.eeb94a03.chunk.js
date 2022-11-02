"use strict";(self.webpackChunkcontacts_book=self.webpackChunkcontacts_book||[]).push([[414],{3414:function(n,e,a){a.r(e),a.d(e,{default:function(){return X}});var t=a(885),i=a(6650),r=a(3978),o=a(6015),l=a(4565),c=a(3811),s=a(7247),u=a(7488),d=a(7237),m=a(1413),h=a(2791),f=a(5399),x=a(2892),v=a(4666),Z=a(9823),j=a(2232),p=a(9e3),g=function(n,e){var a=(0,h.useState)((function(){var a;try{var t;a=JSON.parse(null!==(t=localStorage.getItem(n))&&void 0!==t?t:e)}catch(i){a=e}return a})),i=(0,t.Z)(a,2),r=i[0],o=i[1];return(0,h.useEffect)((function(){localStorage.setItem(n,JSON.stringify(r))}),[r,n]),[r,o]},b=a(6925),C=a(8437),k=a(7205),y=a(3329);function S(n){var e=n.id,a=g("name",""),i=(0,t.Z)(a,2),r=i[0],l=i[1],c=g("email",""),s=(0,t.Z)(c,2),u=s[0],d=s[1],m=g("phone",""),f=(0,t.Z)(m,2),x=f[0],v=f[1],Z=(0,b.W1)(e).data,j=(0,b.i)(),p=(0,t.Z)(j,1)[0];function S(n){var e=n.currentTarget,a=e.name,t=e.value;switch(a){case"name":l(t);break;case"email":d(t);break;case"phone":v(t)}}(0,h.useEffect)((function(){Z&&(l(Z.data.contact.name),d(Z.data.contact.email),v(Z.data.contact.phone))}),[Z,d,l,v]);return(0,y.jsxs)(o.Z,{component:"form",onSubmit:function(n){n.preventDefault(),p({id:e,data:{name:r,email:u,phone:x}}),l(""),d(""),v("")},noValidate:!0,sx:{maxWidth:"sm",mx:"auto",p:"15px"},children:[(0,y.jsx)(C.Z,{margin:"normal",fullWidth:!0,label:"Name",name:"name",value:r,onChange:S}),(0,y.jsx)(C.Z,{margin:"normal",fullWidth:!0,label:"Email",name:"email",value:u,onChange:S}),(0,y.jsx)(C.Z,{margin:"normal",required:!0,fullWidth:!0,name:"phone",value:x,label:"Phone",type:"tel",onChange:S}),(0,y.jsx)(k.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Change"})]})}var w=h.forwardRef((function(n,e){return(0,y.jsx)(j.Z,(0,m.Z)({direction:"up",ref:e},n))}));function W(n){var e=n.id,a=h.useState(!1),i=(0,t.Z)(a,2),r=i[0],o=i[1],l=function(){o(!1)};return(0,y.jsxs)("div",{children:[(0,y.jsx)(c.Z,{size:"small",color:"primary","aria-label":"edit",onClick:function(){o(!0)},children:(0,y.jsx)(p.Z,{fontSize:"inherit"})}),(0,y.jsxs)(f.Z,{fullScreen:!0,open:r,onClose:l,TransitionComponent:w,children:[(0,y.jsx)(x.Z,{sx:{position:"relative"},children:(0,y.jsx)(v.Z,{children:(0,y.jsx)(c.Z,{edge:"start",color:"inherit",onClick:l,"aria-label":"close",children:(0,y.jsx)(Z.Z,{})})})}),(0,y.jsx)(S,{id:e})]})]})}function z(n){var e=n.id,a=n.name,t=n.phone,m=n.email,h=n.onDeleteContact,f=n.favorite,x=n.onToggleFavoriteContact,v=a[0];return(0,y.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center",mb:2},children:[(0,y.jsx)(r.Z,{sx:{bgcolor:"secondary.main",width:24,height:24},children:v}),(0,y.jsxs)(o.Z,{sx:{flexGrow:1,ml:2},children:[(0,y.jsx)(l.Z,{variant:"button",display:"block",children:a}),(0,y.jsx)(l.Z,{variant:"caption",display:"block",children:m}),(0,y.jsx)(l.Z,{variant:"overline",display:"block",children:t})]}),(0,y.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,y.jsx)(c.Z,{size:"small","aria-label":"delete",color:"primary",onClick:h,children:(0,y.jsx)(s.Z,{fontSize:"inherit"})}),(0,y.jsx)(W,{id:e}),(0,y.jsx)(c.Z,{size:"small","aria-label":"favorite",color:"primary",onClick:x,children:f?(0,y.jsx)(d.Z,{fontSize:"inherit"}):(0,y.jsx)(u.Z,{fontSize:"inherit"})})]})]})}var T=a(5048),F=a(5052),I=a(7177);function P(){var n,e=(0,b.wY)().data,a=null===e||void 0===e?void 0:e.contacts,i=(0,b.Nt)(),r=(0,t.Z)(i,1)[0],o=(0,b.Z0)(),c=(0,t.Z)(o,1)[0],s=(0,T.v9)(F.B8);(0,T.v9)(F.XG)&&(a=null===e||void 0===e?void 0:e.contacts.filter((function(n){return n.favorite})));var u=function(){var n,e=s.toLowerCase();return null===(n=a)||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(e)}))}();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(I.Z,{children:u?null===u||void 0===u?void 0:u.map((function(n){var e=n._id,a=n.name,t=n.phone,i=n.email,o=n.favorite;return(0,y.jsx)(z,{id:e,name:a,phone:t,email:i,favorite:o,onDeleteContact:function(){return r(e)},onToggleFavoriteContact:function(){return c({id:e,data:{favorite:!o}})}},e)})):(0,y.jsx)(l.Z,{children:"Loading Contact ..."})}),0===(null===(n=a)||void 0===n?void 0:n.length)&&(0,y.jsx)(l.Z,{children:"there are not contacts"})]})}var D=a(1169);function E(){var n=(0,T.v9)(F.B8),e=(0,T.I0)();return(0,y.jsx)(i.Z,{children:(0,y.jsx)(D.ZP,{component:"form",value:n,onChange:function(n){e((0,F.Tv)(n.target.value))},placeholder:" Find contacts by name "})})}var L=a(757),N=a(277),q=a(5590),G=a(2419),_=a(5218);function B(){var n=g("name",""),e=(0,t.Z)(n,2),a=e[0],i=e[1],r=g("email",""),l=(0,t.Z)(r,2),c=l[0],s=l[1],u=g("phone",""),d=(0,t.Z)(u,2),m=d[0],f=d[1],x=(0,b.Tn)(),v=(0,t.Z)(x,2),Z=v[0],j=v[1],p=j.isSuccess,S=j.data,w=(0,b.wY)().data,W=null===w||void 0===w?void 0:w.contacts;(0,h.useEffect)((function(){p&&_.ZP.success("contact ".concat(S.data.contact.name," add in list"))}),[p,S]);var z=function(n){var e=n.currentTarget,a=e.name,t=e.value;switch(a){case"name":i(t);break;case"email":s(t);break;case"phone":f(t)}};return(0,y.jsxs)(o.Z,{component:"form",onSubmit:function(n){n.preventDefault(),null!==W&&void 0!==W&&W.find((function(n){return n.name.toLowerCase()===a.toLowerCase()}))?_.ZP.error("".concat(a," is already in contacts")):Z({name:a,phone:m,email:c}),i(""),s(""),f("")},noValidate:!0,sx:{maxWidth:"sm",mx:"auto",p:"15px"},children:[(0,y.jsx)(C.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Name",name:"name",value:a,autoFocus:!0,onChange:z}),(0,y.jsx)(C.Z,{margin:"normal",fullWidth:!0,id:"email",label:"Email",name:"email",value:c,onChange:z}),(0,y.jsx)(C.Z,{margin:"normal",required:!0,fullWidth:!0,name:"phone",value:m,label:"Phone",type:"tel",onChange:z}),(0,y.jsx)(k.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add"})]})}var J=h.forwardRef((function(n,e){return(0,y.jsx)(j.Z,(0,m.Z)({direction:"up",ref:e},n))})),O=(0,N.ZP)(q.Z)({position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"});function R(){var n=h.useState(!1),e=(0,t.Z)(n,2),a=e[0],i=e[1],r=function(){i(!1)};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(O,{color:"secondary","aria-label":"add",onClick:function(){i(!0)},children:(0,y.jsx)(G.Z,{})}),(0,y.jsxs)(f.Z,{fullScreen:!0,open:a,onClose:r,TransitionComponent:J,children:[(0,y.jsx)(x.Z,{sx:{position:"relative"},children:(0,y.jsx)(v.Z,{children:(0,y.jsx)(c.Z,{edge:"start",color:"inherit",onClick:r,"aria-label":"close",children:(0,y.jsx)(Z.Z,{})})})}),(0,y.jsx)(B,{})]})]})}function V(){var n=(0,T.I0)(),e=(0,T.v9)(F.XG);return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(x.Z,{position:"fixed",color:"primary",sx:{top:"auto",bottom:0},children:(0,y.jsxs)(v.Z,{children:[(0,y.jsx)(c.Z,{color:"inherit","aria-label":"favorite list",size:"large",onClick:function(){return n((0,F.o)())},children:e?(0,y.jsx)(L.Z,{}):(0,y.jsx)(d.Z,{})}),(0,y.jsx)(R,{})]})})})}function X(){return(0,y.jsxs)(o.Z,{sx:{my:12},children:[(0,y.jsx)(E,{}),(0,y.jsx)(P,{}),(0,y.jsx)(V,{})]})}}}]);
//# sourceMappingURL=414.eeb94a03.chunk.js.map