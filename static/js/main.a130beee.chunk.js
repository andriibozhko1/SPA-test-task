(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(29)},22:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(14),c=t.n(s),l=t(5),i=t(6),o=t(8),m=t(7),d=t(9),u=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.personData;return r.a.createElement("div",{className:"PersonCard"},r.a.createElement("div",{className:"PersonCard__title"},r.a.createElement("span",null,"".concat(e.name.first," ").concat(e.name.last)),r.a.createElement("span",null,"Age : ".concat(e.age))),r.a.createElement("div",{className:"PersonCard__body"},r.a.createElement("ul",{className:"PersonCard__body-list"},r.a.createElement("li",{className:"PersonCard__body-item"},"Company:"," ",r.a.createElement("span",{className:"PersonCard__body-item-info"},e.company)," "),r.a.createElement("li",{className:"PersonCard__body-item"},"Email:",r.a.createElement("span",null,r.a.createElement("span",{className:"PersonCard__body-item-info"},e.email)," ")),r.a.createElement("li",{className:"PersonCard__body-item"},"Phone:"," ",r.a.createElement("span",{className:"PersonCard__body-item-info"},e.phone)," "))),r.a.createElement("div",{className:"PersonCard__footer"},r.a.createElement("span",null,"View More ")))}}]),a}(n.Component),p=t(30);t(22);function _(e){return r.a.createElement("div",{className:"CardList"},r.a.createElement("ul",{className:"CardList__list"},e.data.map(function(e){return r.a.createElement(p.a,{to:e._id,key:e.index},r.a.createElement("li",{className:"CardList__item"},r.a.createElement(u,{personData:e})))})))}t(25);function E(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__item-1"}),r.a.createElement("div",{className:"Loader__item-2"}),r.a.createElement("div",{className:"Loader__item-3"}),r.a.createElement("div",{className:"Loader__item-4"}),r.a.createElement("div",{className:"Loader__item-5"}))}t(26);var h=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.person?r.a.createElement("div",{className:"CardViewer"},r.a.createElement("div",{className:"CardViewer__title"},r.a.createElement("span",null,this.person.name.first," ",this.person.name.last),r.a.createElement("span",null,"Age: ".concat(this.person.age))),r.a.createElement("div",{className:"CardViewer__about"},r.a.createElement("div",{className:"CardViewer__point"},"About: "),this.person.about),r.a.createElement("div",{className:"CardViewer__about"},r.a.createElement("div",{className:"CardViewer__point"},"Address & Email: "),this.person.address," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"mailto: ".concat(this.person.email)},this.person.email)),r.a.createElement("div",{className:"CardViewer__about"},r.a.createElement("span",{className:"CardViewer__point"},"Company: "),r.a.createElement("span",{className:"CardViewer__highlight-point"},this.person.company)),r.a.createElement("div",{className:"CardViewer__about"},r.a.createElement("div",{className:"CardViewer__point"},"Balance: "),this.person.balance),r.a.createElement("div",{className:"CardViewer__about"},r.a.createElement("div",{className:"CardViewer__point"},"About: "),this.person.about)):r.a.createElement(E,null)}},{key:"person",get:function(){return window.scrollTo(0,0),this.props.getPersonById(this.props.match.params.id)}}]),a}(n.Component),b=t(32),f=t(33),v=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={data:[],currentPerson:null},t.getPersonById=function(e){return t.state.data.find(function(a){if(a._id===e)return a})||null},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://next.json-generator.com/api/json/get/E146QiV8U").then(function(e){return e.json()}).then(function(a){e.setState({data:a})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(_,{data:e.state.data,getPersonById:e.getPersonById})}}),r.a.createElement(f.a,{path:"/:id",render:function(a){return r.a.createElement(h,Object.assign({},a,{getPersonById:e.getPersonById}))}})))}}]),a}(n.Component),N=t(31);t(28);c.a.render(r.a.createElement(N.a,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a130beee.chunk.js.map