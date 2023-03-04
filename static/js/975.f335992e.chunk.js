"use strict";(self.webpackChunkcontacts_book=self.webpackChunkcontacts_book||[]).push([[975],{2975:function(n,e,o){o.r(e),o.d(e,{default:function(){return y}});var r=o(885),t=o(5218),a=o(2791),i=o(3504),c=o(3978),s=o(7205),u=o(8437),l=o(6283),d=o(6015),m=o(403),p=o(4565),v=o(5048),f=o(1014),h=o(4317),Z=o(3329),x=function(){var n=(0,v.I0)(),e=(0,a.useState)(""),o=(0,r.Z)(e,2),x=o[0],b=o[1],y=(0,a.useState)(""),g=(0,r.Z)(y,2),w=g[0],S=g[1],j=(0,a.useState)(""),k=(0,r.Z)(j,2),C=k[0],D=k[1],V=(0,v.v9)(f.M7),F=function(n){var e=n.target,o=e.name,r=e.value;switch(o){case"name":return b(r);case"email":return S(r);case"password":return D(r);default:return}};return(0,Z.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,Z.jsx)(c.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,Z.jsx)(m.Z,{})}),(0,Z.jsx)(p.Z,{component:"h1",variant:"h5",children:"Sign Up"}),(0,Z.jsxs)(d.Z,{component:"form",onSubmit:function(e){e.preventDefault(),e.stopPropagation(),x&&w&&C||t.ZP.error("all form fields must be filled out"),n((0,h.a$)({name:x,email:w,password:C})),V&&(b(""),S(""),D(""))},sx:{mt:1},children:[(0,Z.jsx)(u.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",value:x,autoComplete:"name",autoFocus:!0,onChange:F}),(0,Z.jsx)(u.Z,{margin:"normal",required:!0,fullWidth:!0,label:"Email Address",name:"email",value:w,type:"email",autoFocus:!0,onChange:F}),(0,Z.jsx)(u.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",value:C,label:"Password",type:"password",onChange:F}),(0,Z.jsx)(s.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),(0,Z.jsx)(l.Z,{component:i.rU,to:"/login",variant:"body2",children:"Do you have an account? Sign in"})]})]})},b=o(1780);function y(){var n=(0,v.v9)(f.Vc);return(0,Z.jsxs)("main",{style:{padding:"15px",margin:"65px 0 0"},children:[n&&(0,Z.jsx)(b.Z,{isLoading:n}),(0,Z.jsx)(x,{})]})}},403:function(n,e,o){var r=o(4836);e.Z=void 0;var t=r(o(5649)),a=o(3329),i=(0,t.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");e.Z=i},6283:function(n,e,o){o.d(e,{Z:function(){return V}});var r=o(2982),t=o(885),a=o(4942),i=o(3366),c=o(7462),s=o(2791),u=o(8182),l=o(4419),d=o(9853),m=o(277),p=o(5513),v=o(2763),f=o(7933),h=o(4565),Z=o(5878),x=o(1217);function b(n){return(0,x.Z)("MuiLink",n)}var y=(0,Z.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),g=o(8529),w=o(2065),S={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=function(n){var e=n.theme,o=n.ownerState,r=function(n){return S[n]||n}(o.color),t=(0,g.D)(e,"palette.".concat(r),!1)||o.color,a=(0,g.D)(e,"palette.".concat(r,"Channel"));return"vars"in e&&a?"rgba(".concat(a," / 0.4)"):(0,w.Fq)(t,.4)},k=o(3329),C=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],D=(0,m.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(n,e){var o=n.ownerState;return[e.root,e["underline".concat((0,d.Z)(o.underline))],"button"===o.component&&e.button]}})((function(n){var e=n.theme,o=n.ownerState;return(0,c.Z)({},"none"===o.underline&&{textDecoration:"none"},"hover"===o.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===o.underline&&(0,c.Z)({textDecoration:"underline"},"inherit"!==o.color&&{textDecorationColor:j({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===o.component&&(0,a.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(y.focusVisible),{outline:"auto"}))})),V=s.forwardRef((function(n,e){var o=(0,p.Z)({props:n,name:"MuiLink"}),a=o.className,m=o.color,h=void 0===m?"primary":m,Z=o.component,x=void 0===Z?"a":Z,y=o.onBlur,g=o.onFocus,w=o.TypographyClasses,j=o.underline,V=void 0===j?"always":j,F=o.variant,M=void 0===F?"inherit":F,A=o.sx,z=(0,i.Z)(o,C),L=(0,v.Z)(),W=L.isFocusVisibleRef,H=L.onBlur,N=L.onFocus,P=L.ref,R=s.useState(!1),q=(0,t.Z)(R,2),B=q[0],T=q[1],U=(0,f.Z)(e,P),I=(0,c.Z)({},o,{color:h,component:x,focusVisible:B,underline:V,variant:M}),O=function(n){var e=n.classes,o=n.component,r=n.focusVisible,t=n.underline,a={root:["root","underline".concat((0,d.Z)(t)),"button"===o&&"button",r&&"focusVisible"]};return(0,l.Z)(a,b,e)}(I);return(0,k.jsx)(D,(0,c.Z)({color:h,className:(0,u.Z)(O.root,a),classes:w,component:x,onBlur:function(n){H(n),!1===W.current&&T(!1),y&&y(n)},onFocus:function(n){N(n),!0===W.current&&T(!0),g&&g(n)},ref:U,ownerState:I,variant:M,sx:[].concat((0,r.Z)(Object.keys(S).includes(h)?[]:[{color:h}]),(0,r.Z)(Array.isArray(A)?A:[A]))},z))}))}}]);
//# sourceMappingURL=975.f335992e.chunk.js.map