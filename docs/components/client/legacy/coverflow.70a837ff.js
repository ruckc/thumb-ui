import{w as t,q as n,r,u as e,v as o,x as u,i,s as c,S as a,y as s,e as f,g as l,h as p,k as m,m as v,z as h,n as d,A as g,B as y,C as $,D as b,E as k,F as j,G as D,H as w,p as R,I as E,J as A,K as S,t as T,f as I,L as P,j as C,l as V,M as x,o as L,N as M,O,P as H,Q as X,R as q,T as B,U as N,_ as Y,a as z,b as F,c as G,d as W}from"./client.f69931b4.js";import J from"@babel/runtime/helpers/esm/classCallCheck";import K from"@babel/runtime/helpers/esm/assertThisInitialized";import Q from"@babel/runtime/helpers/esm/inherits";import U from"@babel/runtime/helpers/esm/possibleConstructorReturn";import Z from"@babel/runtime/helpers/esm/getPrototypeOf";import _ from"@babel/runtime/helpers/esm/slicedToArray";import tt from"@babel/runtime/helpers/esm/createClass";function nt(t){var n=t-1;return n*n*n+1}function rt(t){return"[object Date]"===Object.prototype.toString.call(t)}function et(t,n){if(t===n||t!=t)return function(){return t};var r=u(t);if(r!==u(n)||Array.isArray(t)!==Array.isArray(n))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){var e=n.map((function(n,r){return et(t[r],n)}));return function(t){return e.map((function(n){return n(t)}))}}if("object"===r){if(!t||!n)throw new Error("Object cannot be null");if(rt(t)&&rt(n)){t=t.getTime();var o=(n=n.getTime())-t;return function(n){return new Date(t+n*o)}}var i=Object.keys(n),c={};return i.forEach((function(r){c[r]=et(t[r],n[r])})),function(t){var n={};return i.forEach((function(r){n[r]=c[r](t)})),n}}if("number"===r){var a=n-t;return function(n){return t+n*a}}throw new Error("Cannot interpolate ".concat(r," values"))}function ot(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=Z(t);if(n){var o=Z(this).constructor;r=Reflect.construct(e,arguments,o)}else r=e.apply(this,arguments);return U(this,r)}}var ut=function(t){return{current:1&t[0],progress:64&t[0]}},it=function(t){return{current:t[0],jump:t[13],progress:t[6]}};function ct(t){var n,r,e,o,u,i,c=t[19].default,a=s(c,t,t[18],it);return{c:function(){n=f("div"),a&&a.c(),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var r=p(n);a&&a.l(r),r.forEach(m),this.h()},h:function(){v(n,"class",r="swipeable "+t[1]+" svelte-1tq9t5b"),h((function(){return t[20].call(n)}))},m:function(r,c){d(r,n,c),a&&a.m(n,null),e=g(n,t[20].bind(n)),t[21](n),o=!0,u||(i=[y(n,"pointercancel",t[12]),y(n,"touchstart",t[10]),y(n,"touchmove",t[14]),y(n,"touchend",t[11]),y(n,"mousedown",t[7]),y(n,"mousemove",t[9]),y(n,"mouseup",t[8]),y(n,"wheel",t[15])],u=!0)},p:function(t,e){a&&a.p&&262209&e[0]&&$(a,c,t,t[18],e,ut,it),(!o||2&e[0]&&r!==(r="swipeable "+t[1]+" svelte-1tq9t5b"))&&v(n,"class",r)},i:function(t){o||(b(a,t),o=!0)},o:function(t){k(a,t),o=!1},d:function(r){r&&m(n),a&&a.d(r),e(),t[21](null),u=!1,j(i)}}}function at(u,i,c){var a,s=R;u.$$.on_destroy.push((function(){return s()}));var f,l,p,m,v,h,d=i.current,g=void 0===d?0:d,y=i.direction,$=void 0===y?"horizontal":y,b=i.numStates,k=void 0===b?2:b,j=i.speed,S=void 0===j?1:j,T=!1,I=0,P=!0,C=function(u){var i,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t(u),s=u;function f(t,f){if(null==u)return a.set(u=t),Promise.resolve();s=t;var l=i,p=!1,m=n(n({},c),f),v=m.delay,h=void 0===v?0:v,d=m.duration,g=void 0===d?400:d,y=m.easing,$=void 0===y?o:y,b=m.interpolate,k=void 0===b?et:b;if(0===g)return l&&(l.abort(),l=null),a.set(u=s),Promise.resolve();var j,D=r()+h;return(i=e((function(n){if(n<D)return!0;p||(j=k(u,t),"function"==typeof g&&(g=g(u,t)),p=!0),l&&(l.abort(),l=null);var r=n-D;return r>g?(a.set(u=t),!1):(a.set(u=j($(r/g))),!0)}))).promise}return{set:f,update:function(t,n){return f(t(s,u),n)},subscribe:a.subscribe}}(g,{duration:400,easing:nt});function V(t){T=!0,l=t}function x(t){if(T){var n=t-l;l=t,(I-=n*S)<0&&(I=0),I>O*H&&(I=O*H),p=n<0,P=!1,E(C,a=I/H||0)}}function L(){I=p?Math.ceil(I/H)*H:Math.floor(I/H)*H,T=!1,h=null,clearTimeout(h),E(C,a=I/H||0),setTimeout((function(){return P=!0}),10)}s(),s=D(C,(function(t){return c(6,a=t)})),w((function(){I=g*("vertical"==$?m:v)})),w((function(){}));var M,O,H,X=i.$$slots,q=void 0===X?{}:X,B=i.$$scope;return u.$set=function(t){"current"in t&&c(0,g=t.current),"direction"in t&&c(1,$=t.direction),"numStates"in t&&c(16,k=t.numStates),"speed"in t&&c(17,S=t.speed),"$$scope"in t&&c(18,B=t.$$scope)},u.$$.update=function(){64&u.$$.dirty[0]&&c(0,g=Math.floor(a+.5)),2&u.$$.dirty[0]&&(M="vertical"==$?"pageY":"pageX"),65536&u.$$.dirty[0]&&(O=k-1),50&u.$$.dirty[0]&&(H="vertical"==$?m:v)},[g,$,C,f,m,v,a,function(t){V(t[M])},function(t){L()},function(t){t.preventDefault(),h||x(t[M])},function(t){V(t.changedTouches[0][M])},function(t){L()},function(t){T=!1},function(t){P&&(I=t*H,E(C,a=t))},function(t){x(t.changedTouches[0][M])},function(t){var n="vertical"==$?-t.deltaY:-t.deltaX;0!=n&&t.preventDefault(),V(0),x(n),clearTimeout(h),h=setTimeout(L,100)},k,S,B,q,function(){v=this.clientWidth,m=this.clientHeight,c(5,v),c(4,m)},function(t){A[t?"unshift":"push"]((function(){c(3,f=t)}))}]}var st=function(t){Q(r,a);var n=ot(r);function r(t){var e;return J(this,r),e=n.call(this),i(K(e),t,at,ct,c,{current:0,direction:1,numStates:16,speed:17,progress:2},[-1,-1]),e}return tt(r,[{key:"progress",get:function(){return this.$$.ctx[2]}}]),r}();function ft(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=Z(t);if(n){var o=Z(this).constructor;r=Reflect.construct(e,arguments,o)}else r=e.apply(this,arguments);return U(this,r)}}function lt(t,n,r){var e=t.slice();return e[6]=n[r],e[8]=r,e}function pt(t){var n,r,e,o,u,i,c,a;function s(){for(var n,r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];return(n=t)[2].apply(n,[t[4],t[8]].concat(e))}return{c:function(){n=f("div"),r=f("div"),e=I(),o=f("div"),u=I(),this.h()},l:function(t){n=l(t,"DIV",{class:!0,style:!0});var i=p(n);r=l(i,"DIV",{class:!0,style:!0}),p(r).forEach(m),e=V(i),o=l(i,"DIV",{class:!0,style:!0}),p(o).forEach(m),u=V(i),i.forEach(m),this.h()},h:function(){v(r,"class","img svelte-166kpku"),q(r,"background-url","url("+t[6].url+")"),v(o,"class","img reflection svelte-166kpku"),q(o,"background-url","url("+t[6].url+")"),v(n,"class","cover svelte-166kpku"),v(n,"style",i=ht(t[8],t[5]))},m:function(t,i){d(t,n,i),L(n,r),L(n,e),L(n,o),L(n,u),c||(a=y(n,"click",s),c=!0)},p:function(e,u){t=e,1&u&&q(r,"background-url","url("+t[6].url+")"),1&u&&q(o,"background-url","url("+t[6].url+")"),32&u&&i!==(i=ht(t[8],t[5]))&&v(n,"style",i)},d:function(t){t&&m(n),c=!1,a()}}}function mt(t){for(var n,r=t[0],e=[],o=0;o<r.length;o+=1)e[o]=pt(lt(t,r,o));return{c:function(){for(var t=0;t<e.length;t+=1)e[t].c();n=B()},l:function(t){for(var r=0;r<e.length;r+=1)e[r].l(t);n=B()},m:function(t,r){for(var o=0;o<e.length;o+=1)e[o].m(t,r);d(t,n,r)},p:function(t,o){if(33&o){var u;for(r=t[0],u=0;u<r.length;u+=1){var i=lt(t,r,u);e[u]?e[u].p(i,o):(e[u]=pt(i),e[u].c(),e[u].m(n.parentNode,n))}for(;u<e.length;u+=1)e[u].d(1);e.length=r.length}},d:function(t){N(e,t),t&&m(n)}}}function vt(t){var n,r,e,o,u,i,c,a,s,h,g=t[0][t[1]].name+"";function y(n){t[3].call(null,n)}var $={speed:"4",numStates:t[0].length,$$slots:{default:[mt,function(t){return{4:t.jump,5:t.progress}},function(t){return(t.jump?16:0)|(t.progress?32:0)}]},$$scope:{ctx:t}};return void 0!==t[1]&&($.current=t[1]),i=new st({props:$}),A.push((function(){return S(i,"current",y)})),{c:function(){n=f("div"),r=f("h2"),e=T(g),o=I(),u=f("div"),P(i.$$.fragment),a=I(),s=f("div"),this.h()},l:function(t){n=l(t,"DIV",{class:!0});var c=p(n);r=l(c,"H2",{class:!0});var f=p(r);e=C(f,g),f.forEach(m),o=V(c),u=l(c,"DIV",{class:!0});var v=p(u);x(i.$$.fragment,v),v.forEach(m),a=V(c),s=l(c,"DIV",{class:!0}),p(s).forEach(m),c.forEach(m),this.h()},h:function(){v(r,"class","svelte-166kpku"),v(u,"class","coverflow svelte-166kpku"),v(s,"class","gradient svelte-166kpku"),v(n,"class","background svelte-166kpku")},m:function(t,c){d(t,n,c),L(n,r),L(r,e),L(n,o),L(n,u),M(i,u,null),L(n,a),L(n,s),h=!0},p:function(t,n){var r=_(n,1)[0];(!h||3&r)&&g!==(g=t[0][t[1]].name+"")&&O(e,g);var o={};1&r&&(o.numStates=t[0].length),545&r&&(o.$$scope={dirty:r,ctx:t}),!c&&2&r&&(c=!0,o.current=t[1],H((function(){return c=!1}))),i.$set(o)},i:function(t){h||(b(i.$$.fragment,t),h=!0)},o:function(t){k(i.$$.fragment,t),h=!1},d:function(t){t&&m(n),X(i)}}}function ht(t,n){var r=t-n,e=r/2+.5;e<0&&(e=0),e>1&&(e=1);var o=90-2*e*90,u=100*e;return"left: ".concat(9*r,"vw; transform: rotateY(").concat(o,"deg); transform-origin: ").concat(u,"%")}function dt(t,n,r){var e=n.covers,o=void 0===e?[{url:"https://i.imgur.com/WSNVjAp.jpg",name:"Lamborghini Veneno"},{url:"https://i.imgur.com/ktLr47i.jpg",name:"Zenvo TS1"},{url:"https://i.imgur.com/IBPaYOH.jpg",name:"McLaren P1 LM"},{url:"https://i.imgur.com/E97i8c8.jpg",name:"LaFerrari FXX K"},{url:"https://i.imgur.com/eurkXGH.jpg",name:"Bugatti Chiron"},{url:"https://i.imgur.com/1BdAJno.jpg",name:"Lamborghini Centenario"},{url:"https://i.imgur.com/0AZOG1D.jpg",name:"Aston Martin One-77"},{url:"https://i.imgur.com/qlgU0n9.jpg",name:"Pagani Huayra"},{url:"https://i.imgur.com/Qol6aNw.jpg",name:"W Motors Lykan Hypersport"}]:e,u=3;return t.$set=function(t){"covers"in t&&r(0,o=t.covers)},[o,u,function(t,n){return t(n)},function(t){r(1,u=t)}]}var gt=function(t){Q(r,a);var n=ft(r);function r(t){var e;return J(this,r),e=n.call(this),i(K(e),t,dt,vt,c,{covers:0}),e}return r}();function yt(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,e=z(t);if(n){var o=z(this).constructor;r=Reflect.construct(e,arguments,o)}else r=e.apply(this,arguments);return F(this,r)}}function $t(t){var n,r;return n=new gt({}),{c:function(){P(n.$$.fragment)},l:function(t){x(n.$$.fragment,t)},m:function(t,e){M(n,t,e),r=!0},p:R,i:function(t){r||(b(n.$$.fragment,t),r=!0)},o:function(t){k(n.$$.fragment,t),r=!1},d:function(t){X(n,t)}}}var bt=function(t){Y(r,a);var n=yt(r);function r(t){var e;return G(this,r),e=n.call(this),i(W(e),t,null,$t,c,{}),e}return r}();export default bt;
