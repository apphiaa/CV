(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("z3IF"),o=n("LkAs"),a=n("Moms"),i=n("bMj6"),u=n("hZod"),s=n("tEuJ"),c=n("mXGw"),l=n.n(c),p=n("o42t"),f=n.n(p),d=n("0EY2"),m=n.n(d),h=n("bBV7"),v=n.n(h),g=n("4BbV"),b=n("ZLCB"),y=n.n(b),C=n("UutA"),w={title:"Default Page Title",titleTemplate:"%s | \u6c5f\u807f\u81fb's CV",description:"Description of page",canonical:"https://apphiaa.github.io/CV",noindex:!1,openGraph:{url:"https://apphiaa.github.io/CV",title:"Default Open Graph Title",description:"Description of open graph",type:"website",images:[{url:"https://apphiaa.github.io/CV/static/images/cover/cover.jpg",width:1080,height:1349,alt:"Cover"}],locale:"zh_tw",site_name:"\u6c5f\u807f\u81fb's CV"},facebook:{appId:895271347480268},twitter:{handle:"@handle",site:"@site",cardType:"summary_large_image"}},k=n("puOy"),E=null,T=function(){return y.a.start()},S=function e(){console.log("stopProgress"),clearTimeout(E),v.a.events.off("beforeHistoryChange",e),v.a.events.off("routeChangeComplete",e),v.a.events.off("routeChangeError",e),y.a.done()},P=function(e){console.log("App is changing to: ",e),E=setTimeout(T,300),v.a.events.on("beforeHistoryChange",S),v.a.events.on("routeChangeComplete",S),v.a.events.on("routeChangeError",S)};v.a.events.on("routeChangeStart",P),v.a.events.on("routeChangeComplete",function(){k.b(v.a.pathname)});var O={colors:{primary:"#0070f3"}},x=function(e){function t(){return Object(o.default)(this,t),Object(i.default)(this,Object(u.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(a.default)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(E),v.a.events.off("routeChangeStart",P),v.a.events.off("beforeHistoryChange",S),v.a.events.off("routeChangeComplete",S),v.a.events.off("routeChangeError",S)}},{key:"componentDidMount",value:function(){y.a.done(!0)}},{key:"render",value:function(){console.log("render MyApp");var e=this.props,t=e.Component,n=e.pageProps,o=e.router;return w.openGraph.url="https://apphiaa.github.io/CV"+o.pathname,l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",key:"meta_viewport"})),l.a.createElement(g.DefaultSeo,Object(r.a)({},w,{canonical:"https://apphiaa.github.io/CV"+o.pathname})),l.a.createElement(g.LogoJsonLd,{logo:"".concat("https://apphiaa.github.io/CV","/static/images/logo.png"),url:"https://apphiaa.github.io/CV"}),l.a.createElement(p.Container,null,l.a.createElement(C.a,{theme:O},l.a.createElement(t,n))))}}]),t}(f.a);t.default=Object(h.withRouter)(x)},"3Ckp":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},"6jsY":function(e,t,n){"use strict";var r=n("PL1w"),o=r(n("LkAs")),a=r(n("Moms")),i=r(n("bMj6")),u=r(n("hZod")),s=r(n("tEuJ")),c=r(n("UrUy")),l=n("PL1w");t.__esModule=!0,t.Container=C,t.createUrl=k,t.default=void 0;var p=l(n("pzQc")),f=l(n("VJxl")),d=l(n("mXGw")),m=l(n("W0B4")),h=n("MUK1");t.AppInitialProps=h.AppInitialProps;var v=n("bBV7");function g(e){return b.apply(this,arguments)}function b(){return(b=(0,f.default)(c.default.mark(function e(t){var n,r,o;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,r=t.ctx,e.next=3,(0,h.loadGetInitialProps)(n,r);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}var y=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(0,u.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,a.default)(t,[{key:"getChildContext",value:function(){return{router:(0,v.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=k(t);return d.default.createElement(C,null,d.default.createElement(n,(0,p.default)({},r,{url:o})))}}]),t}(d.default.Component);function C(e){return e.children}t.default=y,y.childContextTypes={router:m.default.object},y.origGetInitialProps=g,y.getInitialProps=g;var w=(0,h.execOnce)(function(){0});function k(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return w(),r},get pathname(){return w(),t},get asPath(){return w(),n},back:function(){w(),e.back()},push:function(t,n){return w(),e.push(t,n)},pushTo:function(t,n){w();var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return w(),e.replace(t,n)},replaceTo:function(t,n){w();var r=n?t:"",o=n||t;return e.replace(r,o)}}}},VJxl:function(e,t,n){var r=n("ZOIa");function o(e,t,n,o,a,i,u){try{var s=e[i](u),c=s.value}catch(l){return void n(l)}s.done?t(c):r.resolve(c).then(o,a)}e.exports=function(e){return function(){var t=this,n=arguments;return new r(function(r,a){var i=e.apply(t,n);function u(e){o(i,r,a,u,s,"next",e)}function s(e){o(i,r,a,u,s,"throw",e)}u(void 0)})}}},ZLCB:function(e,t,n){var r,o;void 0===(o="function"===typeof(r=function(){var e={version:"0.2.0"},t=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(e,t,n){return e<t?t:e>n?n:e}function r(e){return 100*(-1+e)}e.configure=function(e){var n,r;for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&(t[n]=r);return this},e.status=null,e.set=function(i){var u=e.isStarted();i=n(i,t.minimum,1),e.status=1===i?null:i;var s=e.render(!u),c=s.querySelector(t.barSelector),l=t.speed,p=t.easing;return s.offsetWidth,o(function(n){""===t.positionUsing&&(t.positionUsing=e.getPositioningCSS()),a(c,function(e,n,o){var a;return(a="translate3d"===t.positionUsing?{transform:"translate3d("+r(e)+"%,0,0)"}:"translate"===t.positionUsing?{transform:"translate("+r(e)+"%,0)"}:{"margin-left":r(e)+"%"}).transition="all "+n+"ms "+o,a}(i,l,p)),1===i?(a(s,{transition:"none",opacity:1}),s.offsetWidth,setTimeout(function(){a(s,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){e.remove(),n()},l)},l)):setTimeout(n,l)}),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var n=function(){setTimeout(function(){e.status&&(e.trickle(),n())},t.trickleSpeed)};return t.trickle&&n(),this},e.done=function(t){return t||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(t){var r=e.status;return r?("number"!==typeof t&&(t=(1-r)*n(Math.random()*r,.1,.95)),r=n(r+t,0,.994),e.set(r)):e.start()},e.trickle=function(){return e.inc(Math.random()*t.trickleRate)},function(){var t=0,n=0;e.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&e.start(),t++,n++,r.always(function(){0===--n?(t=0,e.done()):e.set((t-n)/t)}),this):this}}(),e.render=function(n){if(e.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var o=document.createElement("div");o.id="nprogress",o.innerHTML=t.template;var i,s=o.querySelector(t.barSelector),c=n?"-100":r(e.status||0),p=document.querySelector(t.parent);return a(s,{transition:"all 0 linear",transform:"translate3d("+c+"%,0,0)"}),t.showSpinner||(i=o.querySelector(t.spinnerSelector))&&l(i),p!=document.body&&u(p,"nprogress-custom-parent"),p.appendChild(o),o},e.remove=function(){s(document.documentElement,"nprogress-busy"),s(document.querySelector(t.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&l(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var o=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),a=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()}),t[n]||(t[n]=function(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,a=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+a)in n)return r;return t}(n))}function r(e,t,r){t=n(t),e.style[t]=r}return function(e,t){var n,o,a=arguments;if(2==a.length)for(n in t)void 0!==(o=t[n])&&t.hasOwnProperty(n)&&r(e,n,o);else r(e,a[1],a[2])}}();function i(e,t){var n="string"==typeof e?e:c(e);return n.indexOf(" "+t+" ")>=0}function u(e,t){var n=c(e),r=n+t;i(n,t)||(e.className=r.substring(1))}function s(e,t){var n,r=c(e);i(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function c(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function l(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e})?r.call(t,n,t,e):r)||(e.exports=o)},o42t:function(e,t,n){e.exports=n("6jsY")}},[["3Ckp",1,0]]]);