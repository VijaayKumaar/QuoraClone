(this["webpackJsonpquora-clone-client"]=this["webpackJsonpquora-clone-client"]||[]).push([[0],{139:function(e,t,c){},145:function(e,t,c){},147:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){},151:function(e,t,c){},286:function(e,t,c){},287:function(e,t,c){},288:function(e,t,c){},289:function(e,t,c){},290:function(e,t,c){},291:function(e,t,c){},292:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(29),i=c.n(a),o=(c(139),c(26)),l=(c(145),c(0)),r=c.n(l),d=c(4),j=(c(147),c(33)),u=c(124),b=(Object(u.a)({apiKey:"AIzaSyDpWVrX1f6iXP3lvNvgBLzbFSkQYFvCQGw",authDomain:"quora-clone-12157.firebaseapp.com",projectId:"quora-clone-12157",storageBucket:"quora-clone-12157.appspot.com",messagingSenderId:"1092477431375",appId:"1:1092477431375:web:759a1b611b3ace2aed443a",measurementId:"G-QS831Q6NEW"}),Object(j.b)()),x=(new j.a,c(3));var h=c(13),O=c(329),p=c(70),m=Object(p.b)({name:"user",initialState:{value:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),v=m.actions,g=v.login,f=v.logout,_=function(e){return e.user.user},N=m.reducer;c(149);var w=function(){var e=Object(o.c)(_);return Object(x.jsxs)("div",{className:"quoraBox",children:[Object(x.jsx)("div",{className:"quoraBox__info",children:Object(x.jsx)(O.a,{src:null===e||void 0===e?void 0:e.photo})}),Object(x.jsx)("div",{className:"quoraBox__quora",children:Object(x.jsx)("h5",{children:"What do you want to ask or share"})})]})},y=(c(150),c(313)),q=c(314),k=c(315),C=c(316),A=c(317),S=c(318),E=(c(151),c(68)),I=(c(87),c(69)),H=c.n(I),Q=c(126),T=c.n(Q),D=(c(255),c(326)),F=c(41),U=c.n(F),z=c(127);function L(e){var t=e.date;return Object(x.jsx)("div",{children:Object(x.jsx)(D.a,{date:t,locale:"en-US",timeStyle:"round"})})}var W=function(e){var t,c,n,a,i=e.post,l=Object(s.useState)(!1),j=Object(h.a)(l,2),u=j[0],b=j[1],p=Object(s.useState)(""),m=Object(h.a)(p,2),v=m[0],g=m[1],f=Object(x.jsx)(H.a,{}),N=Object(o.c)(_),w=function(){var e=Object(d.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===i||void 0===i?void 0:i._id)||""===v){e.next=5;break}return t={headers:{"Content-Type":"application/json"}},c={answer:v,questionId:null===i||void 0===i?void 0:i._id,user:N},e.next=5,U.a.post("/api/answers",c,t).then((function(e){console.log(e.data),alert("Answer added succesfully"),b(!1),window.location.href="/"})).catch((function(e){console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"post",children:[Object(x.jsxs)("div",{className:"post__info",children:[Object(x.jsx)(O.a,{src:null===i||void 0===i||null===(t=i.user)||void 0===t?void 0:t.photo}),Object(x.jsx)("h4",{children:null===i||void 0===i||null===(c=i.user)||void 0===c?void 0:c.userName}),Object(x.jsx)("small",{children:Object(x.jsx)(L,{date:null===i||void 0===i?void 0:i.createdAt})})]}),Object(x.jsxs)("div",{className:"post__body",children:[Object(x.jsxs)("div",{className:"post__question",children:[Object(x.jsx)("p",{children:null===i||void 0===i?void 0:i.questionName}),Object(x.jsx)("button",{onClick:function(){b(!0),console.log(null===i||void 0===i?void 0:i._id)},className:"post__btnAnswer",children:"Answer"}),Object(x.jsxs)(E.a,{open:u,closeIcon:f,onClose:function(){return b(!1)},closeOnEsc:!0,center:!0,closeOnOverlayClick:!1,styles:{overlay:{height:"auto"}},children:[Object(x.jsxs)("div",{className:"modal__question",children:[Object(x.jsx)("h1",{children:null===i||void 0===i?void 0:i.questionName}),Object(x.jsxs)("p",{children:["asked by ",Object(x.jsx)("span",{className:"name",children:null===i||void 0===i||null===(n=i.user)||void 0===n?void 0:n.userName})," on"," ",Object(x.jsx)("span",{className:"name",children:new Date(null===i||void 0===i?void 0:i.createdAt).toLocaleString()})]})]}),Object(x.jsx)("div",{className:"modal__answer",children:Object(x.jsx)(T.a,{value:v,onChange:function(e){g(e)},placeholder:"Enter your answer"})}),Object(x.jsxs)("div",{className:"modal__button",children:[Object(x.jsx)("button",{className:"cancle",onClick:function(){return b(!1)},children:"Cancel"}),Object(x.jsx)("button",{onClick:w,type:"submit",className:"add",children:"Add Answer"})]})]})]}),""!==i.questionUrl&&Object(x.jsx)("img",{src:i.questionUrl,alt:"url"})]}),Object(x.jsxs)("div",{className:"post__footer",children:[Object(x.jsxs)("div",{className:"post__footerAction",children:[Object(x.jsx)(y.a,{}),Object(x.jsx)(q.a,{})]}),Object(x.jsx)(k.a,{}),Object(x.jsx)(C.a,{}),Object(x.jsxs)("div",{className:"post__footerLeft",children:[Object(x.jsx)(A.a,{}),Object(x.jsx)(S.a,{})]})]}),Object(x.jsxs)("p",{style:{color:"rgba(0,0,0,0.5)",fontSize:"12px",fontWeight:"bold",margin:"10px 0"},children:[null===i||void 0===i?void 0:i.allAnswers.length," Answer(s)"]}),Object(x.jsx)("div",{style:{margin:"5px 0px 0px 0px ",padding:"5px 0px 0px 20px",borderTop:"1px solid lightgray"},className:"post__answer",children:null===i||void 0===i||null===(a=i.allAnswers)||void 0===a?void 0:a.map((function(e){var t,c;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%",padding:"10px 5px",borderTop:"1px solid lightgray"},className:"post-answer-container",children:[Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:"10px",fontSize:"12px",fontWeight:600,color:"#888"},className:"post-answered",children:[Object(x.jsx)(O.a,{src:null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.photo}),Object(x.jsxs)("div",{style:{margin:"0px 10px"},className:"post-info",children:[Object(x.jsx)("p",{children:null===e||void 0===e||null===(c=e.user)||void 0===c?void 0:c.userName}),Object(x.jsx)("span",{children:Object(x.jsx)(L,{date:null===e||void 0===e?void 0:e.createdAt})})]})]}),Object(x.jsx)("div",{className:"post-answer",children:Object(z.a)(null===e||void 0===e?void 0:e.answer)})]})})}))})]})};var V=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){U.a.get("/api/questions").then((function(e){console.log(e.data.reverse()),n(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(x.jsxs)("div",{className:"feed",children:[Object(x.jsx)(w,{}),c.map((function(e,t){return Object(x.jsx)(W,{post:e},t)}))]})},M=c(128),P=c.n(M),R=c(129),X=c.n(R),B=c(319),G=c(320),J=c(321),Z=c(322),K=c(323),Y=c(327),$=c(328);c(286);var ee=function(){var e=Object(s.useState)(!1),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(h.a)(a,2),l=i[0],u=i[1],p=Object(s.useState)(""),m=Object(h.a)(p,2),v=m[0],g=m[1],N=Object(x.jsx)(H.a,{}),w=Object(o.b)(),y=Object(o.c)(_),q=function(){var e=Object(d.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===v){e.next=5;break}return t={headers:{"Content-Type":"application/json"}},c={questionName:v,questionUrl:l,user:y},e.next=5,U.a.post("/api/questions",c,t).then((function(e){console.log(e.data),alert(e.data.message),window.location.href="/"})).catch((function(e){console.log(e),alert("Error in adding question")}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"qHeader",children:Object(x.jsxs)("div",{className:"qHeader-content",children:[Object(x.jsx)("div",{className:"qHeader__logo",children:Object(x.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewEjqtzNtVE-EU0pyR-nUVSoNATkWdGnEwOkaFIguva9d5GSMxj_-_JI6xDVu28WzDQ&usqp=CAU",alt:"logo"})}),Object(x.jsxs)("div",{className:"qHeader__icons",children:[Object(x.jsx)("div",{className:"qHeader__icon",children:Object(x.jsx)(P.a,{})}),Object(x.jsx)("div",{className:"qHeader__icon",children:Object(x.jsx)(X.a,{})}),Object(x.jsx)("div",{className:"qHeader__icon",children:Object(x.jsx)(B.a,{})}),Object(x.jsx)("div",{className:"qHeader__icon",children:Object(x.jsx)(G.a,{})}),Object(x.jsx)("div",{className:"qHeader__icon",children:Object(x.jsx)(J.a,{})})]}),Object(x.jsxs)("div",{className:"qHeader__input",children:[Object(x.jsx)(Z.a,{}),Object(x.jsx)("input",{type:"text",placeholder:"Search questions"})]}),Object(x.jsxs)("div",{className:"qHeader__Rem",children:[Object(x.jsx)("span",{onClick:function(){window.confirm("Are you sure to logout ?")&&Object(j.e)(b).then((function(){w(f()),console.log("Logged out")})).catch((function(){console.log("error in logout")}))},children:Object(x.jsx)(O.a,{src:null===y||void 0===y?void 0:y.photo})}),Object(x.jsx)(Y.a,{onClick:function(){return n(!0)},children:"Add Question"}),Object(x.jsxs)(E.a,{open:c,closeIcon:N,onClose:function(){return n(!1)},closeOnEsc:!0,center:!0,closeOnOverlayClick:!1,styles:{overlay:{height:"auto"}},children:[Object(x.jsxs)("div",{className:"modal__title",children:[Object(x.jsx)("h5",{children:"Add Question"}),Object(x.jsx)("h5",{children:"Share Link"})]}),Object(x.jsxs)("div",{className:"modal__info",children:[Object(x.jsx)(O.a,{src:null===y||void 0===y?void 0:y.photo,className:"avatar"}),Object(x.jsxs)("div",{className:"modal__scope",children:[Object(x.jsx)(G.a,{}),Object(x.jsx)("p",{children:"Public"}),Object(x.jsx)(K.a,{})]})]}),Object(x.jsxs)("div",{className:"modal__Field",children:[Object(x.jsx)($.a,{value:v,onChange:function(e){return g(e.target.value)},type:" text",placeholder:"Start your question with 'What', 'How', 'Why', etc. "}),Object(x.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(x.jsx)("input",{type:"text",value:l,onChange:function(e){return u(e.target.value)},style:{margin:"5px 0",border:"1px solid lightgray",padding:"10px",outline:"2px solid #000"},placeholder:"Optional: inclue a link that gives context"}),""!==l&&Object(x.jsx)("img",{style:{height:"40vh",objectFit:"contain"},src:l,alt:"displayimage"})]})]}),Object(x.jsxs)("div",{className:"modal__buttons",children:[Object(x.jsx)("button",{className:"cancle",onClick:function(){return n(!1)},children:"Cancel"}),Object(x.jsx)("button",{onClick:q,type:"submit",className:"add",children:"Add Question"})]})]})]})]})})},te=(c(287),c(324));c(288);var ce=function(){return Object(x.jsxs)("div",{className:"sidebarOptions",children:[Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)(te.a,{}),Object(x.jsx)("p",{className:"text",children:"Create Space"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-8X2rhPVlkXw2Ws0N3vj9vQSD-JsQeC_CAXrwT35Gj7SQZhFaKXz0y9aM8p5yV8cZHhA&usqp=CAU",alt:""}),Object(x.jsx)("p",{children:" phython"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://play-lh.googleusercontent.com/v6QrTUuYpUdAKaC3Nuezit0SpWuW0DA7OeR8Vk7jXxRuTvVnEk1-tAzpere4k93Ec50",alt:""}),Object(x.jsx)("p",{children:"Unboxing JEE"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://i0.wp.com/academiamag.com/wp-content/uploads/2022/05/shutterstock_1664708983.jpg?fit=860%2C573&ssl=1",alt:""}),Object(x.jsx)("p",{children:"COMPLETITIVE Exams"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://s.udemycdn.com/meta/default-meta-image-v2.png",alt:""}),Object(x.jsx)("p",{children:"Free udemy coursez"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg",alt:""}),Object(x.jsx)("p",{children:"Music"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://cdn4.vectorstock.com/i/1000x1000/51/88/physics-mathematics-classes-cartoon-vector-18805188.jpg",alt:""}),Object(x.jsx)("p",{children:"Mathmetic and physics"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://media.istockphoto.com/id/1280587810/photo/healthy-eating-exercising-weight-and-blood-pressure-control.jpg?s=170667a&w=0&k=20&c=RLFvjiJ-cyfHq7CRGDZgxQEnaJXbbZjxPpZQxQRnddo=",alt:""}),Object(x.jsx)("p",{children:"Health"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-700366096.jpg",alt:""}),Object(x.jsx)("p",{children:"Movies"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/03195739/Idioms-with-Examples-800x500.jpg",alt:""}),Object(x.jsx)("p",{children:"Daily Does of idioms"})]}),Object(x.jsxs)("div",{className:"sidebarOption",children:[Object(x.jsx)("img",{src:"https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/12/01/Pictures/_c34102da-9849-11e5-b4f4-1b7a09ed2cea.jpg",alt:""}),Object(x.jsx)("p",{children:"Education"})]})]})};var se=function(){return Object(x.jsx)("div",{className:"sidebar",children:Object(x.jsx)(ce,{})})};c(289);var ne=function(){return Object(x.jsxs)("div",{className:" widget__contents",children:[Object(x.jsxs)("div",{className:"widget__content",children:[Object(x.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg",alt:""}),Object(x.jsxs)("div",{className:"widget__contentTitle",children:[Object(x.jsx)("h5",{children:"COMPLETITIVE EXAM"}),Object(x.jsx)("h5",{children:" tab for info"})]})]}),Object(x.jsx)("div",{className:"widget__contentTitle",children:Object(x.jsx)("h5",{children:"Quora Create Hub"})})]})};c(290);var ae=function(){return Object(x.jsxs)("div",{className:"widget",children:[Object(x.jsx)("div",{className:"widget__header",children:Object(x.jsx)("h5",{children:" +create Space"})}),Object(x.jsx)("div",{className:"widget__contents",children:Object(x.jsx)(ne,{})})]})};c(291);var ie=function(){return Object(x.jsxs)("div",{className:"quora",children:[Object(x.jsx)(ee,{}),Object(x.jsx)("div",{className:"quora__contents",children:Object(x.jsxs)("div",{className:"quora__content",children:[Object(x.jsx)(se,{}),Object(x.jsx)(V,{}),Object(x.jsx)(ae,{})]})})]})};var oe=function(){Object(o.c)(_);var e=Object(o.b)();return Object(s.useEffect)((function(){Object(j.c)(b,(function(t){t&&(e(g({userName:t.displayName,photo:t.photoURL,email:t.email,uid:t.uid})),console.log("AuthUser",t))}))}),[e]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(ie,{}),"."]})},le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,330)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))},re=c(325),de=c(130),je=Object(p.a)({reducer:{user:N}});re.a.addDefaultLocale(de),i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(o.a,{store:je,children:Object(x.jsx)(oe,{})})}),document.getElementById("root")),le()}},[[292,1,2]]]);
//# sourceMappingURL=main.28f770c9.chunk.js.map