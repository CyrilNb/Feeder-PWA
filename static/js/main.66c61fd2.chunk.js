(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,a){e.exports=a(385)},216:function(e,t,a){},218:function(e,t,a){},385:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),i=(a(216),a(23)),s=a(24),c=a(27),u=a(25),d=a(28),m=(a(218),a(51)),p=a(29),h=a(15),f=a(50),g=a.n(f),b=a(37),E=a.n(b),k=a(71),w=a.n(k),x=a(18),v=a.n(x),y=a(19),j=a.n(y),O=a(30),F=a.n(O),q=a(72),C=a.n(q),_=a(73),D=a.n(_),A=a(21),S=a.n(A),N=a(26),R=a.n(N),z=a(146),K=a.n(z),T=a(140),W=a.n(T),I=a(49),L=a.n(I),M=a(70),P=a.n(M),B=a(5),J=a.n(B),U=a(65),G=a.n(U),H=a(66),$=a.n(H),Q=a(67),V=a.n(Q),X=a(48),Y=a.n(X),Z=a(68),ee=a.n(Z),te=a(69),ae=a.n(te),ne=a(144),re=a.n(ne),le=a(145),oe=a.n(le),ie=a(47),se=a.n(ie),ce=a(74),ue=a.n(ce),de=a(143),me=a.n(de),pe=a(141),he=(Object(h.createMuiTheme)({palette:{primary:{main:"#2e86de"},secondary:{main:"#222f3e"}}}),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e.article))).state={expanded:!1},a.handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a.state={title:e.article.title,pubDate:e.article.pubDate,link:e.article.link,author:e.article.author,thumbnail:e.article.thumbnail,description:e.article.description,content:e.article.content},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(G.a,{className:e.card},r.a.createElement($.a,{title:r.a.createElement(S.a,{align:"center",variant:"h6",color:"primary"},this.state.title),subheader:this.state.pubDate}),r.a.createElement(V.a,{className:e.media,image:this.state.thumbnail,title:this.state.title}),r.a.createElement(Y.a,null,r.a.createElement(S.a,{component:"p",align:"justify",color:"secondary"},this.state.description.replace(/<a.*>/g,"").replace(/<.?b>/g,"").replace(/<br>/g," ").replace(/<p>/g,"").replace(/<\/p>/g,"").replace(/<div.*>/g," ").substring(0,220))),r.a.createElement(ee.a,{className:e.actions,disableActionSpacing:!0},r.a.createElement(R.a,{"aria-label":"Delete"},r.a.createElement(me.a,null)),r.a.createElement(R.a,{"aria-label":"Share"},r.a.createElement(re.a,null)),r.a.createElement(se.a,{size:"small",color:"primary",href:this.state.link,rel:"noopener",target:"_blank"},"Go To ARTICLE"),r.a.createElement(R.a,{className:J()(e.expand,Object(m.a)({},e.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(oe.a,null))),r.a.createElement(ae.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(Y.a,null,r.a.createElement(S.a,{paragraph:!0,color:"secondary",align:"justify"},r.a.createElement(pe.Markup,{content:this.state.content.replace(/<img.*?>/g,"")})))))}}]),t}(n.Component)),fe=Object(h.withStyles)(function(e){return{card:{maxWidth:1e3,backgroundColor:ue.a[400]},media:{height:0,paddingTop:"58.25%",maxHeight:1e3},actions:{display:"flex"},expand:Object(m.a)({transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),marginLeft:"auto"},e.breakpoints.up("sm"),{marginRight:-8}),expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:ue.a[500]}}})(he),ge=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e.rssfeed))).getArticles=function(e){var t;t=a.state.rssfeed,console.log("Feed to load: "+t),W.a.get(e).then(function(e){var t=e.data.items;a.setState({articles:t}),console.log("articles:"+t.title),a.state.uniqueKey+=1}).catch(function(e){console.log("Error occured while fetching data"),console.log(e)})},a.onSearchInputChange=function(e){e.target.value?a.setState({searchString:e.target.value}):a.setState({searchString:""}),a.getArticles()},console.log("ArticlesList rss feed: "+e.rssfeed),a.state={rssfeed:e.rssfeed,articles:[],searchString:"",uniqueKey:1},a.updateRssfeed=a.updateRssfeed.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getArticles(this.state.rssfeed)}},{key:"componentWillReceiveProps",value:function(e){console.log("nexprops: "+e.rssfeed),this.props.rssfeed!==e.rssfeed&&this.updateRssfeed(e.rssfeed)}},{key:"updateRssfeed",value:function(e){console.log("old rss feed:"+this.state.rssfeed),this.getArticles(e),this.setState({rssfeed:e})}},{key:"render",value:function(){return r.a.createElement("div",{key:this.state.uniqueKey},this.state.articles?r.a.createElement("div",null,r.a.createElement(P.a,{style:{padding:24},id:"searchInput",placeholder:"Search for Articles",margin:"normal",onChange:this.onSearchInputChange}),r.a.createElement(L.a,{container:!0,spacing:24,style:{padding:24}},this.state.articles.map(function(e){return r.a.createElement(L.a,{item:!0,xs:12,sm:6,lg:4,xl:3},r.a.createElement(fe,{article:e}))}))):"No articles found")}}]),t}(n.Component),be=a(31);var Ee=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggleDrawer=function(e,t){return function(){a.setState(Object(m.a)({},e,t))}},a.state={rssfeed:"",top:!1,left:!1,uniqueKey:1},a.changefeed=a.changefeed.bind(Object(p.a)(Object(p.a)(a))),console.log("TemporaryDarwer rssfeed: "+a.state.rssfeed),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"changefeed",value:function(e,t){e.preventDefault(),console.log("CHANGE FEED: "+t),this.state.rssfeed=t,this.state.uniqueKey+=1,console.log("state feed: "+this.state.rssfeed)}},{key:"render",value:function(){var e=this,t=this.props.classes,a=r.a.createElement("div",{className:t.list},r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(j.a,null,r.a.createElement(F.a,null)),r.a.createElement(be.a,{onClick:function(t){return e.changefeed(t,"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fkorben.info%2Ffeed&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=8")}},"Korben")),r.a.createElement(v.a,null,r.a.createElement(j.a,null,r.a.createElement(F.a,null)),r.a.createElement(be.a,{onClick:function(t){return e.changefeed(t,"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.programmez.com%2Frss.xml&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=10")}},"Programmez")),r.a.createElement(v.a,null,r.a.createElement(j.a,null,r.a.createElement(F.a,null)),r.a.createElement(be.a,{onClick:function(t){return e.changefeed(t,"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.developpez.com%2Findex%2Frss&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=10")}},"Developpez")),r.a.createElement(v.a,null,r.a.createElement(j.a,null,r.a.createElement(F.a,null)),r.a.createElement(be.a,{onClick:function(t){return e.changefeed(t,"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.lemondeinformatique.fr%2Fflux-rss%2Fthematique%2Flogiciel%2Frss.xml&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=10")}},"Monde Informatique")),r.a.createElement(v.a,null,r.a.createElement(j.a,null,r.a.createElement(F.a,null)),r.a.createElement(be.a,{onClick:function(t){return e.changefeed(t," https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.journaldunet.com%2Fiot%2Frss%2F&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=10")}},"Journal du net"))),r.a.createElement(w.a,null),r.a.createElement(E.a,null,r.a.createElement(v.a,null,r.a.createElement(j.a,null,r.a.createElement(F.a,null)),r.a.createElement(be.a,{onClick:function(t){return e.changefeed(t,"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeeds.feedburner.com%2FMobilecrunch&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=10")}},"TechCrunch")),r.a.createElement(v.a,null,r.a.createElement(j.a,null,r.a.createElement(F.a,null)),r.a.createElement(be.a,{onClick:function(t){return e.changefeed(t,"https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.reddit.com%2Fr%2Ftechnews.rss&api_key=3qybrxxi2i2qxmtnekkwgx4kejnrzlbnqulxmx75&order_by=pubDate&order_dir=desc&count=10")}},"Reddit Tech News"))));return r.a.createElement("div",{key:this.state.uniqueKey},r.a.createElement(C.a,{position:"static"},r.a.createElement(D.a,null,r.a.createElement(R.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:this.toggleDrawer("top",!0)},r.a.createElement(K.a,null)),r.a.createElement(S.a,{variant:"h6",color:"inherit",align:"center",className:t.grow},"Feeder - RSS Reader"))),r.a.createElement(g.a,{open:this.state.left,onClose:this.toggleDrawer("left",!1)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("left",!1),onKeyDown:this.toggleDrawer("left",!1)},a)),r.a.createElement(g.a,{anchor:"top",open:this.state.top,onClose:this.toggleDrawer("top",!1)},r.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer("top",!1),onKeyDown:this.toggleDrawer("top",!1)},a)),r.a.createElement(ge,{rssfeed:this.state.rssfeed}))}}]),t}(r.a.Component),ke=Object(h.withStyles)({list:{width:250},fullList:{width:"auto"}})(Ee),we=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ke,null))}}]),t}(n.Component),xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(we,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Feeder",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Feeder","/service-worker.js");xe?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ve(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ve(t,e)})}}()}},[[211,2,1]]]);
//# sourceMappingURL=main.66c61fd2.chunk.js.map