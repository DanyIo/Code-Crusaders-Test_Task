"use strict";(self.webpackChunkfinancial_dashboard=self.webpackChunkfinancial_dashboard||[]).push([[886],{4740:function(n,e,t){t.d(e,{T:function(){return a}});var r=t(9434),a=function(){return(0,r.I0)()}},7461:function(n,e,t){t.d(e,{X:function(){return o}});var r=t(6088),a=t(4554),o=(0,r.Z)(a.Z)((function(n){n.theme;return{maxHeight:"300px",overflowY:"auto",width:"100%",mt:2,"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"black",borderRadius:"3px"},"&::-webkit-scrollbar-thumb:hover":{backgroundColor:"rgba(0, 0, 0, 0.8)"},"&::-webkit-scrollbar-track":{backgroundColor:"transparent"},"&::-webkit-scrollbar-track-piece":{background:"rgba(0, 0, 0, 0.1)",borderRadius:"3px"}}}))},7886:function(n,e,t){t.r(e),t.d(e,{IncomePage:function(){return w},default:function(){return C}});var r=t(1614),a=t(9439),o=t(4554),i=t(1106),l=t(1889),d=t(6151),s=t(4862),c=t(4740),u=t(2791),h=t(184);function x(){var n=(0,u.useState)("".concat((new Date).toDateString())),e=(0,a.Z)(n,2),t=e[0],r=e[1],x=(0,u.useState)(""),m=(0,a.Z)(x,2),g=m[0],f=m[1],p=(0,u.useState)(""),b=(0,a.Z)(p,2),j=b[0],Z=b[1],y=(0,u.useState)(""),v=(0,a.Z)(y,2),k=v[0],w=v[1],C=(0,c.T)();return(0,h.jsxs)(o.Z,{sx:{padding:"10px",paddingTop:0,borderRadius:"5px",fontFamily:"Georgia",background:"white",width:"90%"},children:[(0,h.jsx)("h2",{style:{borderBottom:"1px solid grey",paddingTop:10,paddingBottom:10,margin:10,fontWeight:"normal",color:"#3f51b5",fontSize:26},children:"Fill new income"}),(0,h.jsxs)(l.ZP,{container:!0,children:[(0,h.jsxs)(l.ZP,{item:!0,xs:6,style:{padding:10},children:[(0,h.jsx)("h3",{style:{marginTop:0,fontWeight:"normal",fontSize:16},children:"Date of transaction"}),(0,h.jsx)(i.Z,{variant:"outlined",defaultValue:"".concat((new Date).toDateString()),sx:{width:"100%",borderRadius:5},InputProps:{readOnly:!0}})]}),(0,h.jsxs)(l.ZP,{item:!0,xs:6,style:{padding:10},children:[(0,h.jsx)("h3",{style:{marginTop:0,fontWeight:"normal",fontSize:16},children:"Name of sender"}),(0,h.jsx)(i.Z,{variant:"outlined",placeholder:"Zoreslava Shpak",style:{width:"100%",borderRadius:5},value:g,onChange:function(n){return f(n.target.value)}})]}),(0,h.jsxs)(l.ZP,{item:!0,xs:6,style:{padding:10},children:[(0,h.jsx)("h3",{style:{marginTop:0,fontWeight:"normal",fontSize:16},children:"Payment method"}),(0,h.jsx)(i.Z,{variant:"outlined",placeholder:"VISA",style:{width:"100%",borderRadius:5},value:j,onChange:function(n){return Z(n.target.value)}})]}),(0,h.jsxs)(l.ZP,{item:!0,xs:6,style:{padding:10},children:[(0,h.jsx)("h3",{style:{marginTop:0,fontWeight:"normal",fontSize:16},children:"Amount of transaction"}),(0,h.jsx)(i.Z,{variant:"outlined",placeholder:"6 666",style:{width:"100%",borderRadius:5},value:k,onChange:function(n){return w(n.target.value)}})]})]}),(0,h.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center",marginTop:2},children:(0,h.jsx)(d.Z,{variant:"contained",color:"primary",sx:{backgroundColor:"black",width:"50%",color:"white",":hover":{backgroundColor:"gray"}},onClick:function(){if(""!==t.trim()&&""!==g.trim()&&""!==j.trim()&&""!==k.trim()&&!isNaN(parseFloat(k))){var n=function(n,e,t,r,a){return{id:n,date:e,name:t,paymentMethod:r,amount:a}}(0,t,g,j,parseFloat(k));C((0,s._O)(n)),C((0,s.dT)({action:"Income",amount:parseFloat(k)})),r("".concat((new Date).toDateString())),f(""),Z(""),w("")}},children:"Add new income"})})]})}var m=t(9836),g=t(3382),f=t(3994),p=t(6890),b=t(5855),j=t(5130),Z=t(3400),y=t(9434),v=t(7461);function k(){var n=(0,y.v9)(s.Ru),e=(0,c.T)();return(0,h.jsxs)(o.Z,{sx:{marginTop:"30px",padding:"5px",width:"90%",paddingTop:0,borderRadius:"5px",fontFamily:"Georgia",background:"white"},children:[(0,h.jsx)("h2",{style:{padding:10,fontWeight:"normal",color:"#3f51b5",fontSize:26},children:"Income history"}),(0,h.jsx)(v.X,{children:(0,h.jsxs)(m.Z,{size:"small",children:[(0,h.jsx)(p.Z,{children:(0,h.jsxs)(b.Z,{children:[(0,h.jsx)(f.Z,{style:{fontFamily:"Georgia"},children:"Date"}),(0,h.jsx)(f.Z,{style:{fontFamily:"Georgia"},children:"Name of sender"}),(0,h.jsx)(f.Z,{style:{fontFamily:"Georgia"},children:"Payment method"}),(0,h.jsx)(f.Z,{style:{fontFamily:"Georgia"},children:"Amount"})]})}),(0,h.jsx)(g.Z,{children:n.map((function(n,t){return(0,h.jsxs)(b.Z,{children:[(0,h.jsx)(f.Z,{children:n.date}),(0,h.jsx)(f.Z,{children:n.name}),(0,h.jsxs)(f.Z,{children:[n.paymentMethod," \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022"]}),(0,h.jsx)(f.Z,{align:"left",children:"".concat(n.amount," $")}),(0,h.jsx)(f.Z,{children:(0,h.jsx)(Z.Z,{color:"secondary",sx:{color:"black"},onClick:function(){return e((0,s.vQ)(t))},children:(0,h.jsx)(j.Z,{})})})]},n.id)}))})]})}),(0,h.jsx)(o.Z,{mt:2})]})}var w=function(){return(0,h.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#000000",borderRadius:"3%",marginTop:35,padding:"2rem",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",marginBottom:"50px"},children:[(0,h.jsx)(x,{}),(0,h.jsx)(k,{})]})},C=w},5130:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),o=t(184),i=(0,a.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");e.Z=i}}]);
//# sourceMappingURL=886.952c71b0.chunk.js.map