/*! For license information please see 68076.e3666cff.js.LICENSE.txt */
(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[68076],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>l,kt:()=>v});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),s=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(a.Provider,{value:n},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(t),p=o,v=f["".concat(a,".").concat(p)]||f[p]||d[p]||i;return t?r.createElement(v,u(u({ref:n},l),{},{components:t})):r.createElement(v,u({ref:n},l))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=p;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[f]="string"==typeof e?e:o,u[1]=c;for(var s=2;s<i;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},39649:(e,n,t)=>{"use strict";t.d(n,{N:()=>l,Z:()=>f});var r=t(87462),o=t(67294),i=t(86010),u=t(95999),c=t(53810);const a="anchorWithStickyNavbar_y2LR",s="anchorWithHideOnScrollNavbar_3ly5",l=e=>{let{...n}=e;return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},n,{id:void 0}),n.children))},f=e=>{return"h1"===e?l:(n=e,e=>{let{id:t,...l}=e;const{navbar:{hideOnScroll:f}}=(0,c.LU)();return t?o.createElement(n,(0,r.Z)({},l,{className:(0,i.Z)("anchor",{[s]:f,[a]:!f}),id:t}),l.children,o.createElement("a",{className:"hash-link",href:`#${t}`,title:(0,u.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(n,l)});var n}},94184:(e,n)=>{var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var u=o.apply(null,t);u&&e.push(u)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var c in t)r.call(t,c)&&t[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(n,[]))||(e.exports=t)}()},25585:(e,n,t)=>{"use strict";t.d(n,{Z:()=>C});var r=t(67294);function o(e,n){return Object.keys(e).length===Object.keys(n).length&&Object.keys(e).every((function(t){return!!Object.prototype.hasOwnProperty.call(n,t)&&e[t]===n[t]}))}function i(e){return e.concat().sort((function(e,n){return e.name>n.name?1:-1})).map((function(e){return e.options}))}function u(e,n){var t={start:function(){return 0},center:function(e){return r(e)/2},end:r};function r(e){return n-e}return{measure:function(r){return"number"==typeof e?n*Number(e):t[e](r)}}}function c(e){return Math.abs(e)}function a(e){return e?e/c(e):0}function s(e,n){return c(e-n)}function l(e,n){for(var t=[],r=0;r<e.length;r+=n)t.push(e.slice(r,r+n));return t}function f(e){return Object.keys(e).map(Number)}function d(e){return e[p(e)]}function p(e){return Math.max(0,e.length-1)}function v(e,n){var t=c(e-n);function r(n){return n<e}function o(e){return e>n}function i(e){return r(e)||o(e)}return{length:t,max:n,min:e,constrain:function(t){return i(t)?r(t)?e:n:t},reachedAny:i,reachedMax:o,reachedMin:r,removeOffset:function(e){return t?e-t*Math.ceil((e-n)/t):e}}}function m(e,n,t){var r=v(0,e),o=r.min,i=r.constrain,u=e+1,a=s(n);function s(e){return t?c((u+e)%u):i(e)}function l(){return a}function f(e){return a=s(e),d}var d={add:function(e){return f(l()+e)},clone:function(){return m(e,l(),t)},get:l,set:f,min:o,max:e};return d}function h(){var e=[];var n={add:function(t,r,o,i){return void 0===i&&(i=!1),t.addEventListener(r,o,i),e.push((function(){return t.removeEventListener(r,o,i)})),n},removeAll:function(){return e=e.filter((function(e){return e()})),n}};return n}function g(e){var n=e;function t(e){return n/=e,o}function r(e){return"number"==typeof e?e:e.get()}var o={add:function(e){return n+=r(e),o},divide:t,get:function(){return n},multiply:function(e){return n*=e,o},normalize:function(){return 0!==n&&t(n),o},set:function(e){return n=r(e),o},subtract:function(e){return n-=r(e),o}};return o}function y(e,n,t,r,o,i,u,l,f,d,p,v,m,y,b){var x=e.cross,w=["INPUT","SELECT","TEXTAREA"],S=g(0),O=h(),E=h(),P={mouse:300,touch:400},T={mouse:500,touch:600},j=o?5:16,k=0,A=0,M=!1,N=!1,C=!1,I=!1;function D(e){if(!(I="mousedown"===e.type)||0===e.button){var n,o,c=s(r.get(),u.get())>=2,a=I||!c,l=(n=e.target,o=n.nodeName||"",!(w.indexOf(o)>-1)),f=c||I&&l;M=!0,i.pointerDown(e),S.set(r),r.set(u),d.useBaseMass().useSpeed(80),function(){var e=I?document:t;E.add(e,"touchmove",B).add(e,"touchend",R).add(e,"mousemove",B).add(e,"mouseup",R)}(),k=i.readPoint(e),A=i.readPoint(e,x),m.emit("pointerDown"),a&&(C=!1),f&&e.preventDefault()}}function B(e){if(!N&&!I){if(!e.cancelable)return R(e);var t=i.readPoint(e),o=i.readPoint(e,x),u=s(t,k),c=s(o,A);if(!(N=u>c)&&!C)return R(e)}var a=i.pointerMove(e);!C&&a&&(C=!0),l.start(),r.add(n.apply(a)),e.preventDefault()}function R(e){var t=p.byDistance(0,!1).index!==v.get(),u=i.pointerUp(e)*(o?T:P)[I?"mouse":"touch"],l=function(e,n){var t=v.clone().add(-1*a(e)),r=t.get()===v.min||t.get()===v.max,i=p.byDistance(e,!o).distance;return o||c(e)<20?i:!y&&r?.4*i:b&&n?.5*i:p.byIndex(t.get(),0).distance}(n.apply(u),t),h=function(e,n){if(0===e||0===n)return 0;if(c(e)<=c(n))return 0;var t=s(c(e),c(n));return c(t/e)}(u,l),g=s(r.get(),S.get())>=.5,x=t&&h>.75,w=c(u)<20,O=x?10:j,k=x?1+2.5*h:1;g&&!I&&(C=!0),N=!1,M=!1,E.removeAll(),d.useSpeed(w?9:O).useMass(k),f.distance(l,!o),I=!1,m.emit("pointerUp")}function L(e){C&&e.preventDefault()}return{addActivationEvents:function(){var e=t;O.add(e,"touchmove",(function(){})).add(e,"touchend",(function(){})).add(e,"touchstart",D).add(e,"mousedown",D).add(e,"touchcancel",R).add(e,"contextmenu",R).add(e,"click",L)},clickAllowed:function(){return!C},pointerDown:function(){return M},removeAllEvents:function(){O.removeAll(),E.removeAll()}}}function b(e,n,t){var r,o,i=(r=2,o=Math.pow(10,r),function(e){return Math.round(e*o)/o}),u=g(0),c=g(0),s=g(0),l=0,f=n,d=t;function p(e){return f=e,m}function v(e){return d=e,m}var m={direction:function(){return l},seek:function(n){s.set(n).subtract(e);var t,r,o,i,p=(t=s.get(),(o=0)+(t-(r=0))/(100-r)*(f-o));return l=a(s.get()),s.normalize().multiply(p).subtract(u),(i=s).divide(d),c.add(i),m},settle:function(n){var t=n.get()-e.get(),r=!i(t);return r&&e.set(n),r},update:function(){u.add(c),e.add(u),c.multiply(0)},useBaseMass:function(){return v(t)},useBaseSpeed:function(){return p(n)},useMass:v,useSpeed:p};return m}function x(e,n,t,r){var o=!1;return{constrain:function(i){if(!o&&e.reachedAny(t.get())&&e.reachedAny(n.get())){var u=e.reachedMin(n.get())?"min":"max",a=c(e[u]-n.get()),s=t.get()-n.get(),l=Math.min(a/50,.85);t.subtract(s*l),!i&&c(s)<10&&(t.set(e.constrain(t.get())),r.useSpeed(10).useMass(3))}},toggleActive:function(e){o=!e}}}function w(e,n,t,r,o){var i=v(-n+e,t[0]),u=r.map(i.constrain);return{snapsContained:function(){if(n<=e)return[i.max];if("keepSnaps"===o)return u;var t=function(){var e=u[0],n=d(u),t=u.lastIndexOf(e),r=u.indexOf(n)+1;return v(t,r)}(),r=t.min,c=t.max;return u.slice(r,c)}()}}function S(e,n,t,r,o){var i=v(t.min+n.measure(.1),t.max+n.measure(.1)),u=i.reachedMin,c=i.reachedMax;return{loop:function(n){if(function(e){return 1===e?c(r.get()):-1===e&&u(r.get())}(n)){var t=e*(-1*n);o.forEach((function(e){return e.add(t)}))}}}}function O(e){var n=e.max,t=e.length;return{get:function(e){return(e-n)/-t}}}function E(e,n,t,r,o,i){var u,a,s=e.startEdge,f=e.endEdge,p=o.map((function(e){return r[s]-e[s]})).map(t.measure).map((function(e){return-c(e)})),v=(u=l(p,i).map((function(e){return e[0]})),a=l(o,i).map((function(e){return d(e)[f]-e[0][s]})).map(t.measure).map(c).map(n.measure),u.map((function(e,n){return e+a[n]})));return{snaps:p,snapsAligned:v}}function P(e,n,t,r,o){var i=r.reachedAny,u=r.removeOffset,a=r.constrain;function s(e,n){return c(e)<c(n)?e:n}function l(n,r){var o=n,i=n+t,u=n-t;return e?r?c(s(o,1===r?i:u))*r:s(s(o,i),u):o}return{byDistance:function(t,r){var s=o.get()+t,f=function(t){var r=e?u(t):a(t);return{index:n.map((function(e){return e-r})).map((function(e){return l(e,0)})).map((function(e,n){return{diff:e,index:n}})).sort((function(e,n){return c(e.diff)-c(n.diff)}))[0].index,distance:r}}(s),d=f.index,p=f.distance,v=!e&&i(s);return!r||v?{index:d,distance:t}:{index:d,distance:t+l(n[d]-p,0)}},byIndex:function(e,t){return{index:e,distance:l(n[e]-o.get(),t)}},shortcut:l}}function T(e,n,t,r,o,i,u,c){var a,s=f(r),l=f(r).reverse(),d=(a=o[0]-1,m(v(l,a),"end")).concat(function(){var e=n-o[0]-1,t=v(s,e);return m(t,"start")}());function p(e,n){return e.reduce((function(e,n){return e-r[n]}),n)}function v(e,n){return e.reduce((function(e,t){return p(e,n)>0?e.concat([t]):e}),[])}function m(e,n){var r="start"===n,o=r?-t:t,c=i.findSlideBounds([o]);return e.map((function(e){var n=r?0:-t,o=r?t:0,i=c.filter((function(n){return n.index===e}))[0][r?"end":"start"];return{point:i,getTarget:function(){return u.get()>i?n:o},index:e,location:-1}}))}return{canLoop:function(){return d.every((function(e){var t=e.index;return p(s.filter((function(e){return e!==t})),n)<=0}))},clear:function(){d.forEach((function(n){var t=n.index;c[t].style[e.startEdge]=""}))},loop:function(){d.forEach((function(n){var t=n.getTarget,r=n.location,o=n.index,i=t();i!==r&&(c[o].style[e.startEdge]=i+"%",n.location=i)}))},loopPoints:d}}function j(e,n,t){var r="x"===e.scroll?function(e){return"translate3d("+e+"%,0px,0px)"}:function(e){return"translate3d(0px,"+e+"%,0px)"},o=t.style,i=!1;return{clear:function(){o.transform=""},to:function(e){i||(o.transform=r(n.apply(e.get())))},toggleActive:function(e){i=!e}}}function k(e,n,t,r,o){var i,a=r.align,s=r.axis,l=r.direction,k=r.startIndex,A=r.inViewThreshold,M=r.loop,N=r.speed,C=r.dragFree,I=r.slidesToScroll,D=r.skipSnaps,B=r.containScroll,R=n.getBoundingClientRect(),L=t.map((function(e){return e.getBoundingClientRect()})),_=function(e){var n="rtl"===e?-1:1;return{apply:function(e){return e*n}}}(l),z=function(e,n){var t="y"===e?"y":"x";return{scroll:t,cross:"y"===e?"x":"y",startEdge:"y"===t?"top":"rtl"===n?"right":"left",endEdge:"y"===t?"bottom":"rtl"===n?"left":"right",measureSize:function(e){var n=e.width,r=e.height;return"x"===t?n:r}}}(s,l),F=(i=z.measureSize(R),{measure:function(e){return 0===i?0:e/i*100},totalPercent:100}),G=F.totalPercent,H=u(a,G),V=function(e,n,t,r,o){var i=e.measureSize,u=e.startEdge,a=e.endEdge,s=r.map(i);return{slideSizes:s.map(n.measure),slideSizesWithGaps:r.map((function(e,n,r){var i=n===p(r),c=window.getComputedStyle(d(t)),l=parseFloat(c.getPropertyValue("margin-"+a));return i?s[n]+(o?l:0):r[n+1][u]-e[u]})).map(n.measure).map(c)}}(z,F,t,L,M),W=V.slideSizes,Z=V.slideSizesWithGaps,U=E(z,H,F,R,L,I),q=U.snaps,X=U.snapsAligned,Q=-d(q)+d(Z),J=w(G,Q,q,X,B).snapsContained,Y=!M&&""!==B?J:X,$=function(e,n,t){var r,o;return{limit:(r=n[0],o=d(n),v(t?r-e:o,r))}}(Q,Y,M).limit,K=m(p(Y),k,M),ee=K.clone(),ne=f(t),te=function(e){var n=0;function t(e,t){return function(){e===!!n&&t()}}function r(){n=window.requestAnimationFrame(e)}return{proceed:t(!0,r),start:t(!1,r),stop:t(!0,(function(){window.cancelAnimationFrame(n),n=0}))}}((function(){M||fe.scrollBounds.constrain(fe.dragHandler.pointerDown()),fe.scrollBody.seek(ie).update();var e=fe.scrollBody.settle(ie);e&&!fe.dragHandler.pointerDown()&&(fe.animation.stop(),o.emit("settle")),e||o.emit("scroll"),M&&(fe.scrollLooper.loop(fe.scrollBody.direction()),fe.slideLooper.loop()),fe.translate.to(oe),fe.animation.proceed()})),re=Y[K.get()],oe=g(re),ie=g(re),ue=b(oe,N,1),ce=P(M,Y,Q,$,ie),ae=function(e,n,t,r,o,i){function u(r){var u=r.distance,c=r.index!==n.get();u&&(e.start(),o.add(u)),c&&(t.set(n.get()),n.set(r.index),i.emit("select"))}return{distance:function(e,n){u(r.byDistance(e,n))},index:function(e,t){var o=n.clone().set(e);u(r.byIndex(o.get(),t))}}}(te,K,ee,ce,ie,o),se=function(e,n,t,r,o,i,u){var c=o.removeOffset,a=o.constrain,s=Math.min(Math.max(u,.01),.99),l=i?[0,n,-n]:[0],f=d(l,s);function d(n,o){var i=n||l,u=o||0,c=t.map((function(e){return e*u}));return i.reduce((function(n,o){var i=r.map((function(n,r){return{start:n-t[r]+c[r]+o,end:n+e-c[r]+o,index:r}}));return n.concat(i)}),[])}return{check:function(e,n){var t=i?c(e):a(e);return(n||f).reduce((function(e,n){var r=n.index,o=n.start,i=n.end;return-1===e.indexOf(r)&&o<t&&i>t?e.concat([r]):e}),[])},findSlideBounds:d}}(G,Q,W,q,$,M,A),le=y(z,_,e,ie,C,function(e,n){var t,r;function o(e){return"undefined"!=typeof TouchEvent&&e instanceof TouchEvent}function i(e){return e.timeStamp}function u(n,t){var r="client"+("x"===(t||e.scroll)?"X":"Y");return(o(n)?n.touches[0]:n)[r]}return{isTouchEvent:o,pointerDown:function(e){return t=e,r=e,n.measure(u(e))},pointerMove:function(e){var o=u(e)-u(r),c=i(e)-i(t)>170;return r=e,c&&(t=e),n.measure(o)},pointerUp:function(e){if(!t||!r)return 0;var o=u(r)-u(t),a=i(e)-i(t),s=i(e)-i(r)>170,l=o/a;return a&&!s&&c(l)>.1?n.measure(l):0},readPoint:u}}(z,F),oe,te,ae,ue,ce,K,o,M,D),fe={containerRect:R,slideRects:L,animation:te,axis:z,direction:_,dragHandler:le,eventStore:h(),pxToPercent:F,index:K,indexPrevious:ee,limit:$,location:oe,options:r,scrollBody:ue,scrollBounds:x($,oe,ie,ue),scrollLooper:S(Q,F,$,oe,[oe,ie]),scrollProgress:O($),scrollSnaps:Y,scrollTarget:ce,scrollTo:ae,slideLooper:T(z,G,Q,Z,Y,se,oe,t),slidesInView:se,slideIndexes:ne,target:ie,translate:j(z,_,n)};return fe}var A={align:"center",axis:"x",containScroll:"",direction:"ltr",dragFree:!1,draggable:!0,inViewThreshold:0,loop:!1,skipSnaps:!1,slidesToScroll:1,speed:10,startIndex:0};function M(e,n,t){var r,o,i,u,c,a,s,l,f,d=function(){var e={};function n(n){return e[n]||[]}var t={emit:function(e){return n(e).forEach((function(n){return n(e)})),t},off:function(r,o){return e[r]=n(r).filter((function(e){return e!==o})),t},on:function(r,o){return e[r]=n(r).concat([o]),t}};return t}(),p=(r=function(){if(g){var e=u.axis.measureSize(s.getBoundingClientRect());x!==e&&O(),d.emit("resize")}},o=500,i=0,function(){window.clearTimeout(i),i=window.setTimeout(r,o)||0}),v=O,m=d.on,h=d.off,g=!1,y=Object.assign({},A,M.globalOptions),b=Object.assign({},y),x=0;function w(){var n,t="container"in e&&e.container,r="slides"in e&&e.slides;s="root"in e?e.root:e,l=t||s.children[0],f=r||[].slice.call(l.children),n=getComputedStyle(s,":before").content,c={get:function(){try{return JSON.parse(n.slice(1,-1).replace(/\\/g,""))}catch(e){}return{}}}}function S(e,n){if(w(),y=Object.assign({},y,e),b=Object.assign({},y,c.get()),a=Object.assign([],n),(u=k(s,l,f,b,d)).eventStore.add(window,"resize",p),u.translate.to(u.location),x=u.axis.measureSize(s.getBoundingClientRect()),a.forEach((function(e){return e.init(N)})),b.loop){if(!u.slideLooper.canLoop())return E(),S({loop:!1},n);u.slideLooper.loop()}b.draggable&&l.offsetParent&&f.length&&u.dragHandler.addActivationEvents(),g||(setTimeout((function(){return d.emit("init")}),0),g=!0)}function O(e,n){if(g){var t=j(),r=Object.assign({startIndex:t},e);E(),S(r,n||a),d.emit("reInit")}}function E(){u.dragHandler.removeAllEvents(),u.animation.stop(),u.eventStore.removeAll(),u.translate.clear(),u.slideLooper.clear(),a.forEach((function(e){return e.destroy()}))}function P(e){var n=u[e?"target":"location"].get(),t=b.loop?"removeOffset":"constrain";return u.slidesInView.check(u.limit[t](n))}function T(e,n,t){u.scrollBody.useBaseMass().useSpeed(n?100:b.speed),g&&u.scrollTo.index(e,t||0)}function j(){return u.index.get()}var N={canScrollNext:function(){return u.index.clone().add(1).get()!==j()},canScrollPrev:function(){return u.index.clone().add(-1).get()!==j()},clickAllowed:function(){return u.dragHandler.clickAllowed()},containerNode:function(){return l},internalEngine:function(){return u},destroy:function(){g&&(E(),g=!1,d.emit("destroy"))},off:h,on:m,previousScrollSnap:function(){return u.indexPrevious.get()},reInit:v,rootNode:function(){return s},scrollNext:function(e){T(u.index.clone().add(1).get(),!0===e,-1)},scrollPrev:function(e){T(u.index.clone().add(-1).get(),!0===e,1)},scrollProgress:function(){return u.scrollProgress.get(u.location.get())},scrollSnapList:function(){return u.scrollSnaps.map(u.scrollProgress.get)},scrollTo:T,selectedScrollSnap:j,slideNodes:function(){return f},slidesInView:P,slidesNotInView:function(e){var n=P(e);return u.slideIndexes.filter((function(e){return-1===n.indexOf(e)}))}};return S(n,t),N}function N(e,n){void 0===e&&(e={}),void 0===n&&(n=[]);var t=(0,r.useState)(),u=t[0],c=t[1],a=(0,r.useState)(),s=a[0],l=a[1],f=(0,r.useRef)(e),d=(0,r.useRef)(n),p=(0,r.useMemo)((function(){return o(f.current,e)||(f.current=e),f.current}),[f,e]),v=(0,r.useMemo)((function(){return function(e,n){if(e.length!==n.length)return!1;var t=i(e),r=i(n);return t.every((function(e,n){return o(e,r[n])}))}(d.current,n)||(d.current=n),d.current}),[d,n]);return(0,r.useEffect)((function(){if("undefined"!=typeof window&&window.document&&window.document.createElement&&s){M.globalOptions=N.globalOptions;var e=M(s,p,v);return c(e),function(){return e.destroy()}}c(void 0)}),[s,p,v,c]),[l,u]}M.globalOptions=void 0,N.globalOptions=void 0;const C=N},9844:(e,n,t)=>{"use strict";t.d(n,{e:()=>m});var r=t(67294);function o(e,n,t,r){return new(t||(t=Promise))((function(o,i){function u(e){try{a(r.next(e))}catch(e){i(e)}}function c(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,c)}a((r=r.apply(e,n||[])).next())}))}function i(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function u(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return u}function a(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function s(e,n,t,r){for(var s=[],d=4;d<arguments.length;d++)s[d-4]=arguments[d];return o(this,void 0,void 0,(function(){var o,d,p,v,m,h;return i(this,(function(i){switch(i.label){case 0:i.trys.push([0,12,13,14]),o=u(s),d=o.next(),i.label=1;case 1:if(d.done)return[3,11];switch(typeof(p=d.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,l(e,p,n,t,r)];case 3:return i.sent(),[3,10];case 4:return[4,f(p)];case 5:return i.sent(),[3,10];case 6:return[4,p.apply(void 0,a([e,n,t,r],c(s),!1))];case 7:return i.sent(),[3,10];case 8:return[4,p];case 9:i.sent(),i.label=10;case 10:return d=o.next(),[3,1];case 11:return[3,14];case 12:return v=i.sent(),m={error:v},[3,14];case 13:try{d&&!d.done&&(h=o.return)&&h.call(o)}finally{if(m)throw m.error}return[7];case 14:return[2]}}))}))}function l(e,n,t,r,u){return o(this,void 0,void 0,(function(){var o;return i(this,(function(i){switch(i.label){case 0:return o=function(e,n){var t=c(n).slice(0);return a(a([],c(e),!1),[NaN],!1).findIndex((function(e,n){return t[n]!==e}))}(e.textContent,n),[4,d(e,a(a([],c(v(e.textContent,o)),!1),c(p(n,o)),!1),t,r,u)];case 1:return i.sent(),[2]}}))}))}function f(e){return o(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){return setTimeout(n,e)}))];case 1:return n.sent(),[2]}}))}))}function d(e,n,t,r,c){return o(this,void 0,void 0,(function(){var o,a,s,l,d,p,v,m,h,g,y,b;return i(this,(function(x){switch(x.label){case 0:if(o=n,c){for(a=0,s=1;s<n.length;s++)if(l=n[s-1],(d=n[s]).length>l.length||""===d){a=s;break}o=n.slice(a,n.length)}x.label=1;case 1:x.trys.push([1,6,7,8]),p=u(function(e){var n,t,r,o,c,a,s;return i(this,(function(l){switch(l.label){case 0:n=function(e){return i(this,(function(n){switch(n.label){case 0:return[4,{op:function(n){return requestAnimationFrame((function(){return n.textContent=e}))},opCode:function(n){return""===e||n.textContent.length>e.length?"DELETE":"WRITING"}}];case 1:return n.sent(),[2]}}))},l.label=1;case 1:l.trys.push([1,6,7,8]),t=u(e),r=t.next(),l.label=2;case 2:return r.done?[3,5]:(o=r.value,[5,n(o)]);case 3:l.sent(),l.label=4;case 4:return r=t.next(),[3,2];case 5:return[3,8];case 6:return c=l.sent(),a={error:c},[3,8];case 7:try{r&&!r.done&&(s=t.return)&&s.call(t)}finally{if(a)throw a.error}return[7];case 8:return[2]}}))}(o)),v=p.next(),x.label=2;case 2:return v.done?[3,5]:(m=v.value,h="WRITING"===m.opCode(e)?t+t*(Math.random()-.5):r+r*(Math.random()-.5),m.op(e),[4,f(h)]);case 3:x.sent(),x.label=4;case 4:return v=p.next(),[3,2];case 5:return[3,8];case 6:return g=x.sent(),y={error:g},[3,8];case 7:try{v&&!v.done&&(b=p.return)&&b.call(p)}finally{if(y)throw y.error}return[7];case 8:return[2]}}))}))}function p(e,n,t){var r=c(e).slice(0);return void 0===n&&(n=0),void 0===t&&(t=r.length),i(this,(function(e){switch(e.label){case 0:return n<t?[4,r.slice(0,++n).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}function v(e,n,t){var r=c(e).slice(0);return void 0===n&&(n=0),void 0===t&&(t=r.length),i(this,(function(e){switch(e.label){case 0:return t>n?[4,r.slice(0,--t).join("")]:[3,2];case 1:return e.sent(),[3,0];case 2:return[2]}}))}!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var m=(0,r.memo)((function(e){var n=e.sequence,t=e.repeat,o=e.className,i=e.speed,u=void 0===i?40:i,l=e.deletionSpeed,f=e.omitDeletionAnimation,d=void 0!==f&&f,p=e.wrapper,v=void 0===p?"div":p,m=e.cursor,h=void 0===m||m,g=e.style;u=Math.abs(u-100),l=l?Math.abs(l-100):u;var y,b,x,w,S,O,E=(0,r.useRef)(null),P="index-module_type__E-SaG";y=o&&o.length>0?h?"".concat(P," ").concat(o):o:h?P:"",b=(0,r.useRef)((function(){return t===1/0?s.apply(void 0,a(a([E.current,u,l,d],c(n),!1),[s],!1)):"number"==typeof t?s.apply(void 0,a([E.current,u,l,d],c(Array(1+t).fill(n).flat()),!1)):s.apply(void 0,a([E.current,u,l,d],c(n),!1)),function(){E.current}})),x=(0,r.useRef)(),w=(0,r.useRef)(!1),S=(0,r.useRef)(!1),O=c((0,r.useState)(0),2)[1],w.current&&(S.current=!0),(0,r.useEffect)((function(){return w.current||(x.current=b.current(),w.current=!0),O((function(e){return e+1})),function(){S.current&&x.current&&x.current()}}),[]);var T=v;return r.createElement(T,{style:g,className:y,ref:E})}),(function(e,n){return!0}))}}]);