(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,a,t){e.exports=t(73)},44:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),o=t.n(r),c=(t(44),t(1)),s=t(2),m=t(4),i=t(3),u=t(5),d=t(9),b=t(17),p=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={user:null},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return null!=this.props.user?l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement(d.b,{className:"navbar-brand",to:"/"},"LIBRARY"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/searchBook"},"Search Book")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/addBook"},"Add Book")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/issueBook"},"Issue Book"))))):l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement(d.b,{className:"navbar-brand",to:"/"},"LIBRARY"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/studentLogin"},"Sign In")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",to:"/studentRegister"},"Sign Up")))))}}]),a}(n.Component),E=Object(b.b)(function(e){if(e.auth&&e.auth.user)return{user:e.auth.user.name}})(p),h=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("h1",null,"Library Management System")}}]),a}(n.Component),v=t(16),N=t(8),f=t(23),g=t.n(f),O=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(m.a)(this,Object(i.a)(a).call(this))).state={email:"",password:""},e.onChange=e.onChange.bind(Object(N.a)(Object(N.a)(e))),e.onSubmit=e.onSubmit.bind(Object(N.a)(Object(N.a)(e))),e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"onChange",value:function(e){this.setState(Object(v.a)({},e.target.id,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var a={email:this.state.email,password:this.state.password};g.a.post("students/login",a).then(function(e){return console.log(e.data)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"form-horizontal",onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Email:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"email",className:"form-control",id:"email",value:this.state.email,onChange:this.onChange,placeholder:"Enter email"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Password:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"password",className:"form-control",id:"password",value:this.state.password,onChange:this.onChange,placeholder:"Enter password"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-sm-offset-2 col-sm-10"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))}}]),a}(n.Component),j=t(15),y=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(m.a)(this,Object(i.a)(a).call(this))).state={name:"",email:"",mobile:"",gender:"",password:""},e.onChange=e.onChange.bind(Object(N.a)(Object(N.a)(e))),e.onSubmit=e.onSubmit.bind(Object(N.a)(Object(N.a)(e))),e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"onChange",value:function(e){this.setState(Object(v.a)({},e.target.id,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var a={name:this.state.name,email:this.state.email,phone:this.state.mobile,gender:this.state.gender,password:this.state.password};this.props.registerUser(a,this.props.history)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{noValidate:!0,className:"form-horizontal",onSubmit:this.onSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Name:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"name",value:this.state.name,onChange:this.onChange,placeholder:"Enter name"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Email:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"email",className:"form-control",value:this.state.email,onChange:this.onChange,id:"email",placeholder:"Enter email"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Mobile No.:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"mobile",value:this.state.mobile,onChange:this.onChange,placeholder:"Enter Mobile Number"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Gender:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"gender",value:this.state.gender,onChange:this.onChange,placeholder:"Enter your Gender"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Password:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"password",className:"form-control",id:"password",value:this.state.password,onChange:this.onChange,placeholder:"Enter password"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-sm-offset-2 col-sm-10"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))}}]),a}(n.Component),k=Object(b.b)(function(e){return{auth:e.auth}},{registerUser:function(e,a){return g.a.post("students/register",e).then(function(e){return a.push("/searchBook")}).catch(function(e){return console.log(e)}),{type:"TEST_DISPATCH",payload:e}}})(Object(j.d)(y)),C=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"form-horizontal",action:""},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Email:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Password:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Enter password"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-sm-offset-2 col-sm-10"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))}}]),a}(n.Component),S=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"form-horizontal",action:""},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"ISBN No.:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"email",placeholder:"Enter ISBN No."}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-sm-offset-2 col-sm-10"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))}}]),a}(n.Component),w=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"form-horizontal",action:""},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"ISBN No.:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"isbn",placeholder:"Enter ISBN No."}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Title:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"title",placeholder:"Enter Book Title"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Author:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"author",placeholder:"Enter Author"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Genre:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"genre",placeholder:"Enter Book Genre"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Copies:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"number",className:"form-control",id:"pwd",placeholder:"Enter No. of Copies"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-sm-offset-2 col-sm-10"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))}}]),a}(n.Component),x=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"form-horizontal",action:""},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"User Id:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"user_id",placeholder:"Enter User Id"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"control-label col-sm-2"},"Book Id:"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement("input",{type:"text",className:"form-control",id:"book_id",placeholder:"Enter Book Id"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"col-sm-offset-2 col-sm-10"},l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))))}}]),a}(n.Component),B=t(14),I=t(37),T=t(38),_={isAuthenticatesUser:!1,user:{}},A=Object(B.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TEST_DISPATCH":return Object(T.a)({},e,{user:a.payload});default:return e}}}),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,R=[I.a],U=Object(B.e)(A,{},L(B.a.apply(void 0,R))),z=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(b.a,{store:U},l.a.createElement(d.a,null,l.a.createElement(E,null),l.a.createElement(j.a,{exact:!0,path:"/",component:h}),l.a.createElement(j.a,{exact:!0,path:"/studentLogin",component:O}),l.a.createElement(j.a,{exact:!0,path:"/studentRegister",component:k}),l.a.createElement(j.a,{exact:!0,path:"/adminLogin",component:C}),l.a.createElement(j.a,{exact:!0,path:"/searchBook",component:S}),l.a.createElement(j.a,{exact:!0,path:"/addBook",component:w}),l.a.createElement(j.a,{exact:!0,path:"/issueBook",component:x})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.2566878f.chunk.js.map