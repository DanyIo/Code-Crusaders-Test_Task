"use strict";(self.webpackChunkfinancial_dashboard=self.webpackChunkfinancial_dashboard||[]).push([[886],{4740:function(n,e,t){t.d(e,{T:function(){return a}});var r=t(9434),a=function(){return(0,r.I0)()}},7461:function(n,e,t){t.d(e,{X:function(){return o}});var r=t(6088),a=t(4554),o=(0,r.Z)(a.Z)((function(n){n.theme;return{maxHeight:"300px",overflowY:"auto",width:"100%",mt:2,"&::-webkit-scrollbar":{width:"6px"},"&::-webkit-scrollbar-thumb":{backgroundColor:"black",borderRadius:"3px"},"&::-webkit-scrollbar-thumb:hover":{backgroundColor:"rgba(0, 0, 0, 0.8)"},"&::-webkit-scrollbar-track":{backgroundColor:"transparent"},"&::-webkit-scrollbar-track-piece":{background:"rgba(0, 0, 0, 0.1)",borderRadius:"3px"}}}))},7886:function(n,e,t){t.r(e),t.d(e,{IncomePage:function(){return w},default:function(){return C}});var r=t(1614),a=t(9439),o=t(4554),i=t(1106),l=t(1889),d=t(6151),s=t(9434),c=t(4862),u=t(4740),h=t(2791),x=t(184);function m(){var n=(0,h.useState)("".concat((new Date).toDateString())),e=(0,a.Z)(n,2),t=e[0],r=e[1],m=(0,h.useState)(""),g=(0,a.Z)(m,2),f=g[0],p=g[1],b=(0,h.useState)(""),j=(0,a.Z)(b,2),Z=j[0],y=j[1],v=(0,h.useState)(""),k=(0,a.Z)(v,2),w=k[0],C=k[1],S=(0,u.T)(),T=(0,s.v9)(c.Ru);return(0,x.jsxs)(o.Z,{sx:{padding:"10px",paddingTop:0,borderRadius:"5px",fontFamily:"Georgia",background:"white",width:"90%"},children:[(0,x.jsx)("h2",{style:{borderBottom:"1px solid grey",paddingTop:10,paddingBottom:10,margin:10,fontWeight:"normal",color:"#3f51b5",fontSize:26},children:"Fill new income"}),(0,x.jsxs)(l.ZP,{container:!0,children:[(0,x.jsxs)(l.ZP,{item:!0,xs:6,style:{padding:10},children:[(0,x.jsx)("h3",{style:{marginTop:0,fontWeight:"normal",fontSize:16},children:"Date of transaction"}),(0,x.jsx)(i.Z,{variant:"outlined",defaultValue:"".concat((new Date).toDateString()),sx:{width:"100%",borderRadius:5},InputProps:{readOnly:!0}})]}),(0,x.jsxs)(l.ZP,{item:!0,xs:6,style:{padding:10},children:[(0,x.jsx)("h3",{style:{marginTop:0,fontWeight:"normal",fontSize:16},children:"Name of sender"}),(0,x.jsx)(i.Z,{variant:"outlined",placeholder:"Zoreslava Shpak",style:{width:"100%",borderRadius:5},value:f,onChange:function(n){return p(n.target.value)}})]}),(0,x.jsxs)(l.ZP,{item:!0,xs:6,style:{padding:10},children:[(0,x.jsx)("h3",{style:{marginTop:0,fontWeight:"normal",fontSize:16},children:"Payment method"}),(0,x.jsx)(i.Z,{variant:"outlined",placeholder:"VISA",style:{width:"100%",borderRadius:5},value:Z,onChange:function(n){return y(n.target.value)}})]}),(0,x.jsxs)(l.ZP,{item:!0,xs:6,style:{padding:10},children:[(0,x.jsx)("h3",{style:{marginTop:0,fontWeight:"normal",fontSize:16},children:"Amount of transaction"}),(0,x.jsx)(i.Z,{variant:"outlined",placeholder:"6 666",style:{width:"100%",borderRadius:5},value:w,onChange:function(n){return C(n.target.value)}})]})]}),(0,x.jsx)(o.Z,{sx:{display:"flex",justifyContent:"center",marginTop:2},children:(0,x.jsx)(d.Z,{variant:"contained",color:"primary",sx:{backgroundColor:"black",width:"50%",color:"white",":hover":{backgroundColor:"gray"}},onClick:function(){if(""!==t.trim()&&""!==f.trim()&&""!==Z.trim()&&""!==w.trim()&&!isNaN(parseFloat(w))){var n=function(n,e,t,r,a){return{id:n,date:e,name:t,paymentMethod:r,amount:a}}(T.length,t,f,Z,parseFloat(w));S((0,c._O)(n)),S((0,c.dT)({action:"Income",amount:parseFloat(w)})),r("".concat((new Date).toDateString())),p(""),y(""),C("")}},children:"Add new income"})})]})}var g=t(9836),f=t(3382),p=t(3994),b=t(6890),j=t(5855),Z=t(5130),y=t(3400),v=t(7461);function k(){var n=(0,s.v9)(c.Ru),e=(0,u.T)();return(0,x.jsxs)(o.Z,{sx:{marginTop:"30px",padding:"5px",width:"90%",paddingTop:0,borderRadius:"5px",fontFamily:"Georgia",background:"white"},children:[(0,x.jsx)("h2",{style:{padding:10,fontWeight:"normal",color:"#3f51b5",fontSize:26},children:"Income history"}),(0,x.jsx)(v.X,{children:(0,x.jsxs)(g.Z,{size:"small",children:[(0,x.jsx)(b.Z,{children:(0,x.jsxs)(j.Z,{children:[(0,x.jsx)(p.Z,{style:{fontFamily:"Georgia"},children:"Date"}),(0,x.jsx)(p.Z,{style:{fontFamily:"Georgia"},children:"Name of sender"}),(0,x.jsx)(p.Z,{style:{fontFamily:"Georgia"},children:"Payment method"}),(0,x.jsx)(p.Z,{style:{fontFamily:"Georgia"},children:"Amount"})]})}),(0,x.jsx)(f.Z,{children:n.map((function(n,t){return(0,x.jsxs)(j.Z,{children:[(0,x.jsx)(p.Z,{children:n.date}),(0,x.jsx)(p.Z,{children:n.name}),(0,x.jsxs)(p.Z,{children:[n.paymentMethod," \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022"]}),(0,x.jsx)(p.Z,{align:"left",children:"".concat(n.amount," $")}),(0,x.jsx)(p.Z,{children:(0,x.jsx)(y.Z,{color:"secondary",sx:{color:"black"},onClick:function(){return e((0,c.vQ)(t))},children:(0,x.jsx)(Z.Z,{})})})]},n.id)}))})]})}),(0,x.jsx)(o.Z,{mt:2})]})}var w=function(){return(0,x.jsxs)(r.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#000000",borderRadius:"3%",marginTop:35,padding:"2rem",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)",marginBottom:"50px"},children:[(0,x.jsx)(m,{}),(0,x.jsx)(k,{})]})},C=w},5130:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),o=t(184),i=(0,a.default)((0,o.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");e.Z=i}}]);
//# sourceMappingURL=886.5bfc63fc.chunk.js.map