(this["webpackJsonpnew-api"]=this["webpackJsonpnew-api"]||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},149:function(e,t){},154:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(37),s=n.n(r),i=(n(120),n(121),n(104)),o=n(14),j=n(27),u=n.n(j),b=n(76),l=n(50),d=n(11),O=n(39),x=n.n(O),h=n(202),p=n(208),v=n(197),m=n(198),f=n(207),k=n(204),g=n(210),w=n(209),S=n(206),y=n(211),A=n(43),I=n(51),T=n.n(I),C=n(47),U=n(193),B=n(2),E=function(e){return Object(B.jsxs)(U.a,{sx:{position:"relative",display:"inline-flex"},children:[Object(B.jsx)(w.a,Object(C.a)({variant:"determinate"},e)),Object(B.jsx)(U.a,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(B.jsx)(g.a,{variant:"caption",component:"div",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})},P=function(){var e,t=Object(o.h)().username,n=Object(c.useState)(0),a=Object(d.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(0),j=Object(d.a)(i,2),O=j[0],I=j[1],C=Object(c.useState)(!1),U=Object(d.a)(C,2),P=U[0],J=U[1],z=Object(c.useState)(!1),F=Object(d.a)(z,2),W=F[0],R=F[1],D=Object(c.useState)(!1),L=Object(d.a)(D,2),Q=L[0],q=L[1],N=Object(c.useState)(!1),V=Object(d.a)(N,2),M=V[0],X=V[1],Y=Object(c.useState)(!1),G=Object(d.a)(Y,2),_=G[0],K=G[1],Z=Object(c.useState)(!1),H=Object(d.a)(Z,2),$=H[0],ee=H[1],te=Object(c.useState)(!1),ne=Object(d.a)(te,2),ce=ne[0],ae=ne[1],re=Object(c.useState)(!1),se=Object(d.a)(re,2),ie=se[0],oe=se[1],je=Object(c.useState)(!1),ue=Object(d.a)(je,2),be=ue[0],le=ue[1],de=Object(c.useState)(!1),Oe=Object(d.a)(de,2),xe=Oe[0],he=Oe[1],pe=Object(c.useState)(!1),ve=Object(d.a)(pe,2),me=ve[0],fe=ve[1],ke=Object(c.useState)(!1),ge=Object(d.a)(ke,2),we=ge[0],Se=ge[1],ye=Object(c.useState)(0),Ae=Object(d.a)(ye,2),Ie=Ae[0],Te=Ae[1],Ce=Object(c.useState)(0),Ue=Object(d.a)(Ce,2),Be=Ue[0],Ee=Ue[1],Pe=Object(c.useState)(0),Je=Object(d.a)(Pe,2),ze=Je[0],Fe=Je[1],We=Object(c.useState)(0),Re=Object(d.a)(We,2),De=Re[0],Le=Re[1],Qe=Object(c.useState)(""),qe=Object(d.a)(Qe,2),Ne=qe[0],Ve=qe[1],Me="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3IiOnsiZW1haWwiOiJ0YXNoaUBzby5jaXR5IiwidXNlcm5hbWUiOiJ0YXNoaWxhbWEzIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTYxNTUzOTgyMn0.6uW6q_ukPDCvEclJ09iaSbW5UtYYhrjr1-R_WJGt95k";e="https://soapi.in:3001";var Xe=function(){var n=Object(l.a)(u.a.mark((function n(){var c,a,r,s,i,o,j;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==t.trim()){n.next=3;break}return window.alert("Please provide the username"),n.abrupt("return");case 3:return n.prev=3,ae(!0),n.next=7,x.a.get("".concat(e,"/adminApp/getAnswers?token=").concat(Me,"&answeredBy=").concat(t,"&limit=1000"));case 7:if(c=n.sent,!((a=c.data.data).length<=0)){n.next=13;break}return ae(!1),oe(!0),n.abrupt("return");case 13:r=0,Le(a.length),s=Object(b.a)(a),n.prev=16,s.s();case 18:if((i=s.n()).done){n.next=40;break}return o=i.value,n.prev=20,n.next=23,x.a.delete("".concat(e,"/adminApp/unpublishAnswer/").concat(o._id,"/unpublished?token=").concat(Me));case 23:if(r++,I(r),j=r/a.length*100,Ee(j),r!==a.length){n.next=31;break}return ae(!1),oe(!0),n.abrupt("return");case 31:n.next=38;break;case 33:n.prev=33,n.t0=n.catch(20),ae(!1),Ve(n.t0),console.log(n.t0);case 38:n.next=18;break;case 40:n.next=45;break;case 42:n.prev=42,n.t1=n.catch(16),s.e(n.t1);case 45:return n.prev=45,s.f(),n.finish(45);case 48:n.next=55;break;case 50:n.prev=50,n.t2=n.catch(3),ae(!1),Ve(n.t2),console.log(n.t2);case 55:case"end":return n.stop()}}),n,null,[[3,50],[16,42,45,48],[20,33]])})));return function(){return n.apply(this,arguments)}}(),Ye=function(){var n=Object(l.a)(u.a.mark((function n(){var c,a,r,i,o,j,l;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==t.trim()){n.next=3;break}return window.alert("Please provide the username"),n.abrupt("return");case 3:return n.prev=3,K(!0),n.next=7,x.a.get("".concat(e,"/adminApp/getQuestions?token=").concat(Me,"&username=").concat(t,"&limit=1000"));case 7:if(c=n.sent,!((a=c.data.data).length<=0)){n.next=14;break}return K(!1),ee(!0),Xe(),n.abrupt("return");case 14:r=0,Fe(a.length),i=Object(b.a)(a),n.prev=17,i.s();case 19:if((o=i.n()).done){n.next=43;break}return j=o.value,n.prev=21,n.next=24,x.a.delete("".concat(e,"/adminApp/unpublishQuestion/").concat(j._id,"/unpublished?token=").concat(Me));case 24:if(r++,s(r),l=r/a.length*100,console.log("PER",l),Te(l),r!==a.length){n.next=34;break}return K(!1),ee(!0),Xe(),n.abrupt("return");case 34:n.next=41;break;case 36:n.prev=36,n.t0=n.catch(21),K(!1),Ve(n.t0),console.log(n.t0);case 41:n.next=19;break;case 43:n.next=48;break;case 45:n.prev=45,n.t1=n.catch(17),i.e(n.t1);case 48:return n.prev=48,i.f(),n.finish(48);case 51:n.next=58;break;case 53:n.prev=53,n.t2=n.catch(3),K(!1),Ve(n.t2),console.log(n.t2);case 58:case"end":return n.stop()}}),n,null,[[3,53],[17,45,48,51],[21,36]])})));return function(){return n.apply(this,arguments)}}(),Ge=function(){var n=Object(l.a)(u.a.mark((function n(){var c,a=arguments;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=a.length>0&&void 0!==a[0]&&a[0],n.prev=1,""!==t.trim()){n.next=5;break}return window.alert("Please provide the username"),n.abrupt("return");case 5:return q(!0),n.next=8,x.a.patch("".concat(e,"/adminApp/banIpAddress?token=").concat(Me,"&username=").concat(t));case 8:!0===n.sent.data.success&&(q(!1),X(!0),c||Ye()),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(1),q(!1),Ve(n.t0),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(){return n.apply(this,arguments)}}(),_e=function(){var n=Object(l.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,fe(!0),""!==t.trim()){n.next=5;break}return window.alert("Please provide the username"),n.abrupt("return");case 5:return J(!0),n.next=8,x.a.put("".concat(e,"/adminApp/banUser?token=").concat(Me),{username:t,isPermanentBan:!0});case 8:!0===n.sent.data.success?(J(!1),R(!0),Ge()):J(!1),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(0),J(!1),Ve(n.t0),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),Ke=function(){var n=Object(l.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,Se(!0),""!==t.trim()){n.next=5;break}return window.alert("Please provide the username"),n.abrupt("return");case 5:return le(!0),n.next=8,x.a.delete("".concat(e,"/adminApp/deleteUserActionAndAnswer?token=").concat(Me,"&username=").concat(t));case 8:!0===n.sent.data.success?(le(!1),he(!0)):le(!1),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(0),le(!1),Ve(n.t0),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();return Object(B.jsx)("div",{style:{height:"100vh"},children:Object(B.jsx)(v.a,{sx:{mx:"auto",pt:20,width:"90vw",height:"90vh",borderRadius:1,textAlign:"center"},children:Object(B.jsxs)(m.a,{spacing:2,direction:"column",children:[Object(B.jsxs)(f.a,{container:!0,spacing:2,children:[Object(B.jsx)(f.a,{item:!0,xs:6,children:Object(B.jsxs)(k.a,{children:["Total Questions",Object(B.jsx)(g.a,{color:"primary",ml:3,children:ze})]})}),Object(B.jsx)(f.a,{item:!0,xs:6,children:Object(B.jsxs)(k.a,{children:["Total Answers",Object(B.jsx)(g.a,{color:"primary",ml:3,children:De})]})}),Object(B.jsx)(f.a,{item:!0,xs:6,children:Object(B.jsx)(k.a,{children:"Banning User"})}),Object(B.jsx)(f.a,{item:!0,xs:6,children:Object(B.jsx)(k.a,{children:P?Object(B.jsx)(w.a,{size:20}):W?Object(B.jsx)(T.a,{sx:{color:A.a[500]}}):null})}),Object(B.jsx)(f.a,{item:!0,xs:6,children:Object(B.jsx)(k.a,{children:"Banning IP"})}),Object(B.jsx)(f.a,{item:!0,xs:6,children:Object(B.jsx)(k.a,{children:Q?Object(B.jsx)(w.a,{size:20}):M?Object(B.jsx)(T.a,{sx:{color:A.a[500]}}):null})}),Object(B.jsx)(f.a,{item:!0,xs:6,children:Object(B.jsx)(k.a,{children:Object(B.jsx)(S.a,{color:"secondary",badgeContent:r,children:"Questions"})})}),Object(B.jsx)(f.a,{item:!0,xs:6,children:Object(B.jsx)(k.a,{children:_?Object(B.jsx)(E,{size:30,value:Ie}):$?Object(B.jsx)(T.a,{sx:{color:A.a[500]}}):null})}),Object(B.jsx)(f.a,{item:!0,xs:6,children:Object(B.jsx)(k.a,{children:Object(B.jsx)(S.a,{color:"secondary",badgeContent:O,children:"Answers"})})}),Object(B.jsx)(f.a,{item:!0,xs:6,children:Object(B.jsx)(k.a,{children:ce?Object(B.jsx)(E,{size:30,value:Be}):ie?Object(B.jsx)(T.a,{sx:{color:A.a[500]}}):null})}),Object(B.jsx)(f.a,{item:!0,xs:6,children:Object(B.jsx)(k.a,{children:"User Action Delete"})}),Object(B.jsx)(f.a,{item:!0,xs:6,children:Object(B.jsx)(k.a,{children:be?Object(B.jsx)(w.a,{size:20}):xe?Object(B.jsx)(T.a,{sx:{color:A.a[500]}}):null})})]}),Object(B.jsx)(y.a,{variant:"contained",onClick:_e,disabled:me,children:"Take Action"}),Object(B.jsx)(y.a,{variant:"contained",onClick:function(){Ge(!0)},children:"Ban IP Only"}),Object(B.jsx)(y.a,{variant:"contained",onClick:Ke,disabled:we,children:"Delete User Actions"}),Ne?Object(B.jsxs)(h.a,{severity:"error",children:[Object(B.jsx)(p.a,{children:"Error"}),"This is an error alert \u2014 ",Object(B.jsx)("strong",{children:Ne})]}):null]})})})},J=n(61),z=n.n(J),F=n(62),W=n.n(F),R=n(63),D=n.n(R),L=n(201),Q={token:"",set:function(e){this.token=e},get:function(){return this.token}},q=function(){var e=Object(o.g)(),t=Object(o.h)().username,n=Object(c.useState)(""),a=Object(d.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(""),j=Object(d.a)(i,2),u=j[0],b=j[1];return Object(B.jsx)("div",{style:{height:"100vh"},children:Object(B.jsx)(U.a,{sx:{mx:"auto",pt:20,width:"90vw",height:"90vh",borderRadius:1,textAlign:"center"},children:Object(B.jsxs)(m.a,{spacing:2,direction:"column",children:[Object(B.jsx)(L.a,{label:"Access Token",color:"secondary",value:r,onChange:function(e){return s(e.target.value)}}),Object(B.jsx)(y.a,{variant:"contained",onClick:function(){b("");var n=z()(r);return"sUNz5IpdBnWS1fDEjwo2TKUFSqqiC43jB9ikJmITF0ErQkcE0535cDVGRtE/e4l3UQLaqpO8As6bVLnFvt/LVw=="===D.a.stringify(W()(n,"SO@SPAM#BOT"))?(Q.set(r),void e.push("/action/".concat(t))):void b("Access Token is invalid")},children:"Authenticate"}),u?Object(B.jsxs)(h.a,{severity:"error",children:[Object(B.jsx)(p.a,{children:"Error"}),"There is an error \u2014 ",Object(B.jsx)("strong",{children:u})]}):null]})})})},N=n(105),V=["component"],M=function(e){var t=e.component,n=Object(N.a)(e,V);return Object(B.jsx)(o.b,Object(C.a)(Object(C.a)({},n),{},{render:function(e){return function(){var e=z()(Q.get());return"sUNz5IpdBnWS1fDEjwo2TKUFSqqiC43jB9ikJmITF0ErQkcE0535cDVGRtE/e4l3UQLaqpO8As6bVLnFvt/LVw=="===D.a.stringify(W()(e,"SO@SPAM#BOT"))}()?Object(B.jsx)(t,Object(C.a)({},e)):Object(B.jsx)(o.a,{to:{pathname:"/",state:{from:e.location}}})}}))},X=function(){return Object(B.jsx)(i.a,{children:Object(B.jsxs)(o.d,{children:[Object(B.jsx)(o.b,{path:"/auth/:username",component:q,exact:!0}),Object(B.jsx)(M,{path:"/action/:username",component:P,exact:!0})]})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(X,{})}),document.getElementById("root")),Y()}},[[154,1,2]]]);
//# sourceMappingURL=main.96e7d9e4.chunk.js.map