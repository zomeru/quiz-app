(this["webpackJsonpreact-ts-proj"]=this["webpackJsonpreact-ts-proj"]||[]).push([[0],{30:function(n,e,t){"use strict";t.r(e);var r,a=t(0),c=t.n(a),s=t(15),o=t.n(s),i=t(3),u=t(4),l=t.n(u),d=t(9),b=t(2),p=t(16),f=t(13);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(r||(r={}));var x,j,g,h,m=function(){var n=Object(d.a)(l.a.mark((function n(e,t){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat("https://opentdb.com/api.php?","amount=").concat(e,"&difficulty=").concat(t,"&category=").concat(31),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,n.abrupt("return",a.results.map((function(n){return Object(f.a)(Object(f.a)({},n),{},{answers:(e=[].concat(Object(i.a)(n.incorrect_answers),[n.correct_answer]),Object(i.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),O=t(5),w=t(6),v=w.b.div(x||(x=Object(O.a)(["\n  max-width: 1100px;\n  background-color: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25) p {\n    font-size: 1rem;\n  }\n"]))),k=w.b.div(j||(j=Object(O.a)(["\n  transition: all 0.3s ease;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 3px solid #fff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"])),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56ffa4, #59bc86)":!e&&t?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4 )"})),y=t(1),S=function(n){var e=n.question,t=n.answers,r=n.callback,a=n.userAnswer,c=n.questionNumber,s=n.totalQuestions;return Object(y.jsxs)(v,{children:[Object(y.jsxs)("p",{className:"number",children:["Question: ",c," / ",s]}),Object(y.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(y.jsx)("div",{children:t.map((function(n){return Object(y.jsx)(k,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===n,userClicked:(null===a||void 0===a?void 0:a.answer)===n,children:Object(y.jsx)("button",{disabled:!!a,value:n,onClick:r,children:Object(y.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},n)}))})]})},z=t.p+"static/media/bg.ec3c44af.jpg",A=Object(w.a)(g||(g=Object(O.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  html {\n    height: 100%;\n    font-family: 'Catamaran', sans-serif;\n  }\n\n  body {\n    background-image: url(",");\n    background-size: cover;\n    margin: 0;\n    padding: 0 20px;\n    display: flex;\n    justify-content: center;\n  }\n"])),z),N=w.b.div(h||(h=Object(O.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > p {\n    color: #fff;\n  }\n\n  .score {\n    color: #fff;\n    font-size: 2rem;\n    margin: 0;\n  }\n\n  h1 {\n    font-family: Fascinate Impact, Haettenschweiler, 'Arial Narrow Bold',\n      sans-serif;\n    background-image: linear-gradient(180deg, #fff, #87f1ff);\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px #0085a3);\n    font-size: 70px;\n    text-align: center;\n    margin: 20px;\n  }\n\n  .start,\n  .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #fff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n\n  .start {\n    max-width: 200px;\n  }\n"]))),_=function(n){Object(p.a)(n);var e=Object(a.useState)(!1),t=Object(b.a)(e,2),c=t[0],s=t[1],o=Object(a.useState)([]),u=Object(b.a)(o,2),f=u[0],x=u[1],j=Object(a.useState)(0),g=Object(b.a)(j,2),h=g[0],O=g[1],w=Object(a.useState)([]),v=Object(b.a)(w,2),k=v[0],z=v[1],_=Object(a.useState)(0),q=Object(b.a)(_,2),C=q[0],M=q[1],Q=Object(a.useState)(!0),I=Object(b.a)(Q,2),E=I[0],H=I[1],L=function(){var n=Object(d.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(!0),H(!1),n.next=4,m(10,r.EASY);case 4:e=n.sent,x(e),M(0),z([]),O(0),s(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),T=!E&&!c&&k.length===h+1&&10!==h;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(A,{}),Object(y.jsxs)(N,{children:[Object(y.jsx)("h1",{children:"Anime Quiz"}),E||10===k.length?Object(y.jsx)("button",{className:"start",onClick:L,children:"Start"}):null,E?null:Object(y.jsxs)("p",{className:"score",children:["Score: ",C]}),c?Object(y.jsx)("p",{children:"Loading Question..."}):null,!c&&!E&&Object(y.jsx)(S,{questionNumber:h+1,totalQuestions:10,question:f[h].question,answers:f[h].answers,userAnswer:k?k[h]:void 0,callback:function(n){if(!E){var e=n.currentTarget.value,t=f[h].correct_answer===e;t&&M((function(n){return n+1}));var r={question:f[h].question,answer:e,correct:t,correctAnswer:f[h].correct_answer};z((function(n){return[].concat(Object(i.a)(n),[r])}))}}}),T?Object(y.jsx)("button",{className:"next",onClick:function(){var n=h+1;10===n?H(!0):O(n)},children:"Next Question"}):null]})]})};o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(_,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.fd428466.chunk.js.map