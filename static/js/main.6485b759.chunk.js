(this["webpackJsonpweather-widget"]=this["webpackJsonpweather-widget"]||[]).push([[0],{30:function(t,n,e){},31:function(t,n,e){},34:function(t,n,e){"use strict";e.r(n);var r=e(1),c=e(0),a=e.n(c),i=e(19),o=e.n(i),u=(e(30),e(6)),l=e(4),s=(e(31),e(10)),f=e(23),d=e(5);function b(){var t=Object(l.a)(["\n  font-size: 16pt;\n  position: absolute;\n  opacity: 0;\n  bottom: 0;\n  transition: all 1s ease;\n  text-align: left;\n  color: ",";\n"]);return b=function(){return t},t}function h(){var t=Object(l.a)(["\n  font-size: 28pt;\n  font-weight: bold;\n  text-align: left;\n  color: ",";\n"]);return h=function(){return t},t}function j(){var t=Object(l.a)(["\n  float: left;\n  width: 60px;\n  height: 60px;\n  margin-top: 14px;\n"]);return j=function(){return t},t}function p(){var t=Object(l.a)(["\n  align: left;\n  font-size: 16pt;\n  text-align: left;\n  color: ",";\n"]);return p=function(){return t},t}function g(){var t=Object(l.a)(["\n  margin: 0;\n  font-size: 10pt;\n  align: left;\n  text-align: left;\n  color: ",";\n"]);return g=function(){return t},t}function O(){var t=Object(l.a)(["\n  margin: 0;\n  align: left;\n  font-weight: normal;\n  text-align: left;\n  color: ",";\n"]);return O=function(){return t},t}var x=d.a.h1(O(),(function(t){return t.theme.colors.text})),m=d.a.p(g(),(function(t){return t.theme.colors.text})),v=d.a.p(p(),(function(t){return t.theme.colors.text})),y=d.a.img(j()),w=d.a.p(h(),(function(t){return t.theme.colors.text})),C=d.a.p(b(),(function(t){return t.theme.colors.text})),k=function(t){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(t).getDay()]},S=function(t){return t.split(" ").map((function(t){return t[0].toUpperCase()+t.slice(1)})).join(" ")},M=function(t){var n,e=new Date(t);return[e.getDate(),(n=e.getMonth(),["January","February","March","April","May","June","July","August","September","October","November","December"][n]),e.getFullYear(),e.getHours()%12+":"+String(e.getMinutes()).padStart(2,"0"),e.getHours()/12>=1?"pm":"am"].join(" ")},D=function(t){var n,e=t.date,c=t.forecast,a=t.city,i=function(t){var n=Array.from(t);return n.sort((function(t,n){return t.main.temp-n.main.temp})),[n[0],n[n.length-1]]}(c),o=Object(u.a)(i,2),l=(o[0],o[1]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(x,{children:k(e)}),Object(r.jsx)(m,{children:M(l.dt_txt)}),Object(r.jsx)(v,{children:S(l.weather[0].description)}),Object(r.jsx)(y,{src:(n=l.weather[0].icon,"http://openweathermap.org/img/wn/".concat(n,"@2x.png")),alt:S(l.weather[0].description)}),Object(r.jsxs)(w,{children:[Math.round(l.main.temp-273),"\xb0C"]}),Object(r.jsx)(C,{children:a})]})},F=e(24),L=e(15),z=e(9),J=e(3);function T(){var t=Object(l.a)(["\n  opacity: 1;\n"]);return T=function(){return t},t}function W(){var t=Object(l.a)(["\n  opacity: 1;\n"]);return W=function(){return t},t}function P(){var t=Object(l.a)(["\n  opacity: 1;\n  height: 80%;\n  max-height: 80%;\n  margin: 1em 1em;\n  * {\n    opacity: 1 !important;\n  }\n"]);return P=function(){return t},t}function A(){var t=Object(l.a)(["\n  background-color: ",";\n  border-radius: 10px;\n  max-height: 250px;\n  height: 100%;\n  opacity: 0;\n  width: 200px;\n  min-width: 170px;\n  max-width:200px;\n  margin: 2em 1em;\n  padding: 1rem ;\n  transition: all 1s ease;\n  box-shadow: -5px 5px 3px 2px rgba(200,200,200,0.5);\n  position: relative;\n"]);return A=function(){return t},t}function E(){var t=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  margin: 3em 0;\n  height: 450px;\n  max-width: 200%;\n  min-width: 600px;\n  width: auto;\n  transition: transform 1s ease;\n"]);return E=function(){return t},t}function I(){var t=Object(l.a)(["\n  overflow: hidden;\n"]);return I=function(){return t},t}var q=d.a.div(I()),B=d.a.div(E()),H=function(t){return Object(z.a)(A(),t.colors.background)},_=Object(z.a)(P()),N=Object(z.a)(W()),R=Object(z.a)(T()),U=function(t){var n=t.children,e=Object(c.useState)(1),r=Object(u.a)(e,2),a=r[0],i=r[1],o=Object(c.useState)(null),l=Object(u.a)(o,2),s=l[0],f=l[1],d=Object(c.useCallback)((function(t){return null!==t?f(t):null}),[]),b=Object(c.useState)(window.innerWidth),h=Object(u.a)(b,2),j=h[0],p=h[1],g=s?s.children.length:6,O=s?s.children[0].offsetWidth:205,x=s?s.scrollWidth:O*g;return Object(c.useEffect)((function(){return window.addEventListener("resize",(function(){return p(window.innerWidth)}))}),[]),Object(L.a)(q,{children:Object(L.a)(B,{ref:d,style:{transform:"translateX(".concat(j/2-O/2+a*-x/6,"px)")},children:n.map((function(t,n){return Object(L.a)(X,{state:n-a,onClick:function(){return i(n)},children:t},n)}))})})},X=function(t){var n=t.state,e=t.onClick,r=t.children,c=Object(J.f)(),a={"-1":[H(c),N],0:[H(c),_],1:[H(c),R]}[n]||[H(c)];return Object(L.a)("div",{css:Object(F.a)(a),onClick:e,children:r})};function Y(){var t=Object(l.a)(["\n  color: ",";\n  background-color: ",";\n"]);return Y=function(){return t},t}function G(){var t=Object(l.a)(["\n  position: absolute;\n  top: 1em;\n  left: 0;\n  right: 0;\n"]);return G=function(){return t},t}var K=d.a.div(G()),Q=d.a.input(Y(),(function(t){return t.theme.colors.text}),(function(t){return t.theme.colors.button})),V=function(t){var n=t.userCity,e=t.onChange,a=Object(c.useState)(n),i=Object(u.a)(a,2),o=i[0],l=i[1],s=Object(c.useRef)(null);return Object(r.jsxs)(K,{children:[Object(r.jsx)("input",{ref:s,type:"text",name:"city",value:o,onChange:function(t){return l(t.target.value)},title:"Input your city"}),Object(r.jsx)(Q,{type:"button",value:"Select City",onClick:function(){e(o)}})]})},Z="ede9c8f8660863bcfcc189d771d12cfc",$=function(t){var n=t.userCity,e=t.location,a=Object(c.useState)(n),i=Object(u.a)(a,2),o=i[0],l=i[1],d=Object(s.c)(["weatherData",o],(function(){return o?fetch(function(t){return"https://api.openweathermap.org/data/2.5/forecast?q=".concat(t,"&appid=").concat(Z)}(o)).then((function(t){return t.json()})):fetch(function(t){return"https://api.openweathermap.org/data/2.5/forecast?lat=".concat(t.coords.latitude,"&lon=").concat(t.coords.longitude,"&appid=").concat(Z)}(e)).then((function(t){return t.json()}))})),b=d.isLoading,h=d.error,j=d.data;if(h)return alert("There was an error loading weather data"),null;var p=!b&&function(t){var n,e=new Map,r=Object(f.a)(t.list);try{for(r.s();!(n=r.n()).done;){var c=n.value,a=c.dt_txt.split(" ")[0];e[a]=(e[a]||[]).concat([c])}}catch(i){r.e(i)}finally{r.f()}return e}(j);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(V,{onChange:l}),!b&&Object(r.jsx)(U,{days:p,city:j.city.name,children:Object.entries(p).map((function(t,n){var e=Object(u.a)(t,2),c=e[0],a=e[1];return Object(r.jsx)(D,{date:c,forecast:a,city:j.city.name},n)}))})]})},tt=function(t){var n=Object(s.c)("locationData",(function(){return new Promise((function(t,n){return navigator.geolocation.getCurrentPosition(t,n)}))})),e=n.isLoading,c=n.data,a=n.error;return e?Object(r.jsx)("p",{children:"Loading..."}):a?Object(r.jsx)($,{userCity:"Sydney"}):Object(r.jsx)($,{location:c})};function nt(){var t=Object(l.a)(["\n  color: ",";\n  background-color: ",";\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  z-index: 1;\n  margin: 5px;\n"]);return nt=function(){return t},t}function et(){var t=Object(l.a)(["\n  text-align: center;\n"]);return et=function(){return t},t}var rt=new s.a,ct=d.a.div(et()),at=d.a.button(nt(),(function(t){return t.theme.colors.text}),(function(t){return t.theme.colors.button})),it={light:{colors:{button:"white",background:"#e7dfd0",text:"black"}},dark:{colors:{button:"black",background:"#1b1b24",text:"white"}}};var ot=function(){var t=Object(c.useState)("light"),n=Object(u.a)(t,2),e=n[0],a=n[1],i=it[e];return Object(r.jsx)(ct,{children:Object(r.jsxs)(J.c,{theme:i,children:[Object(r.jsx)(at,{onClick:function(){a("light"===e?"dark":"light")},children:"light"===e?"Dark Mode":"Light Mode"}),Object(r.jsx)(s.b,{queryCache:rt,children:Object(r.jsx)(tt,{})})]})})},ut=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,35)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;e(t),r(t),c(t),a(t),i(t)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(ot,{})}),document.getElementById("root")),ut()}},[[34,1,2]]]);
//# sourceMappingURL=main.6485b759.chunk.js.map