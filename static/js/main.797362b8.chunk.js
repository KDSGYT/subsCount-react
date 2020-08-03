(this.webpackJsonpsubscount=this.webpackJsonpsubscount||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),s=(n(14),n(1)),l=n.n(s),u=n(6),i=n(2),m=n(3),h=n(5),b=n(4),p=r.a.createContext(),f=p.Provider,v=p.Consumer;n(16),n(17);function d(){return r.a.createElement(v,null,(function(e){var t=e.bannerUrl,n=e.channelImg,a=e.title,c=e.subscriberCount;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-top",style:{backgroundImage:"url(".concat(t,")")}}),r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"card-circle"},r.a.createElement("img",{src:n,alt:"Channel Profile"})),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("h1",null,a||"no channel Name"),r.a.createElement("div",{className:"results"},r.a.createElement("div",null,c)))))}))}n(18);var E=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).input=r.a.createRef(),e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{className:"input",onSubmit:function(t){t.preventDefault(),e.props.handleSubmit(e.input.current.value)}},r.a.createElement("input",{ref:this.input,htmlFor:"channel-search",type:"text",className:"label-input",required:!0}),r.a.createElement("label",{htmlFor:"channel-search",className:"label-name"},r.a.createElement("span",{className:"content-name"},"Search")),r.a.createElement("input",{type:"submit",className:"material-icons",value:"search"}))}}]),n}(a.Component);n(19);var g=function(e){var t=e.status;return r.a.createElement("div",{className:"error-page"},r.a.createElement("h1",{className:"punchline"},"Bummer !!!! Error: ",t,r.a.createElement("p",{id:"explanation"},"I don't have money to pay YoutubeAPI for quota extension. ",r.a.createElement("br",null)," Come back later!! ")))},w=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={bannerUrl:"",channelImg:"",viewCount:"",title:"",subscriberCount:0,error:!1},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getChannelId()}},{key:"getChannelId",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r=this,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"MKBHD",n="AIzaSyDvrIL-2-y7Q1gl2T0o0W78FvByXTnIHvM",a="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=".concat(t,"&key=").concat(n),e.next=5,fetch(a).then((function(e){return 200===e.status?e.json():r.setState({error:{status:e.status}})})).then((function(e){return e.items[0].id.channelId})).then(function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("channelId: ".concat(t)),a="https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2CbrandingSettings&id=".concat(t,"&key=").concat(n),console.log("fetch function "+typeof r.fetchData),e.next=5,r.fetchData(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchData",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then((function(e){return e.ok?e.json():new g("Didn't get the channel subs")})).then((function(e){var t=e.items[0],a=t.snippet.thumbnails,r=t.brandingSettings.image,c=t.statistics;n.setState({title:t.snippet.title,channelImg:a.medium.url,bannerUrl:r.bannerMobileExtraHdImageUrl,subscriberCount:n.shortNumber(c.subscriberCount),viewCount:n.shortNumber(c.viewCount)})})).catch((function(e){console.log(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"shortNumber",value:function(e){return Math.abs(Number(e))>=1e9?(Math.abs(Number(e))/1e9).toFixed(1)+"B":Math.abs(Number(e))>=1e6?(Math.abs(Number(e))/1e6).toFixed(1)+"M":Math.abs(Number(e))>=1e3?(Math.abs(Number(e))/1e3).toFixed(1)+"K":Math.abs(Number(e))}},{key:"render",value:function(){return this.state.error?r.a.createElement(g,{status:this.state.error.status}):r.a.createElement(f,{value:this.state},r.a.createElement("div",{className:"sub-window"},r.a.createElement("div",{className:"search"},r.a.createElement(d,null),r.a.createElement(E,{handleSubmit:this.getChannelId.bind(this)}))))}}]),n}(a.Component),y=(n(20),function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/KDSGYT/subsCount-react",target:"_blank",rel:"noopener noreferrer"},"Github")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.kdsg.live"},"Author"))))});var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.797362b8.chunk.js.map