(this["webpackJsonpreact-2048"]=this["webpackJsonpreact-2048"]||[]).push([[0],{38:function(e,a,t){"use strict";t.r(a);var r=t(2),c=t.n(r),n=t(22),s=t.n(n),i=t(52),o=t(27),j=t(55),l=t(54),f=t(16),d=t(40),u=t(1),x=Object(i.a)({paper:{width:"25%",textAlign:"center"}}),b={0:"#aeaeae",2:"#eee4da",4:"#eee1c9",8:"#f3b27a",16:"#f69664",32:"#f77c5f",64:"#f75f3b",128:"#edd073"};function h(e){var a=e.value,t=x();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(d.a,{className:t.paper,style:{backgroundColor:"".concat(b[a])},children:Object(u.jsx)("p",{style:{fontSize:"40px"},children:a})})})}h.defaultProps={value:1};var v=h;function O(e,a){var t,r=[];for(t=0;t<e.length;t+=1)e[t]===a&&r.push(t);return r}var p=function(e,a,t){switch(e.preventDefault(),e.key){case"d":case"ArrowRight":!function(e,a){for(var t=Array.from(e),r=0;r<3;r+=1)for(var c=4*r;c<4*r+4;c+=1)0!==t[c]&&(t[c]===t[c+4]?(t[c]=0,t[c+4]*=2):0===t[c+4]&&(t[c+4]=t[c],t[c]=0));if(JSON.stringify(e)!==JSON.stringify(t)){var n=O(t,0);t[n[Math.floor(Math.random()*n.length)]]=2}a(t)}(a,t);break;case"a":case"ArrowLeft":!function(e,a){for(var t=Array.from(e),r=3;r>0;r-=1)for(var c=4*r;c<4*r+4;c+=1)0!==t[c]&&(t[c]===t[c-4]?(t[c]=0,t[c-4]*=2):0===t[c-4]&&(t[c-4]=t[c],t[c]=0));if(JSON.stringify(e)!==JSON.stringify(t)){var n=O(t,0);t[n[Math.floor(Math.random()*n.length)]]=2}a(t)}(a,t);break;case"s":case"ArrowDown":!function(e,a){for(var t=Array.from(e),r=0;r<4;r+=1)for(var c=4*r;c<4*r+3;c+=1)0!==t[c]&&(t[c]===t[c+1]?(t[c]=0,t[c+1]*=2):0===t[c+1]&&(t[c+1]=t[c],t[c]=0));if(JSON.stringify(e)!==JSON.stringify(t)){var n=O(t,0);t[n[Math.floor(Math.random()*n.length)]]=2}a(t)}(a,t);break;case"w":case"ArrowUp":!function(e,a){for(var t=Array.from(e),r=0;r<4;r+=1)for(var c=4*r+3;c>4*r;c-=1)0!==t[c]&&(t[c]===t[c-1]?(t[c]=0,t[c-1]*=2):0===t[c-1]&&(t[c-1]=t[c],t[c]=0));if(JSON.stringify(e)!==JSON.stringify(t)){var n=O(t,0);t[n[Math.floor(Math.random()*n.length)]]=2}a(t)}(a,t)}},m=Object(i.a)((function(e){return{row:{margin:"auto",display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(16),height:e.spacing(16)}},root:{margin:"auto",padding:"auto",maxWidth:"580px",outline:"none"},card:{padding:"20px 10px 20px 10px",margin:"auto",maxWidth:"700px"}}}));var g=function(){var e=Object(r.useState)([]),a=Object(f.a)(e,2),t=a[0],c=a[1],n=m();return 0===t.length&&function(){var e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];e[Math.floor(15*Math.random())]=2,c(e)}(),Object(u.jsx)(l.a,{className:n.card,children:Object(u.jsxs)("div",{className:n.root,onKeyDown:function(e){return p(e,t,c)},role:"button",tabIndex:"0",children:[Object(u.jsxs)("div",{className:n.row,children:[Object(u.jsx)(v,{value:t[0]}),Object(u.jsx)(v,{value:t[4]}),Object(u.jsx)(v,{value:t[8]}),Object(u.jsx)(v,{value:t[12]})]}),Object(u.jsxs)("div",{className:n.row,children:[Object(u.jsx)(v,{value:t[1]}),Object(u.jsx)(v,{value:t[5]}),Object(u.jsx)(v,{value:t[9]}),Object(u.jsx)(v,{value:t[13]})]}),Object(u.jsxs)("div",{className:n.row,children:[Object(u.jsx)(v,{value:t[2]}),Object(u.jsx)(v,{value:t[6]}),Object(u.jsx)(v,{value:t[10]}),Object(u.jsx)(v,{value:t[14]})]}),Object(u.jsxs)("div",{className:n.row,children:[Object(u.jsx)(v,{value:t[3]}),Object(u.jsx)(v,{value:t[7]}),Object(u.jsx)(v,{value:t[11]}),Object(u.jsx)(v,{value:t[15]})]})]})})},y=Object(i.a)({card:{paddingLeft:"10px",margin:"auto",marginBottom:"10px",maxWidth:"710px"}}),w={darkTheme:Object(o.a)({palette:{type:"dark"}}),lightTheme:Object(o.a)({palette:{type:"light"}})};var N=function(){var e=y();return Object(u.jsxs)(j.a,{theme:w.darkTheme,children:[Object(u.jsx)(l.a,{className:e.card,children:Object(u.jsx)("p",{style:{fontSize:"40px"},children:"Simple-2048"})}),Object(u.jsx)(g,{})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a799b543.chunk.js.map