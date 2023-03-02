"use strict";(self.webpackChunkcontacts_book=self.webpackChunkcontacts_book||[]).push([[414],{3414:function(e,n,a){a.r(n),a.d(n,{default:function(){return X}});var t=a(885),r=a(6650),i=a(3978),o=a(6015),l=a(4565),c=a(3811),s=a(7247),d=a(7488),u=a(7237),m=a(1413),h=a(2791),f=a(5399),x=a(2892),v=a(4666),Z=a(9823),j=a(2232),p=a(9e3),g=a(5218),b=function(e,n){var a=(0,h.useState)((function(){var a;try{var t;a=JSON.parse(null!==(t=localStorage.getItem(e))&&void 0!==t?t:n)}catch(r){a=n}return a})),r=(0,t.Z)(a,2),i=r[0],o=r[1];return(0,h.useEffect)((function(){localStorage.setItem(e,JSON.stringify(i))}),[i,e]),[i,o]},C=a(6925),k=a(8437),y=a(7205),S=a(3329);function w(e){var n=e.id,a=b("editedName",""),r=(0,t.Z)(a,2),i=r[0],l=r[1],c=b("editedEmail",""),s=(0,t.Z)(c,2),d=s[0],u=s[1],m=b("editedPhone",""),f=(0,t.Z)(m,2),x=f[0],v=f[1],Z=(0,C.W1)(n).data,j=(0,C.i)(),p=(0,t.Z)(j,2),w=p[0],P=p[1],E=P.isSuccess,W=P.isError,z=P.error;function F(e){var n=e.currentTarget,a=n.name,t=n.value;switch(a){case"name":l(t);break;case"email":u(t);break;case"phone":v(t)}}console.log(Z),(0,h.useEffect)((function(){Z&&(l(Z.data.contact.name),u(Z.data.contact.email),v(Z.data.contact.phone))}),[Z,u,l,v]),(0,h.useEffect)((function(){E&&g.ZP.success("contact ".concat(Z.data.contact.name," changed ")),W&&g.ZP.error("Error: ".concat(z.data.message," "))}),[Z,z,W,E]);return(0,S.jsxs)(o.Z,{component:"form",onSubmit:function(e){e.preventDefault(),Z.data.contact.name!==i||Z.data.contact.email!==d||Z.data.contact.phone!==x?(w({id:n,data:{name:i,email:d,phone:x}}),w({id:n,data:{name:i,email:d,phone:x}})):(0,g.ZP)("contact is not changed ")},noValidate:!0,sx:{maxWidth:"sm",mx:"auto",p:"15px"},children:[(0,S.jsx)(k.Z,{margin:"normal",fullWidth:!0,label:"Name",name:"name",value:i,onChange:F}),(0,S.jsx)(k.Z,{margin:"normal",fullWidth:!0,label:"Email",name:"email",value:d,onChange:F}),(0,S.jsx)(k.Z,{margin:"normal",required:!0,fullWidth:!0,name:"phone",value:x,label:"Phone",type:"tel",onChange:F}),(0,S.jsx)(y.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Change"})]})}var P=h.forwardRef((function(e,n){return(0,S.jsx)(j.Z,(0,m.Z)({direction:"up",ref:n},e))}));function E(e){var n=e.id,a=h.useState(!1),r=(0,t.Z)(a,2),i=r[0],o=r[1],l=function(){o(!1)};return(0,S.jsxs)("div",{children:[(0,S.jsx)(c.Z,{size:"small",color:"primary","aria-label":"edit",onClick:function(){o(!0)},children:(0,S.jsx)(p.Z,{fontSize:"inherit"})}),(0,S.jsxs)(f.Z,{fullScreen:!0,open:i,onClose:l,TransitionComponent:P,children:[(0,S.jsx)(x.Z,{sx:{position:"relative"},children:(0,S.jsx)(v.Z,{children:(0,S.jsx)(c.Z,{edge:"start",color:"inherit",onClick:l,"aria-label":"close",children:(0,S.jsx)(Z.Z,{})})})}),(0,S.jsx)(w,{id:n})]})]})}function W(e){var n=e.id,a=e.name,t=e.phone,m=e.email,h=e.onDeleteContact,f=e.favorite,x=e.onToggleFavoriteContact,v=a[0];return(0,S.jsxs)(r.Z,{sx:{display:"flex",alignItems:"center",mb:2},children:[(0,S.jsx)(i.Z,{sx:{bgcolor:"secondary.main",width:24,height:24},children:v}),(0,S.jsxs)(o.Z,{sx:{flexGrow:1,ml:2},children:[(0,S.jsx)(l.Z,{variant:"button",display:"block",children:a}),(0,S.jsx)(l.Z,{variant:"caption",display:"block",children:m}),(0,S.jsx)(l.Z,{variant:"overline",display:"block",children:t})]}),(0,S.jsxs)(o.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,S.jsx)(c.Z,{size:"small","aria-label":"delete",color:"primary",onClick:h,children:(0,S.jsx)(s.Z,{fontSize:"inherit"})}),(0,S.jsx)(E,{id:n}),(0,S.jsx)(c.Z,{size:"small","aria-label":"favorite",color:"primary",onClick:x,children:f?(0,S.jsx)(u.Z,{fontSize:"inherit"}):(0,S.jsx)(d.Z,{fontSize:"inherit"})})]})]})}var z=a(5048),F=a(5052),T=a(7177);function I(){var e,n=(0,C.wY)().data,a=null===n||void 0===n?void 0:n.data.result,r=(0,C.Nt)(),i=(0,t.Z)(r,1)[0],o=(0,C.Z0)(),c=(0,t.Z)(o,1)[0],s=(0,z.v9)(F.B8);(0,z.v9)(F.XG)&&(a=null===n||void 0===n?void 0:n.data.result.filter((function(e){return e.favorite})));var d=function(){var e,n=s.toLowerCase();return null===(e=a)||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(T.Z,{children:d?null===d||void 0===d?void 0:d.map((function(e){var n=e._id,a=e.name,t=e.phone,r=e.email,o=e.favorite;return(0,S.jsx)(W,{id:n,name:a,phone:t,email:r,favorite:o,onDeleteContact:function(){return i(n)},onToggleFavoriteContact:function(){return c({id:n,data:{favorite:!o}})}},n)})):(0,S.jsx)(l.Z,{children:"Loading Contact ..."})}),0===(null===(e=a)||void 0===e?void 0:e.length)&&(0,S.jsx)(l.Z,{children:"there are not contacts"})]})}var N=a(1169);function D(){var e=(0,z.v9)(F.B8),n=(0,z.I0)();return(0,S.jsx)(r.Z,{children:(0,S.jsx)(N.ZP,{component:"form",value:e,onChange:function(e){n((0,F.Tv)(e.target.value))},placeholder:" Find contacts by name "})})}var L=a(757),q=a(277),G=a(5590),O=a(2419);function _(){var e=b("name",""),n=(0,t.Z)(e,2),a=n[0],r=n[1],i=b("email",""),l=(0,t.Z)(i,2),c=l[0],s=l[1],d=b("phone",""),u=(0,t.Z)(d,2),m=u[0],f=u[1],x=(0,C.Tn)(),v=(0,t.Z)(x,2),Z=v[0],j=v[1],p=j.isSuccess,w=j.data,P=j.isError,E=j.error,W=(0,C.wY)().data,z=null===W||void 0===W?void 0:W.data.result;(0,h.useEffect)((function(){p&&g.ZP.success("contact ".concat(w.data.contact.name," add in list")),P&&g.ZP.error("Error: ".concat(E.data.message," "))}),[p,w,E,P,m]);var F=function(e){var n=e.currentTarget,a=n.name,t=n.value;switch(a){case"name":r(t);break;case"email":s(t);break;case"phone":f(t)}};return(0,S.jsxs)(o.Z,{component:"form",onSubmit:function(e){e.preventDefault(),a&&m?function(){var e=null===z||void 0===z?void 0:z.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})),n=null===z||void 0===z?void 0:z.find((function(e){return e.phone===m}));e?g.ZP.error("".concat(a," is already in contacts")):n?g.ZP.error("contact with ".concat(m," number is already in contacts")):(Z({name:a,phone:m,email:c}),r(""),s(""),f(""))}():(0,g.ZP)("name and phone must have in form")},noValidate:!0,sx:{maxWidth:"sm",mx:"auto",p:"15px"},children:[(0,S.jsx)(k.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Name",name:"name",value:a,autoFocus:!0,onChange:F}),(0,S.jsx)(k.Z,{margin:"normal",fullWidth:!0,id:"email",label:"Email",name:"email",value:c,onChange:F}),(0,S.jsx)(k.Z,{margin:"normal",required:!0,fullWidth:!0,name:"phone",value:m,label:"Phone",type:"tel",onChange:F}),(0,S.jsx)(y.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add"})]})}var B=h.forwardRef((function(e,n){return(0,S.jsx)(j.Z,(0,m.Z)({direction:"up",ref:n},e))})),J=(0,q.ZP)(G.Z)({position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"});function R(){var e=h.useState(!1),n=(0,t.Z)(e,2),a=n[0],r=n[1],i=function(){r(!1)};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(J,{color:"secondary","aria-label":"add",onClick:function(){r(!0)},children:(0,S.jsx)(O.Z,{})}),(0,S.jsxs)(f.Z,{fullScreen:!0,open:a,onClose:i,TransitionComponent:B,children:[(0,S.jsx)(x.Z,{sx:{position:"relative"},children:(0,S.jsx)(v.Z,{children:(0,S.jsx)(c.Z,{edge:"start",color:"inherit",onClick:i,"aria-label":"close",children:(0,S.jsx)(Z.Z,{})})})}),(0,S.jsx)(_,{toggleOpen:r})]})]})}function V(){var e=(0,z.I0)(),n=(0,z.v9)(F.XG);return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(x.Z,{position:"fixed",color:"primary",sx:{top:"auto",bottom:0},children:(0,S.jsxs)(v.Z,{children:[(0,S.jsx)(c.Z,{color:"inherit","aria-label":"favorite list",size:"large",onClick:function(){return e((0,F.o)())},children:n?(0,S.jsx)(L.Z,{}):(0,S.jsx)(u.Z,{})}),(0,S.jsx)(R,{})]})})})}function X(){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(D,{}),(0,S.jsx)(I,{}),(0,S.jsx)(V,{})]})}}}]);
//# sourceMappingURL=414.74d6b870.chunk.js.map