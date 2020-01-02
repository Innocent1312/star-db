(this["webpackJsonpstar-db"]=this["webpackJsonpstar-db"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),l=a.n(s),c=(a(14),a(15),a(1)),u=a.n(c),i=a(2),o=a(3),m=function(){function e(){Object(i.a)(this,e),this._apiBase="https://swapi.co/api"}return Object(o.a)(e,[{key:"getResource",value:function(e){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(fetch("".concat(this._apiBase).concat(e)));case 2:if((t=a.sent).ok){a.next=5;break}throw new Error("Could not fetch ".concat(e)+", received ".concat(t.status));case 5:return a.next=7,u.a.awrap(t.json());case 7:return a.abrupt("return",a.sent);case 8:case"end":return a.stop()}}),null,this)}},{key:"getAllPeople",value:function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(this.getResource("/people/"));case 2:return e=t.sent,t.abrupt("return",e.results.map(this._transformPerson));case 4:case"end":return t.stop()}}),null,this)}},{key:"getPerson",value:function(e){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(this.getResource("/people/".concat(e,"/")));case 2:return t=a.sent,a.abrupt("return",this._transformPerson(t));case 4:case"end":return a.stop()}}),null,this)}},{key:"getAllPlanets",value:function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(this.getResource("/planets/"));case 2:return e=t.sent,t.abrupt("return",e.results.map(this._transformPlanet));case 4:case"end":return t.stop()}}),null,this)}},{key:"getPlanet",value:function(e){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(this.getResource("/planets/".concat(e,"/")));case 2:return t=a.sent,a.abrupt("return",this._transformPlanet(t));case 4:case"end":return a.stop()}}),null,this)}},{key:"getAllStarships",value:function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(this.getResource("/starships/"));case 2:return e=t.sent,t.abrupt("return",e.results.map(this._transformStarship));case 4:case"end":return t.stop()}}),null,this)}},{key:"getStarship",value:function(e){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=this.getResource("/starships/".concat(e,"/")),a.abrupt("return",this._transformStarship(t));case 2:case"end":return a.stop()}}),null,this)}},{key:"_extractId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}},{key:"_transformPlanet",value:function(e){return{id:this._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}}},{key:"_transformStarship",value:function(e){return{id:this._extractId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.costInCredits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargoCapacity}}},{key:"_transformPerson",value:function(e){return{id:this._extractId(e),name:e.name,gender:e.gender,birthYear:e.birthYear,eyeColor:e.eyeColor}}}]),e}(),p=function(){return r.a.createElement("div",{className:"header d-flex"},r.a.createElement("h3",null,r.a.createElement("a",{href:"#"},"StarDB")),r.a.createElement("ul",{className:"d-flex"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"People")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Planets")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Starships"))))},h=a(5),d=a(4),f=a(6),E=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"item-list list-group"},r.a.createElement("li",{className:"list-group-item"},"Luke Skywalker"),r.a.createElement("li",{className:"list-group-item"},"Darth Vader"),r.a.createElement("li",{className:"list-group-item"},"R2-D2"))}}]),t}(n.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"person-details card"},r.a.createElement("img",{alt:"img",className:"person-image",src:"https://starwars-visualguide.com/assets/img/characters/3.jpg"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,"R2-D2"),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Gender"),r.a.createElement("span",null,"male")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Birth Year"),r.a.createElement("span",null,"43")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Eye Color"),r.a.createElement("span",null,"red")))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).swapiService=new m,a.state={planet:{}},a.onPlanetLoaded=function(e){a.setState({planet:e})},a.updatePlanet(),a}return Object(f.a)(t,e),Object(o.a)(t,[{key:"updatePlanet",value:function(){this.swapiService.getPlanet(12).then(this.onPlanetLoaded)}},{key:"render",value:function(){var e=this.state.planet,t=e.id,a=e.name,n=e.population,s=e.rotationPeriod,l=e.diameter;return r.a.createElement("div",{className:"random-planet jumbotron rounded"},r.a.createElement("img",{className:"planet-image",src:"https://starwars-visualguide.com/assets/img/planets/".concat(t,".jpg"),alt:"img"}),r.a.createElement("div",null,r.a.createElement("h4",null,a),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Population"),r.a.createElement("span",null,n)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Rotation Period"),r.a.createElement("span",null,s)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},"Diameter"),r.a.createElement("span",null,l)))))}}]),t}(n.Component);(new m).getPerson(3).then((function(e){console.log(e.name)}));var b=function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(v,null),r.a.createElement("div",{className:"row mb2"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(E,null)),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(g,null))))};l.a.render(r.a.createElement(b,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.242cfe4e.chunk.js.map