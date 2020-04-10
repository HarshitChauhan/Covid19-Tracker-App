(this.webpackJsonpcovid19_tracker=this.webpackJsonpcovid19_tracker||[]).push([[0],{13:function(e,t,a){e.exports={container:"Card_container__29vUj",card:"Card_card__2DedJ",infected:"Card_infected__2e6dB",recovered:"Card_recovered__1AkrI",deaths:"Card_deaths__8L-4s"}},210:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(77),o=a.n(c),s=a(6),u=a.n(s),i=a(9),l=a(78),d=a(79),m=a(88),p=a(87),f=a(230),v=a(234),h=a(231),E=a(232),b=a(13),y=a.n(b),_=a(34),g=a.n(_),C=a(35),x=a.n(C),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:y.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(y.a.card,y.a.infected)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"primary",gutterBottom:!0},"Infected"),r.a.createElement(E.a,{varient:"h5"},r.a.createElement(g.a,{start:0,end:a.value,duration:1.75,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},"Updated:",new Date(o).toString()),r.a.createElement(E.a,{varient:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(y.a.card,y.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(E.a,{varient:"h5"},r.a.createElement(g.a,{start:0,end:n.value,duration:1.75,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},"Updated:",new Date(o).toString()),r.a.createElement(E.a,{varient:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(y.a.card,y.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(E.a,{color:"secondary",gutterBottom:!0},"Deaths"),r.a.createElement(E.a,{varient:"h5"},r.a.createElement(g.a,{start:0,end:c.value,duration:1.75,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},"Updated:",new Date(o).toString()),r.a.createElement(E.a,{varient:"body2"},"Number of deaths caused by COVID-19"))))):"Loading..."},k=a(33),O=a(36),N=a.n(O),j="https://covid19.mathdro.id/api",D=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=j,t&&(a="".concat(j,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(j,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(j,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=a(48),A=a(85),B=a.n(A),V=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,l=Object(n.useState)({}),d=Object(k.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=a?r.a.createElement(U.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!0},title:{display:!0,text:"Current state in ".concat(s)}}}):null,v=m[0]?r.a.createElement(U.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:B.a.container},s?f:v)},P=a(235),J=a(233),H=a(49),L=a.n(H),R=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(k.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(P.a,{className:L.a.formControl},r.a.createElement(J.a,{className:L.a.nativeselect,defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},q=a(23),z=a.n(q),G=a(86),M=a.n(G),F=(a(210),a(50)),K=a(52);function T(){return r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"info1"},r.a.createElement("h4",null,"Created by:"),r.a.createElement("h3",null,"Harshit Kumar")),r.a.createElement("div",{className:"info2"},r.a.createElement("h4",null,"Follow me on:"),r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"https://www.linkedin.com/in/harshitkumar2503/",className:"linkedin social"},r.a.createElement(F.a,{icon:K.b,size:"2x"})),r.a.createElement("a",{href:"https://www.github.com/HarshitChauhan/",className:"github social"},r.a.createElement(F.a,{icon:K.a,size:"2x"})))))}var Z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:z.a.container},r.a.createElement("img",{className:z.a.image,src:M.a,alt:"COVID-19"}),r.a.createElement("div",{className:z.a.note},r.a.createElement("p",null,"Live statistics and coronavirus tracking the number of confirmed Infected cases, Recovered cases, Deaths cases. The coronavirus COVID-19 is affecting 209 countries and territories around the globe."),r.a.createElement("p",{className:z.a.note2},"Stay Updated. Stay Home. Stay Safe.")),r.a.createElement(w,{data:t}),r.a.createElement(R,{handleCountryChange:this.handleCountryChange}),r.a.createElement(V,{data:t,country:a}),r.a.createElement(T,null))}}]),a}(r.a.Component);o.a.render(r.a.createElement(Z,null),document.getElementById("root"))},23:function(e,t,a){e.exports={container:"App_container__MZnUn",image:"App_image__3fvG9",note:"App_note__3DP_P",note2:"App_note2__3q6JB"}},49:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__29fc_",nativeselect:"CountryPicker_nativeselect__3nSwh"}},85:function(e,t,a){e.exports={container:"Chart_container__2Aqao"}},86:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},91:function(e,t,a){e.exports=a(213)}},[[91,1,2]]]);
//# sourceMappingURL=main.12908826.chunk.js.map