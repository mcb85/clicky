(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":1,"image":"./public/images/black-panther.jpg","clicked":false},{"id":2,"image":"./public/images/black-widow.jpg","clicked":false},{"id":3,"image":"./public/images/cptn-america2.jpg","clicked":false},{"id":4,"image":"./public/images/cptn-marvel.jpg","clicked":false},{"id":5,"image":"./public/images/Gamora.jpg","clicked":false},{"id":6,"image":"./public/images/Groot.jpg","clicked":false},{"id":7,"image":"./public/images/hawkeye.jpg","clicked":false},{"id":8,"image":"./public/images/hulk.jpg","clicked":false},{"id":9,"image":"./public/images/iron-man.jpg","clicked":false},{"id":10,"image":"./public/images/Scarlet-Witch.jpg","clicked":false},{"id":11,"image":"./public/images/spiderman.jpg","clicked":false},{"id":12,"image":"./public/images/thor.jpg","clicked":false}]')},22:function(e,a,t){e.exports=t(38)},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),n=t(14),i=t.n(n),r=(t(27),t(28),t(8)),m=t(5),s=(t(29),{navbarStyle:{justifyContent:"flex-end"}});var o=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light text-white bg-primary"},l.a.createElement(r.b,{className:"navbar-brand text-white",to:"/"},"Clicky Game"),l.a.createElement("div",null,l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/",className:"/"===window.location.pathname?"nav-link active":"nav-link"})),l.a.createElement("h2",null,"Click an Image to Begin!"),l.a.createElement("span",null,l.a.createElement("h2",{style:s.navbarStyle,id:"score"},"Score:0")))))},d=t(17),g=t(18),u=t(21),p=t(20);t(35);var E=function(e){return l.a.createElement("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e.children)};var v=function(e){return l.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};t(36);var k=function(e){return l.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var h=function(e){var a=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return l.a.createElement("div",{className:a},e.children)};t(37);var b=function(e){return l.a.createElement("div",{className:"wrapper"},l.a.createElement(k,null,l.a.createElement(h,{size:"sm-4"},l.a.createElement("div",{className:"card",id:"gamora"},l.a.createElement("img",{src:"../images/Gamora.jpg",alt:"gamora"}))),l.a.createElement(h,{size:"sm-4"},l.a.createElement("div",{className:"card",id:"blackWidow"},l.a.createElement("img",{src:"../images/black-widow.jpg",alt:"black-widow"}))),l.a.createElement(h,{size:"sm-4"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:"../images/black-panther.jpg",alt:"black-panther"})))),l.a.createElement(k,null,l.a.createElement(h,{size:"sm-4"},l.a.createElement("div",{className:"card",id:"capt-america"},l.a.createElement("img",{src:"../images/cptn-america2.jpg",alt:"capt-america"}))),l.a.createElement(h,{size:"sm-4"},l.a.createElement("div",{className:"card",id:"capt-marvel"},l.a.createElement("img",{src:"../images/cptn-marvel.jpg",alt:"capt-marvel"}))),l.a.createElement(h,{size:"sm-4"},l.a.createElement("div",{className:"card",id:"groot"},l.a.createElement("img",{src:"../images/groot.jpg",alt:"groot"})))),l.a.createElement(k,null,l.a.createElement(h,{size:"sm-4"},l.a.createElement("div",{className:"card",id:"hawkeye"},l.a.createElement("img",{src:"../images/hawkeye.jpg",alt:"hawkeye"}))),l.a.createElement(h,{size:"sm-4"},l.a.createElement("div",{className:"card",id:"hulk"},l.a.createElement("img",{src:"../images/hulk.jpg",alt:"hulk"}))),l.a.createElement(h,{size:"sm-4"},l.a.createElement("div",{className:"card",id:"iron-man"},l.a.createElement("img",{src:"../images/iron-man.jpg",alt:"iron-man"})))),l.a.createElement(k,null,l.a.createElement(h,{size:"sm-4"},l.a.createElement("div",{className:"card",id:"scarlet-witch"},l.a.createElement("img",{src:"../images/Scarlet-Witch.jpg",alt:"scarlet"}))),l.a.createElement(h,{size:"sm-4"},l.a.createElement("div",{className:"card",id:"spiderman"},l.a.createElement("img",{src:"../images/spiderman.jpg",alt:"spiderman"}))),l.a.createElement(h,{size:"sm-4"},l.a.createElement("div",{className:"card",id:"thor"},l.a.createElement("img",{src:"../images/thor.jpg",alt:"thor"})))))};t(19);var f=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(d.a)(this,t);for(var c=arguments.length,l=new Array(c),n=0;n<c;n++)l[n]=arguments[n];return(e=a.call.apply(a,[this].concat(l))).state={clicked:!1,score:0,welcomeMessage:"Click on an image to earn points. Click on each image only once!"},e.handleClick=function(){e.setState({clicked:!e.state.clicked,score:e.state.score+1})},e}return Object(g.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,{backgroundImage:"./images/double-bubble-dark.png"},l.a.createElement("h1",null,"Clicky Game"),l.a.createElement("h3",{className:"text-white"},this.state.welcomeMessage)),l.a.createElement(v,null,l.a.createElement(b,{onClick:this.handleClick})))}}]),t}(c.Component);var j=function(){return l.a.createElement(r.a,null,l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(m.a,{exact:!0,path:"/",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.d1b77294.chunk.js.map